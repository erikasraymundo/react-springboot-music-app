import { Card, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AlbumPhotoPlaceholder({message, operation}) {

  let sx = {};
  if (operation == 1) {
    sx = {
        background: "rgba(0, 0, 0, 0.35)",
        width: 150,
        height: 150,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "pointer",
        color: "rgba(255, 255, 255, 0.5)",
        borderRadius: "10px",
        transition: ".12s linear",
        "&:hover": {
          color: "rgba(255, 255, 255, 1)"
        }
    }
  } else {
    sx = {
      background: "#3C3C3C",
      width: 215,
      height: 215,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      color: "rgba(255, 255, 255, 0.5)",
      borderRadius: "10px",
      transition: ".12s linear",
      "&:hover": {},
    };
  }


  return (
    <Card
      elevation={0}
      sx={sx}
      component="label"
    >
      <Typography align="center" sx={{ p: 3, fontSize: "18px" }}>
        {message}
      </Typography>
      {operation == 1 && (
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
        />
      )}
    </Card>
  );
}
