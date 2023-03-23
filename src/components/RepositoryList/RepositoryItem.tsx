import { Card, Stack, styled, Typography } from "@mui/material";
import MuiCardContent from "@mui/material/CardContent";
import { grey } from "@mui/material/colors";
import GradeIcon from "@mui/icons-material/Grade";
import { RepositoryItemProps } from "./types";

const CardContent = styled(MuiCardContent)`
  padding: 8px !important;
`;

const RepositoryItem = ({ data }: RepositoryItemProps) => {
  return (
    <Card sx={{ backgroundColor: grey[500] }}>
      <CardContent sx={{ padding: "1!important" }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h6">
            {data.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            display="flex"
            alignItems="center"
          >
            {data.stargazers_count}
            <GradeIcon fontSize="inherit" />
          </Typography>
        </Stack>
        <Typography textAlign="left" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RepositoryItem;
