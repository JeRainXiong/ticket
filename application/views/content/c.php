<?php include VIEW_PATH . "/common/head.php" ?>
 
</head>

  <body>
<?php include VIEW_PATH . "/common/nav.php" ?>    

<div class="show-detail-page" concert_id = '<?php echo $concert_id?>'>
    <div class="breadcrumb">
        <ul class="container">
            <li><a href="/">首页<span>&gt;</span></a></li>
            <li><a href="/list?type=1">演唱会<span>&gt;</span></a></li>
            <li class="active"><?php echo $concert['concert_name']?></li>
        </ul>
    </div>
    <div class="content-ticket">
        <div class="container">
            <div class="show-container">
                <div class="show-ticket">
                    <div class="show-poster">
                        <a href="<?php echo $concert['concert_img']?>" target="_blank">
                            
                            <div class="discount">
                                <div class="ie9-discount-bg">
                                6.
                                <span class="small-number">1</span>
                                <div class="unit">折起</div>
                                </div>
                            </div>
                            
                            <img class="" src="<?php echo $concert['concert_img']?>" data-src="<?php echo $concert['concert_img']?>" alt="<?php echo $concert['concert_name']?>">
                        </a>
                        <div class="show-count">
                            <i class="icon icon-scan"></i>27530人浏览
                            <i class="icon icon-like"></i><span id="favourNum">193</span>人想看
                        </div>
                    </div>
                    <div class="show-calendar">
                        <div class="show-title">
                                <span class="show-name"><?php echo $concert['concert_name']?></span>
                                <div class="show-tag-container">
                                    
                                    <!-- <div class="show-tag seat-selectable"></div> -->
                                    
                                    <div class="show-tag electric-ticket">电子票</div>
                                <!-- <div class="show-tag coupon"></div> -->

                                </div>
                            </div>
                            <div class="show-info">
                                <?php echo $concert['concert_time']?>&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $concert['concert_addr']?>
                                
                                <span id="js-seatPic-btn" class="view-seats">
                                    <i class="icon icon-seat-icon"></i>
                                    查看座位图
                                </span>
                                
                                
                                
                            </div>
                        
                        <div class="innercontainer">
                            <div class="list-box" id="calendarBox">
                                <h4>
                                    <p>选择日期</p>
                                </h4>
                                <div class="list list-normal">
                                    <div class="datepickerBox" id="datepickerBox">
                                        <div class="control">
                                            <button class="lastyear" style="display: none;">&lt;&lt;</button>
                                            <button class="lastmonth">
                                                &lt;
                                            </button>
                                            <div class="title">
                                                <label class="currentyear"></label>
                                                <label class="currentmonth"></label>
                                            </div>    
                                            <button class="nextmonth">
                                                &gt;
                                            </button>
                                            <button class="nextyear" style="display: none;">&gt;&gt;</button>
                                        </div>
                                        <div class="week">
                                            <ul>
                                                <li class="date-title">
                                                    <label>一</label>
                                                    <label>二</label>
                                                    <label>三</label>
                                                    <label>四</label>
                                                    <label>五</label>
                                                    <label>六</label>
                                                    <label>日</label>
                                                </li>
                                                <li class="dinamicDom">
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="list-box">
                                <h4>
                                    <p>选择场次</p>
                                </h4>
                                <div class="list list-normal" id="session-container">
    
    <ul>
        
        <li>
            <div class="normal-list-item list-one active" data-id="" data-time="<?php echo $concert_time ?>">
                <p><?php echo $concert_time ?></p>
                <!--<i class="icon icon-express-corner"></i>-->
            </div>
        </li>
        
    </ul>
    
</div>
                            </div>
                            <div class="list-box seatPlan">
                                <h4>
                                    <p>选择票面</p>
                                </h4>
                                <div class="list list-normal overflow-visible">
                                    <div class="list list-normal overflow-visible" id="sessionPar-container">
    
    <ul class="seatPlan-txt">
        <?php foreach ($ticket_type_list as $ticket_type) {
            # code...
          ?>
        <li class="relative ">
            
            <div class="ticket normal-list-item list-one" data-id="<?php echo $ticket_type['ticket_type_id']?>" data-price="<?php echo $ticket_type['unit_price']?>">
                
                <span class="price"><?php echo $ticket_type['unit_price']?>票面</span>
                
                <!--<i class="icon icon-express-corner"></i>-->
            </div>
        </li>


        <?php } ?>
    </ul>
    
