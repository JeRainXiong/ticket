<?php include VIEW_PATH . "/common/head.php" ?>

</head>

  <body>
<?php include VIEW_PATH . "/common/nav.php" ?>    

    <!-- 频道区一 -->
    <div class="navbar-channel" id="channel">
        <div class="container">
            <ul>
                <li class="active"><a href="/">首页<div class="border-bottom"></div></a></li>
                <li style="display: inline-block;padding-left:100%;"></li>
            </ul>
        </div>
    </div>
    <div class="homepage-body" >
        <div class="page-section-row">
            <div id="hot-section" class="page-section left-part">
                <div class="page-section-header">
                    <div class="section-name">近期热门</div>
                    <div class="section-operation">
                        <a href="#" target="_blank">查看更多<span class="right-arrow"></span></a>
                    </div>
                </div>
                <div class="section-shows">
                    <?php foreach ($concert_list as $concert) {
                        ?>
                        <a target="_blank" href="/content/c?concert=<?php echo $concert['concert_id']?>" class="section-show sa_recent">
                            <div class="image-holder">
                                <img src="<?php echo $concert['concert_img']?>" alt="<?php echo $concert['concert_name']?>">
                            </div>
                            <div title="<?php echo $concert['concert_name']?>" class="show-detail">
                                <?php echo $concert['concert_name']?>
                            </div>
                            <div class="show-price">
                                <?php echo $concert['concert_lower_price']?>
                                <span class="price-unit">元起</span>
                            </div>
                        </a>
                        <?php
                    } ?>
                </div>
            </div>
            <div class="page-section right-part">
                <div class="page-section-header">
                    <div class="section-name">人气TOP 5</div>
                    <div class="section-operation">
                        <a href="/list?sorting=weight&amp;seq=desc" target="_blank">查看更多<span class="right-arrow"></span></a>
                    </div>
                </div>
                <div class="section-shows">
                    
                    <a target="_blank" href="#" class="sa_hot_click best-show-item first">
                        <div class="show-index">1</div>
                        <div class="image-holder">
                            <img src="/concertimg/1440388888662.jpg" alt="【上海站】上海杂技团《欢乐马戏》">
                        </div>
                        <div class="show-detail">
                            <div title="【上海站】上海杂技团《欢乐马戏》" class="show-name">
                                【上海站】上海杂技团《欢乐马戏》
                            </div>
                            <div class="show-info">
                                2018.03.10 10:00
                            </div>
                            <div class="show-info">
                                上海马戏城-中剧场
                            </div>
                        </div>
                    </a>
                    
                    <a target="_blank" href="#" class="sa_hot_click best-show-item " data-sasectionname="首页人气" data-sashowname="【上海站】上海迪士尼乐园门票" data-sashowoid="574d5df30cf254685b32673e" data-sashowtype="7" data-showtypedisplayname="展览休闲">
                        <div class="show-index">2</div>
                        <div class="image-holder">
                            <img src="#" data-src="#" alt="【上海站】上海迪士尼乐园门票">
                        </div>
                        <div class="show-detail">
                            <div title="【上海站】上海迪士尼乐园门票" class="show-name">
                                【上海站】上海迪士尼乐园门票
                            </div>
                            <div class="show-info">
                                2018.02.28 09:00
                            </div>
                            <div class="show-info">
                                上海迪士尼度假区
                            </div>
                        </div>
                    </a>
                    
                    <a target="_blank" href="#" class="sa_hot_click best-show-item " data-sasectionname="首页人气" data-sashowname="【上海站】2018费玉清演唱会" data-sashowoid="5a348750908c381edea60618" data-sashowtype="1" data-showtypedisplayname="演唱会">
                        <div class="show-index">3</div>
                        <div class="image-holder">
                            <img src="#" data-src="#" alt="【上海站】2018费玉清演唱会">
                        </div>
                        <div class="show-detail">
                            <div title="【上海站】2018费玉清演唱会" class="show-name">
                                【上海站】2018费玉清演唱会
                            </div>
                            <div class="show-info">
                                2018.03.31 19:30
                            </div>
                            <div class="show-info">
                                上海梅赛德斯奔驰文化中心（上海世博文化中心）
                            </div>
                        </div>
                    </a>
                    
                    <a target="_blank" href="#" class="sa_hot_click best-show-item " data-sasectionname="首页人气" data-sashowname="【上海站】2018冰雪王国之爱丽丝梦游仙境" data-sashowoid="5a351d5ac756b14e37db0a2a" data-sashowtype="7" data-showtypedisplayname="展览休闲">
                        <div class="show-index">4</div>
                        <div class="image-holder">
                            <img src="#" data-src="#" alt="【上海站】2018冰雪王国之爱丽丝梦游仙境">
                        </div>
                        <div class="show-detail">
                            <div title="【上海站】2018冰雪王国之爱丽丝梦游仙境" class="show-name">
                                【上海站】2018冰雪王国之爱丽丝梦游仙境
                            </div>
                            <div class="show-info">
                                2018.03.08 10:00
                            </div>
                            <div class="show-info">
                                上海世博庆典广场
                            </div>
                        </div>
                    </a>
                    
                    <a target="_blank" href="#" class="sa_hot_click best-show-item " data-sasectionname="首页人气" data-sashowname="【上海站】世界经典原版音乐剧《猫》CATS" data-sashowoid="5a1d1078a251d83c4d1b9845" data-sashowtype="3" data-showtypedisplayname="话剧歌剧">
                        <div class="show-index">5</div>
                        <div class="image-holder">
                            <img src="#" data-src="#" alt="【上海站】世界经典原版音乐剧《猫》CATS">
                        </div>
                        <div class="show-detail">
                            <div title="【上海站】世界经典原版音乐剧《猫》CATS" class="show-name">
                                【上海站】世界经典原版音乐剧《猫》CATS
                            </div>
                            <div class="show-info">
                                2018.06.07 19:30
                            </div>
                            <div class="show-info">
                                上汽·上海文化广场
                            </div>
                        </div>
                    </a>
                    
                </div>
            </div>
        </div>
        
                </div>
            </div>
            </div>
        </div>

    </div>
   
<?php include VIEW_PATH . "/common/login.php" ?>

<script type="text/javascript" src="js/common/page.js"></script>
</body>
</html>