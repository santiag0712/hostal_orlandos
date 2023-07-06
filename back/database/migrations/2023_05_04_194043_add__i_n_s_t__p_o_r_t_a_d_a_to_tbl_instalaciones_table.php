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
        Schema::table('tbl_instalaciones', function (Blueprint $table) {
            $table->string('INST_PORTADA',255)->nullable()->after('INST_DESCIPCION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tbl_instalaciones', function (Blueprint $table) {
            $table->dropColumn('INST_PORTADA');
        });
    }
};
