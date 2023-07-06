<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    use HasFactory;

    protected $table = 'tbl_prudctos';
    protected $primaryKey = 'PROD_ID';

    protected $fillable = [
        'PROD_ID',
        'PROD_NOMBRE',
        'PROD_PRECIO',
        'PROD_CANTIDAD',
        'PROD_ESTADO',
    ];

    public function CompraVenta (){
        return $this->hasMany(CompraVentaProductos::class,'PROD_ID');
    }
    public static function search ($query =''){
        if(!$query){
            return self::where('PROD_ESTADO','=','1')
                    ->get();
        }
        return self::where([['PROD_ESTADO','=','1'],['PROD_NOMBRE','like',"%$query%"]])
                    ->get();              
    }

    
    
}
