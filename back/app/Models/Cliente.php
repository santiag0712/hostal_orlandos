<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    protected $table = 'tbl_clientes';

    protected $primaryKey = 'CLI_ID';

    protected $fillable = [
        'CLI_ID',
        'CLI_NOMBRE',
        'CLI_APELLIDOS',
        'CLI_NACIONALIDAD',
        'CLI_IDENTIFI',
        'CLI_DIRECCION', 
        'CLI_TELEFONO',
        'CLI_CORREO',
        'CLI_ESTADO'
    ];
    //Un cliente tiene muchas reservaciones
    public function reservas(){
        return $this->hasMany(Reserva::class,'CLI_ID');
    }
    //Un cliente puede tener muchos Check-in
    public function checkin(){
        return $this->hasMany(Checkin::class,'CLI_ID');
    }
    //Un cliente puede tener muchas cuentas
    public function cuentas(){
        return $this->hasMany(Cuenta::class,'CLI_ID');
    }

}
