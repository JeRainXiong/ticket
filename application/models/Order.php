<?php
/**
 *  @author 熊泽雨

 */
class OrderModel extends M_Base {

    //conf中db名
    protected $_db = 'tkdb';
    //表名
    protected $_table = 'order';
    protected $_pk = 'order_id';




    /**
     *  获取订单列表，
     *  @return array $user_id
     */
    function getOrderList($whereArray){
        $whereArray = array();
        $opt = array(
            'fields' => "*",     //字段列表
            'where' => $whereArray,  //where条件
            //'order' => 'add_time ASC',  // 字符串类修  排序字符串 ： add_time DESC,user_id ASC
            //'page' => $inPage,       //第几页
            //'perpage' => $inOffset        //每页多少条
        );
        $table = $this->_user_info_table;
        $result = $this->find($opt,$table);
        return $result;


    }
        /**
     *  获取信息
     *  @param String $order_id
     *  @return array $user
     */
    function getOrderById($order_id = 0){


        $table = $this->_table;
        $result = $this->load($order_id,'*','order_id',$table);
        return $result;

    }
    //返回id
    function insertOrder($order_detail = array()){
        $table = $this->_table;
        $result = $this->insert($order_detail,$table);
        return $result;
    }
    function updateOrder($order_id = 0,$order_detail = array()){
        $table = $this->_table;
        $field = $this->_pk;
        // var_dump($order_id,$order_detail,$field,$table);exit;
        $result = $this->update($order_id,$order_detail,$field,$table);
        return $result;
    }
     function deleteOrder($order_id){
        $table = $this->_table;
        $field = $this->_pk;
        $result = $this->delete($order_id,$field,$table);
        return $result;  
    }
}