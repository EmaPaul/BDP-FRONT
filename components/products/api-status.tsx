import React from 'react';
import {Badge, Text, Loading} from '@nextui-org/react';
import {Flex} from '../styles/flex';

interface APIStatusProps {
   isConnected: boolean;
   isLoading?: boolean;
   lastUpdated?: Date;
}

export const APIStatus: React.FC<APIStatusProps> = ({ isConnected, isLoading, lastUpdated }) => {
   return (
      <Flex align="center" css={{ gap: '$3', mb: '$4', mt: '$2' }}>
         {isLoading ? (
            <>
               <Loading size="xs" color="success" />
               <Text size="$sm" css={{ color: '$accents9' }}>
                  Conectando a la API...
               </Text>
            </>
         ) : (
            <>
               <Badge 
                  color={isConnected ? 'success' : 'error'} 
                  variant="flat"
                  size="sm"
               >
                  {isConnected ? '🟢 API Conectada' : '🔴 Modo Local'}
               </Badge>
               
               <Text size="$xs" css={{ color: '$accents7' }}>
                  {isConnected 
                     ? `Datos desde: api.bebidasdelperu.name${lastUpdated ? ` • ${lastUpdated.toLocaleTimeString()}` : ''}`
                     : 'Usando datos de demostración locales'
                  }
               </Text>
            </>
         )}
      </Flex>
   );
};