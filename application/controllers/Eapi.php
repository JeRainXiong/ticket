<?php
class EapiController extends Ext_Base {

     /**
     * 桌面端预留接口
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
}