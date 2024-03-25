package com.applicationofspring.allaspects;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AllaspectsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AllaspectsApplication.class, args);
	}
	/* 
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	*/
}
