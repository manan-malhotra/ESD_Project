package com.erp.server.service;

import com.erp.server.model.Employee;
import com.erp.server.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repository;

    public Optional<?> fetchEmployee(Long id){
        return repository.findById(id);
    }
    public void addEmployee(Employee employee){
        repository.save(employee);
    }

}
