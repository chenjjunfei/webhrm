package com.xm.controller;

import com.xm.pojo.RespBean;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class SecurityController {
    
    @GetMapping("/username")
    public RespBean currentUserName() {
        String currentUser = SecurityContextHolder.getContext().getAuthentication().getName();
        return new RespBean("success", currentUser);
    }
    
    /**
     *
     * @return
     */
    @GetMapping("/islogin")
    public RespBean islogin() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        if ( username.equals("anonymousUser") ) {
            return new RespBean("logout", "anonymousUser");
        } else {
            return new RespBean("login", username);
        }
    }
 
    @GetMapping("/login_page")
    public RespBean loginPage() {
        return new RespBean("logout", "尚未登录，请登录!");
    }
    
    @GetMapping("/login_success")
    public RespBean loginSuccess() {
        return new RespBean("success", "登录成功!");
    }
    
    @GetMapping("/login_error")
    public RespBean loginError() {
        return new RespBean("error", "身份错误!");
    }
    
    @GetMapping("/logout_success")
    public RespBean logoutSuccess() {
        return new RespBean("success", "退出成功!");
    }
}
