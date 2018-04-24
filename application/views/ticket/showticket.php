<?php include VIEW_PATH . "/common/head.php" ?>
    <script src="/js/html2canvas.min.js"></script>
    <style type="text/css">
    div{
        width: 100%;
        height: 500px;
        text-align:left;    
    }
  .showticket{
    width:1000px;
    height: 300px;
    margin:auto;
    padding: 20px ;
    text-align:center;
  }
  .ticket_right{
    width:250px;
    float: left
  }
    .ticket_mid{
        width:500px;
        float: left;
  }
    .ticket_left{
        width:170px;
        height: 250px;
    float: left;
  }
</style>
</head>
<body>
    <div>
        <div class='showticket' id = 'capture'>
            <div class = "ticket_left">
                <img src="<?php echo $concert['concert_img']; ?>" alt="票" width="170px" height="250px">
            </div>  
            <div class = "ticket_mid">
                <ul class="order_show_info">
                <li><span class="order_detailinfo_color">演唱会：<?php echo $ticket['concert_name'];?></span></li>

                <li>时间：<?php echo $ticket['concert_time'];?></li>
                <li>场馆：<?php echo $ticket['concert_addr'];?></li>
                <li>座位号：<?php echo $ticket['seat_id'];?> </li>
                </ul>
            </div>                      
            <div class = "ticket_right">
                 <img src="data:image/png;base64,<?php echo $png_base64; ?>" alt="票" width="250px" height="250px">
            </div>
        </div>
        <a id='print' class="btn" href="javascript:;">打印电子票</a>
    </div>
    
    
</body>
<script type="text/javascript">
 $(function() {
     $("#print").click(function() {
         html2canvas(document.querySelector("#capture")).then(canvas => {
             // document.body.appendChild(canvas)
             //var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url  
             let imgUri = canvas.toDataURL("image/png");
             saveFile('电子票.png', imgUri);
             //window.open(imgUri); // 下载图片  
         });
     });

     function saveFile(filename, data) {
         var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
         save_link.href = data;
         save_link.download = filename;

         var event = document.createEvent('MouseEvents');
         event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, );
         save_link.dispatchEvent(event);
     };


 });
</script>
</html>