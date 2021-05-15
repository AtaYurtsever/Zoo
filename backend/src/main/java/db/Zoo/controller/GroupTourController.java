package db.Zoo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import db.Zoo.entity.Animal;
import db.Zoo.repository.AnimalRepository;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("GroupTour") 
@AllArgsConstructor
public class GroupTourController {
    final GroupTourRepository er;

    @GetMapping("get")
    List<Group_Tour> get(){
        er.save(Group_Tour.builder().name("hello").type("tip").id(0L).build());
        return er.getGroup_TourbyId(0L);
    }

    @GetMapping("populate")
    void populate(){
        er.save(Group_Tour.builder().name("hello").type("tip").build());
        er.save(Group_Tour.builder().name("hello2").type("tip").build());
        er.save(Group_Tour.builder().name("hello3").type("tip").build());
    }

    @GetMapping("getAll")
    List<Group_Tour> getAll() {
        return er.getAll();
    }
}
