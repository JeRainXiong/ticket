<?php
//账户信息管理 控制器
class TicketController extends Ext_Base {

    protected $_user_info = '';

    function init(){
        if(!$this->isLogin()){
            $this->showMessage("用户未登录");
            $this->forward("Index","index");
            return;
        }
        $this->_user_info = $_SESSION['user_info'];
    }
    public function indexAction(){
        $this->redirect(WEB_URL);
    }
    public function showTicketAction(){

        $ticket_id = $this->getQuery('ticket_id');
        if(empty($ticket_id)){
            return $this->showMessage('暂未出票');
        }        
        $ticket = (new TicketModel)->getTicketById($ticket_id);
        if(empty($ticket)){
            return $this->showMessage('非法请求2');
        }          
        if($ticket['user_id']!= $this->_user_info['user_id']){
            return $this->showMessage('没有权限');
        }
        if(empty($ticket['qr_code'])||empty($ticket['check_code'])){
            $result = (new TicketServiceModel)->creatTicketCode($ticket);
            if(!$result)
                return $this->showMessage('出票失败');
        }         
        $png_string = file_get_contents($ticket['qr_code']);
        $png_base64 = base64_encode($png_string);
        // getPost('order_id');
        $concert = (new ConcertModel)->getConcertById($ticket['concert_id']);

        //出票页面,根据订单号和票号，打印
        
        $this->getView()->assign("title", "出票");
        $this->getView()->assign("png_base64", $png_base64);
        $this->getView()->assign("ticket", $ticket);
        $this->getView()->assign("concert", $concert);

    }
}
