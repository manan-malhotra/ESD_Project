package com.erp.server.aux;

public class AuxDeptDTO {

    private Long deptId;
    private String deptName;
    private Integer deptCapacity;

    public AuxDeptDTO() {
    }

    public AuxDeptDTO(Long deptId, String deptName, Integer deptCapacity) {
        this.deptId = deptId;
        this.deptName = deptName;
        this.deptCapacity = deptCapacity;
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
}
