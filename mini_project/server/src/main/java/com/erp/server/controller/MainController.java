package com.erp.server.controller;

import com.erp.server.aux.AuxAuthenticationObjectDTO;
import com.erp.server.aux.AuxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/home")
public class MainController {

    @Autowired
    private AuxService auxService;

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuxAuthenticationObjectDTO credentials){
        if(auxService.authenticate(credentials.getEmail(),credentials.getPassword())){
            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }


}
