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
@Table(name = "Event")
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@ToString
@Getter
@Setter
public class Event {
    @Id
    @GeneratedValue
    Long id;

    @Column(length = 40)
    String event_name;

    LocalDate event_date;

    @Column(length = 120)
    String explanation;

    Float length;
    Float time;
}
