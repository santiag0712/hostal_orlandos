<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado_habitacion extends Model
{
    use HasFactory;

    protected $table = 'tbl_est_habitacion';
    protected $primaryKey = 'ESTHAB_ID';

    protected $fillable =[
        'ESTHAB_ID',
        'ESTHAB_NOMBRE',
        'ESTHAB_ESTADO',
    ];

    public function habitaciones(){
        return $this->hasMany(Habitacion::class,'ESTHAB_ID');
    }
}
