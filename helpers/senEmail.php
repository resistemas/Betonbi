<?php 
// $recptor = "info@betonbi.com";
$recptor = "jhvjebeto@gmail.com";
if($_POST['metodo'] == ""){

    echo json_encode(array('status'=>false,'message'=>'Error al Enviar Emial'),JSON_UNESCAPED_UNICODE);
}

if($_POST['metodo'] == "suscribcion"){
    $emil = $_POST['email'];
    $destinatario = $recptor; 
    $asunto = "SUSCRIPCIÓN A BENTONBI"; 
    $cuerpo = ' 
    <html> 
    <head> 
    <title>SUSCRIPCIÓN A BENTONBI</title> 
    </head> 
    <body> 
    <h1>Hola amig@ BETONBI!</h1> 
    <p> 
    <b>Estoy muy contento de poder haber suscrito satisfactoriamente a las novedades de BETONBI.COM</b>
    <br>
    <b>Este es mi correo para suscribirme: '.$emil .'</b>
    </p> 
    </body> 
    </html> 
    '; 

    //para el envío en formato HTML 
    $headers = "MIME-Version: 1.0\r\n"; 
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

    //dirección del remitente 
    $headers .= "From: Betonbi.com <".$emil.">\r\n"; 

    //dirección de respuesta, si queremos que sea distinta que la del remitente 
    $headers .= "Reply-To: ".$emil."\r\n"; 

    //ruta del mensaje desde origen a destino 
    $headers .= "Return-path: Betonbi.com\r\n"; 

    mail($destinatario,$asunto,$cuerpo,$headers);

    echo json_encode(array('status'=>true,'message'=>'Mensaje Enviado Correctamente'),JSON_UNESCAPED_UNICODE);
}

if($_POST['metodo'] == "contacto"){
    $nombre = $_POST['nombre'];
    $emil = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $destinatario = $recptor; 
    $asunto = "CONTACTO BENTONBI"; 
    $cuerpo = ' 
    <html> 
    <head> 
    <title>CONTACTO BENTONBI</title> 
    </head> 
    <body> 
    <h1>Hola amig@ BETONBI!</h1> 
    <p> 
    <b>Estoy muy contento de poder Contectarme con BETONBI.COM</b>
    <br>
        Nombres: '.$nombre.'
    <br>
        Email: '.$emil.'
    <br>
        Mensaje: '.$mensaje.'
    </p> 
    </body> 
    </html> 
    '; 

    //para el envío en formato HTML 
    $headers = "MIME-Version: 1.0\r\n"; 
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

    //dirección del remitente 
    $headers .= "From: Betonbi.com <".$emil.">\r\n"; 

    //dirección de respuesta, si queremos que sea distinta que la del remitente 
    $headers .= "Reply-To: ".$emil."\r\n"; 

    //ruta del mensaje desde origen a destino 
    $headers .= "Return-path: Betonbi.com\r\n"; 

    mail($destinatario,$asunto,$cuerpo,$headers);

    echo json_encode(array('status'=>true,'message'=>'Mensaje Enviado Correctamente'),JSON_UNESCAPED_UNICODE);
}




?>