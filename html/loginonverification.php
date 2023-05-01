<?php

session_start();

// Replace these variables with your actual database credentials
$host = 'localhost';
$dbname = 'mydb';
$username = 'postgres';
$password_db = 'anurag';

// Establish a connection to the database using PDO
try {
  $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $username, $password_db);
  // Set the PDO error mode to exception
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

// Retrieve the values submitted by the login form
$email = $_POST['email'];
$password = $_POST['password'];

// Check if the email and password match a record in the database
$sql = "SELECT * FROM userdetail WHERE email = ? AND password = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$email, $password]);

if($stmt->rowCount() == 1) {
  // The email and password are correct, store the user's ID in the session and redirect to the dashboard
  $row = $stmt->fetch(PDO::FETCH_ASSOC);
  $_SESSION['user_id'] = $row['id'];
  header("Location: dashboard.php");
  exit();
} else {
  // The email and password are incorrect, redirect back to the login page with an error message
  header("Location: loginonverification.html");
  exit();
}
    

?>