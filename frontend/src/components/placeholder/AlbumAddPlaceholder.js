import { Card, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AlbumAddPlaceholder({ openFormHandler }) {
  const openForm = () => {
    openFormHandler(1, null);
  };

  return (
    <Card
      onClick={openForm}
      elevation={0}
      sx={{
        background: "transparent",
        border: "2px dashed rgba(255, 255, 255, 0.25)",
        width: 215,
        height: 215,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        color: "rgba(255, 255, 255, 0.5)",
        cursor: "pointer",
        borderRadius: "10px",
        "&:hover": {
          color: "rgba(255, 255, 255, 1)",
        },
      }}
    >
      <AddIcon fontSize="large" sx={{ p: 1 }} />
      <Typography sx={{ p: 1, fontSize: "24px" }}>Album</Typography>
    </Card>
  );
}
