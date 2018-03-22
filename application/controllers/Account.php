<?php
//账户信息管理 控制器
class AccountController extends Ext_Base {

    protected $_user_info = '';
    protected $_state = [
        '0' =>"待付款",
        '1'=>'已完成',
        '2'=>'已关闭'
        ];
    function init(){
        if(!$this->isLogin()){
            $this->redirect(WEB_URL.'/login');
        }
        $this->_user_info = $_SESSION['user_info'];
    }
    public function indexAction(){
        $this->redirect(WEB_URL);
    }
    //个人信息
    public function myinfoAction(){
    }



    /**
     * 照片上传
     */
    public function uploadPhotoAction(){

    }
    public function orderAction(){
        $state = $this->getQuery('state','4');


        $order_list = (new OrderServiceModel())->getAccountOrders($this->_user_info['user_id'],$state);
        if($order_list){
            $concertModel = new ConcertModel();
            foreach ($order_list as &$order) {
                $concert = $concertModel->getConcertById($order['concert_id']);
                $order['concert']=$concert;
            }
        }
        $this->getView()->assign("title","我的订单");
        $this->getView()->assign("user_info", $this->_user_info);
        $this->getView()->assign("order_list", $order_list);
        $this->getView()->assign('state',$this->_state);
        // var_dump($order_list);
    }
    public function orderdetailAction(){
        $order_id = $this->getQuery('order_id','0');
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
        $ticket_type =(new TicketModel)->getTicketTypeById($order['ticket_type_id']); 
        $concert =(new ConcertModel)->getConcertById($order['concert_id']); 
        if(empty($ticket_type)|| empty($concert)){
            return $this->showMessage('此订单已无法查看');
        }        
        $order['concert'] =  $concert ;
        $order['ticket_type'] =  $ticket_type ;
        $this->getView()->assign("title","订单详情");
        $this->getView()->assign("user_info", $this->_user_info);
        $this->getView()->assign("order", $order);
        $this->getView()->assign('state',$this->_state);
    }    
}
