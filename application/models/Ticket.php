<?php
/**出票DB
 *  @author 熊泽雨

 */
class TicketModel extends M_Base {

    //conf中db名
    protected $_db = 'tkdb';
    //表名
    protected $_table = 'ticket';
    protected $_pk = 'ticket_id';

    /**
     *  获取列表，
     *  @return array $user_id
     */
    function getTicketList(){
        $whereArray = array();
        $opt = array(
            'fields' => "*",     //字段列表
            'where' => $whereArray,  //where条件
            //'order' => 'add_time ASC',  // 字符串类修  排序字符串 ： add_time DESC,user_id ASC
            //'page' => $inPage,       //第几页
            //'perpage' => $inOffset        //每页多少条
        );
        $table = $this->_table;
        $result = $this->find($opt,$table);
        return $result;


    }
        /**
     *  获取信息
     *  @param String $username
     *  @return array $user
     */
    function getTicketById($ticket_id = 0){


        $table = $this->_table;
        $result = $this->load($ticket_id,'*','ticket_id',$table);
        return $result;

    }
    function insertTicket($ticket_detail = array()){
        $table = $this->_table;
        $result = $this->insert($ticket_detail,$table);
        return $result;
    }
    function updateTicket($ticket_id= 0,$ticket_detail = array()){
        $table = $this->_table;
        $field = $this->_pk;
        $result = $this->update($ticket_id,$ticket_detail,$field,$table);
        return $result;
    }
     function deleteTicket($ticket_id){
        $table = $this->_table;
        $field = $this->_pk;
        $result = $this->delete($ticket_id,$field,$table);
        return $result;  
    }

    function getTicketTypeById($ticket_type_id = 0)
    {

        $table = 'ticket_type';
        $result = $this->load($ticket_type_id,'*','ticket_type_id',$table);
        return $result;

    }
    function getTicketTypeListByConcert($concert_id = 0)
    {
        $whereArray = array(
            'concert_id'=>$concert_id
        );
        $opt = array(
            'fields' => "*",     //字段列表
            'where' => $whereArray,  //where条件
            //'order' => 'add_time ASC',  // 字符串类修  排序字符串 ： add_time DESC,user_id ASC
            //'page' => $inPage,       //第几页
            //'perpage' => $inOffset        //每页多少条
        );
        $table = 'ticket_type';
        $result = $this->find($opt,$table);
        return $result;

    }
    function getSeatStaticList($whereArray = array()){
       /* $whereArray = array(
        );*/
        $opt = array(
            'fields' => "*",     //字段列表
            'where' => $whereArray,  //where条件
        );
        $table = 'seat_static';
        $result = $this->find($opt,$table);
        return $result;

    }
    function getSeatList($whereArray = array()){
        $opt = array(
            'fields' => "*",     //字段列表
            'where' => $whereArray,  //where条件
        );
        $table = 'seat';
        $result = $this->find($opt,$table);
        return $result;

    }

}