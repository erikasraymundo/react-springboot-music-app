import { Grid } from "@mui/material";
import AlbumCard from "./AlbumCard";
import { Fragment } from "react";

export default function AlbumGrid({ albums, openFormHandler, onChangeAlbumToDeleteHandler }) {
  return (
    <Fragment>
      {albums.map((album) => {
        return (
          <Grid key={album.id} item>
            <AlbumCard
              album={album}
              openFormHandler={openFormHandler}
              onChangeAlbumToDeleteHandler={onChangeAlbumToDeleteHandler}
            />
          </Grid>
        );
      })}
    </Fragment>
  );
}
