
<?php include VIEW_PATH . "/common/head.php" ?>
</head>
<body>
   
<?php include VIEW_PATH . '/common/nav.php';?>

<div style="background: #fff;min-height: 600px;">
  <div class="ctrl clearfix">
    <div class="clearfix" style="width:1160px;margin: 0 auto;">
        <div class="center-breadcrumb"><a href="/">首页</a>&nbsp;&gt;&nbsp;用户中心&nbsp;&gt;&nbsp;<span id="curPathName">我的订单</span></div>

        <!--订单中心导航栏-->
        <ul class="order_nav" id="order_nav_container">
            <li class="active">
              <a href="/account/order" class="active">
                我的订单<span class="nav_count  active " id="nav_order_count"></span>
                <br><i class="icon-c  icon-c-myorder-hover "></i>
                <br><b></b>
              </a>
            </li>
        </ul>

      <div style="width:919px;float: right;margin-left: 20px;background: #fff;min-height: 600px;">
          <!--订单列表    -->


    <!-- 分页-->
    

   </ul>          
          <div>
            <!--订单状态切换tag-->
            <div class="order_statusBar" id="order_statusBar_container">
              <ul style="width:620px;height:40px;border-bottom:2px solid #eee;display:inline-block;">
                <li class="order_tag_act" data-tagval=""><label class="label-tab">全部订单</label><i class="triDown"></i></li>
<!--                 <li data-tagval="1"><label class="label-tab" style="position: relative">等待支付<span id="toPayCountBar"></span></label><i class="triDown"></i></li> -->
              </ul>
              <div class="order_input clearfix"><input placeholder="输入演出名称" id="od_search_input">
                <button id="od_search_btn">
                  <i class="icon-c icon-c-myorder-search"></i>
                  <!--<i class="icon icon-search-icon-hover-white"></i>-->
                </button>
              </div>
            </div>
           <!--订单列表-->
            <ul id="user_list_container" style="border-top:1px solid #eee">
<?php 
  if($order_list){


    foreach ($order_list as $order) {
      # code...
 

 ?>
    <div class="order_item">
          <p style="font-size: 13px;color: #fd6857;"><span class="c_orange"><?php echo $state[$order['order_state']]; ?></span></p>
              <ul class="order_item_title clearfix">
                <li>订单号： <?php echo $order['order_id'];?></li>
                  
                
                <li style="float: right;"><?php echo $order['creat_time'];?></li>
              </ul>

     <ul class="clearfix">
        <div class="order_item_left" style=" display: block;  float: left">
            <a href="/content/c?concert=<?php echo $order['concert_id'];?>" target="_blank">
                <img src="<?php echo $order['concert']['concert_img'];?>" data-src="<?php echo $order['concert']['concert_img'];?>" width="103" height="132" alt="<?php echo $order['concert']['concert_name'];?>" title="<?php echo $order['concert']['concert_name'];?>" style="border-radius: 3px;float: left">
            </a>

            <ul class="order_show_info">
                <li><a href="/content/c?concert=<?php echo $order['concert_id'];?>" target="_blank"><span style="font-size: 13px;color: #505050;font-weight:bold;line-height: 18px;display:block;margin-left: -5px;margin-bottom: 5px;"><?php echo $order['concert']['concert_name'];?> </span></a></li>
                <!-- <li>票面：<span class="order_detailinfo_color">280</span></li> -->
                <li>说明：<span class="order_detailinfo_color"></span> </li>
                <li>数量：<span class="order_detailinfo_color">1&nbsp;张</span> </li>
                <li>时间：<span class="order_detailinfo_color"><?php echo $order['concert']['concert_time'];?></span></li>
                <li>场馆：<span class="order_detailinfo_color"><?php echo $order['concert']['concert_addr'];?></span></li>
                <li>订单金额：<span class="order_money">￥<?php echo $order['amount'];?></span> 
                      
                          
                </li>
            </ul>
        </div>

        <div class="order_item_right">           
           
                
                    
                        <p><a class="order_btn order_btn_pay" href="/buy/pay?order_id=<?php echo $order['order_id'];?>">立即支付</a></p>
                     
                
            
            <a class="order_btn order_btn_detail" target="_blank" href="account/orderdetail?order_id=<?php echo $order['order_id'];?>">订单详情</a> 
        </div>
    </ul>
    </div>


<?php 

   }//for结束
  }else{
 ?>    
    <div class="order_noData" style="display: block">
        <div class="icon icon-no-data"></div>
    </div>
<?php 

  }


?>

    </ul>
         </div>
          <!--优惠券列表-->      
                  

      </div>
    </div>

     

  </div>
    </div>
  
<?php include VIEW_PATH . '/common/login.php'?>

<script type="text/javascript" src="js/common/page.js"></script>
</body>
</html>

