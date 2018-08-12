package com.cl.dlc;

/**
 * Created by IntelliJ IDEA.
 *
 * @author: Denglingcai
 * @Date: 2018/7/28 14:19
 * @version:1.0 描述：
 * <p>
 * 功能说明：
 */
public class BlueDuck extends Duck {


    public BlueDuck(){
        feiDuckI = new DiFeiDuck();
        jiaoDuckI = new HuaideJiaoDuck();
    }

    @Override
    public void setcolor() {
        System.out.println("----蓝色鸭子！！");
    }



}
