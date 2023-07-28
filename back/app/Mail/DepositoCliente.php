<?php

namespace App\Mail;

use App\Models\Cliente;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DepositoCliente extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public Cliente $cliente;
    public function __construct(Cliente $cliente)
    {
        $this->cliente = $cliente;
    }

    public function build()
    {
        return $this->view('emails.confirmar_deposito_cliente')
            ->with([
                
                'nombre' => $this->cliente->CLI_NOMBRE . " " . $this->cliente->CLI_APELLIDOS,
                'cedula'=> $this->cliente->CLI_IDENTIFI
            ])
            ->subject('Confirmación registro de deposito');
    }

}
