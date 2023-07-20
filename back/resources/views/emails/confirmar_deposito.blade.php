<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Registro de deposito</title>
</head>
<body>
    
    <p>Administracion o recepción</p>
    <p>Se a registrado un deposito de la reservación N° {{$reservacion}} a nombre del Sr/a {{$nombre}}, número de identificación {{$cedula}}
        con el número de transacción: {{$deposito->DEP_TRANSACCION}} de la cantidad de {{$deposito->DEP_CANTIDAD}}, por favor revisar la información en la base de datos y confirmar la recepción de la misma
    </p>
    
    <p>¡Gracias!</p>
</body>
</html>