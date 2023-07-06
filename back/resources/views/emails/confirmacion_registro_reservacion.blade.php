<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Confirmación de la reservación</title>
</head>
<body>
    <h1>¡Gracias por preferirnos!</h1>
    <p>Estimado cliente,  {{ $cliente['CLI_NOMBRE'] }} {{ $cliente['CLI_APELLIDOS'] }}</p>
    <p>Tu reservación para {{ $reserva['RES_NPERSONAS'] }} persona/s se ha registrado de manera exitosa. 
       Te esperamos con los brazos abiertos el día {{ $reserva['RES_DIA'] }}/{{ $reserva['RES_MES'] }}/{{ $reserva['RES_ANO'] }} en nuestras instalaciones.
    </p>

    <p>
        Recuerda si existe algún inconveniente o necesitas cancelar la reservación
        comunicarte con recepción del Hostal, los encargados estarán gustosos de atenderte.
    </p>
    
    <p>¡Gracias!</p>
</body>
</html>