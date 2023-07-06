<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ConfirmacionCorreo;
use App\Models\Rol;
use App\Models\Usuario;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            //Validación de datos
            $request->validate([
                'ROL_ID' => "required|numeric|min:0",
                'USU_NOMBRE' => 'required',
                'USU_APELLIDO' => 'required',
                'USU_CORREO' => 'required|email|unique:tbl_usuario',
                'USU_USUARIO' => 'required|unique:tbl_usuario',
                'USU_CLAVE' => 'required|confirmed',
                'USU_IMAGEN' => 'required',
                'USU_ESTADO' => "required|numeric|min:0|max:1"

            ]);

            //Registrar el usuario
            $rol = Rol::findOrFail($request->ROL_ID);

            $usuario = $rol->usuarios()->create([

                'USU_NOMBRE' => $request->USU_NOMBRE,
                'USU_APELLIDO' => $request->USU_APELLIDO,
                'USU_CORREO' => $request->USU_CORREO,
                'USU_USUARIO' => $request->USU_USUARIO,
                'USU_CLAVE' => Hash::make($request->USU_CLAVE),
                'USU_IMAGEN' => $request->USU_IMAGEN,
                'USU_ESTADO' => $request->USU_ESTADO

            ]);

            //confirmacion del registro


            $correo = $request->USU_CORREO;
            $res = Mail::to($correo)->send(new ConfirmacionCorreo($usuario));
            return response()->json(
                $res,
                Response::HTTP_CREATED
            );
        } catch (ValidationException $exception) {
            return response()->json(
                $exception,
                Response::HTTP_BAD_REQUEST
            );
        }
    }
    public function login(Request $request)
    {
        try {
            $request->validate([
                'USU_USUARIO' => 'required',
                'USU_CLAVE' => 'required'
            ]);

            $user = Usuario::where("USU_USUARIO", "=", $request->USU_USUARIO)->first();

            if (isset($user->USU_ID)) {
                if (Hash::check($request->USU_CLAVE, $user->USU_CLAVE)) {

                    $token = $user->createToken("auth_token")->plainTextToken;


                    return response(["token" => $token], Response::HTTP_OK);
                } else {
                    return response(["message" => "Clave del ususario incorrecto"], Response::HTTP_UNAUTHORIZED);
                }
            } else {
                return response(["message" => "Ususario no está registrado en la base de datos"], Response::HTTP_UNAUTHORIZED);
            }
        } catch (ValidationException $exception) {
            return response()->json(
                $exception,
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    public function userProfile()
    {
        return response()->json(
            auth()->user(),
            Response::HTTP_OK
        );
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response(["message" => "Cierre de sesión con exito"], Response::HTTP_OK);
    }
}
