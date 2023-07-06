export interface Usuario{
    USU_ID?: number;
    ROL_ID: number;
    USU_NOMBRE: string;
    USU_APELLIDO: string;
    USU_CORREO: string;
    USU_USUARIO: string;
    USU_CLAVE: string;
    USU_CLAVE_confirmation?: string;
    USU_IMAGEN: string;
    USU_ESTADO: number;
    updated_at?: string;
    created_at?: string;
};