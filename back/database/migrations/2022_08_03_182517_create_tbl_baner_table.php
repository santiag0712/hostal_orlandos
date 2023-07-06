<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblBanerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_baner', function (Blueprint $table) {
            $table->integer('BAN_ID')->autoIncrement();
            $table->string('BAN_TITULO', 30)->nullable();
            $table->string('BAN_DESCRIPCION', 150)->nullable();
            $table->string('BAN_IMAGEN', 200)->nullable();
            $table->string('BAN_ESTADO', 1)->nullable();
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
        Schema::dropIfExists('tbl_baner');
    }
}
