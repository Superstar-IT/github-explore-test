import { createContext, FC, ReactNode, useCallback, useState } from "react";
import { Repository, User, UserContextType } from "./types";

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [showCount, toogleShowCount] = useState<boolean>(false);
  const [selectedUser, selectUser] = useState<User | null>(null);
  const [query, setQuery] = useState<string>("");
  const [repositories, setRepos] = useState<{
    [key: string]: Repository[];
  }>({});

  const setRepositories = useCallback(
    (username: string, repos: Repository[]) => {
      const newRepo = repositories;
      newRepo[username] = repos;
      setRepos(newRepo);
    },
    [setRepos, repositories]
  );

  return (
    <UserContext.Provider
      value={{
        users,
        repositories,
        selectedUser,
        showCount,
        query,
        setUsers,
        setRepositories,
        selectUser,
        toogleShowCount,
        setQuery,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
