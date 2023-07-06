<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetalleCuenta extends Model
{
    use HasFactory;

    protected $table = 'tbl_detalle_cuenta';
    protected $primaryKey = 'DET_ID';

    protected $fillable = [
        'DET_ID',
        'DET_CANTIDAD',
        'PROD_ID',
        'CHECK_ID',
        'CUENT_ID',
        'DET_SUBTOTAL',
        'DET_ESTADO',
    ];

    public function cuentas(){
        return $this->belongsTo(Cuenta::class,'CUENT_ID','CUENT_ID');
    }

    public static function search($query){

        return self::join('tbl_checkin','tbl_detalle_cuenta.CHECK_ID','=','tbl_checkin.CHECK_ID')
                    ->join('tbl_cuenta','tbl_detalle_cuenta.CUENT_ID','=','tbl_cuenta.CUENT_ID')
                    ->join('tbl_habitacion','tbl_checkin.HAB_ID','=','tbl_habitacion.HAB_ID')
                    ->join('tbl_clientes','tbl_cuenta.CLI_ID','=','tbl_clientes.CLI_ID')
                    ->where([['tbl_detalle_cuenta.DET_ESTADO','=',1],['HAB_NOMBRE','like',"%$query%"]])
                    ->orWhere([['tbl_detalle_cuenta.DET_ESTADO','=',1],['CLI_IDENTIFI','like',"%$query%"]])
                    ->orWhere([['tbl_detalle_cuenta.DET_ESTADO','=',1],['CLI_NOMBRE','like',"%$query%"]])
                    ->orWhere([['tbl_detalle_cuenta.DET_ESTADO','=',1],['CLI_APELLIDOS','like',"%$query%"]])
                    ->get(['tbl_detalle_cuenta.CUENT_ID','tbl_clientes.CLI_IDENTIFI','tbl_clientes.CLI_APELLIDOS','tbl_clientes.CLI_NOMBRE','tbl_habitacion.HAB_NOMBRE'])
                    ->first();

    }

}
