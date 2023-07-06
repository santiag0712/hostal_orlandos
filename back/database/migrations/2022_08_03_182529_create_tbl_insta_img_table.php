<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblInstaImgTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_insta_img', function (Blueprint $table) {
            $table->integer('IMG_ID')->nullable();
            $table->integer('INST_ID')->nullable();
            $table->integer('INST_IMG_ID')->autoIncrement();
            $table->integer('INST_IMG_ESTADO')->nullable();

            $table->timestamps();
            
            $table->foreign('IMG_ID', 'FK_REFERENCE_16')->references('IMG_ID')->on('tbl_img_instalacion');
            $table->foreign('INST_ID', 'FK_REFERENCE_17')->references('INST_ID')->on('tbl_instalaciones');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_insta_img');
    }
}
