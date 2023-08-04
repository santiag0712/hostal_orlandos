<?php

namespace App\Http\Controllers;

use App\Models\imagen_instalaciones;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ImagenInstalacionesController extends Controller
{

    public function index()
    {
        $instalacion = imagen_instalaciones::join('tbl_instalaciones','tbl_insta_img.INST_ID', '=','tbl_instalaciones.INST_ID')
                                            ->join('tbl_img_instalacion', 'tbl_insta_img.IMG_ID', '=','tbl_img_instalacion.IMG_ID')
                                            ->inRandomOrder()
                                            ->where('tbl_insta_img.INST_IMG_ESTADO', '=', '1')
                                            ->get(['tbl_instalaciones.*', 'tbl_img_instalacion.*']);
                                            

        return response()->json(
            $instalacion,
            Response::HTTP_OK
        );
    }

    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        $instalacion = imagen_instalaciones::join('tbl_instalaciones', 'tbl_insta_img.INST_ID', '=', 'tbl_instalaciones.INST_ID')
                                            ->join('tbl_img_instalacion', 'tbl_insta_img.IMG_ID', '=', 'tbl_img_instalacion.IMG_ID')
                                            ->where('tbl_insta_img.INST_IMG_ESTADO',1)
                                            ->where('tbl_insta_img.INST_ID',$id)
                                            ->get(['tbl_instalaciones.*', 'tbl_img_instalacion.*'])
                                            ->all();

        return response()->json(
            $instalacion,
            Response::HTTP_OK
        );
    }

    

    public function update(Request $request, imagen_instalaciones $imagen_instalaciones)
    {
        //
    }


    public function destroy(imagen_instalaciones $imagen_instalaciones)
    {
        //
    }
}
