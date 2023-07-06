<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblUsuarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_usuario', function (Blueprint $table) {
            $table->integer('USU_ID')->autoIncrement();
            $table->integer('ROL_ID')->nullable();
            $table->string('USU_NOMBRE', 50)->nullable();
            $table->string('USU_APELLIDO', 50)->nullable();
            $table->string('USU_CORREO', 50)->nullable();
            $table->string('USU_USUARIO', 30)->nullable();
            $table->string('USU_CLAVE', 30)->nullable();
            $table->string('USU_IMAGEN', 100)->nullable();
            $table->integer('USU_ESTADO')->nullable();

            $table->timestamps();
            
            $table->foreign('ROL_ID', 'FK_REFERENCE_1')->references('ROL_ID')->on('tbl_rol')
                    ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_usuario');
    }
}
