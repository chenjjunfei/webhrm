package com.xm.mapper;

import com.xm.pojo.User;

public interface UserMapper {

	/**
	 * 根据id查询
	 * @param username
	 * @return
	 */
	public User findOneByUserName(String username) ;
	public void insertUser(User user);
}
