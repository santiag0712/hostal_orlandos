<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $table = 'tbl_menu';

    protected $primaryKey = 'MENU_ID';

    protected $fillable = [
        'MENU_NOMBRE',        
        'MENU_ICONO',
        'MENU_ENLACE',        
        'MENU_ESTADO'
    ];

    public function roles(){
        return $this->belongsToMany(Rol::class,'tbl_rol_menu','ROL_ID','MENU_ID');
    }
}
