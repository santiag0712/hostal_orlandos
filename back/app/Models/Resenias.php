<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resenias extends Model
{
    use HasFactory;

    protected $table = 'tbl_resenias';
    protected $primaryKey ='RES_ID';
    protected $fillable=[
        'RES_ID', 
        'RES_NOMBRE', 
        'RES_APELLIDOS',
        'RES_CORREO',  
        'RES_TEXTO', 
        'RES_ESTADO', 
    ];
}
