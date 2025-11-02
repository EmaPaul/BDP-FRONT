import {globalCss} from '@nextui-org/react';

export const globalStyles = globalCss({
   ':root': {
      // Colores personalizados Bebidas del Perú
      '--bdp-primary': '#034F32',
      '--bdp-active': '#C8ECC9', 
      '--bdp-hover': '#F1F1E9',
      '--bdp-success': '#5CAC4C',
      '--bdp-light': '#E8F5E8',
   },
   
   body: {
      fontFamily: 'Inter, sans-serif',
      color: '#034F32',
   },
   
   // Estilos globales para texto principal
   'h1, h2, h3, h4, h5, h6': {
      color: '#034F32 !important',
   },
   
   // Iconos principales
   'svg, .icon': {
      color: '#034F32',
   }
});
