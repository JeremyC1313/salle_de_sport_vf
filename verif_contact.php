<?php var_dump($_POST) ; ?>
<?php
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $sujet = $_POST["sujet"];
    $message = $_POST["message"];    
    $link = mysqli_connect("localhost", "root", "", "user", 3306);
    $requette = "INSERT INTO `user`(`nom`, `prenom`, `email`, `number`, `sujet`, `message`) VALUES ('$nom','$prenom','$email','$number','$sujet','$message')";  

    if(!empty($nom) && !empty($prenom) && !empty($email) && !empty($number) && !empty($sujet) && !empty($message)){
      
    }
    else{
        header("Location: contact.php?add=0");
    }       
    if (mysqli_query($link,$requette)){
        header("Location: contact.php?add=1");
    }
?>