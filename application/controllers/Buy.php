
<?php
//购票页面

class BuyController extends Ext_Base {

    protected $_user_info = '';
    protected  $_rd = 321654692;//随机的加密

    function init(){
        if(!$this->isLogin()){
            $this->redirect(WEB_URL);
        }
        $this->_user_info = $_SESSION['user_info'];
    }
    public function indexAction(){
        $this->redirect(WEB_URL);
    }
    
    public function orderAction(){

        $concert_id = $this->getQuery('concert_id',0);
        $ticket_type_id = $this->getQuery('ticket_type_id',0);

        if(empty($concert_id)||empty($ticket_type_id))
        {
            $this->redirect(WEB_URL);
        }
        $concert_name = '';
        $total_money = 0.00;
        $ticket_money = 0.00;
        $concert_addr = '';
        $concert_time = '';
        $ConcertModel = new ConcertModel();
        
        $concert = $ConcertModel->getConcertById($concert_id);
        if($concert == false){
            return $this->showMessage('未查询到该演唱会');
        }
    
        $ticket_type = (new TicketModel())->getTicketTypeById($ticket_type_id);
        if($ticket_type == false){
            return $this->showMessage('未查询到该票');
        }
        $ticket_money = $ticket_type['unit_price'];
        $total_money = number_format($ticket_money,2);

        $this->getView()->assign("concert",$concert);
        $this->getView()->assign("title", "订单填写");
        $this->getView()->assign("concert_name", $concert['concert_name']);
        $this->getView()->assign("ticket_money", $ticket_money);
        $this->getView()->assign("total_money", $total_money);
        $this->getView()->assign("concert_addr", $concert['concert_addr']);
        $this->getView()->assign("concert_time", $concert['concert_time']);
        $this->getView()->assign("user_info", $this->_user_info);
        $this->getView()->assign("concert_id", $concert_id);
        $this->getView()->assign("ticket_type_id", $ticket_type_id);
    }

