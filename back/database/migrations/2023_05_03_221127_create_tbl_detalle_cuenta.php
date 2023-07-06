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
        Schema::create('tbl_detalle_cuenta', function (Blueprint $table) {
            $table->integer('DET_ID')->autoIncrement();
            $table->integer('PROD_ID')->nullable();
            $table->integer('CHECK_ID')->nullable();            
            $table->integer('CUENT_ID')->nullable();
            $table->double('DET_SUBTOTAL', 5,2)->nullable();
            $table->integer('DET_ESTADO')->nullable();

            $table->timestamps();
            
            $table->foreign('PROD_ID', 'FK_REFERENCE_11')->references('PROD_ID')->on('tbl_prudctos');
            $table->foreign('CHECK_ID', 'FK_REFERENCE_14')->references('CHECK_ID')->on('tbl_checkin');
            $table->foreign('CUENT_ID', 'FK_REFERENCE_21')->references('CUENT_ID')->on('tbl_cuenta');
        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_detalle_cuenta');
    }
};
