<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Confirmación de cancelar reservación</title>
</head>
<body>
    <h1>¡Gracias por preferirnos!</h1>
    <p>Estimado cliente,  {{ $cliente['CLI_NOMBRE'] }} {{ $cliente['CLI_APELLIDOS'] }}</p>
    <p>Tu reservación para {{ $reserva['RES_NPERSONAS'] }} persona/s se ha cancelado de manera exitosa. 
    </p>

    <p>
        Recuerda que la devolución de tu adelanto por la reservación se realizará según las políticas de devoluciones 
        dadas en correos anteriores. las cuales te las recordamos a continuación:
    </p>
    <h2>Políticas de devolución</h2>
    <p>• Debes contarcarte con personal del hostal a trávez de + 593 99 980 1281 para cancelar tu reservación.</p>
    <p>• Se receptará los datos de cuenta bancaria de la persona para poder realizar la devolución del dinero</p>
    <p>• Una vez se haya cancelado la reservación se procederá a hacer la devolución del monto adelantado con un descuento
        por penalización ya que la reservación ya habia sido confirmada.</p>
    <p>• La penalización en la devolución será proporcional a la cercania de la reservación, es decir, entre más cerca 
        a la fecha reservada se haga la cancelación más alto será el porcentaje de penalización.</p>
    <p>¡Gracias!</p>
</body>
</html>