# 📂 Estructura del Proyecto Tigrillo Lanudo

```
tigrillo-lanudo/
│
├── 📄 index.html                 # HTML principal
├── 📄 package.json               # Dependencias y scripts
├── 📄 vite.config.ts             # Configuración de Vite
├── 📄 vercel.json                # Configuración de Vercel
├── 📄 .gitignore                 # Archivos a ignorar en Git
├── 📄 README.md                  # Documentación principal
├── 📄 DEPLOY.md                  # Guía de deploy
├── 📄 .env.example               # Ejemplo de variables de entorno
│
├── 📁 src/
│   ├── 📄 main.tsx               # Punto de entrada de la app
│   │
│   ├── 📁 app/
│   │   ├── 📄 App.tsx            # Componente principal
│   │   │
│   │   └── 📁 components/
│   │       ├── 📄 Navbar.tsx         # Navegación
│   │       ├── 📄 Hero.tsx           # Sección hero con fondo
│   │       ├── 📄 Stats.tsx          # Estadísticas
│   │       ├── 📄 ProductSection.tsx # Secciones de productos
│   │       ├── 📄 ProductSection3D.tsx # Sección 3D interactiva
│   │       ├── 📄 ProductGrid.tsx    # Grid de productos
│   │       ├── 📄 Partners.tsx       # Sección de aliados
│   │       ├── 📄 Footer.tsx         # Pie de página
│   │       │
│   │       └── 📁 figma/
│   │           └── 📄 ImageWithFallback.tsx # Componente de imágenes
│   │
│   ├── 📁 imports/
│   │   ├── 🖼️ image-1.png        # Imagen del tigrillo (hero)
│   │   └── 🖼️ image.png          # Otras imágenes
│   │
│   ├── 📁 lib/
│   │   └── 📄 utils.ts            # Utilidades
│   │
│   └── 📁 styles/
│       ├── 📄 index.css           # Estilos globales
│       ├── 📄 fonts.css           # Fuentes
│       └── 📄 theme.css           # Tema y colores
│
└── 📁 dist/                       # Build de producción (generado)
    ├── index.html
    └── assets/
        ├── *.js
        ├── *.css
        └── *.png

```

## 🎯 Componentes Principales

### 1. **Navbar.tsx**
   - Navegación con scroll suave
   - Links a todas las secciones
   - Responsive

### 2. **Hero.tsx**
   - Imagen de fondo del tigrillo
   - Título y descripción principal
   - Botones de llamado a la acción

### 3. **Stats.tsx**
   - Estadísticas sobre el tigrillo
   - Datos de conservación

### 4. **ProductSection3D.tsx**
   - Modelo 3D interactivo con Three.js
   - Sección Triviazoo

### 5. **ProductGrid.tsx**
   - Grid 2x2 de productos
   - CÉDULA AR, Triviazoo, BOT JUBI, Entrevista
   - Efectos hover y animaciones

### 6. **Partners.tsx**
   - Logos y enlaces de aliados
   - Datos cargados desde JSON

### 7. **Footer.tsx**
   - Enlaces útiles
   - Información de contacto
   - Copyright

## 🎨 Archivos de Estilo

- **index.css**: Reset, estilos base de Tailwind
- **fonts.css**: Importación de fuentes
- **theme.css**: Variables CSS, paleta de colores

## 🔧 Archivos de Configuración

- **vite.config.ts**: Build tool, aliases, plugins
- **vercel.json**: Deploy en Vercel
- **package.json**: Dependencias y scripts npm

## 📦 Dependencias Principales

- React 18.3.1
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- Three.js
- Lucide React
- Vite 6.3.5

## 🚀 Scripts Disponibles

```bash
pnpm dev      # Servidor de desarrollo
pnpm build    # Build de producción
pnpm preview  # Preview del build
```

---

Esta estructura está optimizada para:
- ✅ Deploy en Vercel
- ✅ Versionamiento en GitHub
- ✅ Desarrollo colaborativo
- ✅ Escalabilidad futura
