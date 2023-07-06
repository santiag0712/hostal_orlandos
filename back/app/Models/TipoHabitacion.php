<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoHabitacion extends Model
{
    use HasFactory;

    protected $table ='tbl_tipo_habitacion';
    protected $primaryKey ='TIPHAB_ID';

    protected $fillable = [
        'TIPHAB_NOMBRE',
        'TIPHAB_DESCRIPCION',
        'TIPHAB_ESTADO'
    ];

    public function habitaciones(){
        return $this->hasMany(Habitacion::class,'TIPHAB_ID');
    }
}
