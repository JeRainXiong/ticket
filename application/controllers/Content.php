<?php
//演唱会内容页面 控制器
class ContentController extends Ext_Base {

    function init(){

    }
    public function indexAction(){
          $this->redirect(WEB_URL);
    }
    public function cAction(){

        
        if($this->isLogin()){
            $this->getView()->assign("user_info", $_SESSION['user_info']);
        }
        $concert_id = $this->getQuery('concert',0);
        $ConcertModel = new ConcertModel();

        if(empty($concert_id))
        {
            $this->redirect(WEB_URL);
        }

        
            $concert = $ConcertModel->getConcertById($concert_id);
            if($concert == false){
                echo '未查询到该演唱会';
                header("refresh:2;url=". WEB_URL);
                exit;
            }
        
        $ticket_type_list = (new TicketModel())->getTicketTypeListByConcert($concert_id);

        $this->getView()->assign("title", $concert['concert_name']);
        $this->getView()->assign('concert_id',$concert_id);
        $this->getView()->assign('concert',$concert);
        $this->getView()->assign('concert_time',$concert['concert_time']);
        $this->getView()->assign('ticket_type_list',$ticket_type_list);
        // print_r($concert);
        // print_r($ticket_type_list);

    }





}
