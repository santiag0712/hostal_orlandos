<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class imagen_instalaciones extends Model
{
    use HasFactory;

    protected $table = 'tbl_insta_img';

    protected $primaryKey = 'INST_IMG_ID';

    protected $fillable = [
        'IMG_ID',
        'INST_ID',
        'INST_IMG_ID',
        'INST_IMG_ESTADO'
    ];
}
