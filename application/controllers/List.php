<?php
//列表控制器
class ListController extends Ext_Base {

    function init(){

    }
    public function indexAction(){
          $this->redirect(WEB_URL);
    }
    public function lAction(){
        $sorting = $this->getQuery('sorting','time');
        $seq = $this->getQuery('seq','desc');
        $page = intval($this->getQuery('page',1));
        $perpage = intval($this->getQuery('perpage'),10);
        $concert_list = array();
        if($this->isLogin()){
            $this->getView()->assign("user_info", $_SESSION['user_info']);
        }

        $seq = (strpos(strtoupper($seq), 'ASC'))? "ASC" :"DESC";
        $md = new SearchServiceModel();    
        if(empty($sorting)){

        }else if($sorting =="time"){
             $concert_list = $md->getConcertList("concert_time",$seq);
        }
        
        
       

        $this->getView()->assign("title", '演唱会列表');

        $this->getView()->assign('concert_list',$concert_list);
        //print_r($concert_list);

    }
}
