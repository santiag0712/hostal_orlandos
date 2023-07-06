<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Usuario;

class ConfirmacionCorreo extends Mailable
{
    use Queueable, SerializesModels;
    public Usuario $usuario;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Usuario $usuario)
    {
        $this->usuario = $usuario;
    }

    public function build()
    {
        return $this->view('emails.confirmacion_registro_usuario')
                    
                    ->subject('Confirmación de registro');
    }
}
