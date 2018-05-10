<?php include VIEW_PATH . "/common/head.php";?>
 
</head>

<body>
<?php include VIEW_PATH . "/common/nav.php";?>    

    <div class="list-page-content" style="background:#fff;">
        <div class="container clearfix clear-aside-border">
        <div class="w1160 fl">
            <div class="sort-order">
                <div class="sort-item-container">
                    <a class="active">所有结果</a>
                </div>

            </div>

               


            <div class="shows-container">
  
 <?php
        if($concert_list){
foreach ($concert_list as $concert) {

?>

    <a class="show-items sa_entrance" target="_blank" href="/content/c?concert=<?php echo $concert['concert_id'];?>" data-sectionname="搜索列表" data-showname="<?php echo $concert['concert_name'];?>" data-showoid="<?php echo $concert['concert_id']?>" data-showtype="1" data-showtypedisplayname="演唱会">
        <div class="show-inner">
            <div class="row-wrapper">
                <div class="show-poster">
                    <img src="<?php echo $concert['concert_img'] ?>" data-src="<?php echo $concert['concert_img'] ?>">
                
                </div>
                <div class="show-detail">
                    <div class="show-name" title="<?php echo $concert['concert_name'];?>">      <?php echo $concert['concert_name'];?>
                    </div>
                    <div class="show-desc"></div>
                    <div class="tags">
                        <span class="tag prebuy">预售</span>
                    </div>
                    <div class="row-wrapper bottom-align">
                        <div class="show-time"><?php echo $concert['concert_time'];?></div>
                        <div class="show-addr"><?php echo $concert['concert_addr'];?></div>
                        <div class="show-price">
                            <?php echo $concert['concert_lower_price'];?><span class="price-unit">元起</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </a>


<?php
}
        } else {
?>


<div class="list_row" style="display:block;padding:0 0 100px 0" > 
    <div style="text-align: center;padding: 10px 0;font-size: 16px;color: #010000"><div class="icon icon-no-data"></div></div> 
</div>
<?php 
 }
?> 
                <div style="display: inline-block;padding-left:100%;">
            </div>
<div class="page-component">
    <ul class="pagination-sm pagination fr">
        
            <li class="pagination-page deactive">
                <div class="icon icon-page-pre"></div>
            </li>

            <li class="pagination-page active"><a pagination="offset=0&amp;length=10">1</a></li>
            <li class="pagination-page deactive">
                <div class="icon icon-page-next"></div>
            </li>
        
    </ul>
</div>
</div> 
        </div>
        </div>
        <?php include VIEW_PATH . '/common/login.php';?>
    </div>



<script type="text/javascript" src="js/common/page.js"></script>
</body>
</html>