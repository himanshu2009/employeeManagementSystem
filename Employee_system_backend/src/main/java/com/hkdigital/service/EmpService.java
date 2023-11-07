package com.hkdigital.service;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.hkdigital.model.Emp;

public interface EmpService {
	
	
	//update ke liye ye call hoga suppose
	public Emp createEmp(Emp emp);
	
	public List<Emp> getAllEmp();
	
	public Emp getEmpById(int id);
	
	public void deleteEmp(int id);
	
	
	public Emp updateEmp(int id, Emp emp);
	
	
	
	

}
