package com.example.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.book.entity.Role;

public interface UserRoleRepo extends JpaRepository<Role, Integer>{

	Role findByName(String name);

}
