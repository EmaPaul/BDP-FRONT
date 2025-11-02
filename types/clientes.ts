// Interfaces para la gestión de clientes
export interface ClienteBase {
   id?: string;
   direccion: string;
   telefonos: string[]; // Hasta 3 números de teléfono
   fechaCreacion?: string;
   fechaActualizacion?: string;
   estado?: 'Activo' | 'Inactivo';
}

export interface ClienteMayorista extends ClienteBase {
   tipo: 'mayorista';
   ruc: string;
   razonSocial: string;
}

export interface ClienteMinorista extends ClienteBase {
   tipo: 'minorista';
   dni: string;
   nombres: string;
   apellidos: string;
}

export type Cliente = ClienteMayorista | ClienteMinorista;

// Interfaces para formularios
export interface ClienteMayoristaForm {
   ruc: string;
   razonSocial: string;
   direccion: string;
   telefono1: string;
   telefono2?: string;
   telefono3?: string;
}

export interface ClienteMinoristaForm {
   dni: string;
   nombres: string;
   apellidos: string;
   direccion: string;
   telefono1: string;
   telefono2?: string;
   telefono3?: string;
}

// Enum para tipos de cliente
export enum TipoCliente {
   MAYORISTA = 'mayorista',
   MINORISTA = 'minorista'
}

// Interface para estadísticas
export interface EstadisticasClientes {
   totalClientes: number;
   clientesMayoristas: number;
   clientesMinoristas: number;
   clientesActivos: number;
}

// Interface para filtros
export interface FiltrosClientes {
   tipo?: TipoCliente;
   estado?: 'Activo' | 'Inactivo';
   busqueda?: string;
}