
<?php include VIEW_PATH . "/common/head.php" ?>
</head>
<body>
   
<?php include VIEW_PATH . '/common/nav.php';?>

<div id="orderDetailContainer"><div class="ctrl" style="background: #fff;min-height: 600px;">
    <div class="clearfix" style="width:1160px;margin: 0 auto;">
      <div style="margin: 10px;font-size: 13px;color: #333333;line-height: 13px;"><a href="/">首页</a>&nbsp;&gt;&nbsp;用户中心&nbsp;&gt;&nbsp;订单详情</div>
      <!--导航栏-->
        <ul class="order_nav" id="order_nav_container">
            <li class="active"><a href="/account/order" class="active"> 我的订单<br><i class="icon-c icon-c-myorder-hover"></i><br><b></b></a></li>
        </ul>
       <!--订单详情-->
      <div style="width:919px;float: right;margin-left: 20px;background: #fff;min-height: 600px;">
          <!--订单进度栏-->
          
          <div class="clearfix">
            <div class="orderDet_bar_wrap">
                <div style="margin-top: 39px;padding-left: 27px;font-size: 17px;color: #505050;">订单状态</div>
                
                <div style="width:667px;height: 4px;background: #eee;position: relative;left: 114px;top: 65px; z-index: 0;"> </div>
                <ul class="orderDet_bar clearfix">
                  <li class="p_r_135 od_det_green ">待付<div class="circle_bot od_det_tag"></div></li>
                  <li class="p_r_135 <?php if($order['order_state']==1)echo "od_det_green"?>">下单<div class="circle_bot od_det_tag"><span class="active-line"></span></div></li>
                  <li class="p_r_135 <?php if($order['order_state']==1)echo "od_det_green"?>">接单<div class="circle_bot od_det_tag"><span class="active-line"></span></div></li>
                  <li class="p_r_135 <?php if($order['order_state']==1)echo "od_det_green"?>">出票<div class="circle_bot od_det_tag"><span class="active-line"></span></div></li>
                  <li class = '<?php if($order['order_state']==1)echo "od_det_green"?>'>完成<div class="circle_bot od_det_tag"><span class="active-line"></span></div></li>
                </ul>
                
            </div>
          </div>
          
           <!--订单信息-->
          <div class="orderDet_info_wrap clearfix">

               <div class="urge_btn_wrap">
                    
                    <div class="urge_btn urged hide ">已催票 </div>
               </div>
                <div class="orderDet_b_bottom clearfix">
              <ul class="orderDet_msg_warp">
                <li style="font-size: 18px;color: #f2593f;"><?php echo $state[$order['order_state']]; ?><br><br>
                    <!-- <span style="font-size: 13px;color: #65B217;"><i class="orderDet_pre_icon icon icon-prebuy"></i><span id="detail_note">请尽快完成付款，逾期将取消订单</span></span> -->
                </li>
                <li class="overdue-container"></li>
                <li class="orderDet_msg_info">下单时间： <?php echo $order['creat_time']; ?></li>
                <li class="orderDet_msg_info">订单编号：<?php echo $order['order_id'];?></li>
                
                
                <li class="orderDet_msg_info overdue-btn"></li>
              </ul>
               
                <div class="orderDet_msg_controll">
                <p style="width: 100%;display: block" class="clearfix">
                 <?php if($order['order_state']==0) {?>
                    <a class="cancel_btn" onclick="$('#cancelOrder_component').show()">取消订单</a>
                        
                        
                            <a style="margin-bottom: 10px;" class="pay_btn" href="/buy/pay?order_id=<?php echo $order['order_id'];?>">立即支付</a>
                  <?php } ?>
                    
                </p>
                <!-- <p id="payReserveTimeTag" style="font-size: 13px; color: rgb(0, 0, 0); margin-left: 30px;"><span style="color: rgb(233, 71, 77);font-weight: bold;font-size: 14px;" id="payReserveTime">5:38</span>后将自动取消</p> -->

                </div>
                

            </div>
             <!--演出信息 -->

               <?php $concert = $order['concert'] ;?>
                <div style="border-bottom: 1px solid  #eee;" class="clearfix">
                  <div class="orderDet_show_wrap clearfix">
                   <div style="margin-top: 5px;margin-bottom:31px;font-size: 17px;color: #505050;">订单详情</div>
                   <a href="/content/c?concert=<?php echo $concert['concert_id'];?>"><img src="<?php echo $order['concert']['concert_img'];?>" width="100" height="128" alt="<?php echo $order['concert']['concert_name'];?>" title="<?php echo $order['concert']['concert_name'];?> "></a>
                   <ul class="orderDet_show_info">
                      <li class="orderDet_showname"><a href="/content/c?concert=<?php echo $concert['concert_id'];?>"><?php echo $order['concert']['concert_name'];?></a></li>
                      <li>票价：￥ <?php echo $order['ticket_type']['unit_price'];?> x 1张</li>
                      <li>时间：<?php echo $concert['concert_time'];?></li>
                      <li>场馆：<?php echo $concert['concert_addr'];?></li>

                      
                      <li>来源：
                        <div class="certificate-container"><div class="certi_icon_box"><div class="ok_icon">&nbsp;</div><i></i> <div class="text" id="show-certificate">资质认证</div></div></div>
                      </li>
                    </ul>
                  </div>
              </div>
              
               <!--收货地址信息 -->
              <div class="orderDet_addr_wrap">
                  <div style="padding: 30px;padding-right:64px">
                    <p style="font-size: 16px;color: #505050;  padding-bottom: 16px;">收货信息</p>

                    <ul style="line-height: 18px;margin-left: 64px;line-height:22px; padding-bottom:10px;border-bottom: 1.5px  dotted #E5E7ED">
                        <li> <span class="orderDet_addr_title">配送方式：</span>电子票</li>
                        <li> <span class="orderDet_addr_title">电子票：</span>
                         <?php if($order['order_state']==1) {?>   
                          <a style="margin-bottom: 10px;" class="order_btn order_btn_pay" href="ticket/showticket?ticket_id=<?php echo $order['ticket_id'];?>">显示电子票</a>
                        <?php } ?>
                        </li>

                      </ul>
                        
                    </ul>

                    <!--订单汇总信息-->
                    <div class="clearfix" style="line-height: 18px;margin-left: 64px;line-height:22px;border-bottom: 1.5px  dotted #E5E7ED">
                         <ul class="orderDet_sum_wrap">
                            

                            
                            
                            <li>订单总额：<span style="float:right">￥<?php echo $order['amount'];?>元</span></li>
                         </ul>
                    </div>
                    <?php  
                    if($order['order_state']==0 || $order['order_state'] ==2){
                      $paid = 0;
                    }else if($order['order_state']==1)
                      $paid = $order['amount'];
                    ?>
                    <div class="clearfix" style="line-height: 18px;margin-left: 64px;line-height:22px; padding-bottom:10px;">
                        <ul class="orderDet_sum_wrap">
                            <li>实付款:<span style="color: #f2593f;font-weight: bold;float:right">￥ <?php echo $paid; ?>元</span></li>
                            
                            
                        </ul>
                    </div>

                  </div>

              </div>
                <!--订单汇总信息 -->
               <!--<div class="clearfix">
                  <ul class="orderDet_sum_wrap">
                      <li>代收票款：30元</li>
                      
                      <li><p>摩天轮优惠<br>250元</p></li>
                      

                      


                      <div  id="cdf_noteBox" style="display:none;position:absolute;  right: 80px;    top: -105px;width:310px;height:150px;-webkit-box-shadow:0 0 5px 0;-moz-box-shadow:0 0 5px 0;box-shadow:0 0 5px 0;background:#fff;border-radius:5px;z-index: 1000">
                      <div style=" position:absolute;color: #ccc;width: 0px;height:0px;line-height: 0px;border-width: 10px 5px 0;border-style: solid dashed dashed dashed;border-left-color: transparent;border-right-color: transparent;bottom: -10px;right:11%;"></div>
                        <div  style="position:absolute;color: #fff;width: 0px;height:0px;line-height: 0px;border-width: 10px 5px 0;border-style: solid dashed dashed dashed;border-left-color: transparent;border-right-color: transparent;bottom: -9px;right:11%;"></div>
                        <div style="padding: 15px;line-height: 18px;color:#888;font-size:14px;text-align:left">
                          <p style="text-align:center;padding-bottom:10px">拆单费说明</p>
                          您所购买的数量，导致卖家库存仅剩一张。由于演出票品的特殊性，剩下的单张门票将增加销售成本。因此供票卖家要求额外的补偿费用，即“拆单费”。您也可以选择多买一张，避免产生拆单费。
                      </div>
                    </div>

                      <li></li>
                      
                      <li >订单总额：30元</li>
                      <li>实付款:<span style="color: #f2593f;font-weight: bold">0元</span></li>
                      
                      
                  </ul>
               </div>-->
          </div>

    </div>
    </div>
</div></div>

<div id="cancelOrder_component" style="display: none;">
    <div class="pop"></div>
    <div class="pop_cancel">
        <ul class="pop_login_title">
            <span onclick="$('#cancelOrder_component').hide()" class="icon icon-modal-close"></span>
            <i class="icon-c icon-c-unhappy"></i>
        </ul>
        <p style="text-align: center;font-size: 18px;">善良的你，真的要取消这个订单吗?</p>
        <p style=" line-height: 40px;height: 40px;text-align: center;margin-top: 20px;">
            <a id="orderCancel_btn" style=" display: inline-block; width: 150px;  margin: 0 25px;  background-color: #adadad;color: #fff;">残忍取消</a>
            <a onclick="$('#cancelOrder_component').hide()" style="display: inline-block; width: 150px;   margin: 0 25px; background-color: #f2593f;color: #fff;">再看看</a>
        </p>
    </div>
</div>

  
<?php include VIEW_PATH . '/common/login.php'?>

<script type="text/javascript" src="js/common/page.js"></script>
</body>
</html>
