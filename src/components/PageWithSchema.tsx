import { ReactNode } from 'react';
import { useSchemaMarkup } from '@/hooks/useSchemaMarkup';
import SEOHead from './SEOHead';

interface PageWithSchemaProps {
  children: ReactNode;
  customConfig?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    schemaType?: 'RoofingContractor' | 'Service' | 'ProfessionalService';
    service?: string;
    location?: 'newcastle' | 'surrounding';
    customName?: string;
    customDescription?: string;
  };
}

const PageWithSchema = ({ children, customConfig }: PageWithSchemaProps) => {
  const { schemaProps } = useSchemaMarkup(customConfig);

  return (
    <>
      {schemaProps && <SEOHead {...schemaProps} />}
      {children}
    </>
  );
};

export default PageWithSchema;