</div>
                                </div>
                            </div>
                            <div class="list-box">
                                <h4>
                                    <p>选择数量</p>
                                </h4>
                                <div class="book_row_num">
                                    <div class="number-input-wrapper">
                                        <span id="reduce-one">-</span>
                                        <input value="1" class="buy-num" readonly="">
                                        <span id="add-one">+</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="list-box money-row">
                                <h4 class="summation-label">
                                    <p>合计</p>
                                </h4>
                                <div class="list list-normal money">
                                    <span class="red">0</span>
                                    <span class="unit">元</span>
                                    <span id="unit-price" class="unit-price">0元/张</span>
                                </div>
                            </div>
                            <div class="list-box">
                                <div class="">
                                    

                                    
                                    <button class="buyticket-top" id="js-preorder-btn" type="button">立即购票</button>
                                    
                                    
                                </div>
                            </div>
                        </div>                    

                        
                        
                        <div class="ticket-tip-button">
                        
                        
                        
                        </div>
                    </div>
                </div>
                <div class="show-middle"></div>
            </div>
        </div>
    </div>
    
    <div class="content-intro normal">
        <ul class="show_tab">
            <li class="active" data="intro_panel">
                <a href="/content/5a4c96fc908c385cd14ddba5#intro_panel">演出介绍</a>
                <div class="border-line"></div>
            </li>
            <li data="flow_panel">
                <a href="/content/5a4c96fc908c385cd14ddba5#flow_panel">购买流程</a>
                <div class="border-line"></div>
            </li>
            <li data="tips_panel">
                <a href="/content/5a4c96fc908c385cd14ddba5#tips_panel">购票提示</a>
                <div class="border-line"></div>
            </li>
	    </ul>
    	<div class="content">
	        <div class="normal container content-container">
	            <div class="center-content">
	                <div class="intro-main" id="intro_panel">
	                    <div class="intro-main-row">
                            <a name="intro_panel"></a>
	                        <h3 class="intro-main-row-title">演出介绍</h3>
	                        <div class="intro-main-row-txt">
	                            <ul class="content_txt">
	                                <b>传奇哥</b><b>时隔八年，再度归来。</b><br><b>让我们一起来聆听这触动灵魂的音乐解药，共同演绎不一样的传奇。<br><img alt="【上海站】John Legend 2018年中国巡回演唱会" src="https://img2.tking.cn/assets/img/DFs7ASbcnK.jpg" title="Image: https://img2.tking.cn/assets/img/DFs7ASbcnK.jpg"><br></b>2018年3月让我们奏响生活的幸福颂歌，约翰·传奇（John Legend）时隔八年，再度归来，将中国站作为亚洲巡演的首站，可见传奇哥诚意满满，迫不及待将心中的热爱，唱给爱的你听，用声音和坚持为我们的灵魂带来震撼的感动。<b><br><br></b>他的声音有自己独有的魅力，让你身体仿佛瞬间被吸入一个他用乐曲缔造的天堂，音符化作和煦的阳光温暖你的内心，旋律化作婉旭的和风拂过你每一寸肌肤，行走在水面上泛起的涟漪洗净铅华。约翰·传奇（John Legend）一个学者型的灵魂乐歌者，他不仅仅是一名歌手，更是一个布道者，运用其声音独特的魅力把这些陈腔滥调变得很特别。<br><b><img alt="【上海站】John Legend 2018年中国巡回演唱会" src="https://img0.tking.cn/assets/img/2jJEZCeFWK.jpg" title="Image: https://img0.tking.cn/assets/img/2jJEZCeFWK.jpg"><br></b>约翰·传奇是美国知名歌手及音乐制作人，更是一位优秀的钢琴家，在他的歌唱生涯中曾缔造1座艾美奖、1座奥斯卡奖及10座格莱美奖的辉煌纪录，他以充满感性的灵魂唱腔演绎许多脍炙人口的好歌。<br><b><br></b>也许你不知道约翰·传奇，但是你一定认识他的灵魂，一首爱的颂歌《ALL OF ME》风靡全球，用音乐击穿了无数孤单的灵魂，全球热门电影更是邀请传奇用音乐为之润色，包揽了无数奥斯卡获奖项的影片《爱乐之城》邀请传奇参演并演唱了电影插曲《Start A Fire》,迪士尼真人版电影《美女与野兽》也邀请他献唱《Beauty and the Beast》，用声音重新编制我们童年时的美好。
	                            </ul>
	                        </div>
	                    </div>
	                </div>
	                

	            </div>
	            <div class="right-content">
                    <div class="appointment-title">相关演出</div>
                    <div class="appointment">
                        <div class="appoint-list">
                              
                            <div class="appoint-list-row active">
                                <a href="/content/5a40754ac756b15669915f34" target="_blank">
                                    <img src="https://img2.tking.cn/assets/img/XczKeYFPw8.jpg" data-src="https://img2.tking.cn/assets/img/XczKeYFPw8.jpg" alt="【上海站】【万有音乐系】麦斯米兰 “Sea of Silence” 寂静如海 2018巡回演唱会" width="56" height="72">
                                    <span class="appoint-info">
                                        <span class="desc">【上海站】【万有音乐系】麦斯米兰 “Sea of Silence” 寂静如海 2018巡回演唱会</span>
                                        <span class="time">2018.04.18</span>
                                        <span class="addr">上海商城剧院</span>
                                    </span>
                                    <span class="list-icon-placeholder"><i class="icon icon-list-arrow"></i></span>
                                    <span class="show-name">
                                        【上海站】【万有音乐系】麦斯米兰 “Sea of Silence” 寂静如海 2018巡回演唱会
                                    </span>
                                </a>
                            </div>
                              
                            <div class="appoint-list-row active">
                                <a href="/content/59acf9c00cf20a638e2d9a62" target="_blank">
                                    <img src="https://img2.tking.cn/assets/img/H8h3SSZERY.jpg" data-src="https://img2.tking.cn/assets/img/H8h3SSZERY.jpg" alt="【上海站】《不忘初心》——海之花中外红歌演唱会" width="56" height="72">
                                    <span class="appoint-info">
                                        <span class="desc">【上海站】《不忘初心》——海之花中外红歌演唱会</span>
                                        <span class="time">2018.03.03</span>
                                        <span class="addr">人民大舞台</span>
                                    </span>
                                    <span class="list-icon-placeholder"><i class="icon icon-list-arrow"></i></span>
                                    <span class="show-name">
                                        【上海站】《不忘初心》——海之花中外红歌演唱会
                                    </span>
                                </a>
                            </div>
                              
                            <div class="appoint-list-row active">
                                <a href="/content/59acf7ba0cf22a7175a6c841" target="_blank">
                                    <img src="https://img0.tking.cn/assets/img/i6KzHXNMep.jpg" data-src="https://img0.tking.cn/assets/img/i6KzHXNMep.jpg" alt="【上海站】《我心永恒》——海之花影视金曲一起来" width="56" height="72">
                                    <span class="appoint-info">
                                        <span class="desc">【上海站】《我心永恒》——海之花影视金曲一起来</span>
                                        <span class="time">2018.02.18</span>
                                        <span class="addr">人民大舞台</span>
                                    </span>
                                    <span class="list-icon-placeholder"><i class="icon icon-list-arrow"></i></span>
                                    <span class="show-name">
                                        【上海站】《我心永恒》——海之花影视金曲一起来
                                    </span>
                                </a>
                            </div>
                            
                            <!--<div class="appoint-more"><a href="/list">更多 <sup>…</sup></a></div>-->
                        </div>
                    </div>
                </div>
	        </div>
        </div>
    </div>
    <div class="error_tip"></div>
    <div class="seat-component seat-dl" style="display: none">
        <div class="modal-backdrop"></div>
        <div class="modal-dialog">
             <div class="">
                <div>
                    <div class="close_icon icon icon-modal-close">
                        <!--<img src="images/close-c651bdac8f.png" id="js_sitimg">-->
                    </div> 
                    <ul>
                        <img src="/images/seatdownload-876cc0f19a.png" id="js_sitimg">
                    </ul>
                </div>
            </div>
        </div>       
    </div>
    <div class="seat-component seat-pic" style="display: none">
        <div class="modal-backdrop" style="z-index: 0"></div>
        <div class="modal-dialog">
            <div style="max-height:500px;max-width:1000px;">
                <div style="max-height:500px;max-width:1000px;overflow:auto;">
                    <div class="close_icon icon icon-modal-close" style="position:absolute;top:20px;right:20px">
                        
                    </div> 
                    <ul style="border-radius:10px;">
                        <img src="https://img0.tking.cn/assets/img/2DB3Djmd5h.jpg" id="js_sitpicimg" width="100%">
                    </ul>
                </div>
            </div>
        </div>   
    </div>
    </div>
    <?php include VIEW_PATH . "/common/login.php" ?>

    </body>

<script type="text/javascript" src="js/common/page.js"></script>
    </html>