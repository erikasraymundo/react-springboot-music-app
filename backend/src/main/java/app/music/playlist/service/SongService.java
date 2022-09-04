package app.music.playlist.song;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.music.playlist.album.Album;
import app.music.playlist.album.AlbumRepository;
import app.music.playlist.genre.Genre;
import app.music.playlist.genre.GenreRepository;

@Service
public class SongService {
    private final SongRepository repository;
    private final AlbumRepository albumRepository;
    private final GenreRepository genreRepository;


    @Autowired
    public SongService(SongRepository repository, AlbumRepository albumRepository, GenreRepository genreRepository) {
        this.repository = repository;
        this.albumRepository = albumRepository;
        this.genreRepository = genreRepository;
    }


    public List<Song> all() {
        return repository.findAll();
    }

    public Song getSongById(UUID songId) {
        return repository.findById(songId)
                .orElseThrow(() -> new IllegalStateException("Song ID not found."));
    }



    public void addSong(Song song) {

        if (song.getAlbum() != null) {
            validateAlbum(song.getAlbum());
        }

        if (song.getGenres() != null) {
            List<Genre> genres = validateGenre(song.getGenres());
            song.setGenres(genres);
        }

        repository.save(song);
    }


    @Transactional
    public void updateSong(UUID songId, Song newSong) {
        Song song = repository.findById(songId)
                .orElseThrow(() -> new IllegalStateException("Song ID not found."));

        if (newSong.getTitle() != null && newSong.getTitle().length() > 0) {
            song.setTitle(newSong.getTitle());
        }

        if (newSong.getAlbum() != null) {
            validateAlbum(newSong.getAlbum());
            song.setAlbum(newSong.getAlbum());
        }

        if (newSong.getGenres() != null) {
            List<Genre> genres = validateGenre(newSong.getGenres());
            song.setGenres(genres);
        }

    }

    @Transactional
    public void updateSong(UUID songId, String newTitle, Album newAlbum, List<Genre> newGenres) {
        Song song = repository.findById(songId)
                .orElseThrow(() -> new IllegalStateException("Song ID not found."));

        if (newTitle != null && newTitle.length() > 0) {
            song.setTitle(newTitle);
        }

        if (newAlbum != null) {

            Album album = albumRepository.findById(newAlbum.getId())
                    .orElseThrow(() -> new IllegalStateException("Album ID not found."));

            song.setAlbum(album);
        }

        if (newGenres != null && !newGenres.isEmpty()) {
            song.setGenres(newGenres);
            System.out.println("new genres: " + song.getGenres().get(0).getTitle());
        }

    }

    public void deleteSong(UUID id) {
        repository.deleteById(id);
    }


    private List<Genre> validateGenre(List<Genre> tempGenres) {

        List<Genre> genres = new LinkedList<>();

        for (Genre temp: tempGenres) {
            Genre genre = genreRepository.findById(temp.getId())
                    .orElseThrow(() -> new IllegalStateException("Genre ID not found."));
            genres.add(genre);
        }

        return genres;
    }


    private void validateAlbum(Album tempAlbum) {
        Optional<Album> albumOptional = albumRepository.findById(tempAlbum.getId());

        if (albumOptional.isEmpty()) {
            throw new IllegalStateException("Album ID does not exist.");
        }
    }


    public List<Song> getSongsByAlbumId(UUID albumId) {
        return repository.findAllByAlbum_Id(albumId);
    }
}
