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
        Schema::create('tbl_compra_ventas_producto', function (Blueprint $table) {
            $table->integer('COMP_VENT_ID')->autoIncrement();
            $table->integer('PROD_ID')->nullable();
            $table->integer('ACC_ID')->nullable();            
            $table->integer('COMP_VENT_CANTIDAD')->nullable();
            $table->integer('COMP_VENT_STOCK')->nullable();
            $table->integer('COMP_VENT_ESTADO')->nullable();

            $table->timestamps();
            
            $table->foreign('PROD_ID', 'FK_REFERENCE_22')->references('PROD_ID')->on('tbl_prudctos');
            $table->foreign('ACC_ID', 'FK_REFERENCE_23')->references('ACC_ID')->on('tbl_accion');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_compra_ventas_producto');   
    }
};
