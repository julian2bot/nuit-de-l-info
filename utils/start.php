<?php
    // session_destroy();
    if(!session_id()){
        session_start();
        session_regenerate_id(true);
    }
    if (! isset($_SESSION["user"])){
        $_SESSION["user"] = [];
        $_SESSION["user"]["score"] = 0;
        $_SESSION["user"]["firstCo"] = true;
    }
?>