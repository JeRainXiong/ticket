<?php
/**
 * 注册控制器
 * Class LoginController
 */
class RegisterController extends Ext_Base{




    public function doRegisterAction(){
        $md = new UserDBModel();
        $username = $this->getPost('username');
        $password = $this->getPost('password');
        $realname = $this->getPost('realname','');
        $idCard   = $this->getPost('idCard','');
        $tel      = $this->getPost('tel','');
        if(empty($username) || empty($password)){
            return $this->error('用户名或密码为空！',2001);
        }
        $user_info = [
            'username'=>$username,
            'password'=>$password,
            'user_realname'=>$realname,
            'user_id_card'=>$idCard,   
            'tel'=>$tel      
        ];
        if($md->getUserByUsername($username))
        {
            return $this->error('用户名已存在',2002);
        }
        $result = $md->insertUser($user_info);
        // var_dump($user_info);exit;
        if($result)
        {
            $user_info['user_id'] = $md->getUserByUsername($username)['user_id'];
            $_SESSION['user_info']= $user_info;

            $this->success('注册成功！', 
                            ['username'=>$username,
                            'user_id'=>$user_info['user_id']
                            ],
                            2000
            );
            
        } else {
           $this->error('与服务器连接超时',2003);
        }

           
        

    }

}
