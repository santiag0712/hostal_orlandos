<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cuenta extends Model
{
    use HasFactory;

    protected $table= 'tbl_cuenta';
    protected $primaryKey= 'CUENT_ID';

    protected $fillable=[
        'CUENT_ID',
        'CLI_ID',
        'CUENT_TOTAL',
        'CUENT_ESTADO'
    ];

    //uN CLIENTE TIENE MUCHAS CUENTAS
    public function clientes(){
        return $this->belongsTo(Cliente::class,'CLI_ID','CLI_ID');
    }

}
