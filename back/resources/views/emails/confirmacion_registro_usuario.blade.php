<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Confirmación de registro</title>
</head>
<body>
    <h1>¡Bienvenido!</h1>
    <p>Estimado usuario, {{ $usuario['USU_NOMBRE'] }} {{ $usuario['USU_APELLIDO'] }}</p>
    <p>Tu registro ha sido exitoso con el usuario {{ $usuario['USU_USUARIO'] }}. Y con el correo {{ $usuario['USU_CORREO'] }}. 
        Recuerda que puedes modificar tus datos y contraseña ingresando a tu cuenta, si tienes
        algún inconveniente contactate con el administrador.
    </p>
    
    <p>¡Gracias!</p>
</body>
</html>