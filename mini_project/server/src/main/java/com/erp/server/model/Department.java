package com.erp.server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "department")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dept_id")
    private Long deptId;

    @Column(name = "dept_name")
    private String deptName;

    @Column(name = "dept_capacity")
    private Integer deptCapacity;

    @JsonIgnore
    @OneToMany(mappedBy = "department")
    private Set<Employee> employees = new HashSet<>();

    public Department() {
    }

    public Department(Long deptId, String deptName, Integer deptCapacity, Set<Employee> employees) {
        this.deptId = deptId;
        this.deptName = deptName;
        this.deptCapacity = deptCapacity;
        this.employees = employees;
    }

    public Long getDeptId() {
        return deptId;
    }

    public void setDeptId(Long deptId) {
        this.deptId = deptId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public Integer getDeptCapacity() {
        return deptCapacity;
    }

    public void setDeptCapacity(Integer deptCapacity) {
        this.deptCapacity = deptCapacity;
    }

    public Set<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(Set<Employee> employees) {
        this.employees = employees;
    }
}
