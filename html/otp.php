<?php
    session_start();

    // Retrieve the OTP entered by the user
    $otp = $_POST['otp'];

    // Check if the OTP in the session matches the OTP entered by the user
    if (isset($_SESSION['otp']) && $_SESSION['otp'] == $otp) {
    // OTP verification successful
    // Insert the user's details into the database
    $name = $_SESSION['name'];
    $email = $_SESSION['email'];
    $password = $_SESSION['password'];
    $age = $_SESSION['age'];

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

    // Insert the user's details into the userdetail table
    $sql = "INSERT INTO userdetail (name, email, password, age) VALUES (?, ?, ?, ?)";
    $stmt= $pdo->prepare($sql);
    $stmt->execute([$name, $email, $password, $age]);

    // Clear the session variables
    unset($_SESSION['otp']);
    unset($_SESSION['name']);
    unset($_SESSION['email']);
    unset($_SESSION['password']);
    unset($_SESSION['age']);

    // Insert the user's details into the session or redirect to another page
    // For example:
    $_SESSION['loggedin'] = true;
    header("Location: loginonverification.html");
    } else {
    // OTP verification failed, redirect back to the OTP entry page
    header("Location: error.html");
    }
?>