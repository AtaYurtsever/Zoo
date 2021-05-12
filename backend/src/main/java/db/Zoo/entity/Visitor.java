package db.Zoo.entity;

import java.time.LocalDate;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@ToString(callSuper = true)
@Getter
@Setter
public class Visitor extends User{

    @Builder
    public Visitor(Long id, String username, String password, String name, String surname, String sex, Long phone, String email, LocalDate birthday){
        super(id, username, password, name, surname, sex, phone, email, birthday) ;
    } 

}
