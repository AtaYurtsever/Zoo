package db.Zoo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import db.Zoo.entity.User;
import db.Zoo.entity.Visitor;
import db.Zoo.repository.VisitorRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@RestController
@RequestMapping("auth")
@AllArgsConstructor
@CrossOrigin
public class AuthController {
    
    final VisitorRepository vr;

    @PostMapping("register")
    public boolean register(@RequestBody Visitor visitor){
        if(vr.getByEmail(visitor.getEmail()).isPresent()) return false;
        vr.save(visitor);
        return true;
    }

    
    //needs to be extended to include
    @PostMapping("login")
    public LoginResponse login(@RequestBody Login login){
        var usr = vr.login(login.username, login.password);
        System.out.println(usr.get());
        System.err.println(usr.isPresent());
        if(usr.isPresent()) return new LoginResponse(true, "visitor",usr.get());
        else return new LoginResponse(false, "Does not exist", null);
    }
}

@AllArgsConstructor
@Getter
@Setter
class Login {
    String username;
    String password;
}

@AllArgsConstructor
@Getter
@Setter
class LoginResponse {
    boolean exists;
    String type;
    User user;
}
