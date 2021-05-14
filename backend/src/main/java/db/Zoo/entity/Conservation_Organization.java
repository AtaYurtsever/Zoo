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
@Table(name = "Conservation_Organization")
@NoArgsConstructor
@ToString(callSuper = true)
@Getter
@Setter
public class Conservation_Organization extends Event{

    @Column
    Text purpose;
    
    @Column
    Decimal target_money;

    @Column
    String target_place;

    @Builder
    public Group_Tour(Long id, String event_name, LocalDate event_date, String explanation, Float length, Float time){
        super(id, event_name, event_date, explanation, length, time);
    } 
}