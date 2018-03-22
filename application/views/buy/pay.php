

<?php include VIEW_PATH . "/common/head.php" ?>
<!-- <link rel="stylesheet" href="/css/main.1f14c5ee.css">
 <link rel="stylesheet" href="/css/user.e90353c2.css"> -->
</head>
<?php include VIEW_PATH . "/common/nav.php" ?>
  <body>
<div style="min-height: 600px;background-color: #F4F5F9 ;padding-top:30px">
  <div class="page_pay container">
    <div class="pay-order box">
      <div class="box-left fl">
        <div class="pic">
          <i class="icon icon-order-success"></i>
        </div>
      </div>
      <div class="box-main">
        <div class="box-main-top" id="pay-top-container">
    <div class="box-main-top-right fr">
        <p class="money">应付总金额：<span class="num"><?php echo $total_money;?></span><span>元</span></p>
    </div>
    <div class="box-main-top-left ">
        <h3>订单提交成功！去付款咯~</h3>
        <p class="mt-30"><span>收货信息：</span><span class="mr-10"><?php echo $name;?></span>
            <span class="mr-10"><?php echo $tel;?></span>&nbsp;
            <span class="mr-10"></span>
            <span class="mr-10"></span>
        </p>
    </div>
</div>
        <div class="box-main-bot" id="pay-middle-container">
    

    <div class="box-main-bot-left">
        <h3>订单详情</h3>
        <p class="box-content-text mt-10">订单号：<span><?php echo $order_id;?></span></p>
        <p class="box-content-text">票品信息： <span><?php echo $concert_name;?></span></p>
        <p class="box-content-text">演出场次：<span><?php echo $concert_time;?></span></p>
        <p class="box-content-text">票面价格：<span><?php echo $ticket_price;?></span></p>
        <p class="box-content-text">数量：<span>1</span>&nbsp;张</p>
    </div>
</div>
      </div>
    </div>

    <div class="pay-money">
      <div class="title">请选择支付方式</div>
      <div class="box-main">
        <ul class="clearfix">
          <li class="pay-money-img" id="js_zfblink"><a class="icon icon-pay-alibaba" target="_blank" href="<?php echo $pay_url;?>"></a></li>
        </ul>
      </div>
    </div>


 
  </div>
</div>

<?php include VIEW_PATH . "/common/login.php" ?>
<script>

    $('.navbar-list').css('display','none');
</script>

<script type="text/javascript" src="js/common/page.js"></script>
  <body>
</body>
</html>