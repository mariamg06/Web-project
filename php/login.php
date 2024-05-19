<?php
// Kullanıcı adı ve şifreyi kontrol etmek için kullanıcı adı ve şifreyi burada belirleyebilirsiniz.
$valid_username = "b231210567@sakarya.edu.tr";
$valid_password = "b231210567";

// Formdan gelen verileri al
$username = $_POST['username'];
$password = $_POST['password'];

// Kullanıcı adı ve şifre doğruysa index.html sayfasına yönlendir
if ($username === $valid_username && $password === $valid_password) {
    header("Location: index.html");
    exit;
} else {
    // Kullanıcı adı veya şifre yanlışsa hata mesajı göster
    echo "Kullanıcı adı veya şifre yanlış!";
}
?>
