<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Resenias;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ReseniasController extends Controller
{
    
    public function index()
    {
     $resenias = Resenias::where('RES_ESTADO',1)
                        ->get('tbl_resenias.*');   

    return response()->json(
        $resenias,
        Response::HTTP_OK
    ); 
    }

    public function store(Request $request)
    {
        //validacion 

        $request->validate([
            'RES_NOMBRE'=>'required',
            'RES_APELLIDOS' => 'required',
            'RES_CORREO' => 'required|email',
            'RES_TEXTO' => 'required'
        ]);

        //Registrar 
         $resenia = Resenias::create([
            'RES_NOMBRE' => $request->RES_NOMBRE, 
            'RES_APELLIDOS' => $request->RES_APELLIDOS,
            'RES_CORREO' => $request->RES_CORREO,  
            'RES_TEXTO' => $request->RES_TEXTO, 
            'RES_ESTADO' => 1, 
         ]);

         return response()->json(
            $resenia
            ,Response::HTTP_OK);
    }

    public function show($id)
    {
        
    }
    public function update(Request $request, $id)
    {
        
    }
    public function destroy($id)
    {
        Resenias::where('RES_ID',$id)->update([
            'RES_ESTADO' => '0'
        ]); 
        
        return response()->json(
            'Reseña borrada exitosamente',
            Response::HTTP_OK);
    }
}
