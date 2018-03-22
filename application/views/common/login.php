<div class="login-component" style="display: none;">
    <div class="pop"></div>
    <div class="pop_login">
        <ul class="pop_login_title">
            <span onclick="$('.login-component').hide()" class="icon icon-modal-close"></span>
            <img src="img/logo.png" class="main-logo">
        </ul>
        <dl>
            <dt>欢迎登录学霸蟹</dt>
            <dd>模拟票务网站</dd>
        </dl>
        <ul class="pop_login_form">
            <li id="li_username"><input placeholder="账号" id="js_username"></li>
          
            <li id="li_password"><input type = 'password' placeholder="密码" id="js_password"></li>
            <li id="li_login"><a id="js_login_btn" href="javascript:void(0);">登录</a>
            <a id="js_open_register_btn" href="javascript:void(0);">去注册</a></li>
        </ul>
    </div>

</div>

<div id="cancelLogin_component" style="display: none;">
    <div class="pop"></div>
    <div class="pop_cancel">
        <ul class="pop_login_title">
            <span onclick="$('#cancelLogin_component').hide()" class="icon icon-modal-close"></span>
            <img src="img/logo.png" class="main-logo">
        </ul>
        <p style="text-align: center;font-size: 18px;">亲，你真的忍心退出么!?</p>
        <p style=" line-height: 40px;height: 40px;text-align: center;margin-top: 20px;">
            <a id="js_logout_btn" style=" display: inline-block; width: 150px;  margin: 0 25px;  background-color: #adadad;color: #fff;">退出</a>
            <a onclick="$('#cancelLogin_component').hide()" style="display: inline-block; width: 150px;   margin: 0 25px; background-color: #f2593f;color: #fff;">再看看</a>
        </p>
    </div>
</div>

<div id="register_component" style="display: none;">
    <div class="pop"></div>
    <div class="pop_login">
        <ul class="pop_login_title">
            <span onclick="$('#register_component').hide()" class="icon icon-modal-close"></span>
            <img src="img/logo.png" class="main-logo">
        </ul>
        <dl>
            <dt>欢迎注册</dt> 
        </dl>
        <ul class="pop_login_form">
            <li id="li_register_username"><input placeholder="账号" id="js_register_username"></li>
          
            <li id="li_register_password"><input type = 'password' placeholder="密码" id="js_register_password"></li>
            <li id="li_register_password_again"><input type = 'password' placeholder="请重复输入密码" id="js_register_password_again"></li>
<!--             <li id="li_register_realname"><input placeholder="真实姓名" id="js_register_realname"></li>
<li id="li_register_idCard"><input placeholder="身份证号" id="js_register_idCard"></li>
<li id="li_register_tel"><input placeholder="电话" id="js_register_tel"></li> -->

            <li id="li_register"><a id="js_register_btn" href="javascript:void(0);">注册</a></li>
        </ul>
    </div>

</div>
