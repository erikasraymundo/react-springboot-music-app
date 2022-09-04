package app.music.playlist.song;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import app.music.playlist.APIController;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/song/")
public class SongController implements APIController<Song, UUID> {

    private final SongService service;

    @Autowired
    public SongController(SongService service) {
        this.service = service;
    }

    @GetMapping("allSongs")
    @Override
    public List<Song> getAll() {
        return service.all();
    }

    @PostMapping("add")
    @Override
    public String add(@RequestBody Song song) {
        service.addSong(song);
        return "Song is successfully added!";
    }

    @GetMapping("{id}")
    public Song getSongById(@PathVariable String id) {
        return service.getSongById(UUID.fromString(id));
    }

    @GetMapping("all")
    public List<Song> getSongsByAlbumId(@RequestParam UUID albumId) {

        if (albumId != null) {
            return service.getSongsByAlbumId(albumId);
        }

        return service.all();
    }

    @PutMapping("update/{id}")
    public String update(@PathVariable UUID id,
                         @RequestBody Song song) {

        service.updateSong(id, song);
        return "Song is successfully updated!";
    }

    @PostMapping("delete/{id}")
    @Override
    public String delete(@PathVariable UUID id) {
        service.deleteSong(id);
        return "Song is successfully deleted!";
    }
}
