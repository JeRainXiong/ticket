<?php

class IndexController extends Ext_Base {

/**
 *  默认执行的方法
 */
    public function indexAction() {
        if($this->isLogin()){
            $this->getView()->assign("user_info", $_SESSION['user_info']);
        }
        $ConcertModel = new ConcertModel();
        $concert_list = $ConcertModel->getConcertList();
        //var_dump($concert_list);
        $this->getView()->assign("concert_list",$concert_list);
        $this->getView()->assign("title", "学霸蟹票务");

    }


}
