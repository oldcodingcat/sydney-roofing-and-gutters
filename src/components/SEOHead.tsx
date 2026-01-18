import { useEffect } from 'react';
import SchemaMarkup, { SchemaType, ServiceType, LocationType } from './SchemaMarkup';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schemaType?: SchemaType;
  service?: ServiceType;
  location?: LocationType;
  customName?: string;
  customDescription?: string;
  customUrl?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  schemaType,
  service,
  location,
  customName,
  customDescription,
  customUrl
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }

    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Update Open Graph title
    if (ogTitle) {
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute('content', ogTitle);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        meta.content = ogTitle;
        document.head.appendChild(meta);
      }
    }

    // Update Open Graph description
    if (ogDescription) {
      const ogDescMeta = document.querySelector('meta[property="og:description"]');
      if (ogDescMeta) {
        ogDescMeta.setAttribute('content', ogDescription);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:description');
        meta.content = ogDescription;
        document.head.appendChild(meta);
      }
    }

    // Update Open Graph image
    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:image');
        meta.content = ogImage;
        document.head.appendChild(meta);
      }
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage]);

  // Render Schema Markup si se proporciona
  if (schemaType) {
    return (
      <SchemaMarkup
        type={schemaType}
        service={service}
        location={location}
        customName={customName}
        customDescription={customDescription}
        customUrl={customUrl}
      />
    );
  }

  return null; // This component doesn't render anything
};

export default SEOHead;