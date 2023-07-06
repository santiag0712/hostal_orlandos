<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_resenias', function (Blueprint $table) {
            $table->integer('RES_ID')->autoIncrement();
            $table->string('RES_NOMBRE',100)->nullable();
            $table->string('RES_APELLIDOS',100)->nullable();
            $table->string('RES_CORREO',100)->nullable();
            $table->string('RES_TEXTO', 1024)->nullable();            
            $table->integer('RES_ESTADO')->nullable();
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
        Schema::dropIfExists('tbl_resenias');
    }
};
