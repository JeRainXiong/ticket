<?php
//搜索 控制器
class SearchController extends Ext_Base {

    function init(){

    }
    public function indexAction(){
          $this->redirect(WEB_URL);
    }

    public function sAction(){
        $key_word = $this->getQuery('key_word','');
        $page = intval($this->getQuery('page',1));
        $perpage = intval($this->getQuery('perpage'),10);
        $concert_list = array();
        if($this->isLogin()){
            $this->getView()->assign("user_info", $_SESSION['user_info']);
        }
        if(empty($key_word))
        {
            
        } else{
            $md = new SearchServiceModel();
            $concert_list = $md->searchConcert($key_word);
        }
        $this->getView()->assign("title", '搜索');

        $this->getView()->assign('concert_list',$concert_list);
        //print_r($concert_list);

    }
}
