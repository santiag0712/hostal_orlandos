<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Instalacion;
use App\Models\Imagen;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class InstalacionController extends Controller
{

    public function index()
    {
        $instalaciones = Instalacion::all();
        
        
        return response()->json(
            $instalaciones
        ,  Response::HTTP_OK
        );

    }



    public function store(Request $request)
    {
    }

    //Mostrar la imagen según la instalacion necesitada

    public function show($id)
    {
    }



    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
