// Utilidad para probar el Schema Markup
export const testSchemaMarkup = () => {
  // Verificar que el schema se está inyectando correctamente
  const schemaScript = document.querySelector('script[type="application/ld+json"]');
  
  if (schemaScript) {
    try {
      const schema = JSON.parse(schemaScript.textContent || '');
      console.log('✅ Schema Markup encontrado:', schema);
      
      // Verificar campos requeridos
      const requiredFields = ['@context', '@type', 'name', 'description', 'address', 'telephone', 'email'];
      const missingFields = requiredFields.filter(field => !schema[field]);
      
      if (missingFields.length === 0) {
        console.log('✅ Todos los campos requeridos están presentes');
      } else {
        console.warn('⚠️ Campos faltantes:', missingFields);
      }
      
      return true;
    } catch (error) {
      console.error('❌ Error al parsear Schema Markup:', error);
      return false;
    }
  } else {
    console.warn('⚠️ No se encontró Schema Markup en el DOM');
    return false;
  }
};

// Función para validar schema específico
export const validateSchema = (schema: any, type: string) => {
  const validations = {
    LocalBusiness: ['name', 'description', 'address', 'telephone', 'email', 'url'],
    Service: ['name', 'description', 'provider', 'serviceType', 'areaServed'],
    ProfessionalService: ['name', 'description', 'serviceType', 'hasOfferCatalog']
  };
  
  const requiredFields = validations[type as keyof typeof validations] || [];
  const missingFields = requiredFields.filter(field => !schema[field]);
  
  if (missingFields.length === 0) {
    console.log(`✅ Schema ${type} válido`);
    return true;
  } else {
    console.warn(`⚠️ Schema ${type} inválido. Campos faltantes:`, missingFields);
    return false;
  }
};

// Función para probar en diferentes páginas
export const testAllPages = () => {
  const pages = [
    '/',
    '/about-us',
    '/contact-us',
    '/gallery',
    '/projects',
    '/services/concrete-driveways',
    '/services/paver-driveways',
    '/concreters/concreters-in-the-hills-district'
  ];
  
  console.log('🧪 Iniciando pruebas de Schema Markup...');
  
  pages.forEach(page => {
    console.log(`\n📍 Probando página: ${page}`);
    // Aquí se podría implementar navegación automática para probar cada página
  });
};
