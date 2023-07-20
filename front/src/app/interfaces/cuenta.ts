
export interface Detalles{
    DET_ID?:number;
    PROD_ID?:number;
    CHECK_ID?:number;
    CUENT_ID?:number;
    DET_SUBTOTAL:number;
    DET_ESTADO:number;
    created_at?:string;
    updated_at?:string;
}

export interface Cuentas{
    CUENT_ID?:number;
    CLI_ID:number;
    CUENT_TOTAL:number;
    CUENT_ESTADO:number;
    CLI_NOMBRE: string;
    CLI_APELLIDOS: string;
    CLI_IDENTIFI: string;
    created_at?:string;
    updated_at?:string;
}

export interface Check{
    CHECK_ID?:number;
    CLI_ID:number;
    RES_ID:number;
    HAB_ID:number;
    CHECK_COSTO:number;
    CHECK_ESTADO:number;
    created_at?:string;
    updated_at?:string;
}

export interface Productos{
    PROD_ID?:number;
    PROD_NOMBRE:string;
    PROD_PRECIO:number;
    PROD_CANTIDAD:number;
    PROD_ESTADO:number;
    created_at?:string;
    updated_at?:string;
}

export interface Cliente{
    CLI_APELLIDOS: string;
    CLI_ID : number;
    CLI_IDENTIFI : string;
    CLI_NOMBRE: string;
    CLI_TELEFONO: string;
    CLI_DIRECCION : string;
    CUENT_ESTADO: number;
    CUENT_ID:number;
    CUENT_TOTAL:number;
    created_at:string;
    updated_at:string;
}