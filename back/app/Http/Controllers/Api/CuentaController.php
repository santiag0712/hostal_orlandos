<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cuenta;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

//CONTROLADORES EXTERNOS
use App\Http\Controllers\Api\CheckinController;
use App\Http\Controllers\Api\DetalleController;
use App\Http\Controllers\Api\HabitacionController;
use App\Http\Controllers\Api\ReservaController;

class CuentaController extends Controller
{
    //
    public function index()
    {
        $cuentas = Cuenta::join('tbl_clientes', 'tbl_cuenta.CLI_ID', '=', 'tbl_clientes.CLI_ID')
                            ->where('tbl_cuenta.CUENT_ESTADO', '=', 1)
                            ->get(['tbl_cuenta.*', 'tbl_clientes.CLI_NOMBRE', 'tbl_clientes.CLI_APELLIDOS', 'tbl_clientes.CLI_IDENTIFI']);

        return response()->json(
            $cuentas,
            Response::HTTP_OK
        );
    }



    public function store(Request $request)
    {
        $total = 0;
        $cliente = 0;
        $array = $request->all();
        $id_check_in = 0;
        $id_cuenta = 0;

        //Objetos para usar otros controladores
        $objCheck = new CheckinController();
        $objHabitacion = new HabitacionController();
        $objDetalle = new DetalleController();
        $objReservacion = new  ReservaController();

        foreach ($array as $item) {
            $total += $item['TIPHAB_COSTO'];
            $cliente = $item['CLI_ID'];

        }
        //Creamos datos del encabezado de la cuenta
       $cuenta = Cuenta::create([
            'CLI_ID' => $cliente,
            'CUENT_TOTAL' => $total,
            'CUENT_ESTADO' => 1
       ]);

       $id_cuenta = $cuenta->CUENT_ID;
        
        //Realizamos el registro del check-in y lo agregamos al detalle
        
        foreach ($array as $item) {
            
            $id_check_in = $objCheck -> store($item);
            
            $objHabitacion->updateEstado($item['HAB_ID'],2);

            $objDetalle -> detalleCheckin($item,$id_cuenta,$id_check_in);

            $objReservacion -> destroy($item['RES_ID']);

            
        }

        return response()->json(
            $id_cuenta,
            Response::HTTP_OK);
        
    }
    
    public function actualizarTotal ($id, $total){
        $cuenta = Cuenta :: where('CUENT_ID','=',$id)
                            ->update([
                                'CUENT_TOTAL'=>$total
                            ]);
    }

    public function show($id)
    {
        $datos_cuenta = Cuenta :: join('tbl_clientes', 'tbl_cuenta.CLI_ID', '=', 'tbl_clientes.CLI_ID')
        ->where([['tbl_cuenta.CUENT_ESTADO', '=', 1],['tbl_cuenta.CUENT_ID', '=', $id]])
        ->get(['tbl_cuenta.*', 'tbl_clientes.CLI_NOMBRE', 'tbl_clientes.CLI_APELLIDOS', 'tbl_clientes.CLI_IDENTIFI', 'tbl_clientes.CLI_TELEFONO', 'tbl_clientes.CLI_DIRECCION']);

        return response()->json(
        $datos_cuenta,
        Response::HTTP_OK
        );
    }

    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
