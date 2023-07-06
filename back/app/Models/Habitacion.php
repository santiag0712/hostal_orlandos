<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Habitacion extends Model
{
    use HasFactory;

    protected $table ='tbl_habitacion';
    protected $primaryKey ='HAB_ID';

    protected $fillable = [
        'PISO_ID', 
        'TIPHAB_ID', 
        'ESTHAB_ID', 
        'HAB_NOMBRE', 
        'HAB_ESTADO', 
    ];

    public function pisos () {
        return $this->belongsTo(Piso::class,'PISO_ID','PISO_ID');
    }

    public function tipos(){
        return $this->belongsTo(TipoHabitacion::class,'TIPHAB_ID','TIPHAB_ID');
    }

    public function estados(){
        return $this->belongsTo(Estado_habitacion::class,'ESTHAB_ID','ESTHAB_ID');
    }
}
