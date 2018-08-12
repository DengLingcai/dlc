package com.dlc.controller;

import com.dlc.entity.User;
import com.dlc.service.IUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * @Author:Denglingcai
 * @Date:2018-08-12
 * @path:com.dlc.controller.TestController
 * @Description：
 */
@Controller
@RequestMapping("/test")
public class TestController {

    private static final Logger log = LoggerFactory.getLogger(TestController.class);

    @Autowired
    @Qualifier("userServiceImpl")
    IUserService iUserService;

    @RequestMapping("/query")
    public String query(String name){
        System.out.println("11111111111111111111"+name);
        log.info("------------------------------------------------"+name);
        iUserService.addUser(new User());


        return "/index";
    }





}
