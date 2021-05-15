package db.Zoo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import db.Zoo.entity.Event;

@Service
public interface ConservationOrganizationRepository extends JpaRepository<Event, Long>{
    @Query("SELECT a FROM Conservation_Organization a WHERE a.id = ?1")
    List<Conservation_Organization> getConservation_OrganizationbyId(Long id);

    @Query("SELECT a FROM Conservation_Organization a")
    List<Conservation_Organization> getAll();
}