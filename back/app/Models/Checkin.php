<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkin extends Model
{
    use HasFactory;

    protected $table = 'tbl_checkin';
    protected $primaryKey = 'CHECK_ID';

    protected $fillable =[
        'CHECK_ID',
        'HAB_ID',
        'CLI_ID',
        'RES_ID',
        'CHECK_COSTO',
        'CHECK_ESTADO'
    ];

    //Muchos check-in pertenecen a un cliente
    public function clientes(){
        return $this->belongsTo(Cliente::class,'CLI_ID','CLI_ID');
    }


    public function reservas(){

    }
}
