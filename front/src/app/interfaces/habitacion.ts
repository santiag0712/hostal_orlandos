export interface Habitaciones {
    ESTHAB_ID: number;
    HAB_ESTADO: number;
    HAB_ID?:number;
    HAB_NOMBRE: string;
    PISO_ID?: number;
    TIPHAB_COSTO: number;
    TIPHAB_DESCRIPCION: string;
    TIPHAB_ESTADO: number;
    TIPHAB_ID?: number;
    TIPHAB_NOMBRE: string;
    created_at?: string;
    updated_at?: string;
}

export interface Pisos{
    PISO_ID?:number;
    PISO_NUMERO: string;
}

export interface Estados{
    ESTHAB_ID?:number;
    ESTHAB_NOMBRE: string;
    ESTHAB_ESTADO: number;
}