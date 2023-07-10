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
        Schema::create('tbl_reservacion_habitacion', function (Blueprint $table) {
            $table->integer('RESHAB_ID')->autoIncrement();
            $table->integer('RES_ID')->nullable();
            $table->integer('TIPHAB_ID')->nullable();
            $table->integer('RESHAB_ESTADO')->nullable();
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
        Schema::dropIfExists('tbl_reservacion_habitacion');
    }
};
