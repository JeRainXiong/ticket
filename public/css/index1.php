<?php
echo 1111;
ini_set("display_errors", "On");
error_reporting(E_ALL | E_STRICT);
date_default_timezone_set('PRC'); 
define("APP_PATH", realpath(dirname(__FILE__) . '/../')); /* 指向public的上一级 */
define("STATIC_PATH",  'http://ticket.my.com');
// define("STATIC_PATH",  'http://weekly.bmmyou.com');
define("VIEW_PATH",  APP_PATH . "application/views/");
define("CONCTROLLER_PATH",  APP_PATH . "application/views/");

isset($_SESSION) || session_start();

$app = new Yaf_Application(APP_PATH . "/conf/application.ini","develop");
$app->bootstrap()->run();