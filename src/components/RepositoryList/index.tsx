import { Stack, styled } from "@mui/material";
import MuiBox from "@mui/material/Box";
import InfiniteScroll from "react-infinite-scroller";
import { useRepository } from "../../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import { RepositoryListProps } from "./types";

const Box = styled(MuiBox)`
  ::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: none;
`;

const RepositoryList = ({ username }: RepositoryListProps) => {
  const { repositories, completed, hasMore, fetchMoreRepos } =
    useRepository(username);

  return (
    <Box overflow="auto" maxHeight={200}>
      <InfiniteScroll
        key={username}
        pageStart={1}
        hasMore={hasMore && completed}
        loadMore={fetchMoreRepos}
        useWindow={false}
      >
        <Stack spacing={2}>
          {repositories.map((repo) => (
            <RepositoryItem key={repo.id} data={repo} />
          ))}
        </Stack>
      </InfiniteScroll>
    </Box>
  );
};

export default RepositoryList;
