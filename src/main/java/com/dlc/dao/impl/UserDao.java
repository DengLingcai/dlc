package com.dlc.dao.impl;

import com.dlc.controller.TestController;
import com.dlc.dao.IUserDao;
import com.dlc.entity.User;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


/**
 * @Author:Denglingcai
 * @Date:2018-08-12
 * @path:com.dlc.dao.impl.UserDao
 * @Description：
 */
@Component("userDao")
public class UserDao implements IUserDao {

    private static final Logger log = LoggerFactory.getLogger(TestController.class);

    @Autowired
    SqlSessionTemplate sqlSessionTemplate = null;

    @Transactional(propagation= Propagation.REQUIRED)
    @Override
    public boolean addUser(User user) {

        User user1 = new User();
        user1.setId("1");
        user1.setUsername("www");
        User user12 = new User();
        user12.setId("q");
        user12.setUsername("qq");

        sqlSessionTemplate.insert("User.addUser",user1);
        sqlSessionTemplate.insert("User.addUser",user12);


        return false;
    }



}
