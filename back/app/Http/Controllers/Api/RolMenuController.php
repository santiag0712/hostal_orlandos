<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rol;
use App\Models\RolMenu;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RolMenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function show($rol_id)
    {
        $rol = Rol::findOrFail($rol_id);

        $menu_data=$rol->menus->all();



        return response()->json(
        $menu_data, 
        Response::HTTP_OK);

    }

    
}
