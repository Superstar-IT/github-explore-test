import { Repository } from "../../contexts/types";

export type RepositoryListProps = {
  username: string;
};

export type RepositoryItemProps = {
  data: Repository;
};
