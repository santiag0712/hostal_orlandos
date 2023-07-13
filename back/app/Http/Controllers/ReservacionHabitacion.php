<?php

namespace App\Http\Controllers;

use App\Models\ReservacionHabitacion as ModelReservacionHabitacion; 
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ReservacionHabitacion extends Controller
{
     
    public function show($id)
    {
        $habitaciones = ModelReservacionHabitacion::where([['RES_ID','=', $id],['RESHAB_ESTADO','=',1]])->get();

        return response()->json(
            $habitaciones,
            Response::HTTP_OK);
    }

    public function reservacionhabitacion($res, $hab){
        ModelReservacionHabitacion ::create([
            "RES_ID"=>$res,
            "TIPHAB_ID"=>$hab,
            "RESHAB_ESTADO"=>1
        ]);
        
        return response()->json(
            "Ha concluido con éxito su reservación",
            Response::HTTP_CREATED);
    }
}
