import React, { useState } from 'react';
import { Card, Button, Spacer, Text, Grid } from '@nextui-org/react';
import { Flex } from '../styles/flex';
import { TipoCliente } from '../../types/clientes';
import { AddClienteMayorista } from './add-cliente-mayorista';
import { AddClienteMinorista } from './add-cliente-minorista';
import { ClientesTable } from './clientes-table';

export const ClientesContent = () => {
   const [activeTab, setActiveTab] = useState<TipoCliente>(TipoCliente.MAYORISTA);
   const [showAddModal, setShowAddModal] = useState(false);

   // Datos de ejemplo para estadísticas (en el futuro vendrá de la API)
   const stats = {
      totalClientes: 156,
      clientesMayoristas: 89,
      clientesMinoristas: 67,
      clientesActivos: 142
   };

   const handleAddCliente = () => {
      setShowAddModal(true);
   };

   const handleCloseModal = () => {
      setShowAddModal(false);
   };

   const handleTabChange = (tipo: TipoCliente) => {
      setActiveTab(tipo);
   };

   return (
      <Flex
         css={{
            mt: '$5',
            px: '$6',
            '@sm': {
               mt: '$10',
               px: '$16',
            },
         }}
         justify={'center'}
         direction={'column'}
      >
         <Flex justify="between" align="center">
            <Text h3 css={{ color: '#034F32', fontWeight: 'bold' }}>
               Gestión de Clientes
            </Text>
         </Flex>
         
         <Spacer y={1} />

         {/* Tarjetas de estadísticas */}
         <Grid.Container gap={2} justify="center">
            <Grid xs={6} md={3}>
               <Card css={{ backgroundColor: '#F1F1E9', p: '$6', w: '100%' }}>
                  <Card.Body>
                     <Text css={{ color: '#034F32', fontSize: '2rem', fontWeight: 'bold' }}>
                        {stats.totalClientes}
                     </Text>
                     <Text css={{ color: '#034F32', fontSize: '0.9rem' }}>
                        Total Clientes
                     </Text>
                  </Card.Body>
               </Card>
            </Grid>
            <Grid xs={6} md={3}>
               <Card css={{ backgroundColor: '#C8ECC9', p: '$6', w: '100%' }}>
                  <Card.Body>
                     <Text css={{ color: '#034F32', fontSize: '2rem', fontWeight: 'bold' }}>
                        {stats.clientesMayoristas}
                     </Text>
                     <Text css={{ color: '#034F32', fontSize: '0.9rem' }}>
                        Mayoristas
                     </Text>
                  </Card.Body>
               </Card>
            </Grid>
            <Grid xs={6} md={3}>
               <Card css={{ backgroundColor: '#F8D7DA', p: '$6', w: '100%' }}>
                  <Card.Body>
                     <Text css={{ color: '#034F32', fontSize: '2rem', fontWeight: 'bold' }}>
                        {stats.clientesMinoristas}
                     </Text>
                     <Text css={{ color: '#034F32', fontSize: '0.9rem' }}>
                        Minoristas
                     </Text>
                  </Card.Body>
               </Card>
            </Grid>
            <Grid xs={6} md={3}>
               <Card css={{ backgroundColor: '#034F32', p: '$6', w: '100%' }}>
                  <Card.Body>
                     <Text css={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
                        {stats.clientesActivos}
                     </Text>
                     <Text css={{ color: 'white', fontSize: '0.9rem' }}>
                        Activos
                     </Text>
                  </Card.Body>
               </Card>
            </Grid>
         </Grid.Container>

         <Spacer y={2} />

         {/* Selector de tipo y botón de agregar */}
         <Flex justify="between" align="center" css={{ flexWrap: 'wrap', gap: '$4' }}>
            <Flex css={{ gap: '$2' }}>
               <Button 
                  auto 
                  flat={activeTab !== TipoCliente.MAYORISTA}
                  css={{
                     backgroundColor: activeTab === TipoCliente.MAYORISTA ? '#5CAC4C' : 'transparent',
                     color: activeTab === TipoCliente.MAYORISTA ? 'white' : '#034F32',
                     border: '2px solid #5CAC4C',
                     '&:hover': {
                        backgroundColor: activeTab === TipoCliente.MAYORISTA ? '#4A9C3C' : '#F1F1E9'
                     }
                  }}
                  onPress={() => handleTabChange(TipoCliente.MAYORISTA)}
               >
                  Clientes Mayoristas ({stats.clientesMayoristas})
               </Button>
               <Button 
                  auto 
                  flat={activeTab !== TipoCliente.MINORISTA}
                  css={{
                     backgroundColor: activeTab === TipoCliente.MINORISTA ? '#5CAC4C' : 'transparent',
                     color: activeTab === TipoCliente.MINORISTA ? 'white' : '#034F32',
                     border: '2px solid #5CAC4C',
                     '&:hover': {
                        backgroundColor: activeTab === TipoCliente.MINORISTA ? '#4A9C3C' : '#F1F1E9'
                     }
                  }}
                  onPress={() => handleTabChange(TipoCliente.MINORISTA)}
               >
                  Clientes Minoristas ({stats.clientesMinoristas})
               </Button>
            </Flex>
            
            <Button
               auto
               css={{
                  backgroundColor: '#5CAC4C',
                  color: 'white',
                  '&:hover': {
                     backgroundColor: '#4A9C3C'
                  }
               }}
               onPress={handleAddCliente}
            >
               Agregar Cliente {activeTab === TipoCliente.MAYORISTA ? 'Mayorista' : 'Minorista'}
            </Button>
         </Flex>

         <Spacer y={1.5} />

         {/* Tabla de clientes */}
         <ClientesTable tipoCliente={activeTab} />

         {/* Modales de agregar clientes */}
         {showAddModal && activeTab === TipoCliente.MAYORISTA && (
            <AddClienteMayorista 
               open={showAddModal} 
               onClose={handleCloseModal}
            />
         )}
         
         {showAddModal && activeTab === TipoCliente.MINORISTA && (
            <AddClienteMinorista 
               open={showAddModal} 
               onClose={handleCloseModal}
            />
         )}
      </Flex>
   );
};