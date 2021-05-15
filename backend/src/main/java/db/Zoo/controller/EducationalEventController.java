package db.Zoo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import db.Zoo.entity.Animal;
import db.Zoo.repository.AnimalRepository;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("EducationalEvent") 
@AllArgsConstructor
public class EducationalEventController {
    final EducationalEventRepository ev;

    @GetMapping("get")
    List<Educational_Event> get(){
        ev.save(Educational_Event.builder().name("hello").type("tip").id(0L).build());
        return ev.getEducational_EventbyId(0L);
    }

    @GetMapping("populate")
    void populate(){
        ev.save(Educational_Event.builder().name("hello").type("tip").build());
        ev.save(Educational_Event.builder().name("hello2").type("tip").build());
        ev.save(Educational_Event.builder().name("hello3").type("tip").build());
    }

    @GetMapping("getAll")
    List<Educational_Event> getAll() {
        return ev.getAll();
    }
}
