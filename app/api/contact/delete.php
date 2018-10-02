<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../objects/product.php';

$database = new Database();
$db = $database->getConnection();

$contact - new Contact($db);

$data = json_decode(file_get_contents("php://input"));

$contact->id = $data->id;

if ($contact->delete()) {
    echo '{';
        echo '"message": "Contact was deleted."';
    echo '}';
}

else {
    echo '{';
        echo '"message": "Unable to delete contact."';
    echo '}';
}

?>