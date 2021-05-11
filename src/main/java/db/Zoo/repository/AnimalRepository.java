package db.Zoo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import db.Zoo.entity.Animal;

@Service
public interface AnimalRepository extends JpaRepository<Animal, Long>{
    @Query("SELECT a FROM Animal a WHERE a.id = ?1")
    List<Animal> getAnimalbyId(Long id);

    @Query("SELECT a FROM Animal a")
    List<Animal> getAll();
}


