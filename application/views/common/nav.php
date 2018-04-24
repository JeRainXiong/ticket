    <div class="navbar" id="nav">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="/" style="height: 75px; display: inline-block;">
                    <img src="img/logo.png" class="main-logo">
                </a>
            </div>
            <div class="navbar-list">
                
                <div class="search">
                    <form action="/search" method="POST" id="search-form" onsubmit="return false;">
                        <div class="input-wrapper">
                            <input type="search" placeholder="搜索明星、演出、场馆" name="keyword" autocomplete="off" class="search-text" value="">
                            <button type="button" id="js_search_btn">

                                搜索
                            </button>
                        </div>
                        <div class="associate-container"><ul></ul></div>
                    </form>
                    

                       
                </div>
                
            </div>
            <div class="right current-user-info">
                <div id = "login_info">
                    <a class="login-info" id="js_open_register">
                        注册
                    </a>                
                    <a class="login-info" id="js_open_login">
                        登录&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                </div>

 <?php if(isset($user_info))
    {
 ?>               
                <div class="user-info" id ="user_info" isLogin = '<?php echo 1; ?>' user_id = '<?php echo $user_info['user_id'];?>' username = '<?php echo $user_info['username'];?>'>
                    <div class="menu-wrap">
                    <span class="mobile"><?php echo $user_info['username'];?></span>
                    <ul class="user-menu">
                        <i class="icon icon-site-dropdown"></i>
                        <li><a href="/account/order">我的订单</a></li>
                        <li><a href="#">个人信息</a></li>                         
                        <li id="js_open_logout">退出登录</li>
                    </ul>
                    </div>
                </div>
<?php }?>                
            </div>



        </div>
    </div>
    <div class="error_tip" style="display: none;">error tip</div>
    <div id="loading_box" class="modal-loading" style="display: none;">
      <div class="modal-loading-back"></div>
      <div class="modal-loading-content"></div>
    </div>