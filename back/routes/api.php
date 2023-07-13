<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ClienteController;
use App\Http\Controllers\Api\CuentaController;
use App\Http\Controllers\Api\HabitacionController;
use App\Http\Controllers\Api\InstalacionController;
use App\Http\Controllers\Api\PisosController;
use App\Http\Controllers\Api\ReseniasController;
use App\Http\Controllers\Api\ReservaController;
use App\Http\Controllers\Api\RolController;
use App\Http\Controllers\Api\RolMenuController;
use App\Http\Controllers\Api\UsuariosController;
use App\Http\Controllers\Api\DetalleController;
use App\Http\Controllers\Api\EstadosController;
use App\Http\Controllers\Api\ProductosController;
use App\Http\Controllers\ImagenInstalacionesController;
use App\Http\Controllers\ReservacionHabitacion;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Estas rutas son para el banner no necesitan login
Route::resource('instalacion', InstalacionController::class)
    ->only(['index','show']);
Route::resource('imagenes', ImagenInstalacionesController::class)
    ->only(['index','show']);    
    Route::resource('resenias', ReseniasController::class)
    ->only(['index','store','destroy']);   

Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);


//Rutas con todos los metodos rest
#Estas rutas se deben cambiar al grupo de sanctum
Route::resource('usuarios', UsuariosController::class)
    ->only(['index','show','store','update','destroy']);
Route::resource('roles', RolController::class)
    ->only(['index','show','store','update','destroy']);

Route::resource('clientes', ClienteController::class)
    ->only(['index','show','store','update','destroy']);
Route::resource('reservas', ReservaController::class)
    ->only(['index','show','store','update','destroy']);
Route::resource('habitaciones', HabitacionController::class)
    ->only(['index','show','store','update','destroy']);
Route::resource('pisos',PisosController::class)
    ->only('index');
Route::resource('estados',EstadosController::class)
    ->only('index');
Route::resource('menus',RolMenuController::class)
    ->only('show');
Route::resource('cuentas', CuentaController::class)
    ->only(['index','show','store','update','destroy']);
Route::resource('detallecuentas', DetalleController::class)
    ->only(['index','show','store','update','destroy']);    
Route::resource('productos', ProductosController::class)
->only(['index','show','store','update','destroy']);

Route::get('producto-detalle/{id}',[ProductosController::class,'detalleProductos']);
Route::get('filtroproducto/{cadena}',[ProductosController::class,'filtroProducto']);
Route::get('filtrocuenta/{cadena}',[DetalleController::class,'filtroCuentas']);
Route::post('venderproducto',[ProductosController::class,'venderProductos']);
Route::post('comprarproducto',[ProductosController::class,'compraProducto']);
Route::post('detalleproductos',[DetalleController::class,'detalleProducto']);
Route::get('sumar/{id_cuenta}',[DetalleController::class,'sumarTotal']);
Route::put('actualizarPassword/{id}',[UsuariosController::class,'actualizarPassword']);
Route::put('actualizarDatos/{id}',[UsuariosController::class,'actualizarDatos']);
Route::get('habitaciones/{piso}/{estado}',[HabitacionController::class,'habitacionPisoEstado']);
Route::get('reservacionhabitacion/{res}/{hab}',[ReservacionHabitacion::class,'reservacionhabitacion']);
Route::get('mostrarhabitaciones/{res}',[ReservacionHabitacion::class,'show']);
Route::post('validarReservaciones', [ReservaController::class,'revisarDisponible']);

Route::group(['middleware'=>["auth:sanctum"]],function(){
    Route::get('user-profile',[AuthController::class,'userProfile']);
    Route::get('logout',[AuthController::class,'logout']);
});







