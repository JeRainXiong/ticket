<?php
/**
 *  @author 熊泽雨

 */
class ConcertModel extends M_Base {

    //conf中db名
    protected $_db = 'tkdb';
    //表名
    protected $_table = 'concert';
    protected $_pk = 'concert_id';




    /**
     *  获取订单列表，
     *  @return array $user_id
     */
    function getConcertList(){
        $whereArray = array();
        $opt = array(
            'fields' => "*",     //字段列表
            'where' => $whereArray,  //where条件
            //'concert' => 'add_time ASC',  // 字符串类修  排序字符串 ： add_time DESC,user_id ASC
            //'page' => $inPage,       //第几页
            //'perpage' => $inOffset        //每页多少条
        );
        $table = $this->_table;
        $result = $this->find($opt,$table);
        return $result;


    }
        /**
     *  获取信息
     *  @param String $concert_id
     *  @return array $user
     */
    function getConcertById($concert_id = 0){


        $table = $this->_table;
        $result = $this->load($concert_id,'*','concert_id',$table);
        return $result;

    }
    function insertConcert($concert_detail = array()){
        $table = $this->_table;
        $result = $this->insert($concert_detail,$table);
        return $result;
    }
    function updateConcert($concert_id = 0,$concert_detail = array()){
        $table = $this->_table;
        $field = $this->_pk;
        $result = $this->update($concert_id,$concert_detail,$field,$table);
        return $result;
    }
     function deleteConcert($concert_id){
        $table = $this->_table;
        $field = $this->_pk;
        $result = $this->delete($concert_id,$field,$table);
        return $result;  
    }
}