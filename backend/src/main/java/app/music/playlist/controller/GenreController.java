package app.music.playlist.genre;

import app.music.playlist.APIController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/genre/")
public class GenreController implements APIController<Genre, Long> {

    private final GenreService service;

    @Autowired
    public GenreController(GenreService service) {
        this.service = service;
    }

    @GetMapping("all")
    @Override
    public List<Genre> getAll() {
        return service.all();
    }

    @PostMapping(value = "add")
    @Override
    public String add(@RequestBody Genre genre) {
        service.addGenre(genre);
        return "Genre is successfully added!";
    }

    @PutMapping(value = "update/{id}")
    public String update(@PathVariable Long id, @RequestBody Genre genre) {
        service.updateGenre(id, genre.getTitle());
        return "Genre is successfully updated!";
    }

    @GetMapping("delete/{id}")
    @Override
    public String delete(@PathVariable Long id) {
        service.deleteGenre(id);
        return "Genre is successfully deleted!";
    }
}
