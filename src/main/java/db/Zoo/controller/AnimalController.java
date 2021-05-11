package db.Zoo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import db.Zoo.entity.Animal;
import db.Zoo.repository.AnimalRepository;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("animal") //localhost:8080/animal/---
@AllArgsConstructor
public class AnimalController {

    final AnimalRepository ar;

    @GetMapping("hello") //localhost:8080/animal/hello
    Animal hello(){
        return Animal.builder().name("hello").type("tip").build();
    }

    @GetMapping("get")
    List<Animal> get(){
        ar.save(Animal.builder().name("hello").type("tip").id(0L).build());
        return ar.getAnimalbyId(0L);
    }

    @GetMapping("populate")
    void populate(){
        ar.save(Animal.builder().name("hello").type("tip").build());
        ar.save(Animal.builder().name("hello2").type("tip").build());
        ar.save(Animal.builder().name("hello3").type("tip").build());
    }

    @GetMapping("getAll")
    List<Animal> getAll() {
        return ar.getAll();
    }
}
