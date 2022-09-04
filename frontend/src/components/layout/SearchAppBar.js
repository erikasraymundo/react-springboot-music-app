import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  border: "2px solid #FFFFFF22",
  transition: theme.transitions.create("border"),
  "&:hover": {
    border: "2px solid #FFFFFFFF",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

export default function SearchAppBar({ value, onChange, onKeyDown }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ pt: 2, pb: 0, pl: 3, pr: 3, bgcolor: "transparent"}}
      >
        <Toolbar>
          <AudiotrackIcon sx={{ mr: 2 }}></AudiotrackIcon>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600, display: { xs: "none", sm: "block" } }}
          >
            Music App
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
