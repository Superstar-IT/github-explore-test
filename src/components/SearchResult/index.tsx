import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContextType } from "../../contexts/types";
import { UserContext } from "../../contexts/userContext";
import SearchResultItem from "./SearchResultItem";
import { SearchResultProps } from "./types";

const SearchResult = ({ data }: SearchResultProps) => {
  const { showCount, query } = useContext(UserContext) as UserContextType;
  return (
    <Stack spacing={2}>
      {query && showCount && (
        <Typography textAlign="left">
          {data.length ? "Show users" : "No user"}{" "}
          {query ? ` for "${query}"` : ""}
        </Typography>
      )}

      {query && data.length > 0 && (
        <Stack spacing={2} alignItems="normal">
          {data.map((item) => (
            <SearchResultItem key={item.id} data={item} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default SearchResult;
