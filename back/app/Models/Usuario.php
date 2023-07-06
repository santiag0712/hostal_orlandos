<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'tbl_usuario';

    protected $primaryKey = 'USU_ID';

    protected $fillable = [       
        'ROL_ID',
        'USU_NOMBRE',
        'USU_APELLIDO',
        'USU_CORREO',
        'USU_USUARIO',
        'USU_CLAVE',
        'USU_IMAGEN',
        'USU_ESTADO'
    ];

    public function roles(){
        return $this->belongsTo(Rol::class,'ROL_ID','ROL_ID');
    }
}
