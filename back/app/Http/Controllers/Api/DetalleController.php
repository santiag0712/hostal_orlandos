<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DetalleCuenta;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Controllers\Api\ProductosController;
use App\Models\Checkin;
use App\Models\Depositos;

class DetalleController extends Controller
{
   
    public function index()
    {
        //
    }

    public function show($id)
    {
        
        $detalle_productos = DetalleCuenta::join('tbl_prudctos','tbl_detalle_cuenta.PROD_ID','=','tbl_prudctos.PROD_ID')
                                            ->where([['DET_ESTADO','=',1],['CUENT_ID','=',$id]])
                                            ->get(['tbl_detalle_cuenta.*','tbl_prudctos.PROD_NOMBRE as detalle'])
                                            ->all();

        $detalle = DetalleCuenta::join('tbl_checkin','tbl_detalle_cuenta.CHECK_ID','=','tbl_checkin.CHECK_ID')
                                ->join('tbl_habitacion','tbl_checkin.HAB_ID','=','tbl_habitacion.HAB_ID')
                                ->where([['DET_ESTADO','=',1],['CUENT_ID','=',$id]])
                                ->get(['tbl_detalle_cuenta.*','tbl_checkin.*','tbl_habitacion.HAB_NOMBRE as detalle'])
                                ->all();

        
        $json_merge = array_merge($detalle, $detalle_productos);
        

        return response()->json(
            $json_merge                 
        ,Response::HTTP_ACCEPTED
        );
    }

   
    public function detalleCheckin($request,$id_cuenta,$id_check){

        $detalle = DetalleCuenta::create([
            'CUENT_ID' => $id_cuenta,
            'CHECK_ID' => $id_check,
            'DET_SUBTOTAL' => $request['TIPHAB_COSTO'],
            'DET_ESTADO'=> 1
        ]);

        return $detalle;

    }

    public function detalleProducto(Request $request){

        $array = $request->all();
        $total_cuenta = 0;
        $id_cuenta =0;
        $objVenta = new ProductosController();
        $objCuenta = new CuentaController();

        foreach ($array as $item) {

            if($item['CUENT_ID'] == 0){
                $objVenta->venderProductos($item);
            }else{

                $detalle = DetalleCuenta::create([
                    'CUENT_ID' => $item['CUENT_ID'],
                    'PROD_ID' => $item['PROD_ID'],
                    'DET_CANTIDAD' => $item['PROD_CANTIDAD'],
                    'DET_SUBTOTAL' => $item['TOTAL'],
                    'DET_ESTADO'=> 1
                ]);

                $objVenta->venderProductos($item);
            }
            $id_cuenta = $item['CUENT_ID'];
        }
             
        if($id_cuenta != 0){
            $total_cuenta = $this->sumarTotal($id_cuenta);
            $objCuenta->actualizarTotal($id_cuenta,$total_cuenta);
        }
        return $detalle;

    }

    public function filtroCuentas($cadena)
    {
        
        $cuenta = DetalleCuenta::search($cadena);

        return response()->json(
            $cuenta,
            Response::HTTP_OK
        );
    }

    public function sumarTotal($id_cuenta){
        $total_cuenta = DetalleCuenta::where('CUENT_ID','=',$id_cuenta)
        ->sum('DET_SUBTOTAL');

        return $total_cuenta;

    }
    
}
