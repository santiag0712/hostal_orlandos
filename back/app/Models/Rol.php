<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    use HasFactory;

    protected $table = 'tbl_rol';

    protected $primaryKey = 'ROL_ID';

    protected $fillable = [
        'ROL_NOMBRE',        
        'ROL_ESTADO'
    ];

    public function usuarios(){
        return $this->hasMany(Usuario::class,'ROL_ID');
    }

    public function menus(){
        return $this->belongsToMany(Menu::class,'tbl_rol_menu','ROL_ID','MENU_ID');
    }
}
