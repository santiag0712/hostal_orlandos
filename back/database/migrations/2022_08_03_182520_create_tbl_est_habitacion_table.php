<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblEstHabitacionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_est_habitacion', function (Blueprint $table) {
            $table->integer('ESTHAB_ID')->autoIncrement();
            $table->string('ESTHAB_NOMBRE', 25)->nullable();
            $table->integer('ESTHAB_ESTADO')->nullable();

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
        Schema::dropIfExists('tbl_est_habitacion');
    }
}
