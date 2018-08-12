/**
 * Created by zhouhuahu on 2018/6/19.
 */
/**
 * 格式化日期
 * @param str
 * @returns {string}
 */
function getDate(str){
    if (str){
        var oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth()+1,
            oDay = oDate.getDate(),
            oTime = oYear +'-'+ getZero(oMonth) +'-'+ getZero(oDay);//最后拼接时间
        return oTime;
    } else {
        return "-";
    }
};

/**
 * 格式化时间
 * @param str
 * @returns {*}
 */
function getDateTime(str){
    if (str){
        var oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth()+1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oTime = oYear +'-'+ getZero(oMonth) +'-'+ getZero(oDay) +' '+ getZero(oHour) +':'+ getZero(oMin) +':'+getZero(oSen);//最后拼接时间
        return oTime;
    } else {
        return "-";
    }
};

//补0操作
function getZero(num){
    if(parseInt(num) < 10){
        num = '0' + num;
    }
    return num;
}

/**
 * 省级联动
 * @param parents 上级select:id
 * @param junior 下级select:id
 */
function changeRegionByProvince(sysPath){
    var  parentId = $("#province").val();
    var text = $("#province").children("option:selected").text();
    $("#province").next("input").val(text);
    var html = '<option value="">全部</option>';
    $("#county").empty();
    $("#county").append(html);
    $("#county").next("input").val("");
    $("#city").empty();
    $("#city").append(html);
    $("#city").next("input").val("");

    $.ajax({
        url: sysPath + "/region/loadRegion",
        type: "POST",
        dataType: "JSON",
        data: {parentId: parentId},
        success: function (data) {
            if (data.code == "1"){
                var region = data.data;
                for (var i = 0;i < region.length;i++){
                    html += '<option value="' + region[i].id + '">' + region[i].name + '</option>';
                }
                $("#city").append(html);
            }
        },
        complete: function () {

        }
    });
}

/**
 * 市级联动
 * @param sysPath
 */
function changeRegionByCity(sysPath){
    var  parentId = $("#city").val();
    var text = $("#city").children("option:selected").text();
    $("#city").next("input").val(text);
    var html = '<option value="">全部</option>';
    if (parentId.length > 0){
        $.ajax({
            url: sysPath + "/region/loadRegion",
            type: "POST",
            dataType: "JSON",
            data: {parentId: parentId},
            success: function (data) {
                if (data.code == "1"){
                    var region = data.data;
                    for (var i = 0;i < region.length;i++){
                        html += '<option value="' + region[i].id + '">' + region[i].name + '</option>';
                    }
                }
            },
            complete: function () {
                $("#county").empty();
                $("#county").append(html);
                $("#county").next("input").val("");
            }
        });
    } else {
        $("#county").empty();
        $("#county").append(html);
        $("#county").next("input").val("");
    }
}

/**
 * 县级联动
 */
function changeRegionByCounty(){
    var text = $("#county").children("option:selected").text();
    $("#county").next("input").val(text);
}

/**
 * 查询模板类型
 * @param id
 */
function loadTemplateType(sysPath) {
    var id = $("#parentId").val();
    $("#typeId").empty();
    var html = '<option value="">请选择</option>';
    if (id){
        $.ajax({
            url: sysPath + "/admin/template/queryTemplateType",
            type: "POST",
            dataType: "JSON",
            data: {id: id},
            success: function (data) {
                if (data.code == "1"){
                    var list = data.data;
                    for(var i = 0;i < list.length;i++){
                        html += '<option value="' + list[i].id + '">' + list[i].typeName + '</option>';
                    }
                    $("#typeId").append(html);
                }
            }
        });
    } else {
        $("#typeId").append(html);
    }
}

/**
 * 小tips 提示框
 * @param selector 吸附元素选择器
 * @param msg 消息
 */
function getPrompt(selector, msg) {
    $(selector).focus();
    layer.tips(msg, selector, {
        tips: [1, '#01AAED'],
        time: 4000
    });
}

/**
 * 登录
 * @param sysPath
 * @param selector
 * @param mobile
 * @param password
 */
function doLogin(sysPath, mobile, password) {
    var index = layer.load();
    $.ajax({
        url: sysPath + "/front/user/doLogin",
        type: "POST",
        dataType: "JSON",
        data: {mobile: mobile, password: password},
        success: function (data) {
            parent.layer.close(index);
            if (data.code == '1'){
                parent.layer.msg(data.data, {time: 2000, icon:6}, function () {
                    window.location.href = sysPath + "/front/user/loadMain";
                });
            } else {
                parent.layer.msg(data.data, {time: 2000, icon:5});
            }
        },
        error: function () {
            parent.layer.msg('网络连接失败', {
                time: 3000
            });
        },
        complete: function () {
            parent.layer.close(index);
        }
    })
}

/**
 * 发送短信验证码
 * @param mobile
 * @param figureCode
 */
function sendSmsCode(sysPath, mobile, figureCode) {
    var index = layer.load();
    $.ajax({
        url: sysPath + "/front/sendRegisterCode",
        type: "POST",
        typeData: "JSON",
        data: {mobile: mobile,figureCode: figureCode},
        success: function (data) {
            parent.layer.msg(data.data, {
                time: 3000
            });
        },
        complete: function () {
            parent.layer.close(index);
        }
    })
}

/**
 * 注册
 * @param sysPath
 * @param mobile
 * @param password
 */
function doRegister(sysPath, mobile, password) {
    var index = layer.load();
    $.ajax({
        url: sysPath + "/front/user/doRegister",
        type: "POST",
        dataType: "JSON",
        data: {mobile: mobile, password: password},
        success: function (data) {
            if (data.code == '1'){
                parent.layer.msg(data.data, {time: 2000, icon:6}, function () {
                    window.location.href = sysPath + "/front/loadIndex?menuId=6";
                });
            } else {
                var resultIndex = parent.layer.alert(data.data, function () {
                    parent.layer.close(resultIndex);
                });
            }
        },
        error: function () {
            parent.layer.msg('网络连接失败', {
                time: 3000
            });
        },
        complete: function () {
            parent.layer.close(index);
        }
    })
}

/**
 * 加载快捷登录
 * @param sysPath
 */
function loadQuickLogin(sysPath) {
    layer.open({
        type: 2,
        title: '快捷登录',
        skin: 'layui-layer-demo', //样式类名
        closeBtn: 1, //不显示关闭按钮
        anim: 2,
        shadeClose: true, //开启遮罩关闭
        area: ['520px', '386px'],
        content: sysPath + '/front/user/loadQuickLogin',
        end: function () {
            parent.location.reload();
        }
    });
}

/**
 * 快捷登录
 * @param sysPath
 * @param mobile
 * @param password
 */
function doQuickLogin(sysPath, mobile, password) {
    var index = layer.load();
    $.ajax({
        url: sysPath + "/front/user/doLogin",
        type: "POST",
        dataType: "JSON",
        data: {mobile: mobile, password: password},
        success: function (data) {
            parent.layer.close(index);
            if (data.code == '1'){
                parent.layer.msg(data.data, {time: 2000, icon:6}, function () {
                    var parentIndex = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                    parent.layer.close(parentIndex); //再执行关闭
                });
            } else {
                parent.layer.msg(data.data, {time: 2000, icon:5});
            }
        },
        error: function () {
            parent.layer.msg('网络连接失败', {
                time: 3000
            });
        },
        complete: function () {
            parent.layer.close(index);
        }
    })
}