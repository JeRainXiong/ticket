<?php
//账户信息管理 控制器
class AccountController extends Ext_Base {

    protected $_user_info = '';
    protected $_state = [
        '0' =>"待付款",
        '1'=>'已完成',
        '2'=>'已关闭'
        ];
    function init(){
        // if(!$this->isLogin()){
        //     $this->showMessage("用户未登录");
        //     $this->forward("Index","index");
        //     return;
        // }
        // $this->_user_info = $_SESSION['user_info'];
    }
    public function indexAction(){
        $this->redirect(WEB_URL);
    }
    //个人信息
    public function myinfoAction(){
    }

 /**
     * 照片上传2
     */
    public function PhotoAjaxAction(){
        $folder = $this->getQuery("folder");
        if(empty($folder))return $this->error('没有文件名');
        $file_input = 'photoaa';
        // var_dump($_FILES);exit;
        if ($_FILES[$file_input]["error"] > 0)
        {
            return $this->error('文件上传错误');
        }
        $filename = $_FILES[$file_input]["name"] ;  
        $allowedExts = array( "jpg",'jpeg');
        $temp = explode(".", $filename);
        // echo $_FILES[$file_input]["size"];
        $extension = end($temp);     // 获取文件后缀名
        if ((
            ($_FILES[$file_input]["type"] == "image/jpeg")
        || ($_FILES[$file_input]["type"] == "image/jpg")
        || ($_FILES[$file_input]["type"] == "image/pjpeg"))
        && ($_FILES[$file_input]["size"] < 1048576)   // 小于1M
        && in_array($extension, $allowedExts))
        {
            $dir = APP_PATH . "public/upload2/{$folder}";
            $file_path = APP_PATH . "public/upload2/{$folder}/{$filename}";
            try {
                if (!file_exists($dir))
                    mkdir ($dir,0777,true);
                move_uploaded_file($_FILES[$file_input]["tmp_name"], $file_path);
            } catch (Exception $e) {
                $this->error('写文件失败');
            }     
            return $this->success('照片上传成功');
        } else {
            return $this->error('格式出错');
        }



    }

    /**
     * 照片上传
     */
    public function uploadPhotoAjaxAction(){
        $file_input = 'confirm_photo';
        // var_dump($_FILES);exit;
        if ($_FILES[$file_input]["error"] > 0)
        {
            return $this->error('文件上传错误');
        }
        $filename = $_FILES[$file_input]["name"] ;  
        $allowedExts = array( "jpg", "png",'jpeg','bmp');
        $temp = explode(".", $filename);
        // echo $_FILES[$file_input]["size"];
        $extension = end($temp);     // 获取文件后缀名
        if ((
            ($_FILES[$file_input]["type"] == "image/jpeg")
        || ($_FILES[$file_input]["type"] == "image/jpg")
        || ($_FILES[$file_input]["type"] == "image/pjpeg")
        || ($_FILES[$file_input]["type"] == "image/x-png")
        || ($_FILES[$file_input]["type"] == "image/png"))
        && ($_FILES[$file_input]["size"] < 10485760)   // 小于 200 kb
        && in_array($extension, $allowedExts))
        {
            $check_code = md5(strval(time()) . $this->_user_info['user_id']);
            $file_path = APP_PATH . 'public/upload/'.$check_code.'.'.$extension;

            if(!empty($this->_user_info['photo_path']))
            {
                file_exists(APP_PATH . 'public'.$this->_user_info['photo_path']) && unlink(APP_PATH . 'public'.$this->_user_info['photo_path']);
            }
            try {
                move_uploaded_file($_FILES[$file_input]["tmp_name"], $file_path);
            } catch (Exception $e) {
                $this->error('写文件失败');
            }
            $photo_url = '/upload/'.$check_code.'.'.$extension;
            $rs = (new UserDBModel)->updateUser($this->_user_info['user_id'],
                ['photo_path'=>$photo_url]);     
            $this->updateSession();       
            return $this->success('照片上传成功',[
                    'photo_url'=>$photo_url
                ]);
        } else {
            return $this->error('格式出错');
        }



    }
    public function orderAction(){
        $state = $this->getQuery('state','4');


        $order_list = (new OrderServiceModel())->getAccountOrders($this->_user_info['user_id'],$state);
        if($order_list){
            $concertModel = new ConcertModel();
            foreach ($order_list as &$order) {
                $concert = $concertModel->getConcertById($order['concert_id']);
                $order['concert']=$concert;
            }
        }
        $this->getView()->assign("title","我的订单");
        $this->getView()->assign("user_info", $this->_user_info);
        $this->getView()->assign("order_list", $order_list);
        $this->getView()->assign('state',$this->_state);
        // var_dump($order_list);
    }
    public function orderdetailAction(){
        $order_id = $this->getQuery('order_id','0');
        if(empty($order_id)){
           return $this->showMessage('无信息',WEB_URL);
        }        
        $order = (new OrderModel)->getOrderById($order_id);
        if(empty($order)){
             return $this->showMessage('未查询该订单');
        }
        if($order['user_id']!= $this->_user_info['user_id']){
            return $this->showMessage('没有权限');
        }
        $ticket_type =(new TicketModel)->getTicketTypeById($order['ticket_type_id']); 
        $concert =(new ConcertModel)->getConcertById($order['concert_id']); 
        if(empty($ticket_type)|| empty($concert)){
            return $this->showMessage('此订单已无法查看');
        }        
        $order['concert'] =  $concert ;
        $order['ticket_type'] =  $ticket_type ;
        $this->getView()->assign("title","订单详情");
        $this->getView()->assign("user_info", $this->_user_info);
        $this->getView()->assign("order", $order);
        $this->getView()->assign('state',$this->_state);
    } 
    function updateSession(){
        $_SESSION['user_info'] = (new UserDBModel)->getUserById($_SESSION['user_info']['user_id']);
    }   
}
