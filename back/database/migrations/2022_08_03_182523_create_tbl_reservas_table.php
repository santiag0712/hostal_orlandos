<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblReservasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_reservas', function (Blueprint $table) {
            $table->integer('RES_ID')->autoIncrement();
            $table->integer('CLI_ID')->nullable();
            $table->integer('RES_DIA')->nullable();
            $table->integer('RES_MES')->nullable();
            $table->integer('RES_ANO')->nullable();
            $table->integer('RES_NDIAS')->nullable();
            $table->integer('RES_NPERSONAS')->nullable();
            $table->integer('RES_VEHICULO')->nullable();
            $table->string('RES_OBSERVACION', 100)->nullable();
            $table->integer('RES_ESTADO')->nullable();

            $table->timestamps();
            
            $table->foreign('CLI_ID', 'FK_REFERENCE_9')->references('CLI_ID')->on('tbl_clientes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_reservas');
    }
}
