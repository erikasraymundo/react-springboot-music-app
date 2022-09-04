import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export default function AlertSnackbar({ open, severity, onClose, message }) {
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
      <Alert
        onClose={onClose}
        variant="filled"
        severity={severity}
        sx={{ width: "100%" }}
        color="success"
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
