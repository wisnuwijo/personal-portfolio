<?php

class Contact
{
    public $database;

    public function __construct()
    {
        $getConfigFile = file_get_contents("../config.json");

        if ($getConfigFile) {
            $decodeConfig = json_decode($getConfigFile);
            $this->database = new PDO("mysql:host={$decodeConfig->host};dbname={$decodeConfig->firecek_dbname}", $decodeConfig->firecek_db_username, $decodeConfig->firecek_db_password, array(PDO::ATTR_EMULATE_PREPARES => false,
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        }
    }

    public function insertMessage($nama, $email, $subject, $message)
    {
        $produksiInsertQuery = 'INSERT INTO contact (' .
            'nama, ' .
            'email, ' .
            'subject, ' .
            'message) VALUES (' .
                '?, ' .
                '?, ' .
                '?, ' .
                '?)';

        $produksiInsert = $this->database->prepare($produksiInsertQuery);
        $produksiInsert->bindParam(1, $nama);
        $produksiInsert->bindParam(2, $email);
        $produksiInsert->bindParam(3, $subject);
        $produksiInsert->bindParam(4, $message);
        $produksiInsert->execute();
        $produksiInserted = $produksiInsert->rowCount();

        $response = '';             
        if ($produksiInserted) {
            $response = 'Message sent. Thank you for contacting me';
        } else {
            $response = 'Oops something went wrong';
        }

        echo $response;
    }
}
?>