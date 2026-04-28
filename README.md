# 🐆 Tigrillo Lanudo - Sitio Web de Conservación

Centro de conocimiento digital dedicado a la conservación, investigación y celebración del **Tigrillo Lanudo** (*Leopardus tigrinus*), uno de los felinos silvestres más esquivos de Sudamérica.

## 🌿 Características

- **Navegación Fluida**: Menú con desplazamiento suave entre secciones
- **Modelo 3D Interactivo**: Carga modelos GLB desde CDN con Three.js (ver [MODELO_3D.md](./MODELO_3D.md))
- **Secciones Educativas**:
  - **Triviazoo**: Juego de trivia interactivo sobre el tigrillo
  - **Mitazoo**: Podcast con historias desde el campo
  - **Zooteka**: Enciclopedia digital completa
  - **Datazoo**: Datos curiosos y fascinantes
- **Productos Interactivos**:
  - CÉDULA AR: Escaneo de cédula para modelo 3D
  - Triviazoo: Juego de trivia móvil
  - BOT JUBI: Chatbot de WhatsApp
  - Entrevista: Videos con expertos del zoológico
- **Sección de Aliados**: Reconocimiento a colaboradores del proyecto
- **Diseño Responsivo**: Optimizado para desktop y móvil
- **Paleta Natural**: Colores verde bosque y crema/blanco

## 🚀 Tecnologías

- **React 18** - Framework UI
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Estilos modernos
- **Motion (Framer Motion)** - Animaciones fluidas
- **Three.js** - Gráficos 3D
- **Lucide React** - Iconos
- **Vite** - Build tool ultrarrápido

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tigrillo-lanudo.git
   cd tigrillo-lanudo
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```
   o con npm:
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   pnpm dev
   ```
   o con npm:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Build para Producción

```bash
pnpm build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

Para previsualizar el build:
```bash
pnpm preview
```

## 🌐 Deploy en Vercel

### Método 1: Importar desde GitHub (Recomendado)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Haz clic en "New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente la configuración de Vite
6. Haz clic en "Deploy"

### Método 2: Vercel CLI

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy a producción**
   ```bash
   vercel --prod
   ```

### Configuración de Vercel

El proyecto incluye un archivo `vercel.json` con la configuración óptima. No requiere ajustes adicionales.

## 📁 Estructura del Proyecto

```
tigrillo-lanudo/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── ProductSection.tsx
│   │   │   ├── ProductSection3D.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── Partners.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── figma/
│   │   │       └── ImageWithFallback.tsx
│   │   └── App.tsx
│   ├── imports/
│   │   └── image-1.png
│   ├── styles/
│   │   ├── index.css
│   │   ├── fonts.css
│   │   └── theme.css
│   ├── lib/
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── vercel.json
└── README.md
```

## 🎨 Personalización

### Colores

Los colores principales se definen en `src/styles/theme.css`:
- Verde bosque: `#1a432e`, `#2e7d32`
- Crema/Blanco: `#f9f6f1`

### Contenido

- **Textos**: Edita los componentes en `src/app/components/`
- **Imágenes**: Reemplaza las imágenes en `src/imports/`
- **Modelo 3D**: Sigue las instrucciones en [MODELO_3D.md](./MODELO_3D.md)
- **Aliados**: Modifica el JSON en `src/app/components/Partners.tsx`

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 🐾 Sobre el Tigrillo Lanudo

El tigrillo lanudo (*Leopardus tigrinus*) es un pequeño felino salvaje nativo de Sudamérica, clasificado como **Vulnerable** por la IUCN. Este sitio web tiene como objetivo educar sobre la especie y promover su conservación.

---

Desarrollado con ❤️ para la conservación de la vida silvestre
