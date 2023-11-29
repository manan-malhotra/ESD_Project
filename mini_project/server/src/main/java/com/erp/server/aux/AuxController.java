package com.erp.server.aux;

import com.erp.server.model.Employee;
import com.erp.server.repository.DepartmentRepository;
import com.erp.server.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/aux")
public class AuxController {

    @Autowired
    private AuxService auxService;
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @PostMapping(path="/add/employee")
    public ResponseEntity<?> addEmployee(@RequestBody AuxEmployeeDTO employeeDTO){
        Optional<Employee> employeeOptional = employeeRepository.findByEmail(employeeDTO.getEmail());
        if(employeeOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        auxService.addEmployee(employeeDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(path = "/add/department")
    public ResponseEntity<?> addDept(@RequestBody AuxDeptDTO deptDTO){
        auxService.addDept(deptDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(path="/add/employee-salary")
    public ResponseEntity<?> addEmpSalary(@RequestBody AuxEmployeeSalaryDTO employeeSalaryDTO){
        auxService.addEmpSalary(employeeSalaryDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(path = "/add/allSalary")
    public ResponseEntity<?> addEmpSalaries(@RequestBody List<AuxEmployeeSalaryDTO> auxEmployeeSalaryDTOList){
        for(int i=0;i<auxEmployeeSalaryDTOList.size();i++) {
            auxService.addEmpSalary(auxEmployeeSalaryDTOList.get(i));
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/dept/{deptId}")
    public ResponseEntity<?> getEmployeesByDeptId(@PathVariable("deptId") Long id){

        List<Employee> emp = auxService.getEmployeesByDeptId(id);
        return new ResponseEntity<>(emp,HttpStatus.OK);
//        return new ResponseEntity<>(departmentRepository.findById(id).get().getEmployees().stream().map(employee -> employee.getEmployeeId()),HttpStatus.OK);
    }

}
