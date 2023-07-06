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
        Schema::table('tbl_prudctos', function (Blueprint $table) {
            $table->integer('COMP_VENT_ID')->nullable()->after('PROD_PRECIO'); 

            $table->foreign('COMP_VENT_ID', 'FK_REFERENCE_25')->references('COMP_VENT_ID')->on('tbl_compra_ventas_producto');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('COMP_VENT_ID');
        });
    }
};
