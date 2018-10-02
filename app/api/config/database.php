<?php
    class Database {

        private $host = "localhost";
        private $db_name = "phone_suppression_system";
        private $username = "root";
        private $password = "";
        public $connection;

        public function getConnection() {
            global $connection;
            $this->connection = $connection;
            try{
                $this->connection = new PDO("mysql:host=".$this->host.";dbname=".$this->db_name, $this->username, $this->password);
                //$this->conn->exec("set names utf8");
            }
            catch(PDOException $exception) {
                echo "Connection error: ".$exception->getMessage();
            }

            return $this->connection;
        }
    }
?>