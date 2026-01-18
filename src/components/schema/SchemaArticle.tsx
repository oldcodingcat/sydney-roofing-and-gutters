import { Helmet } from 'react-helmet-async';

interface SchemaArticleProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  url: string;
}

export default function SchemaArticle({ 
  headline, 
  description, 
  datePublished,
  dateModified,
  authorName = "Newcastle Local Roofers",
  image = "https://newcastlelocalroofers.com.au/images/newcastle-local-roofers-logo.png",
  url
}: SchemaArticleProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://newcastlelocalroofers.com.au"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Newcastle Local Roofers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://newcastlelocalroofers.com.au/images/newcastle-local-roofers-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
