import { User } from "../../contexts/types";

export type SearchResultProps = {
  searchQuery: string;
  data: User[];
};

export type SearchResultItemProps = {
  data: User;
  expanded?: boolean;
  // onChange: (data: User | null) => void;
};
