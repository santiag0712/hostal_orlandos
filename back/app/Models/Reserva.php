<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;

    protected $table = 'tbl_reservas';

    protected $primaryKey = 'RES_ID';

    protected $fillable = [       
        'RES_ID',
        'CLI_ID',
        'RES_DIA',
        'RES_MES',
        'RES_ANO',
        'RES_NDIAS',
        'RES_NPERSONAS',
        'RES_VEHICULO',
        'RES_OBSERVACION',
        'RES_ESTADO'
    ];
    //Una reservacion pertenece a un cliente
    public function clientes(){
        return $this->belongsTo(Cliente::class,'CLI_ID','CLI_ID');
    }

    public function reservacionhabitacion(){
        return $this->hasMany(Reservacionhabitacion::class,'RES_ID');
    }
    //
    public static function sumarHuespedes($dia,$mes,$anio){
        return self :: where([['RES_ESTADO','=',1],['RES_DIA','=',$dia],['RES_MES','=',$mes],['RES_ANO','=',$anio]])
                    ->sum('RES_NPERSONAS');
        
    }
}
