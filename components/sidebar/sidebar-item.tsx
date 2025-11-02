import {Text, Link} from '@nextui-org/react';
import NextLink from 'next/link';
import React from 'react';
import {useSidebarContext} from '../layout/layout-context';
import {Flex} from '../styles/flex';

interface Props {
   title: string;
   icon: React.ReactNode;
   isActive?: boolean;
   href?: string;
}

export const SidebarItem = ({icon, title, isActive, href = ''}: Props) => {
   const {collapsed, setCollapsed} = useSidebarContext();

   const handleClick = () => {
      if (window.innerWidth < 768) {
         setCollapsed();
      }
   };
   return (
      <NextLink href={href}>
         <Link
            css={{
               color: '#034F32',
               maxWidth: '100%',
            }}
         >
            <Flex
               onClick={handleClick}
               css={{
                  'gap': '$6',
                  'width': '100%',
                  'minHeight': '44px',
                  'height': '100%',
                  'alignItems': 'center',
                  'px': '$7',
                  'borderRadius': '8px',
                  'cursor': 'pointer',
                  'transition': 'all 0.15s ease',
                  '&:active': {
                     transform: 'scale(0.98)',
                  },
                  ...(isActive
                     ? {
                          'backgroundColor': '#C8ECC9',
                          'color': '#034F32',
                          '& svg, & svg path': {
                             fill: '#034F32',
                             color: '#034F32',
                          },
                       }
                     : {
                        '&:hover': {
                           backgroundColor: '#F1F1E9',
                           '& svg, & svg path': {
                              fill: '#034F32',
                              color: '#034F32',
                           }
                        }
                     }),
               }}
               align={'center'}
            >
               {icon}
               <Text
                  span
                  weight={'normal'}
                  size={'$base'}
                  css={{
                     color: isActive ? '#034F32' : '#034F32',
                     fontWeight: isActive ? '$semibold' : '$normal',
                  }}
               >
                  {title}
               </Text>
            </Flex>
         </Link>
      </NextLink>
   );
};
