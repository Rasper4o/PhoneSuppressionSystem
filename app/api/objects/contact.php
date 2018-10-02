<?php
    class Contact {
        private $connection;
        private $table_name = "contacts";

        public $f_name;
        public $l_name;
        public $phone_number;
        public $number_type;

        public function __construct($db) {
            $this->connection = $db;
        }

        function read() {
            $query = "SELECT id, phone_number, f_name, l_name, number_type FROM ".$this->table_name." ORDER BY id";

            $statement = $this->connection->prepare($query);

            $statement->execute();

            return $statement;
        }

        function create() {
            $query = "INSERT INTO ".$this->table_name." SET f_name=:f_name, l_name=:l_name, phone_number=:phone_number, number_type=:number_type";

            $statement = $this->connection->prepare($query);

            $this->f_name=htmlspecialchars(strip_tags($this->f_name));
            $this->l_name=htmlspecialchars(strip_tags($this->l_name));
            $this->phone_number=htmlspecialchars(strip_tags($this->phone_number));
            $this->number_type=htmlspecialchars(strip_tags($this->number_type));

            $statement->bindParam(":f_name", $this->f_name);
            $statement->bindParam(":l_name", $this->l_name);
            $statement->bindParam(":phone_number", $this->phone_number);
            $statement->bindParam(":number_type", $this->number_type);

            if ($statement->execute()) {
                return true;
            }

            return false;
        }

        function delete() {
            $query = "DELETE FROM ".$this->table_name." WHERE id = ?";

            $statement = $this->connection->prepare($query);

            $this->id = htmlspecialchars(strip_tags($this->id));

            $statement->bindParam(1, $this->id);

            if ($statement->execute()) {
                return true;
            }

            return false; 
        }

        function update() {
            $query = "UPDATE ".$this->table_name." SET f_name=:f_name, l_name=:l_name, phone_number=:phone_number, number_type=:number_type WHERE id=:id";

            $statement = $this->connection->prepare($query);

            $this->f_name=htmlspecialchars(strip_tags($this->f_name));
            $this->l_name=htmlspecialchars(strip_tags($this->l_name));
            $this->phone_number=htmlspecialchars(strip_tags($this->phone_number));
            $this->number_type=htmlspecialchars(strip_tags($this->number_type));

            $statement->bindParam(":f_name", $this->f_name);
            $statement->bindParam(":l_name", $this->l_name);
            $statement->bindParam(":phone_number", $this->phone_number);
            $statement->bindParam(":number_type", $this->number_type);

            if ($statement->execute()) {
                return true;
            }

            return false;
        }
    }