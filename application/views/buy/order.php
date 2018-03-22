
<?php include VIEW_PATH . "/common/head.php" ?>
<!-- <link rel="stylesheet" href="/css/main.1f14c5ee.css">
 <link rel="stylesheet" href="/css/user.e90353c2.css"> -->
</head>
<?php include VIEW_PATH . "/common/nav.php" ?>
  <body>

<div style=" min-height:600px; background: #fff;box-shadow: 0 0 6px 0 rgba(0,0,0,0.04);">
  <div class="comfirm w clearfix">
    <div class="w315 fr comfirm-aside">
      <div class="comfirm-aside-inner">
        <div id="comfirm-show-container" concert_id = '<?php echo $concert_id ?>' ticket_type_id = '<?php echo $ticket_type_id ?>'>
    <div class="ticket-main">
        <a href="/content/5a4c96fc908c385cd14ddba5" target="_blank"><img src="https://img0.tking.cn/assets/img/s4hTERzJEX.jpg" alt="【上海站】John Legend 2018年中国巡回演唱会" width="85" height="109"></a>
        <div class="ticket-show-desc">
            <span style="color: #323232;"><?php echo $concert_name?></span>
            
            <br><br><span style="color: #A5A4A5;">本票品由票务销售提供</span>
            
        <div class="certi_icon_box"><div class="ok_icon">&nbsp;</div><i></i> <div class="text" id="show-certificate">资质认证</div></div></div>
    </div>
    <div class="ticket-show-detail" style="position:relative;">
        <div>票面：<span><?php echo $ticket_money?> 元</span></div>
        <div>地点：<span><?php echo $concert_addr?><span></div>
        <div>时间：<span><?php echo $concert_time?></span></div>
        <div>数量：<span>1&nbsp;&nbsp;张</span></div>
        <div class="ticket-circle-left"></div>
        <div class="ticket-circle-right"></div>
    </div>
</div>
        <div class="ticket-price-detail">
          <div id="comfirm-moneyList-container" style="padding-bottom:10px;border-bottom: 1px dashed #eee;">

    
    <div>订单总额：<span class="money-item"><?php echo $total_money?> 元</span></div>
    <!--<div>保障费开关<span class="money-item">开</span></div>-->
</div>
          <div id="comfirm-moneyTotal-container" style="padding-top:10px">
 <div>实付款：<span class="total-money"><?php echo $total_money?> 元</span></div>
</div>
        </div>
      </div>
    </div>
    <div class="w820 fl" style="margin-bottom: 20px;">
      <div class="box-container">
        <div class="box-item">
          <ul id="comfirm-qpfs-container" class="box-item-body qpfs">
    <li class="active " data-disabled="false" data-model="express"><i class="icon-c  icon-c-express-active"></i>&nbsp;&nbsp;电子票</li>
<!--     <li class=" disabled" data-disabled="true" data-model="venue"><i class="icon-c  icon-c-venue"></i>&nbsp;&nbsp;现场取票</li>
<li class=" " data-disabled="false" data-model="onsite"><i class="icon-c  icon-c-onsite"></i>&nbsp;&nbsp;上门自取</li> -->
</ul>
        </div>
        <div id="comfirm-qpfsList-container">   

   
    <div id="onsite" class="taketicket dom_show">
        <div class="box-item clearfix">
            <ul class="box-item-left">
                取票人：<input class="shipment-name placeholder" type="text" placeholder="姓名" name="confirm.shipment.name">
            </ul>
            <ul class="box-item-right">
                手  机：&nbsp;&nbsp;<input class="shipment-telphone placeholder" type="text" placeholder="联系方式" name="confirm.shipment.telphone">
            </ul>
            <ul class="box-item-right">
                身份证：<input class="shipment-idCardNum placeholder" type="text" placeholder="演出需凭身份证购买" name="confirm.idCardNum">
            </ul>
            <ul class="box-item-right">
                照  片：&nbsp;&nbsp;<input class="photoPath" type="file"  name="confirm.photo"  accept="image/png, image/jpeg, image/jpg">
            </ul>            
        </div>       
        <div id="comfirm-qpfsListOnsite-container" class="box-item mt-20">

</div>
    </div>
</div>
        <div id="comfirm-coupons-container" style="padding-left:57px;">
    
    

    
</div>
        
        <div id="comfirm-comments-container">
    
</div>

        <div id="comfirm-comments-agreement" style="text-align:left;padding-left:58px;position:relative;">
            <div style="position:absolute;top:49px;"><span id="agree_check"><i class="icon icon-checkbox-checked"></i></span><span style="padding-left:5px;" id="user_orderAgreement_link">我同意《<a style="text-decoration:underline">第三方商品平台交易服务协议</a>》</span></div>
        </div>
        <div class="box-item">
          <ul class="toPay">
            <li id="comfirm-moneyTotal-buy"> <a class="">小计:<span class="ml-10"><?php echo $total_money?> 元</span>  去结算</a></li>
          </ul>
          
        </div>

      </div>      
    </div>

    <!-- <div class="w820 fl" style="margin-top:20px;"> -->

    </div>
 
  </div>
</div>
<?php include VIEW_PATH . '/common/login.php'?>
<script>

    $('.navbar-list').css('display','none');
</script>

<script type="text/javascript" src="js/common/page.js"></script>
</body>
</html>