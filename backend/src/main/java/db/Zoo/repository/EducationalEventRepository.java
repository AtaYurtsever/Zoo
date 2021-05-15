package db.Zoo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import db.Zoo.entity.Event;

@Service
public interface EducationalEventRepository extends JpaRepository<Event, Long>{
    @Query("SELECT a FROM Educational_Event a WHERE a.id = ?1")
    List<Educational_Event> getEducational_EventbyId(Long id);

    @Query("SELECT a FROM Educational_Event a")
    List<Educational_Event> getAll();
}