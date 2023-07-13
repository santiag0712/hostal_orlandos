<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservacionHabitacion extends Model
{
    use HasFactory;

    protected $table ='tbl_reservacion_habitacion';
    protected $primaryKey ='RESHAB_ID';

    protected $fillable = [
        'RES_ID', 
        'TIPHAB_ID', 
        'RESHAB_ESTADO'
    ];

    public function reservaciones(){
        return $this->belongsTo(Reserva::class,'RES_ID','RES_ID');
    }
}
