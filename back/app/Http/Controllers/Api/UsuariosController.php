<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ConfirmacionCorreo;
use App\Models\Rol;
use App\Models\Usuario;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class UsuariosController extends Controller
{
    
    public function index()
    {

        $usuarios = Usuario::join('tbl_rol','tbl_usuario.ROL_ID', '=', 'tbl_rol.ROL_ID')
        ->where('tbl_usuario.USU_ESTADO','1')
        ->get(['tbl_usuario.*', 'tbl_rol.ROL_NOMBRE']);
        return response()->json(
            $usuarios
        , Response::HTTP_OK);
        
    }

    
    
    public function show($id)
    {
        $usuario = Usuario::find($id);

        return response()->json(
            $usuario 
        , Response::HTTP_OK);
    }

   
   
    public function update(Request $request, $usu_id)
    {

        $request->validate([
            'ROL_ID'=>"required|numeric|min:0",
            'USU_NOMBRE'=>'required',
            'USU_APELLIDO' =>'required',
            'USU_CORREO' =>'required|email',
            'USU_USUARIO' =>'required',
            'USU_CLAVE' =>'required|confirmed',
            'USU_ESTADO' =>"required|numeric|min:0|max:1"
            
        ]);

        

        $usuario = Usuario::where('USU_ID',$usu_id)->update([
        'ROL_ID'=> $request->ROL_ID,   
        'USU_NOMBRE' => $request->USU_NOMBRE,
        'USU_APELLIDO' => $request->USU_APELLIDO,
        'USU_CORREO' => $request->USU_CORREO,
        'USU_USUARIO' => $request->USU_USUARIO,
        'USU_CLAVE' => Hash::make($request->USU_CLAVE),
        'USU_ESTADO' => $request->USU_ESTADO
        ]);

        

        return response()->json(
            "Usuario actualizado",
        Response::HTTP_OK);
        
    }

    public function destroy($id)
    {
        Usuario::where('USU_ID',$id)->update([
            'USU_ESTADO' => '0'
        ]);   

        return response()->json(
        "Usuario eliminado"
        , Response::HTTP_OK);
    }

    public function actualizarDatos(Request $request,$id) {
        try{

            $request->validate([
                'USU_NOMBRE'=>'required',
                'USU_APELLIDOS'=>'required',
                'USU_CORREO' =>'required',
            ]);

            Usuario::where('USU_ID','=',$id)
            ->update([
                'USU_NOMBRE'=> $request->USU_NOMBRE,
                'USU_APELLIDOS'=> $request->USU_APELLIDOS,
                'USU_CORREO' => $request->USU_CORREO,
            ]);

        }catch(ValidationException $e){

            return response()->json(
                "Faltan datos para actualizar",
                Response::HTTP_BAD_REQUEST
            );

        }
    }

    public function actualizarPassword(Request $request,$id) {

        try{
            $request ->validate([
                'USU_CLAVE' =>'required',
                'NUEVA_CLAVE' => 'required|confirmed',
            ]);

            $usuario = Usuario::where(['USU_ID','=',$id]);
            
            if(Hash::check($request->USU_CLAVE,$usuario->USU_CLAVE)){
                $update = Usuario::where(['USU_ID','=',$id])
                ->update([
                    'USU_CLAVE'=>Hash::make($request->USU_CLAVE)
                ]);

                return response()->json(
                    "CLAVE MODIFICADA EXITOSAMENTE",
                    Response::HTTP_OK
                );
            }else{
                return response()->json(
                    "Clave anterior no es la correcta"
                );
            }
        }catch(ValidationException $exception) {
            return response()->json(
                "Los datos no estan llenos correctamente",
                Response::HTTP_BAD_REQUEST
            );
        }
    }
}
