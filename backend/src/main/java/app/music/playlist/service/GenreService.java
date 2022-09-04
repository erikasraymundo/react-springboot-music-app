package app.music.playlist.genre;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class GenreService {

    private final GenreRepository repository;

    @Autowired
    public GenreService(GenreRepository repository) {
        this.repository = repository;
    }

    public List<Genre> all() {
        return repository.findAll();
    }

    public void addGenre(Genre genre) {
        repository.save(genre);
    }

    @Transactional
    public void updateGenre(Long id, String title) {

        Genre genre = repository.findById(id)
                .orElseThrow(() -> new IllegalStateException("ID not found"));

        if (title != null && title.length() > 0) {
            genre.setTitle(title);
        }
    }

    public void deleteGenre(Long id) {
        repository.deleteById(id);
    }

    public Genre findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Genre ID not found."));
    }
}
