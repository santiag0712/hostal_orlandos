<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompraVentaProductos extends Model
{
    use HasFactory;

    protected $table = 'tbl_compra_ventas_producto';
    protected $primaryKey = 'COMP_VENT_ID ';

    protected $fillable =[
        'COMP_VENT_ID ',
        'PROD_ID',
        'ACC_ID',
        'COMP_VENT_CANTIDAD',
        'COMP_VENT_STOCK',
        'COMP_VENT_ESTADO'
    ];

    public function Productos(){
        return $this->belongsTo(Productos::class,'PROD_ID','PROD_ID');
    }
}
