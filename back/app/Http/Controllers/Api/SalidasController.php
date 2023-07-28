<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cuenta;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SalidasController extends Controller
{
    public function index()
    {
        $cuentas = Cuenta::join('tbl_clientes', 'tbl_cuenta.CLI_ID', '=', 'tbl_clientes.CLI_ID')
                            ->where('tbl_cuenta.CUENT_ESTADO', '=', 2)
                            ->get(['tbl_cuenta.*', 'tbl_clientes.CLI_NOMBRE', 'tbl_clientes.CLI_APELLIDOS', 'tbl_clientes.CLI_IDENTIFI']);

        return response()->json(
            $cuentas,
            Response::HTTP_OK
        );
    }

    public function show($id)
    {
        $datos_cuenta = Cuenta :: join('tbl_clientes', 'tbl_cuenta.CLI_ID', '=', 'tbl_clientes.CLI_ID')
        ->where([['tbl_cuenta.CUENT_ESTADO', '=', 2],['tbl_cuenta.CUENT_ID', '=', $id]])
        ->get(['tbl_cuenta.*', 'tbl_clientes.CLI_NOMBRE', 'tbl_clientes.CLI_APELLIDOS', 'tbl_clientes.CLI_IDENTIFI', 'tbl_clientes.CLI_TELEFONO', 'tbl_clientes.CLI_DIRECCION']);

        return response()->json(
        $datos_cuenta,
        Response::HTTP_OK
        );
    }
}
