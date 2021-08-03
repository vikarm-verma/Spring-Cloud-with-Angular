package com.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.VO.ResponseTemplateVO;
import com.user.entity.User;
import com.user.service.UserService;

import lombok.extern.slf4j.Slf4j;
@CrossOrigin(origins = {"http://localhost:4200"})
//@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false")
@RestController
@RequestMapping("/users")
@Slf4j


public class UserController {

    @Autowired
    private UserService userService;
    
    @GetMapping("/")
    public void check()
    {
    	log.info("in check method and its working");
    	System.out.println("in check method");
    }


    
    @PostMapping("/")
    public User saveUser(@RequestBody User user) {
        log.info("Inside saveUser of UserController");
        return userService.saveUser(user);
    }

    @GetMapping("/{id}")
    public ResponseTemplateVO getUserWithDepartment(@PathVariable("id") Long userId) {
        log.info("Inside getUserWithDepartment of UserController");
        return userService.getUserWithDepartment(userId);
    }

    @GetMapping("/allusers")
    public List<User> getUsers() {
        return (List<User>) userService.getUsers();
    }
    

}
