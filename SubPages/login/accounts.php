<?php
    $db_host = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "accountsdb";
    $connection = "";
    $conneced = false;

    try {
        $connection = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
        $conneced = true;
        // echo "Connected";
    } catch(mysqli_sql_exception) {
        echo "Cant connect to the server!";
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && $conneced == true) {
        if (empty($_POST['username'])) {
            echo "*Please enter your username*";
        }

        else if (empty($_POST['password'])) {
            echo "*Please enter your password*";
        }

        else {
            $username = $_POST['username'];
            $password = $_POST['password'];
            $find_query = "SELECT COUNT(user_name) AS founds FROM accounts
                            WHERE user_name = '$username'";
            $isFound = mysqli_query($connection,$find_query);
            $row = mysqli_fetch_assoc($isFound);
            if ($row['founds'] == '0') {
                echo "Incorrect Username";
            } else {
                $info_query = "SELECT * FROM accounts
                               WHERE user_name = '$username'";
                $info = mysqli_query($connection, $info_query);
                $row = mysqli_fetch_assoc($info);
                if (password_verify($password,$row['user_pass'])) {
                    echo "Login Successful";    
                } else {
                    echo "Incorrect Password";
                }
            }
        }
    }

    mysqli_close($connection)
?>