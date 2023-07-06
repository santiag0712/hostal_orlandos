<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblCuentaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_cuenta', function (Blueprint $table) {
            $table->integer('CUENT_ID')->autoIncrement();
            $table->integer('CLI_ID')->nullable();
            $table->double('CUENT_TOTAL', 5, 2)->nullable();
            $table->integer('CUENT_ESTADO')->nullable();

            $table->timestamps();
            
            $table->foreign('CLI_ID', 'FK_REFERENCE_10')->references('CLI_ID')->on('tbl_clientes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_cuenta');
    }
}
