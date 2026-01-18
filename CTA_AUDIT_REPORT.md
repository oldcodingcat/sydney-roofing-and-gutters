# Auditoría de CTAs - Newcastle Local Roofers

## Resumen
- Total de archivos revisados: 80+ (componentes + rutas)
- Total de botones/CTAs encontrados: ~200+
- Botones con enlaces correctos: ~180
- Botones que necesitan corrección: ~20
- Botones sin problemas (ya correctos): ~180

---

## ⚠️ Correcciones Necesarias

### COMPONENTES PRINCIPALES

#### 1. Archivo: /src/components/CTASection.tsx
**Línea 26:**
- **Texto del botón existente:** "Get Free Roof Inspection"
- **Destino actual:** `href="/quote"`
- **Destino correcto:** `href="#contact-form"`
- **Acción:** Cambiar solo el href (NO cambiar texto, NO cambiar estilos)

**Línea 32:**
- **Texto del botón existente:** "Call Us Now: (02) 4089 4613"
- **Destino actual:** `href="tel:0240894613"` ✓
- **Estado:** CORRECTO - No necesita cambios

#### 2. Archivo: /src/components/FloatingBanner.tsx
**Línea 36:**
- **Texto del botón existente:** "Get Free Quote"
- **Destino actual:** `href="#quote-form"`
- **Destino correcto:** `href="#contact-form"`
- **Acción:** Cambiar solo el href (NO cambiar texto, NO cambiar estilos)

**Línea 26:**
- **Texto del botón existente:** "Call Us Now"
- **Destino actual:** `href="tel:0240894613"` ✓
- **Estado:** CORRECTO - No necesita cambios

#### 3. Archivo: /src/components/Services.tsx
**Línea 157-159:**
- **Texto del botón existente:** "Get Free Roof Inspection"
- **Destino actual:** `href="tel:0240894613"`
- **Problema:** Este botón es un "Get Free Roof Inspection" (quote request) pero apunta a tel:. Debería apuntar a #contact-form
- **Destino correcto:** `href="#contact-form"`
- **Acción:** Cambiar el href (NO cambiar texto, NO cambiar estilos)

#### 4. Archivo: /src/components/RoofingTypesGuide.tsx
**Línea 166:**
- **Texto del botón existente:** "Get Expert Consultation"
- **Destino actual:** `href="/contact-us"`
- **Destino correcto:** `href="#contact-form"`
- **Acción:** Cambiar solo el href (NO cambiar texto, NO cambiar estilos)

#### 5. Archivo: /src/components/ServiceAreas.tsx
**Línea 137:**
- **Texto del botón existente:** "Get Free Inspection"
- **Destino actual:** `href="/contact-us"`
- **Destino correcto:** `href="#contact-form"`
- **Acción:** Cambiar solo el href (NO cambiar texto, NO cambiar estilos)

### RUTAS DE SERVICIOS (Service Pages)

**NOTA:** Las páginas de servicios individuales (roof-repairs, roof-replacement, etc.) tienen CTAs en sus secciones Hero que APUNTAN CORRECTAMENTE:
- Botones de "Call Emergency" → `href="tel:0240894613"` ✓
- Botones de "Free Inspection/Assessment" → `href="/roof-inspections"` ✓

Estos son **CORRECTOS** y **NO deben modificarse** porque apuntan a páginas reales.

### RUTAS DE UBICACIÓN (Location Pages)

**CRÍTICO:** ~30+ páginas de ubicación tienen el mismo problema:

#### Archivos afectados (TODOS los archivos roofers-[location].tsx):
- src/routes/roofers-adamstown-heights.tsx
- src/routes/roofers-bar-beach.tsx
- src/routes/roofers-carrington.tsx
- src/routes/roofers-catherine-hill-bay.tsx
- src/routes/roofers-coal-point.tsx
- src/routes/roofers-cooks-hill.tsx
- src/routes/roofers-fingal-bay.tsx
- src/routes/roofers-georgetown.tsx
- src/routes/roofers-hamilton.tsx
- src/routes/roofers-hamilton-east.tsx
- src/routes/roofers-hamilton-south.tsx
- src/routes/roofers-islington.tsx
- src/routes/roofers-jesmond.tsx
- src/routes/roofers-kotara.tsx
- src/routes/roofers-lambton.tsx
- src/routes/roofers-mayfield.tsx
- src/routes/roofers-merewether.tsx
- src/routes/roofers-merewether-heights.tsx
- src/routes/roofers-new-lambton.tsx
- src/routes/roofers-newcastle-east.tsx
- src/routes/roofers-redhead.tsx
- src/routes/roofers-soldiers-point.tsx
- src/routes/roofers-stockton.tsx
- src/routes/roofers-the-hill-newcastle.tsx
- src/routes/roofers-the-junction-newcastle.tsx
- src/routes/roofers-warners-bay.tsx
- src/routes/roofers-waratah.tsx
- src/routes/roofers-wickham.tsx
- src/routes/roofers-valentine.tsx
- src/routes/roofers-tighes-hill.tsx
- Y más...

**Patrón común en todas estas páginas:**
- **Líneas 208-212 (o similares):**
  - **Texto del botón existente:** "Get Free Quote"
  - **Destino actual:** `href="#quote-form"`
  - **Destino correcto:** `href="#contact-form"`
  - **Acción:** Cambiar solo el href en todas estas páginas

