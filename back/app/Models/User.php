<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
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


}
