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
        Recuerda debes realizar el depósito o transferencia bancaria para poder confirmar tu reservación,
        podrás registrar tu depósito a través del siguiente enlace http://localhost:4200/guardardeposito/{{$reserva['RES_ID'] }}, posteriormente, 
        el hostal procederá a confirmar la recepción del mismo.
    </p>
    <h2></strong>Datos de cuenta bancaria</strong></h2>
    <label><strong>Nro de cuenta: </strong>2206553329</label>
    <label><strong>Cuenta de ahorros</strong></label>
    <label><strong>Nombre: </strong>Enrique Osorio</label>
    <label><strong>Documento de identidad: </strong>1709744864</label>
    <p>¡Gracias!</p>
</body>
</html>