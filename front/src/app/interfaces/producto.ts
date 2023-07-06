export interface  Productos{
    PROD_ID?: number;
    PROD_NOMBRE: string;
    PROD_PRECIO: number;
    PROD_CANTIDAD: number;
    COMP_VENT_STOCK: number;
    PROD_ESTADO?: number;
    created_at?:string;
    updated_at?:string;
}

export interface Acciones{
    ACC_ID: number;
    ACC_NOMBRE: string;
    ACC_ESTADO: number;
}

