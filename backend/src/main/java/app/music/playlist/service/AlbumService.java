package app.music.playlist.album;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
public class AlbumService {

    public final AlbumRepository repository;

    @Autowired
    public AlbumService(AlbumRepository repository) {
        this.repository = repository;
    }

    public List<Album> all() {
        return repository.findAlbumsByOrderByTitleAsc();
    }

    public void addAlbum(Album album) {
        repository.save(album);
    }

    @Transactional
    public void updateAlbum(UUID id, String title, String singer, LocalDate releaseDate, String urlCoverPhoto) {
        Album album = repository.findById(id)
                .orElseThrow(() -> new IllegalStateException("ID not found."));

        if (title != null && title.length() > 0) {
            album.setTitle(title);
        }

        if (singer != null && singer.length() > 0) {
            album.setArtist(singer);
        }

        if (releaseDate != null) {
            album.setReleaseDate(releaseDate);
        }

        if (urlCoverPhoto != null && urlCoverPhoto.length() > 0) {
            album.setUrlCoverPhoto(urlCoverPhoto);
        }

    }

    public void deleteAlbum(UUID id) {
        repository.deleteById(id);
    }

    public List<Album> searchByAlbumOrSinger(String query) {
        return repository.findAlbumsByTitleContainingIgnoreCaseOrArtistContainingIgnoreCase(query, query);
    }
}
