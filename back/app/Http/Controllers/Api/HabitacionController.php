<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Habitacion;
use App\Models\Piso;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;


class HabitacionController extends Controller
{
    //Index para mostrar todas las habitaciones
    public function index()
    {
        $habitaciones = Habitacion::join('tbl_tipo_habitacion','tbl_habitacion.TIPHAB_ID','=','tbl_tipo_habitacion.TIPHAB_ID')
                        ->where('tbl_habitacion.HAB_ESTADO','1')
                        ->get(['tbl_habitacion.*','tbl_tipo_habitacion.*']);

        return response()->json(
            $habitaciones, 
            Response::HTTP_OK);

    }

   //Realizar el registro de una nueva habitación
    public function store(Request $request)
    {
        //Validacion de datos
        $request->validate([
            'PISO_ID'=>"required|numeric|min:0|max:4",
            'TIPHAB_ID'=>"required|numeric|min:0|max:4",
            'ESTHAB_ID'=>"required|numeric|min:0|max:4",
            'HAB_NOMBRE'=>"required|unique:tbl_habitacion",
            'HAB_ESTADO'=>"required"
       ]);   
       //Registro de habitación
       $piso = Piso::findOrFail($request->PISO_ID);
       $habitacion = $piso->habitaciones()->create([
        'TIPHAB_ID'=>$request->TIPHAB_ID,
        'ESTHAB_ID'=>$request->ESTHAB_ID,
        'HAB_NOMBRE'=>$request->HAB_NOMBRE,
        'HAB_ESTADO'=>$request->HAB_ESTADO
       ]);

       //Confirmacion del registro

       return response()->json(
        $habitacion,
        Response::HTTP_CREATED
       );

    }

   //Para mostrar una habitacion en UN PISO
    public function show($piso_id)
    {
        $habitacion = Habitacion::join('tbl_tipo_habitacion','tbl_habitacion.TIPHAB_ID','=','tbl_tipo_habitacion.TIPHAB_ID')
                        ->where([["PISO_ID","=",$piso_id], ['HAB_ESTADO','=',1]])
                        ->get(['tbl_habitacion.*','tbl_tipo_habitacion.*']);
        return response()->json(
            $habitacion,
            Response::HTTP_OK
        );
    }

    public function habitacionPisoEstado($piso,$estado){
        $habitaciones = Habitacion::join('tbl_tipo_habitacion','tbl_habitacion.TIPHAB_ID','=','tbl_tipo_habitacion.TIPHAB_ID')
                        ->where([['tbl_habitacion.HAB_ESTADO','1'],['PISO_ID','=',$piso],['ESTHAB_ID','=',$estado]])
                        ->get(['tbl_habitacion.*','tbl_tipo_habitacion.*']);

        return response()->json(
            $habitaciones, 
            Response::HTTP_OK);    
    }

   //Editar informacion de una habitacion
    public function update(Request $request, $id)
    {
        //Validar los datos
        $request->validate([
            'PISO_ID'=>"required|numeric|min:0|max:4",
            'TIPHAB_ID'=>"required|numeric|min:0|max:4",
            'ESTHAB_ID'=>"required|numeric|min:0|max:4",
            'HAB_NOMBRE'=>"required|unique:tbl_habitacion",
            'HAB_ESTADO'=>"required"
       ]);   

       $piso = Piso::findOrFail($request->PISO_ID);

       $habitacion = $piso->habitaciones()->where('HAB_ID',$id)->update([
        'PISO_ID'=> $request->PISO_ID,
        'TIPHAB_ID'=> $request->TIPOHAB_ID ,
        'ESTHAB_ID'=> $request->ESTHAB_ID,
        'HAB_NOMBRE'=> $request->HAB_NOMBRE,
        'HAB_ESTADO'=> $request->HAB_ESTADO 
       ]);

       return response()->json([
        "message"=>"Habitación actualizado",
        "request" => $$habitacion
    ], Response::HTTP_OK);

    }

   //Eliminar una habitación
    public function destroy($id)
    {
        Habitacion::findOrFail($id)->delete;

        return response()->json(
            "Habitación eliminado"
        , Response::HTTP_OK);

    }

    public function updateEstado($id, $estado){
         $habitacion  = Habitacion :: where ('HAB_ID','=',$id)
                                    ->update(['ESTHAB_ID'=>$estado]);
    }
}
