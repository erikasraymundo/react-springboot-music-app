import "./App.css";
import SearchAppBar from "./components/layout/SearchAppBar";
import {
  Box,
  Grid,
  ThemeProvider,
  Toolbar,
  Backdrop,
  TextField,
  Button,
  Typography,
  Chip,
} from "@mui/material";
import AlbumPage from "./components/pages/AlbumPage";
import { mainDarkTheme } from "./components/theme/mainDarkTheme";
import { useState, useEffect } from "react";
import axios from "axios";

const ALBUM_URL = "/api/v1/album";

function App() {
  const [albums, setAlbums] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [reload, setReload] = useState(true);

  const reloadNow = () => {
    setReload(true);
    setSearchValue("");
  }

  const onChangeSearchHandler = (event) => {
    setSearchValue(event.target.value);

    if (event.target.value.trim() === "") {
      reloadNow();
    }
  };

  const onKeyDownSearchHandler = (event) => {
    if (event.key === "Enter") {
      searchAlbums();
    }
  };

  useEffect(() => {
    if (reload === true) {
      getAllAlbums();
      setReload(false);
    }
  }, [reload]);

  const getAllAlbums = () => {
    axios
      .get(`${ALBUM_URL}/all`)
      .then((response) => {
        let data = response.data;
        setAlbums(data);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  };

  const searchAlbums = () => {
    axios
      .get(`${ALBUM_URL}/search/${searchValue}`)
      .then((response) => {
        let data = response.data;
        setAlbums(data);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  };

  return (
    <ThemeProvider theme={mainDarkTheme}>
      <SearchAppBar
        value={searchValue}
        onChange={onChangeSearchHandler}
        onKeyDown={onKeyDownSearchHandler}
      />
      <Box component="main" sx={{ m: 5 }}>
        <AlbumPage albums={albums} reload={reloadNow} />
      </Box>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={false}
      >
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            p: 3,
            borderRadius: "10px",
            maxWidth: "275px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Add new Song
          </Typography>
          <TextField
            required
            id="songTitle"
            label="Song Title"
            variant="outlined"
            error={null}
            helperText={null}
            value={null}
            onChange={null}
            fullWidth
          />
          <Box component="div" sx={{ mt: 2, mb: 3 }}>
            <Typography sx={{ mt: 1, mb: 1 }}>Select genres:</Typography>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Chip variant="outlined" label="Genre" onClick={null}></Chip>
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="Genre" onClick={null}></Chip>
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="Genre" onClick={null}></Chip>
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="Genre" onClick={null}></Chip>
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="Genre" onClick={null}></Chip>
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="Genre" onClick={null}></Chip>
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="Genre" onClick={null}></Chip>
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="Genre" onClick={null}></Chip>
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="Genre" onClick={null}></Chip>
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="Genre" onClick={null}></Chip>
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="Genre" onClick={null}></Chip>
              </Grid>
            </Grid>
          </Box>

          <Button variant="contained" disableElevation fullWidth>
            Save
          </Button>
        </Box>
      </Backdrop>
    </ThemeProvider>
  );
}

export default App;
