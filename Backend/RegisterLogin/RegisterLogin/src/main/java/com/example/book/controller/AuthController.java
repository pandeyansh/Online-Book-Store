package com.example.book.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.book.entity.Users;
import com.example.book.logconfig.SimpleUserDatailsService;
import com.example.book.logjwt.JwtHelper;
import com.example.book.logjwt.JwtRequest;
import com.example.book.logjwt.JwtResponse;
import com.example.book.logjwt.LoginRequest;
import com.example.book.logservice.SimpleService;
import com.example.book.repository.UserRepository;
import com.example.book.repository.UserRoleRepo;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "http://localhost:3000")
public class AuthController{

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtHelper jwtTokenUtil;

    @Autowired
    private SimpleUserDatailsService userDetailsService;

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private SimpleService simple;
    
    @Autowired
	private PasswordEncoder passwordEncoder;
    
    @SuppressWarnings("unused")
	@Autowired
    private UserRoleRepo roleRepo;
    
    @Autowired
    private ModelMapper modelMapper;


    @SuppressWarnings("unused")
	@PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody JwtRequest userDTO) {
        if (userRepository.findByUsername(userDTO.getUsername()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists");
        }

        Users user = modelMapper.map(userDTO, Users.class);
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(user);

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDTO.getUsername(), userDTO.getPassword())
        );

        UserDetails userDetails = userDetailsService.loadUserByUsername(userDTO.getUsername());

        String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getUsername());
        String token = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    
    

    @PostMapping("/po")
    public Users add1(@RequestBody Users user) {
    	
    	return simple.adding(user);
    }
    
           
           @GetMapping("/get")
           @PreAuthorize("hasAuthority('ROLE_ADMIN')")
           public List<Users> getting(Users user){
              return  simple.gets();
    }
}











