<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblHabitacionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_habitacion', function (Blueprint $table) {
            $table->integer('HAB_ID')->autoIncrement();
            $table->integer('PISO_ID')->nullable();
            $table->integer('TIPHAB_ID')->nullable();
            $table->integer('ESTHAB_ID')->nullable();
            $table->string('HAB_NOMBRE', 50)->nullable();
            $table->integer('HAB_ESTADO')->nullable();

            $table->timestamps();
            
            $table->foreign('TIPHAB_ID', 'FK_REFERENCE_6')->references('TIPHAB_ID')->on('tbl_tipo_habitacion');
            $table->foreign('PISO_ID', 'FK_REFERENCE_7')->references('PISO_ID')->on('tbl_piso');
            $table->foreign('ESTHAB_ID', 'FK_REFERENCE_8')->references('ESTHAB_ID')->on('tbl_est_habitacion');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_habitacion');
    }
}
