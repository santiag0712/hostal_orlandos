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
            $table->double('TIPHAB_COSTO',5,5)->nullable()->after('TIPHAB_DESCRIPCION');
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
            $table->dropColumn('TIPHAB_COSTO');
        });
    }
};
