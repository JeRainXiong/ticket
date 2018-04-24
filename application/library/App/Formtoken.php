<?php

/**
 *  csrf攻击防范类
 * 
 */
class App_Formtoken {

    protected static $id = 'df20160608';

    /**
     * factory
     * 
     * @param string $id 表单id值
     * @return App_Formtoken
     */
    public static function init($id = '') {

        $id || ($id = self::$id);

        $regName = "_app_formtoken_{$id}";

        if (Yaf_Registry::has($regName)) {
            return Yaf_Registry::get($regName);
        }

        //没有则实例化        
        $aftInc = new App_Formtoken();
        Yaf_Registry::set($regName, $aftInc);
        return $aftInc;
    }

    /**
     *  返回token的隐藏表单
     * 
     * @param string $postFunc
     * @return string
     */
    public function genTokenInput($postFunc) {

        $postFunc = '/' . trim($postFunc, '/');

        $appName = $this->getAppName();

        $token = md5($postFunc . E_Tools::makeSeq('ft'));

        $this->_getCacheInc()->set(md5($appName . $postFunc), $token, 600);

        echo "<input type=\"hidden\" name=\"form_token\" value=\"{$token}\">";
        return;
    }

    /**
     *  form表单提交后，检测token值
     * 
     * @param array $data 表单数据
     * @return boolean
     */
    public function isFormTokenCorrect($data) {

        $appName = $this->getAppName();
        $postAction = $_SERVER['REQUEST_URI'];
        $cacheKey = md5($appName . $postAction);

        $token = $this->_getCacheInc()->get($cacheKey);
        if (!$token) {
            return TRUE;
        }

        if (!isset($data['form_token']) || ($data['form_token'] != $token)) {
            return FALSE;
        }

        return TRUE;
    }

    /**
     *  根据虚拟主机配置获取当前应用的APP名称
     * 
     * @return string
     */
    public function getAppName() {
        $isAppName = preg_match('#.*?\/(.*?)\/public#i', $_SERVER['DOCUMENT_ROOT'], $appRs);
        return $isAppName ? $appRs[1] : '';
    }

    /**
     *  获取yafext的memcached实例
     * 
     * @param string $regName
     * @return \class
     */
    private function _getCacheInc() {
        $regName = "_e_cache_yafext";

        if (Yaf_Registry::has($regName)) {
            return Yaf_Registry::get($regName);
        }

        //没有则实例化
        $config = Extconfig::$yafextCache;
        $adapter = $config['adapter'];
        $class = 'E_Cache_' . ucfirst($adapter);
        $cache = new $class($config);
        Yaf_Registry::set($regName, $cache);
        return $cache;
    }

}
