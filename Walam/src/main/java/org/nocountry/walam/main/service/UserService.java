package org.nocountry.walam.main.service;

import org.nocountry.walam.main.model.dto.UserDTO;

import java.util.List;

public interface UserService {

    public List<UserDTO> getAllUsers() throws Exception;

    public UserDTO getByUsername(String username) throws Exception;

    public UserDTO getUserById(int id) throws Exception;

    public void updateUser(int id, UserDTO userRequest) throws Exception;

}
