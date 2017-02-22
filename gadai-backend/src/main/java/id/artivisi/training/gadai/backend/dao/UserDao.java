package id.artivisi.training.gadai.backend.dao;

import id.artivisi.training.gadai.backend.entity.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDao extends PagingAndSortingRepository<User, String>{
    
}