**Algunas páginas también tienen el problema en líneas 148-152 (hero section):**
- **Texto del botón existente:** "Get Free Quote"
- **Destino actual:** `href="#quote-form"`
- **Destino correcto:** `href="#contact-form"`

### RUTAS DE SERVICIO ESPECÍFICO (ServiceAreas Componentes)

Hay varios componentes ServiceAreas***.tsx que también tienen el mismo problema:

#### Archivos afectados:
- src/components/ServiceAreasBrick.tsx
- src/components/ServiceAreasCobblestone.tsx
- src/components/ServiceAreasConcreters.tsx
- src/components/ServiceAreasCrushedStone.tsx
- src/components/ServiceAreasLandscaped.tsx
- src/components/ServiceAreasNaturalStone.tsx
- src/components/ServiceAreasPatternConcrete.tsx
- src/components/ServiceAreasPaver.tsx

**Patrón:**
- **Línea 137:** Cambiar `href="/contact-us"` a `href="#contact-form"`
- **Línea 143:** Verificar que `href="/locations"` existe (página de servicio, puede estar bien)

---

## ✅ Archivos sin problemas

### Componentes:
- `/src/components/Hero.tsx` ✓ (NO TOCAR - ya correcto)
- `/src/components/ContactCTA.tsx` ✓ (NO TOCAR - ya correcto)
- `/src/components/Header.tsx` ✓ (enlaces de navegación y tel: correctos)
- `/src/components/Footer.tsx` ✓ (enlaces correctos)
- `/src/components/FeaturedProjects.tsx` ✓ (enlaces correctos)
- `/src/components/TestimonialsNew.tsx` ✓ (enlaces correctos)
- `/src/components/WhyChooseUs.tsx` ✓ (sin botones problemáticos)

### Rutas de Servicios:
- `/src/routes/roof-repairs.tsx` ✓
- `/src/routes/roof-replacement.tsx` ✓
- `/src/routes/roof-restoration.tsx` ✓
- `/src/routes/emergency-roof-repairs.tsx` ✓
- `/src/routes/new-roof-installation.tsx` ✓
- `/src/routes/roof-inspections.tsx` ✓
- `/src/routes/gutter-repairs.tsx` ✓
- `/src/routes/leak-detection.tsx` ✓

---

## 🔍 Botones que necesitan revisión manual

1. **Botones con enlaces a páginas que pueden no existir:**
   - Algunos botones apuntan a `/roof-inspections` y `/contact-us` - VERIFICAR que estas páginas existen
   - Botones apuntan a `/projects`, `/gallery`, `/locations` - VERIFICAR existencia

2. **Botones en Footer:**
   - Links a `/privacy-policy` y `/terms-of-service` - Estas páginas pueden no existir
   - **Acción:** NO crear estas páginas si no existen, solo reportarlas

---

## ⚠️ Páginas que no existen (enlaces rotos)

**Necesitan verificación manual:**
- `/privacy-policy` (enlace en Footer)
- `/terms-of-service` (enlace en Footer)
- `/gallery` (múltiples referencias)
- `/projects` (en FeaturedProjects)
- `/locations` (múltiples referencias)

**NO intentar crear estas páginas - solo reportarlas**

---

## 📋 Resumen de Cambios Requeridos

### Prioridad ALTA (Componentes principales usados en todas las páginas):
1. **CTASection.tsx** - 1 cambio (línea 26)
2. **FloatingBanner.tsx** - 1 cambio (línea 36)
3. **Services.tsx** - 1 cambio (línea 157)
4. **RoofingTypesGuide.tsx** - 1 cambio (línea 166)
5. **ServiceAreas.tsx** - 1 cambio (línea 137)

### Prioridad ALTA (Rutas de ubicación - 30+ archivos):
6-35. **Todos los archivos roofers-[location].tsx** - 1-2 cambios por archivo

### Prioridad MEDIA (Componentes ServiceAreas especializados):
36-43. **ServiceAreasBrick.tsx, Cobblestone.tsx, etc.** - 1 cambio por archivo

---

## ⚠️ IMPORTANTE - Antes de hacer cambios

1. Confirma que NO vas a tocar:
   - Hero.tsx
   - ContactCTA.tsx
   - Header.tsx
   - Footer.tsx

2. Confirma que SOLO vas a cambiar:
   - Valores de `href` en enlaces
   - NO textos de botones
   - NO clases CSS
   - NO estructura JSX

3. Patrón de cambio:
   ```tsx
   // ❌ ANTES:
   <a href="#quote-form">
   
   // ✅ DESPUÉS:
   <a href="#contact-form">
   ```

4. Para tel: links, el formato correcto es: `tel:0240894613` (sin espacios, sin paréntesis)

---

## 🎯 Plan de Ejecución

### PASO 1: Corrección de componentes principales (Alta prioridad)
- CTASection.tsx
- FloatingBanner.tsx
- Services.tsx
- RoofingTypesGuide.tsx
- ServiceAreas.tsx

### PASO 2: Corrección de rutas de ubicación (Alta prioridad)
- Usar replace_all para cambiar `href="#quote-form"` a `href="#contact-form"` en todos los archivos roofers-*.tsx

### PASO 3: Corrección de componentes ServiceAreas especializados
- ServiceAreasBrick.tsx, Cobblestone.tsx, etc.

### PASO 4: Verificación
- Compilar y verificar que no hay errores
- Confirmar que no se tocó Hero.tsx ni ContactCTA.tsx

