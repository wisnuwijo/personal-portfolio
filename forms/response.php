<?php

include 'backend.php';

$contact = new Contact();

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$msg = $_POST['msg'];

$saveMessage = $contact->insertMessage($name, $email, $subject, $msg);
echo $saveMessage;