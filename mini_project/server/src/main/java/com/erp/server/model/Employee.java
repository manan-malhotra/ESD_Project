package com.erp.server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "emp_id")
    private Long employeeId;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email_id", unique = true)
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "title")
    private String title;
    @Column(name = "photographPath")
    private String photographPath;
    @ManyToOne()
    @JoinColumn(name = "department_id", referencedColumnName = "dept_id")
    private Department department;

    @JsonIgnore
    @OneToMany(mappedBy = "employee")
    private Set<EmployeeSalary> employeeSalaries = new HashSet<>();

    public Employee(Long employeeId, String firstName, String lastName, String email, String password, String title, String photographPath, Department department) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.title = title;
        this.photographPath = photographPath;
        this.department = department;
    }

    public Employee() {
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPhotographPath() {
        return photographPath;
    }

    public void setPhotographPath(String photographPath) {
        this.photographPath = photographPath;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Set<EmployeeSalary> getEmployeeSalaries() {
        return employeeSalaries;
    }

    public void setEmployeeSalaries(Set<EmployeeSalary> employeeSalaries) {
        this.employeeSalaries = employeeSalaries;
    }
}
