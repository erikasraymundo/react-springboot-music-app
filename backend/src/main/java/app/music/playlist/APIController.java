package app.music.playlist;

import java.util.List;

public interface APIController<T, V> {

    public List<T> getAll();

    public String add(T entry);

    public String update(V id, T entry);

    public String delete(V id);

}
