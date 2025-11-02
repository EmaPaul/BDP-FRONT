// Estilos consistentes para botones con la paleta de colores BDP
export const bdpButtonStyles = {
  primary: {
    backgroundColor: '#5CAC4C',
    color: 'white',
    fontWeight: '$semibold',
    '&:hover': {
      backgroundColor: '#4A9C3C'
    },
    '&:active': {
      backgroundColor: '#034F32'
    }
  },
  
  secondary: {
    backgroundColor: '#F1F1E9',
    color: '#034F32',
    border: '1px solid #C8ECC9',
    '&:hover': {
      backgroundColor: '#E8F5E8'
    },
    '&:active': {
      backgroundColor: '#C8ECC9'
    }
  },
  
  outline: {
    backgroundColor: 'transparent',
    color: '#5CAC4C',
    border: '2px solid #5CAC4C',
    '&:hover': {
      backgroundColor: '#F1F1E9',
      color: '#034F32'
    },
    '&:active': {
      backgroundColor: '#C8ECC9'
    }
  },
  
  danger: {
    backgroundColor: '#DC2626',
    color: 'white',
    '&:hover': {
      backgroundColor: '#B91C1C'
    },
    '&:active': {
      backgroundColor: '#991B1B'
    }
  },
  
  success: {
    backgroundColor: '#5CAC4C',
    color: 'white',
    '&:hover': {
      backgroundColor: '#4A9C3C'
    },
    '&:active': {
      backgroundColor: '#034F32'
    }
  }
};

// Estilos para botones específicos de upload de archivos
export const bdpFileUploadStyles = {
  backgroundColor: '#F1F9F1',
  border: '2px dashed #5CAC4C',
  color: '#5CAC4C',
  padding: '$4 $6',
  borderRadius: '$lg',
  cursor: 'pointer',
  width: '100%',
  '&:hover': {
    backgroundColor: '#E8F5E8',
    borderColor: '#4A9C3C'
  }
};