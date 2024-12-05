<?php
    function getJson(string $file):array{
        $file = file_get_contents($file);
        return json_decode($file,true);
    }

    function getDefis(string $file):array{
        return getJson($file);
    }
?>