package com.erp.server.repository;

import com.erp.server.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {


    Optional<Employee> findByEmail(String email);
    List<Employee> findAllByDepartment_deptId(Long deptId);
}


