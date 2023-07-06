<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Piso extends Model
{
    use HasFactory;

    protected $table = 'tbl_piso';
    protected $primaryKey = 'PISO_ID';

    protected $fillable =[
        'PISO_ID',
        'PISO_NUMERO',
        'PISO_ESTADO',
    ];

    public function habitaciones(){
        return $this->hasMany(Habitacion::class,'PISO_ID');
    }
}
