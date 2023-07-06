<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Controllers\Api\CuentaController;
use App\Models\Checkin;
use Symfony\Component\HttpFoundation\Response;

class CheckinController extends Controller
{
   #Mostrar todos los check-in
    public function index()
    {
        $check_ins = Checkin::all();
        return response()->json(
             $check_ins
        , Response::HTTP_OK);
    }
    
    #Mostrar el check in de un cliente
    public function show($id)
    {
        $check_in = Checkin::find($id);

        return response()->json(
             $check_in 
        , Response::HTTP_OK);
    }

    public function store( $request){
        /*$request->validate([

            "HAB_ID"=>'required',
            "CLI_ID"=>'required|numeric',
            "RES_ID"=>'required|numeric',
            "TIPHAB_COSTO"=>'required'
        ]);
        */
        $check_in = Checkin::create([
            "HAB_ID"=> $request['HAB_ID'],
            "CLI_ID"=> $request['CLI_ID'],
            "RES_ID"=> $request['RES_ID'],
            "CHECK_COSTO" => $request['TIPHAB_COSTO'],
            "CHECK_ESTADO" => 1
        ]);

        return $check_in -> CHECK_ID;
        
    }

    public function update(Request $request, $id)
    {
        
    }

    public function destroy($id)
    {
        
    }

    public function registrar($hab_id, $cli_id, $res_id, $check_costo){
       
        $check_in = Checkin::create([
            "HAB_ID"=> $hab_id,
            "CLI_ID"=> $cli_id,
            "RES_ID"=> $res_id,
            "CHECK_COSTO" => $check_costo,
            "CHECK_ESTADO" => 1
        ]); 

        return $check_in->CHECK_ID;
    }
}
