import React, { useState } from 'react';
import {
   Modal,
   Button,
   Text,
   Input,
   Row,
   Checkbox,
   Container,
   Spacer,
   Grid,
} from '@nextui-org/react';
import { Flex } from '../styles/flex';
import { ClienteMayoristaForm } from '../../types/clientes';

interface Props {
   open: boolean;
   onClose: () => void;
   onSuccess?: () => void;
}

export const AddClienteMayorista = ({ open, onClose, onSuccess }: Props) => {
   const [formData, setFormData] = useState<ClienteMayoristaForm>({
      ruc: '',
      razonSocial: '',
      direccion: '',
      telefono1: '',
      telefono2: '',
      telefono3: '',
   });

   const [loading, setLoading] = useState(false);
   const [errors, setErrors] = useState<Partial<ClienteMayoristaForm>>({});

   const validateForm = (): boolean => {
      const newErrors: Partial<ClienteMayoristaForm> = {};

      // RUC validation (11 dígitos)
      if (!formData.ruc.trim()) {
         newErrors.ruc = 'RUC es requerido';
      } else if (!/^\d{11}$/.test(formData.ruc)) {
         newErrors.ruc = 'RUC debe tener exactamente 11 dígitos';
      }

      // Razón Social validation
      if (!formData.razonSocial.trim()) {
         newErrors.razonSocial = 'Razón Social es requerida';
      } else if (formData.razonSocial.trim().length < 3) {
         newErrors.razonSocial = 'Razón Social debe tener al menos 3 caracteres';
      }

      // Dirección validation
      if (!formData.direccion.trim()) {
         newErrors.direccion = 'Dirección es requerida';
      } else if (formData.direccion.trim().length < 5) {
         newErrors.direccion = 'Dirección debe tener al menos 5 caracteres';
      }

      // Teléfono 1 validation (requerido)
      if (!formData.telefono1.trim()) {
         newErrors.telefono1 = 'Al menos un teléfono es requerido';
      } else if (!/^\d{7,12}$/.test(formData.telefono1)) {
         newErrors.telefono1 = 'Teléfono debe tener entre 7 y 12 dígitos';
      }

      // Teléfono 2 validation (opcional)
      if (formData.telefono2 && !/^\d{7,12}$/.test(formData.telefono2)) {
         newErrors.telefono2 = 'Teléfono debe tener entre 7 y 12 dígitos';
      }

      // Teléfono 3 validation (opcional)
      if (formData.telefono3 && !/^\d{7,12}$/.test(formData.telefono3)) {
         newErrors.telefono3 = 'Teléfono debe tener entre 7 y 12 dígitos';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleInputChange = (field: keyof ClienteMayoristaForm, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
      
      // Limpiar error del campo cuando el usuario empiece a escribir
      if (errors[field]) {
         setErrors(prev => ({ ...prev, [field]: undefined }));
      }
   };

   const handleSubmit = async () => {
      if (!validateForm()) {
         return;
      }

      setLoading(true);

      try {
         // Simular llamada a API (aquí irá la implementación real)
         console.log('Datos del cliente mayorista a enviar:', formData);
         
         // Simular delay de API
         await new Promise(resolve => setTimeout(resolve, 1500));
         
         // Reset form
         setFormData({
            ruc: '',
            razonSocial: '',
            direccion: '',
            telefono1: '',
            telefono2: '',
            telefono3: '',
         });
         
         onSuccess?.();
         onClose();
         
         console.log('Cliente mayorista agregado exitosamente');
      } catch (error) {
         console.error('Error al agregar cliente mayorista:', error);
      } finally {
         setLoading(false);
      }
   };

   const handleClose = () => {
      setFormData({
         ruc: '',
         razonSocial: '',
         direccion: '',
         telefono1: '',
         telefono2: '',
         telefono3: '',
      });
      setErrors({});
      onClose();
   };

   return (
      <Modal
         closeButton
         aria-labelledby="modal-title"
         width="600px"
         open={open}
         onClose={handleClose}
      >
         <Modal.Header>
            <Text id="modal-title" h3 css={{ color: '#034F32' }}>
               Agregar Cliente Mayorista
            </Text>
         </Modal.Header>
         
         <Modal.Body>
            <Container css={{ p: 0 }}>
               <Grid.Container gap={2}>
                  {/* RUC */}
                  <Grid xs={12}>
                     <Input
                        clearable
                        fullWidth
                        color="success"
                        size="lg"
                        placeholder="Ingrese RUC (11 dígitos)"
                        label="RUC *"
                        value={formData.ruc}
                        onChange={(e) => handleInputChange('ruc', e.target.value)}
                        helperColor="error"
                        helperText={errors.ruc}
                        status={errors.ruc ? 'error' : 'default'}
                        maxLength={11}
                     />
                  </Grid>

                  {/* Razón Social */}
                  <Grid xs={12}>
                     <Input
                        clearable
                        fullWidth
                        color="success"
                        size="lg"
                        placeholder="Ingrese razón social de la empresa"
                        label="Razón Social *"
                        value={formData.razonSocial}
                        onChange={(e) => handleInputChange('razonSocial', e.target.value)}
                        helperColor="error"
                        helperText={errors.razonSocial}
                        status={errors.razonSocial ? 'error' : 'default'}
                        maxLength={100}
                     />
                  </Grid>

                  {/* Dirección */}
                  <Grid xs={12}>
                     <Input
                        clearable
                        fullWidth
                        color="success"
                        size="lg"
                        placeholder="Ingrese dirección completa"
                        label="Dirección *"
                        value={formData.direccion}
                        onChange={(e) => handleInputChange('direccion', e.target.value)}
                        helperColor="error"
                        helperText={errors.direccion}
                        status={errors.direccion ? 'error' : 'default'}
                        maxLength={200}
                     />
                  </Grid>

                  {/* Teléfonos */}
                  <Grid xs={12}>
                     <Text css={{ color: '#034F32', fontWeight: '$semibold', mb: '$2' }}>
                        Teléfonos de Contacto
                     </Text>
                  </Grid>

                  <Grid xs={12}>
                     <Input
                        clearable
                        fullWidth
                        color="success"
                        size="lg"
                        placeholder="Teléfono principal (7-12 dígitos)"
                        label="Teléfono 1 *"
                        value={formData.telefono1}
                        onChange={(e) => handleInputChange('telefono1', e.target.value)}
                        helperColor="error"
                        helperText={errors.telefono1}
                        status={errors.telefono1 ? 'error' : 'default'}
                        maxLength={12}
                     />
                  </Grid>

                  <Grid xs={6}>
                     <Input
                        clearable
                        fullWidth
                        color="success"
                        size="lg"
                        placeholder="Teléfono adicional (opcional)"
                        label="Teléfono 2"
                        value={formData.telefono2}
                        onChange={(e) => handleInputChange('telefono2', e.target.value)}
                        helperColor="error"
                        helperText={errors.telefono2}
                        status={errors.telefono2 ? 'error' : 'default'}
                        maxLength={12}
                     />
                  </Grid>

                  <Grid xs={6}>
                     <Input
                        clearable
                        fullWidth
                        color="success"
                        size="lg"
                        placeholder="Teléfono adicional (opcional)"
                        label="Teléfono 3"
                        value={formData.telefono3}
                        onChange={(e) => handleInputChange('telefono3', e.target.value)}
                        helperColor="error"
                        helperText={errors.telefono3}
                        status={errors.telefono3 ? 'error' : 'default'}
                        maxLength={12}
                     />
                  </Grid>
               </Grid.Container>
            </Container>
         </Modal.Body>

         <Modal.Footer>
            <Button 
               auto 
               flat 
               color="error" 
               onPress={handleClose}
               disabled={loading}
            >
               Cancelar
            </Button>
            <Button
               auto
               disabled={loading}
               css={{
                  backgroundColor: '#5CAC4C',
                  color: 'white',
                  '&:hover': {
                     backgroundColor: '#4A9C3C'
                  }
               }}
               onPress={handleSubmit}
            >
               {loading ? 'Agregando...' : 'Agregar Cliente'}
            </Button>
         </Modal.Footer>
      </Modal>
   );
};