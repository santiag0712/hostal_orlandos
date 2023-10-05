<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Cliente;
use App\Models\Reserva;

class CancelarReservacion extends Mailable
{
    use Queueable, SerializesModels;
    public Cliente $cliente;
    public Reserva $reserva;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Cliente $cliente, Reserva $reserva)
    {
        $this->cliente = $cliente;
        $this->reserva = $reserva;
    }

    public function build(){
        return $this->view('emails.cancelar_reservacion')
                    
                    ->subject('Cancelación de reservación');
    }

   
}
