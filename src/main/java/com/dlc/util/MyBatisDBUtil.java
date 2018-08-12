package com.dlc.util;

import com.dlc.entity.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.io.Reader;

/**
 * @Author:Denglingcai
 * @Date:2018-08-12
 * @path:com.dlc.util.MyBatisDBUtil
 * @Description：
 */
public class MyBatisDBUtil {

    //SqlSession
    //工厂模式
    private static SqlSessionFactory sqlSessionFactory; //以一个 SqlSessionFactory 的实例为中心的

    @Test
    public  void test () {  //测试连接数据库是否成功
        System.out.println(getSqlSession());
    }

    public static SqlSession getSqlSession() {
        if(sqlSessionFactory == null) {
            sqlSessionFactory = getSqlSessionFactory();
        }
        SqlSession sqlSession = sqlSessionFactory.openSession();
        return sqlSession;
    }

    public static SqlSessionFactory getSqlSessionFactory() { //SqlSessionFactory 的实例可以通过 SqlSessionFactoryBuilder 获得


        String configPath = "config/mybatis.xml";
        try {
            InputStream in = Resources.getResourceAsStream(configPath);//输入流(InputStream)
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(in);//SqlSessionFactory 的实例可以通过 SqlSessionFactoryBuilder 获得
        } catch (IOException e) {
            e.printStackTrace();
        }

        return sqlSessionFactory;

    }

    @Test
    public void addUser(User user) {
        String resource = "config/mybatis.xml";
        Reader reader;
        SqlSessionFactory ssf;
        SqlSession session = null;
        try {
            reader = Resources.getResourceAsReader(resource);
            ssf = new SqlSessionFactoryBuilder().build(reader);
            session = ssf.openSession();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

    }

}
