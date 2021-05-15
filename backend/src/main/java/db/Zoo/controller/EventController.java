package db.Zoo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import db.Zoo.entity.Animal;
import db.Zoo.repository.AnimalRepository;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("event") 
@AllArgsConstructor
public class EventController {
    final EventRepository er;

    @GetMapping("get")
    List<Event> get(){
        er.save(Event.builder().name("hello").type("tip").id(0L).build());
        return er.getEventbyId(0L);
    }

    @GetMapping("populate")
    void populate(){
        er.save(Event.builder().name("hello").type("tip").build());
        er.save(Event.builder().name("hello2").type("tip").build());
        er.save(Event.builder().name("hello3").type("tip").build());
    }

    @GetMapping("getAll")
    List<Event> getAll() {
        return er.getAll();
    }
}
