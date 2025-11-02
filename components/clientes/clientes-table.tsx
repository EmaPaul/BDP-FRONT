import React, { useState } from 'react';
import {
   Table,
   Button,
   Tooltip,
   Text,
   Badge,
   Input,
   Dropdown,
   Grid,
   Spacer,
   Card,
} from '@nextui-org/react';
import { Flex } from '../styles/flex';
import { Cliente, TipoCliente, ClienteMayorista, ClienteMinorista } from '../../types/clientes';
import { EditIcon } from '../icons/table/edit-icon';
import { DeleteIcon } from '../icons/table/delete-icon';
import { EyeIcon } from '../icons/table/eye-icon';

interface Props {
   tipoCliente: TipoCliente;
}

export const ClientesTable = ({ tipoCliente }: Props) => {
   // Datos de ejemplo (en el futuro vendrá de la API)
   const [clientesMayoristas] = useState<ClienteMayorista[]>([
      {
         id: '1',
         tipo: 'mayorista',
         ruc: '20123456789',
         razonSocial: 'Distribuidora Lima SAC',
         direccion: 'Av. Los Precursores 123, San Isidro, Lima',
         telefonos: ['014567890', '987654321'],
         estado: 'Activo',
         fechaCreacion: '2024-01-15',
      },
      {
         id: '2',
         tipo: 'mayorista',
         ruc: '20987654321',
         razonSocial: 'Comercial Arequipa EIRL',
         direccion: 'Calle Mercaderes 456, Cercado, Arequipa',
         telefonos: ['054123456', '987123456', '945678901'],
         estado: 'Activo',
         fechaCreacion: '2024-02-10',
      },
      {
         id: '3',
         tipo: 'mayorista',
         ruc: '20456789123',
         razonSocial: 'Inversiones Trujillo SA',
         direccion: 'Jr. Pizarro 789, Trujillo, La Libertad',
         telefonos: ['044789012'],
         estado: 'Inactivo',
         fechaCreacion: '2024-01-05',
      },
   ]);

   const [clientesMinoristas] = useState<ClienteMinorista[]>([
      {
         id: '4',
         tipo: 'minorista',
         dni: '12345678',
         nombres: 'Juan Carlos',
         apellidos: 'Pérez García',
         direccion: 'Av. Brasil 1234, Jesús María, Lima',
         telefonos: ['987654321', '014567890'],
         estado: 'Activo',
         fechaCreacion: '2024-03-01',
      },
      {
         id: '5',
         tipo: 'minorista',
         dni: '87654321',
         nombres: 'María Elena',
         apellidos: 'Rodríguez López',
         direccion: 'Calle Las Flores 567, Miraflores, Lima',
         telefonos: ['987123456'],
         estado: 'Activo',
         fechaCreacion: '2024-03-05',
      },
      {
         id: '6',
         tipo: 'minorista',
         dni: '11223344',
         nombres: 'Carlos Alberto',
         apellidos: 'González Vargas',
         direccion: 'Jr. Los Olivos 890, San Miguel, Lima',
         telefonos: ['987789012', '014123456', '945678901'],
         estado: 'Inactivo',
         fechaCreacion: '2024-02-20',
      },
   ]);

   const getClientesData = () => {
      return tipoCliente === TipoCliente.MAYORISTA ? clientesMayoristas : clientesMinoristas;
   };

   const handleEdit = (cliente: Cliente) => {
      console.log('Editar cliente:', cliente);
   };

   const handleDelete = (cliente: Cliente) => {
      console.log('Eliminar cliente:', cliente);
   };

   const handleView = (cliente: Cliente) => {
      console.log('Ver detalles del cliente:', cliente);
   };

   const renderCell = (cliente: Cliente, columnKey: React.Key) => {
      const cellValue = cliente[columnKey as keyof Cliente];

      switch (columnKey) {
         case 'identificacion':
            return (
               <Text css={{ fontSize: '$sm', fontWeight: '$semibold' }}>
                  {cliente.tipo === 'mayorista' 
                     ? (cliente as ClienteMayorista).ruc
                     : (cliente as ClienteMinorista).dni
                  }
               </Text>
            );

         case 'nombre':
            return (
               <Flex direction="column">
                  <Text css={{ fontSize: '$sm', fontWeight: '$semibold', color: '#034F32' }}>
                     {cliente.tipo === 'mayorista' 
                        ? (cliente as ClienteMayorista).razonSocial
                        : `${(cliente as ClienteMinorista).nombres} ${(cliente as ClienteMinorista).apellidos}`
                     }
                  </Text>
                  <Text css={{ fontSize: '$xs', color: '$accents7' }}>
                     {cliente.tipo === 'mayorista' ? 'Empresa' : 'Persona Natural'}
                  </Text>
               </Flex>
            );

         case 'direccion':
            return (
               <Text css={{ fontSize: '$sm', maxWidth: '300px' }}>
                  {cliente.direccion}
               </Text>
            );

         case 'telefonos':
            return (
               <Flex direction="column" css={{ gap: '$1' }}>
                  {cliente.telefonos.map((telefono, index) => (
                     <Text key={index} css={{ fontSize: '$xs' }}>
                        {telefono}
                     </Text>
                  ))}
               </Flex>
            );

         case 'estado':
            return (
               <Badge 
                  color={cliente.estado === 'Activo' ? 'success' : 'error'}
                  variant="flat"
                  size="sm"
               >
                  {cliente.estado}
               </Badge>
            );

         case 'fechaCreacion':
            return (
               <Text css={{ fontSize: '$sm' }}>
                  {new Date(cliente.fechaCreacion || '').toLocaleDateString('es-PE')}
               </Text>
            );

         case 'acciones':
            return (
               <Flex css={{ gap: '$2' }}>
                  <Tooltip content="Ver detalles" color="primary">
                     <Button 
                        auto 
                        light 
                        size="sm" 
                        css={{ minWidth: 'auto', p: '$2' }}
                        onPress={() => handleView(cliente)}
                     >
                        <EyeIcon size={16} fill="#979797" />
                     </Button>
                  </Tooltip>
                  
                  <Tooltip content="Editar cliente" color="success">
                     <Button 
                        auto 
                        light 
                        size="sm" 
                        css={{ minWidth: 'auto', p: '$2' }}
                        onPress={() => handleEdit(cliente)}
                     >
                        <EditIcon size={16} fill="#979797" />
                     </Button>
                  </Tooltip>
                  
                  <Tooltip content="Eliminar cliente" color="error">
                     <Button 
                        auto 
                        light 
                        size="sm" 
                        css={{ minWidth: 'auto', p: '$2' }}
                        onPress={() => handleDelete(cliente)}
                     >
                        <DeleteIcon size={16} fill="#FF0080" />
                     </Button>
                  </Tooltip>
               </Flex>
            );

         default:
            return cellValue;
      }
   };

   const columnasMayorista = [
      { name: 'RUC', uid: 'identificacion' },
      { name: 'Razón Social', uid: 'nombre' },
      { name: 'Dirección', uid: 'direccion' },
      { name: 'Teléfonos', uid: 'telefonos' },
      { name: 'Estado', uid: 'estado' },
      { name: 'Fecha Registro', uid: 'fechaCreacion' },
      { name: 'Acciones', uid: 'acciones' },
   ];

   const columnasMinorista = [
      { name: 'DNI', uid: 'identificacion' },
      { name: 'Nombres y Apellidos', uid: 'nombre' },
      { name: 'Dirección', uid: 'direccion' },
      { name: 'Teléfonos', uid: 'telefonos' },
      { name: 'Estado', uid: 'estado' },
      { name: 'Fecha Registro', uid: 'fechaCreacion' },
      { name: 'Acciones', uid: 'acciones' },
   ];

   const columnas = tipoCliente === TipoCliente.MAYORISTA ? columnasMayorista : columnasMinorista;
   const clientes = getClientesData();

   return (
      <Card css={{ p: '$6' }}>
         {/* Header con filtros */}
         <Flex justify="between" align="center" css={{ mb: '$4' }}>
            <Text h4 css={{ color: '#034F32' }}>
               {tipoCliente === TipoCliente.MAYORISTA 
                  ? 'Clientes Mayoristas' 
                  : 'Clientes Minoristas'
               } ({clientes.length})
            </Text>
            
            <Grid.Container gap={1} css={{ maxWidth: '400px' }}>
               <Grid xs={12}>
                  <Input
                     clearable
                     placeholder="Buscar clientes..."
                     color="success"
                     size="sm"
                     css={{ width: '100%' }}
                  />
               </Grid>
            </Grid.Container>
         </Flex>

         {/* Tabla */}
         <Table
            aria-label={`Tabla de ${tipoCliente}`}
            css={{
               height: 'auto',
               minWidth: '100%',
               '& .nextui-table-header': {
                  backgroundColor: '#F1F1E9',
               },
               '& .nextui-table-header th': {
                  color: '#034F32',
                  fontWeight: '$semibold',
               },
               '& .nextui-table-row:hover': {
                  backgroundColor: '#F9F9F9',
               }
            }}
            selectionMode="none"
         >
            <Table.Header columns={columnas}>
               {(column) => (
                  <Table.Column key={column.uid} align={column.uid === 'acciones' ? 'center' : 'start'}>
                     {column.name}
                  </Table.Column>
               )}
            </Table.Header>
            
            <Table.Body>
               {clientes.map((item) => (
                  <Table.Row key={item.id}>
                     {(columnKey) => (
                        <Table.Cell>
                           {renderCell(item, columnKey)}
                        </Table.Cell>
                     )}
                  </Table.Row>
               ))}
            </Table.Body>
         </Table>

         {clientes.length === 0 && (
            <Flex justify="center" align="center" css={{ py: '$10' }}>
               <Text css={{ color: '$accents7', textAlign: 'center' }}>
                  No hay clientes {tipoCliente} registrados aún.
                  <br />
                  ¡Agrega el primero usando el botón de arriba!
               </Text>
            </Flex>
         )}
      </Card>
   );
};