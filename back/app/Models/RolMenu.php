<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RolMenu extends Model
{
    use HasFactory;
    
    protected $table = 'tbl_rol_menu';

    protected $primaryKey = 'ROL_MENU_ID';

    protected $fillable = [
        'ROL_ID',        
        'MENU_ID',        
        'ROL_MENU_ESTADO'
    ];
}
