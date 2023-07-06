<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblPrudctosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_prudctos', function (Blueprint $table) {
            $table->integer('PROD_ID')->autoIncrement();
            $table->string('PROD_NOMBRE', 40)->nullable();
            $table->double('PROD_PRECIO', 5,2)->nullable();
            $table->integer('PROD_CANTIDAD')->nullable();
            $table->integer('PROD_ESTADO')->nullable();

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
        Schema::dropIfExists('tbl_prudctos');
    }
}
