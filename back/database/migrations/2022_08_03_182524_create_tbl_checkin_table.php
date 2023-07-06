<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblCheckinTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_checkin', function (Blueprint $table) {
            $table->integer('HAB_ID')->nullable();
            $table->integer('CLI_ID')->nullable();
            $table->integer('RES_ID')->nullable();
            $table->integer('CHECK_ID')->autoIncrement();
            $table->double('CHECK_COSTO', 5, 2)->nullable();
            $table->integer('CHECK_ESTADO')->nullable();

            $table->timestamps();
            
            $table->foreign('HAB_ID', 'FK_REFERENCE_12')->references('HAB_ID')->on('tbl_habitacion');
            $table->foreign('CLI_ID', 'FK_REFERENCE_13')->references('CLI_ID')->on('tbl_clientes');
            $table->foreign('RES_ID', 'FK_REFERENCE_15')->references('RES_ID')->on('tbl_reservas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_checkin');
    }
}
