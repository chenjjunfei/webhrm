package com.xm;

import com.xm.mapper.UserMapper;
import com.xm.pojo.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTests {
    
    @Autowired
    private UserMapper userMapper;

    @Test
    public void contextLoads() {
        User user = userMapper.findOneByUserName("user1");
        System.out.println(user.toString());

    }
        
    @Test
    public void testPass(){
        String pass = "123456";
        BCryptPasswordEncoder bcryptPasswordEncoder  = new BCryptPasswordEncoder();
        String hashPass = bcryptPasswordEncoder.encode(pass);//加密
        System.out.println("密码："+hashPass);
        boolean f = bcryptPasswordEncoder.matches("123456",hashPass);//比较密码是否正确？
        System.out.println(" 比较结果"+f);
    }


}
