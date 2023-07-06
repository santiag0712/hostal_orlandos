<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    use HasFactory;

    protected $table = 'tbl_img_instalacion';

    protected $primaryKey = 'IMG_ID ';

    protected $fillable = [
        'IMG_ID',
        'IMG_NOMBRE',
        'IMG_URL',
        'IMG_ESTADO'
    ];

    public function instalaciones(){
        return $this->belongsToMany(Instalacion::class,'tbl_insta_img','IMG_ID','INST_ID');
    }
}
