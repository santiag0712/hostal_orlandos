<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ConfirmacionDeposito;
use App\Mail\DepositoCliente;
use App\Models\Checkin;
use App\Models\Depositos;
use App\Models\DetalleCuenta;
use App\Models\Reserva;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class DepositosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $depositos = Depositos::join('tbl_reservas', 'tbl_depositos.RES_ID','=','tbl_reservas.RES_ID')
                    ->join('tbl_clientes', 'tbl_reservas.CLI_ID','=','tbl_clientes.CLI_ID')
                    ->where('tbl_depositos.DEP_ESTADO','=',1)
                    ->get(['tbl_clientes.*','tbl_depositos.*','tbl_reservas.*']);

        return response()->json(
            $depositos,
            Response::HTTP_OK
        );
    }
    public function store(Request $request)
    {
        try{
            $request-> validate([
                'RES_ID'=>'required|numeric',
                'DEP_TRANSACCION'=>'required',
                'DEP_CANTIDAD'=>'required'
            ]);

            $deposito = Depositos::create([
                'RES_ID' => $request->RES_ID, 
                'DEP_TRANSACCION' => $request->DEP_TRANSACCION,
                'DEP_CANTIDAD' => $request->DEP_CANTIDAD,
                'DEP_ESTADO' => 1 
            ]);

            Mail::to('hostalorlandos0@gmail.com')->send(new ConfirmacionDeposito($deposito));
            return response()->json(
                $deposito,
                Response::HTTP_CREATED
            );
        }catch(ValidationException $e){
            return response()->json(
                $e,
                Response::HTTP_NOT_FOUND
            );
        }
    }

   
    
    public function show($id)
    {
        $deposito = Depositos::join('tbl_reservas', 'tbl_depositos.RES_ID','=','tbl_reservas.RES_ID')
                    ->join('tbl_clientes', 'tbl_reservas.CLI_ID','=','tbl_clientes.CLI_ID')
                    ->where([['tbl_depositos.DEP_ESTADO','=',1],['tbl_depositos.RES_ID','=',$id]])
                    ->get(['tbl_clientes.*','tbl_depositos.*','tbl_reservas.*']);

        return response()->json(
            $deposito,
            Response::HTTP_OK
        );
          
    }

   public function mostrardeposito_reservas($cuent_id){
        $detalle = DetalleCuenta::where('tbl_detalle_cuenta.CUENT_ID','=',$cuent_id)->first();
        $checkin = Checkin::where('tbl_checkin.CHECK_ID','=',$detalle->CHECK_ID)->first();
        $deposito = Depositos::where('tbl_depositos.RES_ID','=',$checkin->RES_ID)->first();
    
        return response()->json(
            $deposito,
            Response::HTTP_OK
        );
        
   }
    
    public function confirmarDeposito($res_id){
        
        $reserva = Reserva::findOrFail($res_id);

        // Obtener un cliente específico de la reserva
        $cliente = $reserva->clientes()->first();

        Mail::to($cliente->CLI_CORREO)->send(new DepositoCliente($cliente));
    }
   
}
