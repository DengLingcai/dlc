package com.cl.dlc;

/**
 * Created by IntelliJ IDEA.
 *
 * @author: Denglingcai
 * @Date: 2018/7/28 14:18
 * @version:1.0 描述：
 * <p>
 * 功能说明：   红色鸭子  飞得高  叫得好听
 */
public class RedDuck extends Duck {


    public RedDuck() {
        this.feiDuckI = new GaoFeiDuck();
        this.jiaoDuckI = new GoodJiaoDuck();
    }


    @Override
    public void setcolor() {
        System.out.println("红色鸭子哦！！！！！");
    }


}
