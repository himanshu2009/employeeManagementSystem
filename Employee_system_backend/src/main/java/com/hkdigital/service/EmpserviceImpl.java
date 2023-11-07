package com.hkdigital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hkdigital.model.Emp;
import com.hkdigital.repository.EmpRepository;

//ye diya because to create objects automatically for ioc container
@Service
public class EmpserviceImpl implements EmpService {
	
	@Autowired
	private EmpRepository empRepo;

	@Override
	public Emp createEmp(Emp emp) {
		
		return empRepo.save(emp);
	}

	@Override
	public List<Emp> getAllEmp() {
		// TODO Auto-generated method stub
		return empRepo.findAll();
	}

	
	//get method is option
	@Override
	public Emp getEmpById(int id) {
		// TODO Auto-generated method stub
		return empRepo.findById(id).get();
		
		
	}

	@Override
	public void deleteEmp(int id) {
		Emp emp=empRepo.findById(id).get();
		
		if(emp!=null)
		{
			empRepo.delete(emp);
		}
		
		
	}


	@Override
	public Emp updateEmp(int id,Emp emp) {
		
	Emp oldEmp=empRepo.findById(id).get();
		if(oldEmp!=null)
		{
			emp.setId(id);
			return empRepo.save(emp);
		}
		return null;
		
	}
	
	
	

}
