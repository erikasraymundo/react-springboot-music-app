import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

export default function AlbumDelete({
  album,
  open,
  closeHandler,
  deleteHandler,
}) {
  return (
    <Dialog
      open={open}
      onClose={closeHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {album != null && `Are you sure want to delete ${album.title}?`}
      </DialogTitle>
      <DialogActions>
        <Button onClick={closeHandler}>No</Button>
        <Button onClick={deleteHandler} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
