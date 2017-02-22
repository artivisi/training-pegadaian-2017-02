package id.artivisi.training.gadai.backend;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptTester {
    
    @Test
    public void testBcrypt(){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String password = "u00123";
        String hasil = encoder.encode(password);
        System.out.println("Hasil bcrypt : "+hasil);
        
        Assert.assertNotNull(hasil);
        Assert.assertTrue(encoder.matches(password, "$2y$10$PUBSAD43ERIpgBxH6dx9xeTnLVZdPDzpuCKpxT6W4.qdhkYElXqf2"));
    }
}
