package com.cl.dlc;

/**
 * Created by IntelliJ IDEA.
 *
 * @author: Denglingcai
 * @Date: 2018/7/28 13:58
 * @version:1.0 描述：
 * <p>
 * 功能说明：
 */
public abstract class Duck {

    FeiDuckI feiDuckI;
    JiaoDuckI jiaoDuckI;


    public Duck(){

    }



    public void swiming(){
        System.out.println("-----鸭子在游泳");
    }

    /**
     * 不同鸭子不同颜色
     */
    public abstract void setcolor();


    public void jiao(){
        jiaoDuckI.jiao();

    }


    public void fei(){
        feiDuckI.fei();
    }


}
