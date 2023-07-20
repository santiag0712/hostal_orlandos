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
        Schema::create('tbl_depositos', function (Blueprint $table) {
            $table->integer('DEP_ID')->autoIncrement();
            $table->integer('RES_ID')->nullable();            
            $table->string('DEP_TRANSACCION',64)->nullable();
            $table->double ('DEP_CANTIDAD',10,2)->nullable();
            $table->integer('DEP_ESTADO')->nullable();
            $table->timestamps();

            $table->foreign('RES_ID', 'FK_REFERENCE_27')->references('RES_ID')->on('tbl_reservas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_depositos');
    }
};
