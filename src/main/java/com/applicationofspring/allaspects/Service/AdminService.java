package com.applicationofspring.allaspects.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.applicationofspring.allaspects.Repository.AdminRepository;
import com.applicationofspring.allaspects.Student.Admin;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public boolean adminAuthenticate(String email, String password){
        Admin admin = adminRepository.getAdminByEmail(email);
        if(admin != null){
            if(email.equals(admin.getEmail()) && password.equals(admin.getPassword())){
            return true;
            }
            return false;
        }
        
        return false;
    }

    public Admin getAdminByEmail(String email){
        return adminRepository.getAdminByEmail(email);
    }
}
