<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instalacion extends Model
{
    use HasFactory;

    protected $table = 'tbl_instalaciones';

    protected $primaryKey = 'INST_ID ';

    protected $fillable = [
        'INST_NOMBRE', 
        'INST_DESCIPCION',
        'INST_PORTADA',
        'INST_NPERSONAS',
        'INST_PRECIOPERSONA',       
        'IMG_ESTADO'
    ];

    public function imagenes(){
        return $this->belongsToMany(Imagem::class,'tbl_insta_img','INST_ID','IMG_ID');
    }
}
