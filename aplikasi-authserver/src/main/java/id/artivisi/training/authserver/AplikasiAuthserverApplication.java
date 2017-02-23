package id.artivisi.training.authserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
public class AplikasiAuthserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(AplikasiAuthserverApplication.class, args);
	}
        
    @GetMapping("/protected")
    public void protectedPage() {}
}
