<?php

namespace App\Mail;

use App\Models\Cliente;
use App\Models\Depositos;
use App\Models\Reserva;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ConfirmacionDeposito extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $deposito;
    public Cliente $cliente;
    public function __construct(Depositos $deposito)
    {
        $this->deposito = $deposito;
        $reserva = Reserva::findOrFail($deposito->RES_ID);

        // Obtener un cliente específico de la reserva
        $this->cliente = $reserva->clientes()->first();
    }


    public function build()
    {
        return $this->view('emails.confirmar_deposito')
            ->with([
                'reservacion' => $this->deposito->RES_ID,
                'nombre' => $this->cliente->CLI_NOMBRE . " " . $this->cliente->CLI_APELLIDOS,
                'cedula'=> $this->cliente->CLI_IDENTIFI
            ])
            ->subject('Confirmación registro de deposito');
    }
}
