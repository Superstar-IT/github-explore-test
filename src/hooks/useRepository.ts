import { useCallback, useContext, useEffect, useState } from "react";
import { UserContextType } from "../contexts/types";
import { UserContext } from "../contexts/userContext";
import { ApiClient } from "../services/apiClient";

const apiClient = new ApiClient();

export const useRepository = (username: string) => {
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const {
    repositories: repos,
    selectedUser,
    setRepositories,
  } = useContext(UserContext) as UserContextType;

  const getRepos = useCallback(
    (username: string) => {
      setCompleted(false);
      apiClient.getRepositoriesByUsername(username, 10).then((result) => {
        setHasMore(Boolean(result && result.length === 10));
        setRepositories(username, result || []);
      });
      setCompleted(true);
    },
    [setRepositories]
  );

  const fetchMoreRepos = useCallback(
    async (page: number) => {
      if (hasMore && completed) {
        const oldRepos = repos[username] || [];
        setCompleted(false);
        await apiClient
          .getRepositoriesByUsername(username, 10, page)
          .then((result) => {
            const newRepos = [...oldRepos, ...(result || [])];
            setHasMore(Boolean(result && result.length === 10));
            setRepositories(username, newRepos);
          });
        setCompleted(true);
      }
    },
    [setRepositories, setCompleted, repos, username, hasMore, completed]
  );

  useEffect(() => {
    if (username && selectedUser?.name === username) getRepos(username);
  }, [username, selectedUser, getRepos]);

  return {
    repositories: repos[username] || [],
    completed,
    hasMore,
    getRepos,
    fetchMoreRepos,
  };
};
