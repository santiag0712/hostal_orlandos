<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Piso;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PisosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pisos = Piso::where('PISO_ESTADO','=',1)->get();

        return response()->json(
            $pisos, 
            Response::HTTP_OK);

    
    }

   
    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
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
