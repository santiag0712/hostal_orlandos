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
        Schema::table('tbl_detalle_cuenta', function (Blueprint $table) {
            $table->integer('DET_CANTIDAD')->nullable()->after('DET_ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tbl_detalle_cuenta', function (Blueprint $table) {
            $table->dropColumn('DET_CANTIDAD');
        });
    }
};
