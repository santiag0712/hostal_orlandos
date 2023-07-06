<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rol;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RolController extends Controller
{
    //Ver todos los registros de una tabla
    public function index()
    {
        $roles = Rol::all();
        return response()->json(
            $roles
        , Response::HTTP_OK);
        

    }

    //Crear un registro
    public function store(Request $request)
    {
       //Validar datos
       $request->validate([
        "ROL_NOMBRE"=> "required|unique:tbl_rol",
        "ROL_ESTADO"=> "required|numeric|min:0|max:1",
       ]);
       //Dar de alta en la BD
       $registro_rol = Rol::create([
        "ROL_NOMBRE"=>$request->ROL_NOMBRE,
        "ROL_ESTADO"=>$request->ROL_ESTADO
       ]);
       //Devolver una respuesta
       return response()->json(
        $registro_rol
    , Response::HTTP_OK);
    
    }

    public function show($id)
    {
        $rol = Rol::findOrFail($id);

        return response()->json(
             $rol 
        , Response::HTTP_OK);

    }

    public function update(Request $request, $id)
    {
        //Validar los datos
        $request->validate([
            "ROL_NOMBRE"=> "required",
            "ROL_ESTADO"=> "required",
        ]);

        //Actualizar
        $rol_update = Rol::findOrFail($id);
        $rol_update->ROL_NOMBRE= $request->ROL_NOMBRE;
        $rol_update->ROL_ESTADO= $request->ROL_ESTADO;

        $rol_update->save();

        //Devolver una respuesta
       return response()->json(
       $rol_update
    , Response::HTTP_OK);

    }

    public function destroy($id)
    {
        Rol::where($id)->delete(); 
        
        return response()->json(
            "Rol Eliminado"
        , Response::HTTP_OK);

    }
}
