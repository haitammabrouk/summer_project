package com.applicationofspring.allaspects.Repository;

import org.springframework.data.repository.CrudRepository;

import com.applicationofspring.allaspects.Student.Admin;

public interface AdminRepository extends CrudRepository<Admin, Long> {
    Admin getAdminByEmail(String email);
}
