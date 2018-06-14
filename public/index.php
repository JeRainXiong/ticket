<?php
ini_set("display_errors", "Off");//
error_reporting(E_ALL | E_STRICT);//设置显示的错误
date_default_timezone_set('PRC'); //设置时区
define("APP_PATH", realpath(dirname(__FILE__) . '/../').'/'); /* 指向public的上一级 */

define("STATIC_PATH",  'http://118.89.151.58');
define("WEB_URL",  'http://118.89.151.58');
//define("STATIC_PATH",  'http://ticket.my.com');
//define("WEB_URL",  'http://ticket.my.com');
define("VIEW_PATH",  APP_PATH . "application/views/");
define("LIBRARY_PATH",  APP_PATH . "application/library/");
define("CONCTROLLER_PATH",  APP_PATH . "application/controllers/");

isset($_SESSION) || session_start();
$origin = isset($_SERVER['HTTP_ORIGIN'])? $_SERVER['HTTP_ORIGIN'] : ''; 
    header("Access-Control-Allow-Origin: {$origin}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }
$app = new Yaf_Application(APP_PATH . "/conf/application.ini","product");
$app->bootstrap()->run();