import React, { useCallback, useState } from "react";
import { Button, OutlinedInput, Stack } from "@mui/material";
import { SearchInputProps } from "./types";
import { useSearchUser } from "../../hooks/useSearchUser";

const SearchInput = ({
  placeholder = "",
  disabled = false,
}: SearchInputProps) => {
  const { searchUsers, query, setQuery } = useSearchUser();
  const [fieldValue, setFieldValue] = useState<string>(query);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFieldValue(event.target.value);
    },
    [setFieldValue]
  );

  const handleSearch = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      if (fieldValue !== query) {
        setQuery(fieldValue);
        searchUsers(fieldValue);
      }
    },
    [searchUsers, setQuery, fieldValue, query]
  );

  return (
    <Stack spacing={2}>
      <OutlinedInput
        fullWidth
        value={fieldValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
      />
      <Button
        onClick={handleSearch}
        color="primary"
        disabled={disabled}
        fullWidth
        variant="contained"
        size="large"
      >
        Search
      </Button>
    </Stack>
  );
};

export default SearchInput;
