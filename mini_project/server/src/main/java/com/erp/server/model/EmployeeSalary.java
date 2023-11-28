package com.erp.server.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "employee_salary")
public class EmployeeSalary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @ManyToOne()
    @JoinColumn(name = "employee_id", referencedColumnName = "emp_id")
    private Employee employee;

    @Column(name = "payment_date")
    private Date paymentDate;
    @Column(name = "amount")
    private int amount;
    @Column(name = "description")
    private String description;

    public EmployeeSalary() {
    }

    public EmployeeSalary(Long id, Employee employee, Date paymentDate, int amount, String description) {
        this.id = id;
        this.employee = employee;
        this.paymentDate = paymentDate;
        this.amount = amount;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Employee getEmployeeId() {
        return employee;
    }

    public void setEmployeeId(Employee employee) {
        this.employee = employee;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
