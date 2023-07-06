<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TipoHabitacion;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TipoHabitacionController extends Controller
{
   
    public function index()
    {
        
    }

    public function store(Request $request)
    {
        //
    }

   
    public function show($id)
    {
        $tipo = TipoHabitacion::findOrFail($id);
        return response()->json([
            'tipo' => $tipo
        ],Response::HTTP_OK);
    }

   
    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
