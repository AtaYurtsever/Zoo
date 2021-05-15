package db.Zoo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import db.Zoo.entity.Animal;
import db.Zoo.repository.AnimalRepository;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("ConservationOrganization") 
@AllArgsConstructor
public class ConservationOrganizationController {
    final ConservationOrganizationRepository er;

    @GetMapping("get")
    List<Conservation_Organization> get(){
        er.save(Conservation_Organization.builder().name("hello").type("tip").id(0L).build());
        return er.getConservation_OrganizationbyId(0L);
    }

    @GetMapping("populate")
    void populate(){
        er.save(Conservation_Organization.builder().name("hello").type("tip").build());
        er.save(Conservation_Organization.builder().name("hello2").type("tip").build());
        er.save(Conservation_Organization.builder().name("hello3").type("tip").build());
    }

    @GetMapping("getAll")
    List<Conservation_Organization> getAll() {
        return er.getAll();
    }
}
