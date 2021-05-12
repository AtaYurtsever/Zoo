package db.Zoo.entity;

import java.math.BigInteger;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "zooUser")
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@ToString
@Getter
@Setter
public class User {
    @Id
    Long id;

    @Column(length=20)
    String username;

    @Column
    String password;

    @Column(length=40)
    String name;

    @Column(length=40)
    String surname;

    @Column(length=1)
    String sex;

    Long phone;

    @Column(length=100, unique = true)
    String email;

    LocalDate birthday;
}
