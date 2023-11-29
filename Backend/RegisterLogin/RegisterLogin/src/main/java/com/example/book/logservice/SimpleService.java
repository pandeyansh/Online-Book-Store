package com.example.book.logservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.book.entity.Users;
import com.example.book.repository.UserRepository;

@Service
public class SimpleService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public Users adding(Users user) {
		
	   user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);	
	}
	
   public List<Users> gets(){
    return userRepository.findAll();
   }


}
