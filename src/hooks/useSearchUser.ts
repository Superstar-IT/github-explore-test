import { useCallback, useContext, useState } from "react";
import { UserContextType } from "../contexts/types";
import { UserContext } from "../contexts/userContext";
import { ApiClient } from "../services/apiClient";

const apiClient = new ApiClient();

export const useSearchUser = () => {
  const [completed, setCompleted] = useState<boolean>(false);
  const { users, query, setQuery, setUsers, toogleShowCount } = useContext(
    UserContext
  ) as UserContextType;

  const searchUsers = useCallback(
    async (query: string) => {
      setCompleted(false);
      await apiClient.searchUsers(query, 5).then((result) => {
        const newUsers = result.items;
        setUsers(newUsers);
        toogleShowCount(true);
      });
      setCompleted(true);
    },
    [setUsers, toogleShowCount]
  );

  return {
    users,
    query,
    completed,
    searchUsers,
    setQuery,
  };
};
