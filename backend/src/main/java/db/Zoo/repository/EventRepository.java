package db.Zoo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import db.Zoo.entity.Event;

@Service
public interface EventRepository extends JpaRepository<Event, Long>{
    @Query("SELECT a FROM Event a WHERE a.id = ?1")
    List<Event> getEventbyId(Long id);

    @Query("SELECT a FROM Event a")
    List<Event> getAll();
}
