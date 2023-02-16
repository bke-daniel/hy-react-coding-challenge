import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

export default () => {
  const [limit, setLimit] = useState(5);

  return (
    <Paper sx={{ p: 4 }}>
      <label htmlFor="flights-from">Max entries</label>
      <Select fullWidth value={limit} label="Max entries" name="limit">
        <MenuItem value="5">5</MenuItem>
        <MenuItem value="5">10</MenuItem>
      </Select>

      <List>
        <ListItem>
          <ListItemText
            primary={"Title here"}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Mission name
                </Typography>
                {" – "}
                Mission details here
              </>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
};
