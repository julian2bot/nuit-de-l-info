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

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/style/meteo.css" />
    <link rel="stylesheet" href="./assets/style/style.css">
    <script src="./assets/script/defis.js"></script>
    <script src="//cdn.jsdelivr.net/npm/phaser@3.11.0/dist/phaser.js"></script>
    <title>Nuit de l'info</title>
</head>