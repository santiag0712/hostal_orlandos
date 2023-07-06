<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblRolMenuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_rol_menu', function (Blueprint $table) {
            $table->integer('ROL_MEN_ID')->autoIncrement();
            $table->integer('ROL_ID')->nullable();
            $table->integer('MENU_ID')->nullable();
            $table->integer('ROL_MEN_ESTADO')->nullable();

            $table->timestamps();
            
            $table->foreign('ROL_ID', 'FK_REFERENCE_18')->references('ROL_ID')->on('tbl_rol');
            $table->foreign('MENU_ID', 'FK_REFERENCE_19')->references('MENU_ID')->on('tbl_menu');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_rol_menu');
    }
}
