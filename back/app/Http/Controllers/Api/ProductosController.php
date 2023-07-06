<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Accion;
use App\Models\CompraVentaProductos;
use App\Models\DetalleCuenta;
use App\Models\Productos;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class ProductosController extends Controller
{

    public function index()
    {
        $productos = CompraVentaProductos::join('tbl_prudctos','tbl_compra_ventas_producto.PROD_ID','=','tbl_prudctos.PROD_ID')
            ->where('COMP_VENT_ESTADO', '=', 1)
            ->orderBy('PROD_ID','ASC')
            ->get(['tbl_compra_ventas_producto.*','tbl_prudctos.PROD_NOMBRE','tbl_prudctos.PROD_PRECIO']);

        return response()->json(
            $productos,
            Response::HTTP_OK
        );
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'PROD_NOMBRE' => 'required|unique:tbl_prudctos',
                'PROD_PRECIO' => 'required',
                'PROD_CANTIDAD' => 'required|numeric'
            ]);

            $producto = Productos::create([
                'PROD_NOMBRE' => $request->PROD_NOMBRE,
                'PROD_PRECIO' => $request->PROD_PRECIO,
                'PROD_CANTIDAD' => $request->PROD_CANTIDAD,
                'PROD_ESTADO' => 1
            ]);

            CompraVentaProductos::create([
                'PROD_ID'=>$producto->PROD_ID,
                'ACC_ID' =>1,
                'COMP_VENT_CANTIDAD' => $request->PROD_CANTIDAD,
                'COMP_VENT_STOCK' => $request->PROD_CANTIDAD,
                'COMP_VENT_ESTADO' => 1,
            ]);

            return response()->json(
                $producto,
                Response::HTTP_OK
            );
        } catch (ValidationException $exception) {
            return response()->json(
                $exception,
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    public function show($id)
    {
        $producto = Productos::where([['PROD_ESTADO', '=', '1'], ['PROD_ID', '=', $id]])
            ->get()
            ->all();

        return response()->json(
            $producto,
            Response::HTTP_OK
        );
    }

    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'PROD_NOMBRE' => 'required',
                'PROD_PRECIO' => 'required',
                'PROD_CANTIDAD' => 'required|numeric'
            ]);

            $producto = Productos::where('PROD_ID', '=', $id)->update([
                    'PROD_NOMBRE' => $request->PROD_NOMBRE,
                    'PROD_CANTIDAD' => $request->PROD_CANTIDAD,
                    'PROD_PRECIO' => $request->PROD_PRECIO,
                    'PROD_ESTADO' => 1
                ]);

            return response()->json(
                $producto,
                Response::HTTP_OK
            );
        } catch (ValidationException $exception) {
            return response()->json(
                $exception,
                Response::HTTP_BAD_REQUEST
            );
        }
    }


    public function destroy($id)
    {
        $producto = Productos::where('PROD_ID', '=', $id)->update([
                'PROD_ESTADO' => 0
            ]);

        return response()->json(
            'Producto borrado con exito',
            Response::HTTP_OK
        );
    }

    public function venderProductos($request)
    {
        if($request['PROD_ID'] != 0 && $request['PROD_CANTIDAD'] != 0) {


            $producto = CompraVentaProductos::where([['PROD_ID', '=', $request['PROD_ID']],['COMP_VENT_ESTADO', '=', 1]])
                ->orderBy('COMP_VENT_ID', 'desc')->first();

            if ($producto->COMP_VENT_STOCK < $request['PROD_CANTIDAD']) {
                return response()->json(
                    "Stock insuficiente para vender",
                    Response::HTTP_CONFLICT
                );
            } else {
                $nuevo_stock = $producto->COMP_VENT_STOCK - $request['PROD_CANTIDAD'];

                $venta = CompraVentaProductos::create([
                    'PROD_ID' => $request['PROD_ID'],
                    'ACC_ID' => 2,
                    'COMP_VENT_CANTIDAD' => $request['PROD_CANTIDAD'],
                    'COMP_VENT_STOCK' => $nuevo_stock,
                    'COMP_VENT_ESTADO' => 1,

                ]);

                CompraVentaProductos::where('COMP_VENT_ID', '=', $producto->COMP_VENT_ID)->update([
                    'COMP_VENT_ESTADO' => 0
                ]);

                return response()->json(
                    $venta,
                    Response::HTTP_OK
                );
            }
        } else {
            return response()->json(
                'Campos vacios',
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    public function compraProducto(Request $request)
    {
        try {

            $request->validate([
                'PROD_ID' => 'required|numeric',                
                'PROD_CANTIDAD' => 'required|numeric',
            ]);

            $producto = CompraVentaProductos::where([['PROD_ID', '=', $request->PROD_ID], ['COMP_VENT_ESTADO', '=', 1]])
                ->orderBy('COMP_VENT_ID', 'desc')->first();


            $nuevo_stock = $producto->COMP_VENT_STOCK + $request->PROD_CANTIDAD;

            $venta = CompraVentaProductos::create([
                'PROD_ID' => $request->PROD_ID,
                'ACC_ID' => 1,
                'COMP_VENT_CANTIDAD' => $request->PROD_CANTIDAD,
                'COMP_VENT_STOCK' => $nuevo_stock,
                'COMP_VENT_ESTADO' => 1,

            ]);

            CompraVentaProductos::where('COMP_VENT_ID', '=', $producto->COMP_VENT_ID)->update([
                'COMP_VENT_ESTADO' => 0
            ]);

            return response()->json(
                $venta,
                Response::HTTP_OK
            );
        } catch (ValidationException $exception) {
            return response()->json(
                $exception,
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    public function filtroProducto( $cadena)
    {
        
        $productos = Productos::search($cadena);

        return response()->json(
            $productos,
            Response::HTTP_OK
        );
    }
}
