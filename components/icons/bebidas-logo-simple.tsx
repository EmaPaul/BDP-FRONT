import React from 'react';
import {Svg} from '../styles/svg';

export const BebidasLogoSimple = () => {
   return (
      <Svg
         width="42"
         height="42"
         viewBox="0 0 56 56"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         css={{
            '& rect': {
               fill: '$background',
               stroke: '$border',
            },
            '& path': {
               fill: '$accents7',
            },
         }}
      >
         <rect x="0.5" y="0.5" width="55" height="55" rx="7.5" />
         {/* Logo de botella simplificado */}
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28 16C28 15.4 28.4 15 29 15H27C26.6 15 26 15.4 26 16V20C25 20.5 24 21.5 24 23V40C24 41.5 25.5 43 27 43H29C30.5 43 32 41.5 32 40V23C32 21.5 31 20.5 30 20V16ZM28 18V20H28V18ZM26 25H30V38H26V25ZM27 27H29V29H27V27ZM27 31H29V33H27V31ZM27 35H29V37H27V35Z"
            fill="#0070F3"
         />
         {/* Etiqueta */}
         <rect x="26" y="25" width="4" height="13" rx="0.5" fill="#FFD700" fillOpacity="0.7"/>
         {/* Texto BDP simplificado */}
         <path d="M27.2 28H27.8V29.5H27.2V28Z M28.2 28H28.8V29.5H28.2V28Z" fill="#003366"/>
      </Svg>
   );
};