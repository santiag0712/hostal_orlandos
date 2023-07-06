<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_clientes', function (Blueprint $table) {
            $table->integer('CLI_ID')->autoIncrement();
            $table->string('CLI_NOMBRE', 75)->nullable();
            $table->string('CLI_APELLIDOS', 75)->nullable();
            $table->string('CLI_NACIONALIDAD', 50)->nullable();
            $table->string('CLI_IDENTIFI', 30)->nullable();
            $table->string('CLI_DIRECCION', 100)->nullable();
            $table->string('CLI_TELEFONO', 30)->nullable();
            $table->string('CLI_CORREO', 75)->nullable();
            $table->integer('CLI_ESTADO')->nullable();

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
        Schema::dropIfExists('tbl_clientes');
    }
}
