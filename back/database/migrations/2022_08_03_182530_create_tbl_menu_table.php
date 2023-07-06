<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblMenuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_menu', function (Blueprint $table) {
            $table->integer('MENU_ID')->autoIncrement();
            $table->string('MENU_NOMBRE', 30)->nullable();
            $table->string('MENU_ICONO', 50)->nullable();
            $table->string('MENU_ENLACE', 100)->nullable();
            $table->integer('MENU_ESTADO')->nullable();

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
        Schema::dropIfExists('tbl_menu');
    }
}
