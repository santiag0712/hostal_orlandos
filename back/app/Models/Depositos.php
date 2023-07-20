<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Depositos extends Model
{
    use HasFactory;

    protected $table = 'tbl_depositos';
    protected $primaryKey = 'DEP_ID';

    protected $fillable =[
        'DEP_ID',
        'RES_ID',
        'DEP_TRANSACCION', 
        'DEP_CANTIDAD',       
        'DEP_ESTADO',
        'created_at',
        'updated_at'
    ];

    public function reservas(){
        return $this->belongsTo(Reserva::class,'RES_ID','RES_ID');
    }
}