    public function makeOrderAction(){//这里也需要TOKEN存在Session，防止多次点击
        //Yaf_Dispatcher::getInstance()->disableView();

        $concert_id = $this->getPost('concert_id');
        $ticket_type_id = $this->getPost('ticket_type_id');
        $name =  $this->getPost('name');
        $tel = $this->getPost('tel');
        $id_card = $this->getPost('id_card');
        $photo_path = $this->getPost('photo_path','');
        if(!($concert_id&&$ticket_type_id&& $name&&$tel&&$id_card)){
            return $this->error("参数不全",2001,[]);
        }
        //不同票价
        $param=[
            'concert_id' =>$concert_id,
            'ticket_type_id'=>$ticket_type_id ,
            'name'=>$name,
            'tel'=>$tel,
            'id_card'=>$id_card
        ];
        //判断有无此票
        $ticket_type = (new TicketModel())->getTicketTypeById($ticket_type_id);
        if($ticket_type == false){
            return $this->error("无此票",2001,[]);
        }
        //判断余票
        if($ticket_type['rest_num'] <= 0){
            return $this->error("余票不足",2002,[]);
        }
        //生成座位

        //计算总价
        $total_money = $ticket_type['unit_price'];        
        //获取当前时间
        $creat_time = time();
       // $token = md5(toString($creat_time));
        $order = [
            'user_id'=> (int)$this->_user_info['user_id'],
            'concert_id'=> (int)$concert_id,
            'ticket_type_id'=>(int)$ticket_type_id,
            'ticket_id'=>0,
            'seat_id'=>0,
            'seat_level' => (int)$ticket_type['seat_level'],         
            'realname'=>$name,
            'id_card'=>$id_card,
            'tel'=>$tel,
            'photo_path'=>$photo_path,
            'payment_state'=> 0,
            'amount' =>(float)$total_money,
            'creat_time'=>date("Y-m-d H:i:s",$creat_time),
            'finish_time' => "1970-01-01 00:00:00",
            'order_state'=>0,
            // 'order_token' => $token

        ];

        $order_id = (new OrderServiceModel)->creatOrder($order);
        // var_dump( $order );exit;
        if($order_id){
            $this->success("创建订单成功",[
                'order_id'=>$order_id,
                'user_id'=>$order['user_id'],
                'amount'=>$order['amount'],
                'redirectURL'=>'/buy/pay?order_id='.$order_id
            ],2000);
        }else{
             $this->error("创建失败",2010,[]);
        }


    }
    public function payAction(){

        $order_id = $this->getQuery('order_id',0);
        if(empty($order_id)){
           return $this->showMessage('无信息',WEB_URL);
        }
        $order = (new OrderModel)->getOrderById($order_id);
        if(empty($order)){
             return $this->showMessage('未查询该订单');
        }
        if($order['user_id']!= $this->_user_info['user_id']){
            return $this->showMessage('没有权限');
        }
        if((int)$order['order_state']===1){
            return $this->showMessage('此订单已经成功付款！','/');
        }     
        if((int)$order['order_state']===2){
            return $this->showMessage('此订单已关闭','/');
        }               
        $ticket_type =(new TicketModel)->getTicketTypeById($order['ticket_type_id']);
        // echo '付款页面';
        // var_dump($order);
        //$this->success('付款成功',$param);
        $order['order_token'] = md5(strval(rand(1,98511)+$this->_rd));
        $order['order_token_time'] = time();
        $_SESSION['order_list'][$order_id] = $order;
   

        $pay_url = '/buy/dopay?order_id='.$order['order_id'].'&token='.$order['order_token'];
        $this->getView()->assign("user_info", $this->_user_info);
        $this->getView()->assign("title", '付款');
        $this->getView()->assign("total_money",$order['amount']);
        $this->getView()->assign("name",$order['realname']);
        $this->getView()->assign("tel",$order['tel']);
        $this->getView()->assign("order_id",$order['order_id']);
        $this->getView()->assign("concert_name",$ticket_type['concert_name']);
        $this->getView()->assign("concert_time",$ticket_type['concert_time']);
        $this->getView()->assign("ticket_price",$ticket_type['unit_price']);
        $this->getView()->assign("pay_url",$pay_url);
        //付款页面
        //展示订单
        //$this->getView()->assign("title", "网络购票系统");


    }
    public function doPayAction(){

        $order_id = $this->getQuery('order_id','');
        $order_token = $this->getQuery('token');
        if(empty($order_id)||empty($order_token)){
            return $this->showMessage('非法请求');
        }

        if(!isset($_SESSION['order_list'][$order_id])){
            return $this->showMessage('非法请求2');
        }
        $order = $_SESSION['order_list'][$order_id];
        if($order['user_id']!= $this->_user_info['user_id']){
            return $this->showMessage('没有权限');
        }        
     
        if(strcmp($order['order_token'],$order_token)!=0){
            return $this->showMessage('非法请求3');
        }
        if(time()>$order['order_token_time']+ 300 ){//token5分钟内没有支付
            return $this->showMessage('付款链接超时');
        }
        if((int)$order['order_state']===1){
            return $this->showMessage('此订单已经成功付款！','/');
        }     
        if((int)$order['order_state']===2){
            return $this->showMessage('此订单已关闭','/');
        }            
        //假设付款function
        //更新订单状态


        $concert =(new ConcertModel)->getConcertById($order['concert_id']);
        //生成票model ,包括生成二维码
        //生成二维码model

        $ticket = [
            'order_id' =>$order_id,
            'seat_id' =>$order['seat_id'],
            'ticket_type_id' => $order['ticket_type_id'],
            'concert_id' => $order['concert_id'],
            'concert_name' => $concert['concert_name'],
            'concert_time' => $concert['concert_time'],
            'user_id' =>$order['user_id'],
            'id_card' => $order['id_card'],
            'realname' => $order['realname'],
            'photo_path' => $order['photo_path'],
            'creat_time' => date("Y-m-d H:i:s",time()),
            'check_code' => '',
            'qr_code' =>'',
            'ticket_token' => ''
        ];
        $ticket_id = (new TicketServiceModel)->creatTicket($ticket);
        if(empty($ticket_id)){
            return $this->showMessage('出票失败','/');
        }
        $result = (new OrderServiceModel)->finishOrder($order_id,date("Y-m-d H:i:s",time()),$ticket_id);
        unset($_SESSION['order_list'][$order_id]);
       
        // $ticket['ticket_token'] = md5(strval(rand(1,98511)+$this->_rd));
        // $ticket['ticket_token_time'] = time();
        // $_SESSION['ticket_list'][$ticket_id] = $ticket;

        $ticket_url = '/ticket/showticket?ticket_id='.$ticket_id;
        $this->showMessage('付款成功，5秒后跳转至出票页面',$ticket_url,5);


    }

}
