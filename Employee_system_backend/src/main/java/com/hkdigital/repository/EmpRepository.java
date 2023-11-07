package com.hkdigital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hkdigital.model.Emp;



public interface EmpRepository extends JpaRepository<Emp,Integer> {

}
