# Schema Markup Implementation - Driveways Sydney

## Resumen
Sistema completo de Schema Markup implementado para Driveways Sydney, compatible con configuración SPA (Single Page Application) y optimizado para SEO.

## Componentes Implementados

### 1. SchemaMarkup.tsx
Componente principal que genera JSON-LD dinámicamente basado en:
- **Tipo de Schema**: LocalBusiness, Service, ProfessionalService
- **Ubicación**: main (Turramurra) o hills (Hills District)
- **Servicio**: Tipos específicos de servicios de driveway

### 2. SEOHead.tsx (Actualizado)
Integrado con SchemaMarkup para manejar tanto meta tags como structured data.

### 3. Configuración Centralizada
- `schemaConfig.ts`: Configuración de todas las páginas
- `useSchemaMarkup.ts`: Hook personalizado para uso fácil
- `PageWithSchema.tsx`: Wrapper component para implementación automática

## Tipos de Schema Implementados

### LocalBusiness
Para páginas principales:
- Página de inicio (/)
- About Us (/about-us)
- Contact Us (/contact-us)
- Gallery (/gallery)
- Projects (/projects)
- Blog (/blog)

### Service
Para páginas de servicios específicos:
- Concrete Driveways
- Paver Driveways
- Brick Driveways
- Natural Stone Driveways
- Pattern Concrete Driveways
- Crushed Stone Driveways
- Landscaped Driveways
- Cobblestone Driveways

### ProfessionalService
Para páginas de concreters:
- Concreters in The Hills District

## Ubicaciones Configuradas

### Ubicación Principal (Turramurra)
```json
{
  "address": {
    "streetAddress": "6 Eastern Rd",
    "addressLocality": "Turramurra",
    "addressRegion": "NSW",
    "postalCode": "2074",
    "addressCountry": "AU"
  },
  "geo": {
    "latitude": -33.73147709849857,
    "longitude": 151.12862509325697
  }
}
```

### Hills District
```json
{
  "address": {
    "streetAddress": "The Hills District",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "addressCountry": "AU"
  },
  "geo": {
    "latitude": -33.7186,
    "longitude": 150.9669
  }
}
```

## Información de Contacto
- **Teléfono**: (02) 5850 8644
- **Email**: info@drivewayssydney.com.au
- **Website**: https://drivewayssydney.com.au

## Uso

### Implementación Básica
```tsx
import SEOHead from '@/components/SEOHead';

const MyPage = () => {
  return (
    <div>
      <SEOHead
        title="Mi Página"
        description="Descripción de mi página"
        schemaType="LocalBusiness"
        location="main"
      />
      {/* Contenido de la página */}
    </div>
  );
};
```

### Implementación con Configuración Personalizada
```tsx
import SEOHead from '@/components/SEOHead';

const ServicePage = () => {
  return (
    <div>
      <SEOHead
        title="Concrete Driveways Sydney"
        description="Expert concrete driveway installation"
        schemaType="Service"
        service="concrete-driveways"
        location="main"
        customName="Concrete Driveways Sydney"
        customDescription="Professional concrete driveway services"
      />
      {/* Contenido de la página */}
    </div>
  );
};
```

### Implementación Automática (Recomendada)
```tsx
import PageWithSchema from '@/components/PageWithSchema';

const MyPage = () => {
  return (
    <PageWithSchema>
      {/* Contenido de la página */}
    </PageWithSchema>
  );
};
```

## Páginas Implementadas

### ✅ Completadas
- [x] Página de inicio (/)
- [x] About Us (/about-us)
- [x] Contact Us (/contact-us)
- [x] Gallery (/gallery)
- [x] Concrete Driveways Service
- [x] Paver Driveways Service
- [x] Concreters in The Hills District

### 🔄 Pendientes
- [ ] Brick Driveways Service
- [ ] Natural Stone Driveways Service
- [ ] Pattern Concrete Driveways Service
- [ ] Crushed Stone Driveways Service
- [ ] Landscaped Driveways Service
- [ ] Cobblestone Driveways Service
- [ ] Projects Page
- [ ] Blog Page

## Testing

### Verificación Manual
1. Abrir DevTools (F12)
2. Ir a la pestaña "Elements"
3. Buscar `<script type="application/ld+json">`
4. Verificar que el JSON-LD esté presente y sea válido

### Verificación con Google Testing Tools
1. Ir a [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Ingresar la URL de la página
3. Verificar que el Schema Markup sea reconocido

### Verificación Programática
```tsx
import { testSchemaMarkup } from '@/utils/schemaTest';

// En el componente o en DevTools
testSchemaMarkup();
```

## Beneficios SEO

1. **Rich Snippets**: Mejora la apariencia en resultados de búsqueda
2. **Local SEO**: Optimización para búsquedas locales
3. **Knowledge Graph**: Mejor comprensión del negocio por parte de Google
4. **Structured Data**: Información organizada para motores de búsqueda
5. **Mobile Optimization**: Mejor experiencia en dispositivos móviles

## Compatibilidad

- ✅ React Router v7
- ✅ SPA (Single Page Application)
- ✅ Vite Build System
- ✅ TypeScript
- ✅ Google Search Console
- ✅ Bing Webmaster Tools

## Mantenimiento

### Agregar Nueva Página
1. Agregar configuración en `schemaConfig.ts`
2. Implementar SEOHead en la página
3. Probar con Google Rich Results Test

### Actualizar Información de Contacto
1. Modificar en `SchemaMarkup.tsx`
2. Actualizar en `schemaConfig.ts`
3. Verificar en todas las páginas

### Agregar Nuevo Servicio
1. Agregar tipo en `ServiceType`
2. Agregar datos en `serviceData`
3. Crear configuración en `schemaConfig.ts`

## Notas Técnicas

- El Schema Markup se inyecta dinámicamente vía JavaScript
- Compatible con configuración SPA (ssr: false)
- Se limpia automáticamente al cambiar de página
- Optimizado para rendimiento
- TypeScript para type safety

## Próximos Pasos

1. Implementar Schema Markup en páginas restantes
2. Agregar Schema Markup para páginas de ubicaciones específicas
3. Implementar Schema Markup para páginas de blog individuales
4. Agregar Schema Markup para testimonios y reviews
5. Optimizar para Core Web Vitals
