package com.erp.server.repository;

import com.erp.server.model.EmployeeSalary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeSalaryRepository extends JpaRepository<EmployeeSalary,Long> {
}
