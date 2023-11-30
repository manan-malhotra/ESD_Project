package com.erp.server.repository;

import com.erp.server.model.EmployeeSalary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface EmployeeSalaryRepository extends JpaRepository<EmployeeSalary,Long> {
    @Query(value = "select * from employee_salary where employee_id = ?1 order by payment_date desc limit 1",nativeQuery = true)
    Optional<EmployeeSalary> findByEmployee(Long id);
}
