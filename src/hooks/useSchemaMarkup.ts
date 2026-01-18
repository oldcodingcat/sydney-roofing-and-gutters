import { useLocation } from 'react-router-dom';
import { getSchemaConfigByPath } from '@/config/schemaConfig';
import { PageSchemaConfig } from '@/config/schemaConfig';

export const useSchemaMarkup = (customConfig?: Partial<PageSchemaConfig>) => {
  const location = useLocation();
  const pathConfig = getSchemaConfigByPath(location.pathname);
  
  // Combinar configuración de path con configuración personalizada
  const config: PageSchemaConfig | undefined = pathConfig ? {
    ...pathConfig,
    ...customConfig
  } : undefined;

  return {
    config,
    hasSchema: !!config,
    schemaProps: config ? {
      title: config.title,
      description: config.description,
      keywords: config.keywords,
      ogTitle: config.ogTitle,
      ogDescription: config.ogDescription,
      ogImage: config.ogImage,
      schemaType: config.schemaType,
      service: config.service,
      location: config.location,
      customName: config.customName,
      customDescription: config.customDescription
    } : undefined
  };
};
