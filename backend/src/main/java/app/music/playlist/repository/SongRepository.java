package app.music.playlist.song;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepository extends JpaRepository<Song, UUID> {

    List<Song> findAllByAlbum_Id(UUID albumId);

}
