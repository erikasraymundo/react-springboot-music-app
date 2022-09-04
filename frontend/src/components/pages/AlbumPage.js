import { Grid } from "@mui/material";
import { useState, Fragment } from "react";
import AlbumAddPlaceholder from "../placeholder/AlbumAddPlaceholder";
import axios from "axios";
import AlbumGrid from "../album/AlbumGrid";
import AlbumForm from "../album/AlbumForm";
import AlbumDelete from "../album/AlbumDelete";
import AlertSnackbar from "../alert/AlertSnackbar";

const ADD_OPERATION = 1;
const EDIT_OPERATION = 0;
const ALBUM_URL = "/api/v1/album";

export default function AlbumPage({ albums, reload }) {
  
  // album form
  const [formOpen, setFormOpen] = useState(false);
  const [formOperation, setFormOperation] = useState(ADD_OPERATION);
  
  // edit and delete
  const [albumToEdit, setAlbumToEdit] = useState(null);
  const [albumToDelete, setAlbumToDelete] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // alert message
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const onAlertClose = () => {
    setAlertOpen(false);
  }

  const onChangeAlbumToDelete = (album) => {
    setAlbumToDelete(album);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const openForm = (operation, album) => {
    setFormOpen(true);
    setFormOperation(operation);
    setAlbumToEdit(album);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  const addAlbum = (album) => {
    axios
      .post(`${ALBUM_URL}/add`, album)
      .then((response) => {})
      .catch((error) => {
        console.log("error: " + error);
      });

    openAlert("success", `Album ${album.title} is added!`);
    reload();
  };

  const updateAlbum = (id, album) => {
    axios
      .put(`${ALBUM_URL}/update/${id}`, album)
      .then((response) => {})
      .catch((error) => {
        console.log("error: " + error);
      });

    openAlert("success", `Album ${album.title} is updated!`);
    reload();
  };

  const deleteAlbum = () => {
    axios
      .post(`${ALBUM_URL}/delete/${albumToDelete.id}`)
      .then((response) => {})
      .catch((error) => {
        console.log("error: " + error);
      });

    openAlert("success", `Album ${albumToDelete.title} is deleted!`);
    closeDeleteDialog();
    reload();
  };

  const openAlert = (severity, message) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setAlertOpen(true);
  }

  return (
    <Fragment>
      <Grid container spacing={5}>
        <Grid item>
          <AlbumAddPlaceholder openFormHandler={openForm} />
        </Grid>
        <AlbumGrid
          albums={albums}
          openFormHandler={openForm}
          onChangeAlbumToDeleteHandler={onChangeAlbumToDelete}
        />
      </Grid>
      <AlbumForm
        open={formOpen}
        operation={formOperation}
        handleClose={closeForm}
        addAlbumHandler={addAlbum}
        updateAlbumHandler={updateAlbum}
        albumToEdit={albumToEdit}
      />
      <AlbumDelete
        album={albumToDelete}
        open={deleteDialogOpen}
        closeHandler={closeDeleteDialog}
        deleteHandler={deleteAlbum}
      />
      <AlertSnackbar
        open={alertOpen}
        severity={alertSeverity}
        onClose={onAlertClose}
        message={alertMessage}
      />
    </Fragment>
  );
}
