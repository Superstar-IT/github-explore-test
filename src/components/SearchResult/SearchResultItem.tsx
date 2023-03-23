import { useMemo, useContext } from "react";
import { ExpandMore } from "@mui/icons-material";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import { User, UserContextType } from "../../contexts/types";
import { SearchResultItemProps } from "./types";
import { UserContext } from "../../contexts/userContext";
import RepositoryList from "../RepositoryList";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const SearchResultItem = ({ data }: SearchResultItemProps) => {
  const { selectUser, selectedUser, toogleShowCount } = useContext(
    UserContext
  ) as UserContextType;

  const expanded = useMemo(
    () => data.id === selectedUser?.id,
    [selectedUser, data]
  );

  const handleChange =
    (panel: User) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      selectUser(isExpanded ? panel : null);
      toogleShowCount(false);
    };

  return (
    <Accordion
      key={selectedUser?.id}
      expanded={expanded}
      onChange={handleChange(data)}
      sx={{ border: "none" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${data.id}-panel-content`}
        id={`${data.id}-panel-header`}
        sx={{
          backgroundColor: grey[400],
        }}
      >
        {data.name}
      </AccordionSummary>
      <AccordionDetails sx={{ paddingRight: 0 }}>
        {data.name && expanded && <RepositoryList username={data.name} />}
      </AccordionDetails>
    </Accordion>
  );
};

export default SearchResultItem;
