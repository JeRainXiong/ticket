<?php
/**
 * 登录控制器
 * Class LoginController
 */
class LoginController extends Ext_Base{

/**
 * 登陆页面
 */
     public function indexAction(){
            $this->redirect(WEB_URL);
     }


    public function doLoginAction(){
        $md = new UserDBModel();
        $username = $this->getPost('username');
        $password = $this->getPost('password');
        $msg = array(
            'code'=>'',
            'msg'=>'',
            'data'=>array()
            );
        // var_dump($username,$password);
        if(empty($username) || empty($password)){
            return $this->error('用户名或密码为空！',2001);

        }
        $user_info = $md->getUserByUsername($username);
        // var_dump($user_info);exit;
        if(strcmp(($user_info['password']),$password)==0)
        {
            $_SESSION['user_info']= $user_info;

            $this->success('登陆成功！', 
                            ['username'=>$username,
                            'user_id'=>$user_info['user_id']
                            ],
                            2000
            );
            
        } else {
           $this->error('用户名和密码不匹配',2002);
        }

           
        

    }
/**
 * 注销
 */
    public function doLogoutAction(){
        if(isset($_SESSION['user_info'])){
            unset($_SESSION['user_info']);
            $this->success('注销成功',[],2000);
        }
    }
}
