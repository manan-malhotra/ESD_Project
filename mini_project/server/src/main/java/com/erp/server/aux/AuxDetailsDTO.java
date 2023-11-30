package com.erp.server.aux;

public class AuxDetailsDTO {

    private String firstName;
    private String lastName;
    private String email;
    private Long deptId;
    private String deptName;
    private int amount;
    private Long employeeId;

    public AuxDetailsDTO() {
    }

    public AuxDetailsDTO(String firstName, String lastName, String email, Long deptId, String deptName, int amount, Long employeeId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.deptId = deptId;
        this.deptName = deptName;
        this.amount = amount;
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

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }
}
