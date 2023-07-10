<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tbl_tipo_habitacion', function (Blueprint $table) {
            $table->integer('TIPHAB_CAPACIDAD')->nullable()->after('TIPHAB_COSTO');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tbl_tipo_habitacion', function (Blueprint $table) {
            $table->dropColumn('TIPHAB_CAPACIDAD');
        });
    }
};
