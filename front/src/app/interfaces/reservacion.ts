export interface Reservaciones{
    RES_ID?:number;
    CLI_ID:number;
    RES_DIA:number;
    RES_MES:number;
    RES_ANO:number;
    RES_NDIAS:number;
    RES_NPERSONAS:number;
    RES_VEHICULO:number;
    RES_OBSERVACION:string;
    RES_ESTADO:number;
}

export interface Clientes{
    CLI_ID?: number;
    CLI_NOMBRE: string;
    CLI_APELLIDOS: string;
    CLI_NACIONALIDAD: string;
    CLI_IDENTIFI: string;
    CLI_DIRECCION: string;
    CLI_TELEFONO: string;
    CLI_CORREO: string;
    CLI_ESTADO: number;
}