import {
  Backdrop,
  Typography,
  Grid,
  Box,
  TextField,
  Stack,
  Button,
  IconButton,
  FormGroup,
} from "@mui/material";
import AlbumPhotoPlaceholder from "../placeholder/AlbumPhotoPlaceholder";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";

export default function AlbumForm({
  open,
  operation,
  handleClose,
  addAlbumHandler,
  updateAlbumHandler,
  albumToEdit,
}) {
  const [title, setTitle] = useState({ value: "", error: null });
  const [releaseDate, setReleaseDate] = useState({ value: "", error: null });
  const [artist, setArtist] = useState({ value: "", error: null });
  const [albumCover, setAlbumCover] = useState([]);

  useEffect(() => {
    if (albumToEdit != null) {
      setTitle({ value: albumToEdit.title, error: null });
      setReleaseDate({ value: albumToEdit.releaseDate, error: null });
      setArtist({ value: albumToEdit.artist, error: null });
    } else {
      reset();
    }
  }, [albumToEdit]);

  const titleOnChange = (event) => {
    setTitle((prev) => ({
      ...prev,
      value: event.target.value,
    }));

    if (event.target.value.trim() !== "") {
      setTitle((prev) => ({
        ...prev,
        error: null,
      }));
    }
  };

  const releaseDateOnChange = (event) => {
    setReleaseDate((prev) => ({
      ...prev,
      value: event.target.value,
    }));

    if (event.target.value !== "") {
      setReleaseDate((prev) => ({
        ...prev,
        error: null,
      }));
    }
  };

  const singerOnChange = (event) => {
    setArtist((prev) => ({
      ...prev,
      value: event.target.value,
    }));

    if (event.target.value.trim() !== "") {
      setArtist((prev) => ({
        ...prev,
        error: null,
      }));
    }
  };

  const saveAlbum = (event) => {
    event.preventDefault();

    if (title.value.trim() === "") {
      setTitle((prev) => ({
        ...prev,
        error: "Required.",
      }));
      return false;
    }

    if (releaseDate.value.trim() === "") {
      setReleaseDate((prev) => ({
        ...prev,
        error: "Required.",
      }));
      return false;
    }

    if (artist.value.trim() === "") {
      setArtist((prev) => ({
        ...prev,
        error: "Required.",
      }));
      return false;
    }

    const album = {
      title: title.value,
      releaseDate: releaseDate.value,
      artist: artist.value
    };

    if (operation === 1) {
      addAlbumHandler(album);
    } else {
      updateAlbumHandler(albumToEdit.id, album);
    }

    reset();
    handleClose();
    return true;
  };

  const reset = () => {
    setTitle({ value: "", error: null });
    setReleaseDate({ value: "", error: null });
    setArtist({ value: "", error: null });
  };

  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <form onSubmit={saveAlbum}>
        <FormGroup>
          <Box
            maxWidth="xs"
            sx={{ bgcolor: "#FFFFFF", p: 3, borderRadius: "10px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2.5,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {operation === 1 && "Create new Album"}
                {operation === 0 && "Update Album"}
              </Typography>
              <IconButton
                aria-label="close"
                fontSize="small"
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Grid container spacing={10}>
              <Grid item xs={4}>
                <AlbumPhotoPlaceholder
                  operation={1}
                  message="Upload Album Cover"
                />
              </Grid>
              <Grid item xs={8}>
                <Stack spacing={2} sx={{ display: "flex" }}>
                  <TextField
                    id="albumTitle"
                    label="Album Title"
                    variant="outlined"
                    error={title.error != null}
                    helperText={title.error}
                    value={title.value}
                    onChange={titleOnChange}
                  />
                  <TextField
                    id="releaseDate"
                    label="Release Date"
                    variant="outlined"
                    error={releaseDate.error != null}
                    helperText={releaseDate.error}
                    value={releaseDate.value}
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={releaseDateOnChange}
                  />
                  <TextField
                    id="singer"
                    label="Album Artist"
                    variant="outlined"
                    error={artist.error != null}
                    helperText={artist.error}
                    value={artist.value}
                    onChange={singerOnChange}
                  />
                </Stack>

                <Grid
                  container
                  spacing={1}
                  sx={{
                    mt: 1,
                  }}
                >
                  <Grid item xs={8}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disableElevation
                    >
                      {operation === 1 && "Save Album"}
                      {operation === 0 && "Update Album"}
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      color="secondary"
                      disableElevation
                      sx={{ m: 0 }}
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </FormGroup>
      </form>
    </Backdrop>
  );
}
