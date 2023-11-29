package com.erp.server.aux;

import com.erp.server.model.Department;
import com.erp.server.model.Employee;
import com.erp.server.model.EmployeeSalary;
import com.erp.server.repository.DepartmentRepository;
import com.erp.server.repository.EmployeeRepository;
import com.erp.server.repository.EmployeeSalaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AuxService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private EmployeeSalaryRepository employeeSalaryRepository;

    public Employee addEmployee(AuxEmployeeDTO employeeDTO){
        Employee employee = new Employee();
        employee.setFirstName(employeeDTO.getFirstName());
        employee.setLastName(employeeDTO.getLastName());
//        Optional<Employee> alreadyPresent = employeeRepository.
        employee.setEmail(employeeDTO.getEmail());
        employee.setPassword(employeeDTO.getPassword());
        employee.setTitle(employeeDTO.getTitle());
        employee.setPhotographPath(employeeDTO.getPhotograph());

        Optional<Department> department = departmentRepository.findById(employeeDTO.getDeptId());
        if(department.isPresent()){
            employee.setDepartment(department.get());
            department.get().setDeptCapacity(department.get().getDeptCapacity()+1);
            departmentRepository.save(department.get());
        }


        return employeeRepository.save(employee);

    }

    public Department addDept(AuxDeptDTO deptDTO){
        Department department = new Department();
        department.setDeptName(deptDTO.getDeptName());
        department.setDeptCapacity(deptDTO.getDeptCapacity());

        return departmentRepository.save(department);
    }

    public EmployeeSalary addEmpSalary(AuxEmployeeSalaryDTO employeeSalaryDTO){
        EmployeeSalary employeeSalary = new EmployeeSalary();
        Optional<Employee> employee = employeeRepository.findById(employeeSalaryDTO.getEmployeeId());
        if(employee.isPresent()){
            employeeSalary.setEmployeeId(employee.get());
        }
        employeeSalary.setAmount(employeeSalaryDTO.getAmount());
        employeeSalary.setDescription(employeeSalaryDTO.getDescription());
//        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        employeeSalary.setPaymentDate(new Date());
        return employeeSalaryRepository.save(employeeSalary);
    }

    public List<Employee> getEmployeesByDeptId(Long id){
        List<Employee> employees = employeeRepository.findAllByDepartment_deptId(id);
        return employees;
    }

    public boolean authenticate(String email,String password){
        Optional<Employee> employee = employeeRepository.findByEmail(email);
        if(employee.isPresent()){
            Employee employee1 = employee.get();
            return password.equals(employee1.getPassword());
        }else{
            return false;
        }
    }

}
