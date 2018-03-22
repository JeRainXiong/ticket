 <?php
/**
 *  @author 熊泽雨

 */
class UserDBModel extends M_Base {

    //conf中db名
    protected $_db = 'tkdb';
    //表名
    protected $_table = 'user_info';
    protected $pk = 'user_id';

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
     *  获取用户周报,返回所有符合条件的记录，仅返回一条
     *  @param String $user_id
     *  @param int $week_id
     *  @param int $report_id
     *  @param int $count
     *  @return mixed $report
     */
    function getReport($user_id, $week_id, $report_id){
        $whereArray = array();
        is_null($user_id) || $whereArray[$this->_user_info_pk] = $user_id;
        is_null($week_id) || $whereArray[$this->_calendar_pk] = $week_id;
        is_null($report_id) || $whereArray[$this->_report_pk] = $report_id;
        
        $opt = array(
            'fields' => '*',     //字段列表
            'where' => $whereArray,  //where条件
        );
        $table = $this->_report_table;
        $result = $this->find($opt,$table);
        if($result!=false)
            return $result[0];
        else
            return false;
    }

    /**
     *  获取最近的周次，最后一条返回当前周次
     *  @param array $date 日期
     *  @param int $num 获取最近条数，默认5条
     *  @return array $week_id
     */
    function getRecentWeeks($date = array(),$num = 5){
        $sql = "";
        $order = $this->_calendar_pk;
        $table = $this->_calendar_table;
        $where = "year<{$date['year']} OR (year={$date['year']} AND month<{$date['month']}) OR (year={$date['year']} AND month={$date['month']} AND day<={$date['day']})";
        $sql = "SELECT * FROM {$table} 
                WHERE {$where} 
                ORDER BY {$order} 
                DESC LIMIT 0,{$num}";
        $result = $this->sql($sql);
        return $result;        
    }
    /**
     *  获取week，只返回一条
     *  @param int $week_id 
     *  @param int $year 
     *  @param int $month 
     *  @param int $day 
     *  @return mixed $weeks
     */
    function getWeek($week_id, $year, $month, $day){
        $whereArray = array();
        is_null($week_id) || $whereArray[$this->_calendar_pk] = $week_id;
        is_null($year) || $whereArray['year'] = $year;
        is_null($month) || $whereArray['month'] = $month;
        is_null($day) || $whereArray['day'] = $day;          
        $opt = array(
            'fields' => '*',     //字段列表
            'where' => $whereArray,  //where条件
        ); 
        $table = $this->_calendar_table;      
        $result = $this->find($opt,$table); 
        return $result ? $result[0] : false;     

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
     *  删除周报
     *  @param int $report_id
     *  @return bool $result
     */

    function deleteReport($report_id){
        $table = $this->_report_table;
        $field = $this->_report_pk;
        $result = $this->delete($report_id,$field,$table);
        return $result;
    }
    /**
     *  更新周报
     *  @param int $report_id
     *  @param array $report
     *  @return bool $result
     */

    function updateReport($report_id, $report){
        $table = $this->_report_table;
        $field = $this->_report_pk;
        $result = $this->update($report_id,$report,$field,$table);
        return $result;
    }
    /**
     *  通过report_id获取Job
     *  @param int $report_id 
     *  @return array $Jobs
     */
    function getJobByReport($report_id = 0){
        $whereArray = array();
        $whereArray[$this->_report_pk] = $report_id;
        $opt = array(
            'fields' => '*',     //字段列表
            'where' => $whereArray,  //where条件
        ); 
        $table = $this->_job_table;      
        $result = $this->find($opt,$table); 
        return $result;
    }
    /**
     *  添加job
     *  @param array $job
     *  @return bool $result
     */
    function insertJob($job){
        is_int($job['progress']) || $job['progress'] = intval($job['progress']);
        $table = $this->_job_table;
        $result = $this->insert($job,$table);
        return $result;
    }
    /**
     *  删除Job
     *  @param int $job_id
     *  @return bool $result
     */

    function deleteJob($job_id){
        $table = $this->_job_table;
        $field = $this->_job_pk;
        $result = $this->delete($job_id,$field,$table);
        return $result;
    }
    /**
     *  更新job
     *  @param int $job_id
     *  @param array $job
     *  @return bool $result
     */

    function updateJob($job_id, $job){
        $table = $this->_job_table;
        $field = $this->_job_pk;
        is_int($job['progress']) || $job['progress'] = intval($job['progress']);
        $result = $this->update($job_id,$job,$field,$table);
        return $result;
    }


    /**
     *  通过report_id获取plan
     *  @param int $report_id 
     *  @return array $Jobs
     */
    function getPlanByReport($report_id = 0){
        $whereArray = array();
        $whereArray[$this->_report_pk] = $report_id;
        $opt = array(
            'fields' => '*',     //字段列表
            'where' => $whereArray,  //where条件
        ); 

        $table = $this->_plan_table;      
        $result = $this->find($opt,$table); 
        return $result;
    }
    /**
     *  添加plan
     *  @param array $plan
     *  @return bool $result
     */
    function insertPlan($plan){
        $table = $this->_plan_table;
        // is_int($job['progress']) || $job['progress'] = intval($job['progress']);
        $result = $this->insert($plan,$table);
        return $result;
    }
    /**
     *  删除Plan
     *  @param int $plan_id
     *  @return bool $result
     */

    function deletePlan($plan_id){
        $table = $this->_plan_table;
        $field = $this->_plan_pk;
        $result = $this->delete($plan_id,$field,$table);
        return $result;
    }
    /**
     *  更新plan
     *  @param int $plan_id
     *  @param array $plan
     *  @return bool $result
     */

    function updatePlan($plan_id, $plan){//update，没有数据更新则返回false
        $table = $this->_plan_table;
        $field = $this->_plan_pk;
        $result = $this->update($plan_id,$plan,$field,$table);
        return $result;
    }
    function getJobById($job_id){

        $whereArray = array(); 
        $whereArray[$this->_job_pk] = $job_id;
        $opt = array(
            'fields' => '*',     //字段列表
            'where' => $whereArray,  //where条件
        ); 
        $table = $this->_job_table;
        $result = $this->find($opt,$table); 

        return $result?$result[0]:false;
    }
    function getPlanById($plan_id){
        $whereArray = array();
        $whereArray[$this->_plan_pk] = $plan_id;
        $opt = array(
            'fields' => '*',     //字段列表
            'where' => $whereArray,  //where条件
        ); 
        $table = $this->_plan_table;      
        $result = $this->find($opt,$table); 
        return $result?$result[0]:false;
    }


/*    function getOldData(){
        $sql = "SELECT b.user_realname,a.`data`
FROM report a
INNER JOIN user_info b
ON a.user_id = b.user_id
;";
        $sql = "SELECT *
FROM report 
;";
        $result = $this->sql($sql);
        return $result;           
    }*/
    
}
