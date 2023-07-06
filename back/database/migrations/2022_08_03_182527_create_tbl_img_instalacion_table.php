<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblImgInstalacionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_img_instalacion', function (Blueprint $table) {
            $table->integer('IMG_ID')->autoIncrement();
            $table->string('IMG_NOMBRE', 50)->nullable();
            $table->string('IMG_URL', 500)->nullable();
            $table->integer('IMG_ESTADO')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_img_instalacion');
    }
}
