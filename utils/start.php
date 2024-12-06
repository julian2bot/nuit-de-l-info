<?php
    if(!session_id()){
        session_start();
        // session_destroy();
        session_regenerate_id(true);
    }
    if (! isset($_SESSION["user"])){
        $_SESSION["user"] = [];
        $_SESSION["user"]["score"] = 0;
    }
?>