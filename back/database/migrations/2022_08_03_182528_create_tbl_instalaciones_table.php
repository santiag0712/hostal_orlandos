<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblInstalacionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_instalaciones', function (Blueprint $table) {
            $table->integer('INST_ID')->autoIncrement();
            $table->string('INST_NOMBRE', 50)->nullable();
            $table->string('INST_DESCIPCION', 150)->nullable();
            $table->integer('INST_NPERSONAS')->nullable();
            $table->double('INST_PRECIOPERSONA', 5, 2)->nullable();
            $table->integer('INST_ESTADO')->nullable();

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
        Schema::dropIfExists('tbl_instalaciones');
    }
}
