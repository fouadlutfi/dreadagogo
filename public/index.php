<?php

$request = $_SERVER['REDIRECT_URL'];

switch ($request) {
    case '/' :
        require 'index.html';
        break;
    case '' :
        require 'index.html';
        break;      
    default:
        require 'index.html';
        break;
}