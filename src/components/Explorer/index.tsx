import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import SearchInput from "../SearchInput";
import SearchResult from "../SearchResult";
import { useSearchUser } from "../../hooks/useSearchUser";

const ExplorerContainer = styled(Stack)(() => ({
  backgroundColor: "white",
  minHeight: 500,
  width: "90%",
  maxWidth: 500,
}));

const Explorer = () => {
  const { users, query } = useSearchUser();

  return (
    <ExplorerContainer spacing={2} padding={3}>
      <SearchInput placeholder="Enter username" />
      <SearchResult searchQuery={query} data={users} />
    </ExplorerContainer>
  );
};

export default Explorer;
