package db.Zoo.entity;


import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Animal {
    @Id
    @GeneratedValue
    Long id;

    @Column(length = 40)
    String name;

    @Column(length = 120)
    String type;

    @Column(length = 1)
    String gender;

    Float weight;
    LocalDate birthday;

    @Column(length = 40000)
    String biography;

    @Column(length = 40000)
    String notableFeatures[];
    Vaccine vaccines[];

    // AnimalCurator bought_by
    // Food food
    // Cage cage   
}
