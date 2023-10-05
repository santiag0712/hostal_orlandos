<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\CancelarReservacion;
use App\Models\Cliente;
use App\Models\Depositos;
use App\Models\Reserva;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class ReservaController extends Controller
{

    public function index()
    {

        $reservaciones = Depositos::join('tbl_reservas', 'tbl_depositos.RES_ID', '=', 'tbl_reservas.RES_ID')
            ->join('tbl_clientes', 'tbl_reservas.CLI_ID', '=', 'tbl_clientes.CLI_ID')
            ->where([['tbl_reservas.RES_ESTADO', '1'], ['tbl_depositos.DEP_ESTADO', '1']])
            ->get(['tbl_reservas.*', 'tbl_clientes.CLI_IDENTIFI', 'tbl_clientes.CLI_NOMBRE', 'tbl_clientes.CLI_APELLIDOS']);

        return response()->json(
            $reservaciones,
            Response::HTTP_OK
        );
    }

    public function todaslasreservaciones(){
        $reservacion = Reserva::join('tbl_clientes', 'tbl_reservas.CLI_ID', '=', 'tbl_clientes.CLI_ID')
            ->where('tbl_reservas.RES_ESTADO', '=', 1)
            ->get(['tbl_reservas.*', 'tbl_clientes.CLI_IDENTIFI', 'tbl_clientes.CLI_NOMBRE', 'tbl_clientes.CLI_APELLIDOS']);
        return response()->json(
            $reservacion,
            Response::HTTP_OK
        );
    }
    //MUESTRA LA RESERVACION DE UN CLIENTE
    public function show($cedula_cli)
    {
        $reservacion = Reserva::join('tbl_clientes', 'tbl_reservas.CLI_ID', '=', 'tbl_clientes.CLI_ID')
            ->where([['tbl_reservas.RES_ESTADO', '=', '1'],['tbl_clientes.CLI_IDENTIFI', '=', $cedula_cli]])
            ->get(['tbl_reservas.*', 'tbl_clientes.CLI_IDENTIFI', 'tbl_clientes.CLI_NOMBRE', 'tbl_clientes.CLI_APELLIDOS'])
            ->first();
        return response()->json(
            $reservacion,
            Response::HTTP_OK
        );
    }

    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'CLI_ID' => "required|numeric",
                'RES_DIA' => "required|numeric|min:0|max:32",
                'RES_MES' => "required|numeric|min:0|max:13",
                'RES_ANO' => "required|numeric|min:2022",
                'RES_NDIAS' => 'required',
                'RES_NPERSONAS' => 'required',
                'RES_VEHICULO' => 'required'

            ]);

            $reservacion = Reserva::where('RES_ID', $id)->update([

                'RES_DIA' => $request->RES_DIA,
                'RES_MES' => $request->RES_MES,
                'RES_ANO' => $request->RES_ANO,
                'RES_NDIAS' => $request->RES_NDIAS,
                'RES_NPERSONAS' => $request->RES_NPERSONAS,
                'RES_VEHICULO' =>   $request->RES_VEHICULO,
                "RES_OBSERVACION" => $request->RES_OBSERVACION,
                "RES_ESTADO" => 1

            ]);

            return response()->json(
                $reservacion,
                Response::HTTP_OK
            );
        } catch (ValidationException $exception) {
            return response()->json(
                $exception,
                Response::HTTP_BAD_REQUEST
            );
        }
    }


    public function destroy($id)
    {
        $reserva = Reserva::where('RES_ID', $id)->update([
            'RES_ESTADO' => '0'
        ]);

        $cliente = Cliente::where($reserva->CLI_ID)->first;
        Mail::to($cliente->CLI_CORREO)->send(new CancelarReservacion($cliente, $reserva));

        return response()->json(
            "Reservación cancelada",
            Response::HTTP_OK
        );
    }

    public function revisarDisponible(Request $request)
    {
        try {
            $request->validate([
                'RES_ANO' => 'required|numeric',
                'RES_MES' => 'required|numeric',
                'RES_DIA' => 'required|numeric',
                'RES_NPERSONAS' => 'required|numeric',
                'RES_NDIAS' => 'required|numeric',
                'RES_VEHICULO' => 'required|numeric'
            ]);
            $i = $request->RES_DIA;
            $aux = $request->RES_DIA + $request->RES_NDIAS;
            $mesAux = $request->RES_MES;
            $anioAux =  $request->RES_ANO;
            $count = 0;

            do {
                $count += Reserva::sumarHuespedes($i, $mesAux, $anioAux);


                if ($this->tiene30Dias($mesAux)) {
                    if ($i > 30) {
                        $i = 0;
                        $aux = $aux - 30;
                        $mesAux = $request->RES_MES + 1;
                    }
                } else {
                    if ($i > 31) {
                        $i = 0;
                        $aux = $aux - 31;
                        $mesAux = $request->RES_MES + 1;
                        if ($mesAux == 13) {
                            $mesAux = 1;
                            $anioAux = $anioAux + 1;
                        }
                    }
                }
                $i++;
            } while ($i <= $aux);
            return response()->json(
                $count,
                Response::HTTP_OK
            );
        } catch (ValidationException $e) {
            return response()->json(
                "Datos ingresados no son correctos",
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    public function tiene30Dias($mes)
    {
        $meses30dias = array(4, 6, 9, 11);

        if (in_array($mes, $meses30dias)) {
            return true;
        } else {
            return false;
        }
    }
}
