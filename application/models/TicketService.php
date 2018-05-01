<?php
/**
 *  @author 熊泽雨

 */
class TicketServiceModel{

/**
 *       
 */
    function creatTicket(&$ticket = array()){
        //插入票信息
        //生成电子二维码
        if(empty($ticket))return false;
        $ticketModel = new TicketModel;
        $ticket_id = ($ticketModel)->insertTicket($ticket);
        if($ticket_id)
            $ticket['ticket_id'] = $ticket_id;
        else
            return false;

        if(!$this->creatTicketCode($ticket))
            return false;

        return $ticket_id;

    }
    function creatTicketCode(&$ticket = array()){
        if(!isset($ticket['ticket_id']))return false;

        $ticket['check_code'] = $this->getCheckCode($ticket);
        $ticket['qr_code'] = $this->makeQRcode($ticket);
        $change = [
            'check_code'=> $ticket['check_code'],
            'qr_code'=>$ticket['qr_code']
        ];
        $result = (new TicketModel)->updateTicket($ticket['ticket_id'],$change);
        return $result;

    }
    //采用md5判断数据是否完整
    function getCheckCode($ticket = array()){
        if(empty($ticket))return '';
        $str = /*$ticket['order_id'].
                $ticket['seat_id'].
                $ticket['ticket_type_id'].
                $ticket['concert_id'].
                $ticket['user_id'].*/
                $ticket['realname'].
                $ticket['id_card'].
                $ticket['seat_id'].
                $ticket['concert_name'].
                $ticket['photo_path']
                ;
        return md5($str);
    }


/**
 * 
 */
    function getTicket($order_id = 0){

    }

   //存在服务器中，返回Url 
    function makeQRcode($ticket = array()){
        if(empty($ticket))return '';

        require_once LIBRARY_PATH.'phpqrcode.php';  
        $check_code = $ticket['check_code'];
        unset($ticket['check_code']);
        unset($ticket['qr_code']);
        unset($ticket['ticket_token']);
        //以下测试
        unset($ticket['ticket_type_id']);
        unset($ticket['order_id']);
        unset($ticket['concert_id']);
        unset($ticket['concert_time']);
        unset($ticket['concert_addr']);
        unset($ticket['creat_time']);
        unset($ticket['user_id']);
        unset($ticket['ticket_id']);

        $value = json_encode($ticket);                  //二维码内容  
          
        $errorCorrectionLevel = 'L';    //容错级别   
        $matrixPointSize = 5;           //生成图片大小    
          
        //生成二维码图片  
        $filename = APP_PATH . 'qrpng/'.$check_code.'.png';  
        $QR = QRcode::png($value,$filename , $errorCorrectionLevel, $matrixPointSize, 2);    
        // var_dump($QR);exit;
        return $filename;  
    }    

/**
 * 返回静态座位信息seat
 */    
    function getRandomSeat($concert_id = 0,$seat_level=0){
        if(empty($concert_id)) return false;
        $md = new TicketModel();
        $condition = empty($seat_level) ? []:['seat_level'=>$seat_level];
        $seat_static_list = $md->getSeatStaticList($condition);
        if(empty($seat_static_list)) return false;
        
        $condition['concert_id']=$concert_id;
        $condition['seat_state']=1;
        $seat_list = $md->getSeatList($condition);
        if(!empty($seat_list))
            foreach ($seat_list as $value) {
                    $id = $value['seat_id'];
                    unset($seat_static_list[(int)$id]);                    
            }
        return empty($seat_static_list) ? false:$seat_static_list[array_rand($seat_static_list)];

    }    
}
