package com.dlc.service.impl;

import com.dlc.dao.IUserDao;
import com.dlc.entity.User;
import com.dlc.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

/**
 * @Author:Denglingcai
 * @Date:2018-08-12
 * @path:com.dlc.service.impl.UserServiceImpl
 * @Description：
 */
@Service("userServiceImpl")
public class UserServiceImpl implements IUserService {

    @Autowired
    @Qualifier("userDao")
    private IUserDao iUserDao;

    @Override
    public boolean addUser(User user) {
        return iUserDao.addUser(user);
    }
}
