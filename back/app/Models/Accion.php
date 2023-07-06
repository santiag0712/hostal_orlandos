<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accion extends Model
{
    use HasFactory;

    protected $table = 'tbl_accion';
    protected $primaryKey = 'ACC_ID';

    protected $fillable =[
        'ACC_ID',
        'ACC_NOMBRE',        
        'ACC_ESTADO'
    ];
}
