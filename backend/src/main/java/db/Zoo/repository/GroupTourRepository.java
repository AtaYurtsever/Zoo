package db.Zoo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import db.Zoo.entity.Event;

@Service
public interface GroupTourRepository extends JpaRepository<Event, Long>{
    @Query("SELECT a FROM Group_Tour a WHERE a.id = ?1")
    List<Group_Tour> getGroup_TourbyId(Long id);

    @Query("SELECT a FROM Group_Tour a")
    List<Group_Tour> getAll();
}