 <?php
/**
 *  @author 熊泽雨

 */
class UserDBModel extends M_Base {

    //conf中db名
    protected $_db = 'tkdb';
    //表名
    protected $_table = 'user_info';
    protected $_pk = 'user_id';

    /**
     *  获取用户列表，返回用户ID
     *  @return array $user_id
     */
    function getUserList(){
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
     *  获取用户信息
     *  @param String $username
     *  @return array $user
     */
    function getUserByUsername($username = ''){

        $whereArray = array('username' => $username);
        $opt = array(
            'fields' => '*',     //字段列表
            'where' => $whereArray,  //where条件
        );
        $table = $this->_table;
        $result = $this->find($opt,$table);
        return $result ? $result[0]:false;

    }
    function getUserByRealname($user_realname = ''){
        $whereArray = array('user_realname' => $user_realname);
        $opt = array(
            'fields' => '*',     //字段列表
            'where' => $whereArray,  //where条件
        );
        $table = $this->_table;
        $result = $this->find($opt,$table);
        return $result ? $result[0]:false;

    }




    /**
     *  添加USER,返回false或者report_id
     *  @param array $user_info
     *  @return bool $result
     */
    function insertUser($user_info){
        $table = $this->_table;
        $result = $this->insert($user_info,$table);
        return $result;
    }
    /**
     *  修改USER,返回false或者report_id
     *  @param array $user_info
     *  @return bool $result
     */
    function updateUser($user_id,$user_info){
        $table = $this->_table;
        $field = $this->_pk;
        // var_dump($user_info);exit;
        $result = $this->update(intval($user_id),$user_info,$field,$table);
        return $result;
    }    
    function getUserById($user_id = ''){
        $table = $this->_table;
        $result = $this->load($user_id,'*',$this->_pk,$table);
        return $result;

    }    
}
