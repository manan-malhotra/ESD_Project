package com.erp.server.aux;

import java.util.Date;

public class AuxEmployeeSalaryDTO {
    private int amount;
    private String description;
    private Date paymentDate;
    private Long employeeId;

    public AuxEmployeeSalaryDTO() {
    }

    public AuxEmployeeSalaryDTO(int amount, String description, Date paymentDate, Long employeeId) {
        this.amount = amount;
        this.description = description;
        this.paymentDate = paymentDate;
        this.employeeId = employeeId;
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

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }
}
