<?php
/**
 *  @author 熊泽雨

 */
class OrderServiceModel{
/**
 * 创建订单,
 */
    function creatOrder(&$order_detail){
        $seat_rand = (new TicketServiceModel)->getRandomSeat($order_detail['concert_id'],$order_detail['seat_level']);
        // var_dump($seat_rand);
        if(empty($seat_rand)){
            return false;
        }
        $ticketModel = new TicketModel;   
        $seat = ($ticketModel)->getSeatList([
            'concert_id'=>$order_detail['concert_id'],
            'seat_static_id' => $seat_rand['seat_static_id']
        ]);
        //查询有无此条记录
        if(!empty($seat)){//修改
            $seat = $seat[0];
            $r = $ticketModel->update($seat['seat_id'],['seat_state'=>1],'seat_id','seat');
            if(empty($r)) return false;
        }else{//插入
            $seat = [
                'concert_id' => $order_detail['concert_id'],
                'seat_static_id' => $seat_rand['seat_static_id'],
                'seat_level' => $seat_rand['seat_level'],
                'seat_state' => 1
            ];
            $r = $ticketModel->insert($seat,'seat');
            if(empty($r)) return false;
            $seat['seat_id'] =$r;
        }
        
        $order_detail['seat_id'] = $seat['seat_id'];
        // $r = $ticketModel->update($order_detail['ticket_type_id'],['rest_num' => 'rest_num -1'],'ticket_type_id','ticket_type');
        $sqlstr= "UPDATE `ticket_type` SET rest_num = rest_num-1 WHERE ticket_type_id = {$order_detail['ticket_type_id']}";
        $r = $ticketModel->sql($sqlstr);
        if(empty($r)) return false;

        //创建线程15分钟删除 并恢复信息
        return ((new OrderModel())->insertOrder($order_detail));
    }
/**
 * 获取订单信息
 */
    function getOrder($order_id = 0){
        return (new OrderModel)->getOrderById($order_id);
    }
/**
 * 取消订单
 * 包括恢复座位信息
 */
    function cancelOrder($order_id = 0,$time = ''){
        if(empty($order_id))return false;
        $orderModel = new OrderModel();
        $order = ($orderModel)->getOrderById($order_id);
        if(empty($order)) return false;

        $ticketModel = new TicketModel;
        $r = $ticketModel->update($order['seat_id'],['seat_state'=>0],'seat_id','seat');  
        if(empty($r)) return false;
        // $r = $ticketModel->update($order['ticket_type_id'],['rest_mum' => 'rest_num -1'],'ticket_type_id','ticket_type');
        $sqlstr= "UPDATE `ticket_type` SET rest_num = rest_num+1 WHERE ticket_type_id = {$order_detail['ticket_type_id']}";
        $r = $ticketModel->sql($sqlstr);        
        if(empty($r)) return false;
        $order_change =[
            'order_state' => 2,
            'finish_time' => $time
        ];
        return ($orderModel)->updateOrder($order_id,$order_change);            
    }
/**
 * 完成订单
 */
    function finishOrder($order_id = 0,$time = '',$ticket_id=0){
        if(empty($order_id))return false;
        $order =[
            'order_state' => 1,
            'payment_state' => 1,
            'finish_time' => $time,
            'ticket_id' => $ticket_id,
        ];
        return ((new OrderModel())->updateOrder($order_id,$order));
    }
/**
 * 获取用户订单
 * $order_state,4表示全部
 */    
    function getAccountOrders($user_id = 0,$order_state = 4,$page = 1,$perpage = 10){
        if(empty($user_id ))return false;
        $table = 'order';

        $where = [
            'user_id'=>$user_id,
        ];
        if($order_state!=4)
            $where['order_state'] = $order_state;


        $opt = [
             'fields' => "*",     //字段列表
            'where' => $where,
            'page' => $page,       //第几页
            'perpage' => $perpage,        //每页多少条
            'order'=>'order_id DESC'         
        ];        
        return (new OrderModel())->find($opt,$table);

    }

}
