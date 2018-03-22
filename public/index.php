<?php
ini_set("display_errors", "On");
error_reporting(E_ALL | E_STRICT);
date_default_timezone_set('PRC'); 
define("APP_PATH", realpath(dirname(__FILE__) . '/../').'/'); /* 指向public的上一级 */

define("STATIC_PATH",  'http://ticket.my.com');
define("WEB_URL",  'http://ticket.my.com');
define("VIEW_PATH",  APP_PATH . "application/views/");
define("LIBRARY_PATH",  APP_PATH . "application/library/");
define("CONCTROLLER_PATH",  APP_PATH . "application/controllers/");

isset($_SESSION) || session_start();

$app = new Yaf_Application(APP_PATH . "/conf/application.ini","develop");
$app->bootstrap()->run();