export type User = {
  id: number;
  node_id: string;
  avatar_url: string;
  name: string;
};

export type UserContextType = {
  selectedUser: User | null;
  users: User[];
  repositories: { [key: string]: Repository[] };
  showCount: boolean;
  query: string;
  setRepositories: (username: string, repositories: Repository[]) => void;
  setUsers: (users: User[]) => void;
  selectUser: (user: User | null) => void;
  toogleShowCount: (val: boolean) => void;
  setQuery: (val: string) => void;
};

export type Repository = {
  id: number;
  node_id: string;
  name: string;
  description: string;
  stargazers_count: number;
};
