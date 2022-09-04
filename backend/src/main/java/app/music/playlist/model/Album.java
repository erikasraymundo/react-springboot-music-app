package app.music.playlist.album;

import app.music.playlist.song.Song;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Entity(name = "Album")
@Table(name = "album")
public class Album {

    @Id
    UUID id = UUID.randomUUID();

    @Column(
            name = "title",
            nullable = false
    )
    private String title;

    @Column(
            name = "release_date",
            nullable = false
    )
    private LocalDate releaseDate;

    @Column(
            name = "artist",
            nullable = false
    )
    private String artist;

    @Column(
            name = "url_cover_photo",
            columnDefinition = "TEXT"
    )
    private String urlCoverPhoto;

    @OneToMany(mappedBy = "album", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Song> songs;

    public Album() {
    }

    public Album(String title, LocalDate releaseDate, String artist) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.artist = artist;
    }

    public Album(String title, LocalDate releaseDate, String artist, String urlCoverPhoto) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.artist = artist;
        this.urlCoverPhoto = urlCoverPhoto;
    }

    public Album(String title, LocalDate releaseDate, String artist, String urlCoverPhoto, List<Song> songs) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.artist = artist;
        this.urlCoverPhoto = urlCoverPhoto;
        this.songs = songs;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String name) {
        this.title = name;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String singer) {
        this.artist = singer;
    }

    public String getUrlCoverPhoto() {
        return urlCoverPhoto;
    }

    public void setUrlCoverPhoto(String urlCoverPhoto) {
        this.urlCoverPhoto = urlCoverPhoto;
    }

    public List<Song> getSongs() {
        return songs;
    }

    public void setSongs(List<Song> songs) {
        this.songs = songs;
    }
}
