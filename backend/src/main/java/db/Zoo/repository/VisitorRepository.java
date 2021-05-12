package db.Zoo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import db.Zoo.entity.Visitor;

@Service
public interface VisitorRepository extends JpaRepository<Visitor, Long>{
    @Query("SELECT v FROM Visitor v WHERE v.id=?1")
    Visitor getById(Long id);

    @Query("SELECT v FROM Visitor v JOIN db.Zoo.entity.User u ON v.id = u.id WHERE u.email = ?1")
    Optional<Visitor> getByEmail(String email);

    //This needs to be extended to include other types of login
    @Query("SELECT v FROM Visitor v JOIN db.Zoo.entity.User u ON v.id = u.id WHERE u.username = ?1 AND u.password = ?2")
    Optional<Visitor> login(String username, String password);
}
