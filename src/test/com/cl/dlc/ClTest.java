package com.cl.dlc;

import org.junit.Test;

/**
 * Created by IntelliJ IDEA.
 *
 * @author: Denglingcai
 * @Date: 2018/7/28 14:20
 * @version:1.0 描述：
 * <p>
 * 功能说明：
 */
public class ClTest {



        @Test
        public  void test(){

            RedDuck redDuck = new RedDuck();
            redDuck.jiao();
            redDuck.swiming();
            redDuck.setcolor();
            redDuck.fei();
            System.out.println("-------------------------------------");
           BlueDuck blueDuck = new BlueDuck();
            blueDuck.jiao();
            blueDuck.swiming();
            blueDuck.setcolor();
            blueDuck.fei();


        }


















}
