$(function(){
    var $user = $('#user'); 
    var $phone= $('#phone');
    var $pwd = $('#pwd');
    var $getpass = $('.getpass');
    var $umsg = $('#user-validation-msg');
    var $pmsg = $('#phone-validation-msg');
    var $smsg = $('#pwd-validation-msg');
    var $passmsg = $('#pass-validation-msg');


    //用户名数据校验
    $user.blur(function () { 
        var username = $user.val();
        var user_reg = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){1,}$/;
        var num_reg = /^\d+$/g;
        if((user_reg.test(username) && !num_reg.test(username)) || username===''){
            $user.css('border','1px solid #e2dada');
            $umsg.html('');
        }else{
            $user.css('border','1px solid red');
            $umsg.html('用户名仅支持中英文，数字和下划线且不能为纯数字');
        }
        
    });
    //手机号格式校验
    $phone.blur(function () { 
        var phone = $phone.val();
        var tel_reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
        if(tel_reg.test(phone) || phone===''){
            $phone.css('border','1px solid #e2dada');
            $pmsg.html('');
        }else{
            $phone.css('border','1px solid red');
            $pmsg.html('手机号码格式不正确');
        }       
    });
    //密码校验：字母、数字、符号至少包含两种，不允许有空格，中文；8-14位
    $pwd.blur(function () { 
        var pwd = $pwd.val();
        var pwd_reg = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{8,14}$/;
        console.log('ddddddddd');
        if(pwd_reg.test(pwd) || pwd===''){
            $pwd.css('border','1px solid #e2dada');
            $smsg.html('');
        }else{
            $pwd.css('border','1px solid red');
            $smsg.html('密码设置不符合要求');
        }
        
    });
    
    //点击发送验证码效果
    $getpass.mouseover(function () { 
        $getpass.css({color:"blue",border:"1px solid blue"}); 
    });
    $getpass.mouseout(function () { 
        $getpass.css({color:"#252424",border:"1px solid #e2dada"}); 
    });
    $getpass.click(function(){      
        var i = 60;
        $passmsg.html('');
        $getpass.attr('disabled','disabled');
        $getpass.css({color:"#252424",border:"1px solid #e2dada"}); 
        var timer = setInterval(function(){
            i--;
            if(i>=0){
                $getpass.val('重发验证'+'（'+i+'s）');
            }else{
                clearInterval(timer);
                $getpass.val('获取验证码');
                $getpass.removeAttr("disabled");
                $passmsg.html('请求超时,请稍后重试');
            }
        },1000);

    });

    

});
