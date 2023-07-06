<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ConfirmarReservacion;
use App\Models\Cliente;
use App\Models\Reserva;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class ClienteController extends Controller
{
    //Mostrar todos los clientes
    public function index()
    {
        $clientes = Cliente::all();

        return response()->json(
            $clientes,
            Response::HTTP_CREATED
        );
    }

    //Registrar clientes con sus reservas
    public function store(Request $request)
    {
        try {
            //Validar los datos
            $request->validate([

                'CLI_NOMBRE' => 'required',
                'CLI_APELLIDOS' => 'required',
                'CLI_NACIONALIDAD' => 'required',
                'CLI_IDENTIFI' => 'required',
                'CLI_DIRECCION' => 'required',
                'CLI_TELEFONO' => 'required',
                'CLI_CORREO' => 'required|email',
                'RES_DIA' => "required|numeric|min:0|max:32",
                'RES_MES' => "required|numeric|min:0|max:13",
                'RES_ANO' => "required|numeric|min:2022",
                'RES_NDIAS' => 'required',
                'RES_NPERSONAS' => 'required',
                'RES_VEHICULO' => 'required'

            ]);

            $bandera = Cliente::where('CLI_IDENTIFI', "=", $request->CLI_IDENTIFI)->first();

            $correo = $request->CLI_CORREO;

            if ($bandera == null) {

                //Registrar al cliente

                $cliente = Cliente::create([
                    "CLI_NOMBRE" => $request->CLI_NOMBRE,
                    "CLI_APELLIDOS" => $request->CLI_APELLIDOS,
                    "CLI_NACIONALIDAD" => $request->CLI_NACIONALIDAD,
                    "CLI_IDENTIFI" => $request->CLI_IDENTIFI,
                    "CLI_DIRECCION" => $request->CLI_DIRECCION,
                    "CLI_TELEFONO" => $request->CLI_TELEFONO,
                    "CLI_CORREO" => $request->CLI_CORREO,
                    "CLI_ESTADO" => 1
                ]);

                //Registrar reserva
                $id_cliente = $cliente->CLI_ID;

                $reserva = Reserva::create([
                    "CLI_ID" => $id_cliente,
                    "RES_DIA" => $request->RES_DIA,
                    "RES_MES" => $request->RES_MES,
                    "RES_ANO" => $request->RES_ANO,
                    "RES_NDIAS" => $request->RES_NDIAS,
                    "RES_NPERSONAS" => $request->RES_NPERSONAS,
                    "RES_VEHICULO" => $request->RES_VEHICULO,
                    "RES_OBSERVACION" => $request->RES_OBSERVACION,
                    "RES_ESTADO" => 1

                ]);

                Mail::to($correo)->send(new ConfirmarReservacion($cliente, $reserva));

                return response()->json(
                                "Registro exitoso",
                                 Response::HTTP_CREATED);
            }
            //En caso de que el cliente ya este registrado
            //se procede a registrar unicamente la reservación
            else {

                $id_cliente = $bandera->CLI_ID;

                $reserva = Reserva::create([
                    "CLI_ID" => $id_cliente,
                    "RES_DIA" => $request->RES_DIA,
                    "RES_MES" => $request->RES_MES,
                    "RES_ANO" => $request->RES_ANO,
                    "RES_NDIAS" => $request->RES_NDIAS,
                    "RES_NPERSONAS" => $request->RES_NPERSONAS,
                    "RES_VEHICULO" => $request->RES_VEHICULO,
                    "RES_OBSERVACION" => $request->RES_OBSERVACION,
                    "RES_ESTADO" => 1

                ]);

                Mail::to($correo)->send(new ConfirmarReservacion($bandera, $reserva));
                return response()->json(
                                "Registro exitoso",
                                Response::HTTP_CREATED);
            }
        } catch (ValidationException $exception) {
            return response()->json(
                $exception,
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    //buscar un cliente en particular con su número 
    # de identificación
    public function show($cli_id)
    {
        $cliente = Cliente::where('CLI_ID', "=", $cli_id)->first();

        return response()->json(
            $cliente,
            Response::HTTP_OK
        );
    }




    public function update(Request $request, $id)
    {
    }


    public function destroy($id)
    {
        //
    }
}
