# 🚀 INICIO RÁPIDO - Tigrillo Lanudo

## ✅ Proyecto Listo para GitHub y Vercel

Tu sitio web del Tigrillo Lanudo está completamente preparado para ser desplegado. Sigue estos pasos:

---

## 📋 PASO 1: Subir a GitHub

### 1.1 Inicializar Git (si no está inicializado)

```bash
git init
```

### 1.2 Agregar todos los archivos

```bash
git add .
```

### 1.3 Hacer el primer commit

```bash
git commit -m "Initial commit: Sitio web Tigrillo Lanudo - Conservación y Educación"
```

### 1.4 Crear repositorio en GitHub

1. Ve a: https://github.com/new
2. Nombre del repositorio: `tigrillo-lanudo` (o el que prefieras)
3. Descripción: "Sitio web educativo sobre el Tigrillo Lanudo - Conservación de vida silvestre"
4. Público o Privado (tú decides)
5. **NO** marques ninguna opción de inicializar con README o .gitignore
6. Click en "Create repository"

### 1.5 Conectar y subir

Copia los comandos que GitHub te muestra, algo como:

```bash
git remote add origin https://github.com/TU-USUARIO/tigrillo-lanudo.git
git branch -M main
git push -u origin main
```

---

## 🌐 PASO 2: Deploy en Vercel

### Opción A: Desde el sitio web (MÁS FÁCIL)

1. Ve a: https://vercel.com
2. Haz login con tu cuenta de GitHub
3. Click en "Add New..." → "Project"
4. Busca el repositorio `tigrillo-lanudo`
5. Click en "Import"
6. Vercel detectará automáticamente que es un proyecto Vite
7. **NO cambies nada**, solo click en "Deploy"
8. ¡Espera 1-2 minutos y listo! 🎉

Tu sitio estará disponible en: `https://tigrillo-lanudo.vercel.app` (o el nombre que asigne Vercel)

### Opción B: Desde la terminal

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

---

## 🔄 Actualizar el Sitio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de tus cambios"
git push
```

**Vercel detectará automáticamente los cambios y actualizará tu sitio en segundos.**

---

## 🎯 Lo que se ha configurado

✅ **Archivos creados/modificados:**
- `index.html` - HTML principal
- `src/main.tsx` - Punto de entrada de React
- `.gitignore` - Archivos a ignorar en Git
- `vercel.json` - Configuración de Vercel
- `package.json` - Scripts y metadata actualizados
- `README.md` - Documentación completa
- `DEPLOY.md` - Guía detallada de deploy
- `PROJECT_STRUCTURE.md` - Estructura del proyecto

✅ **Scripts disponibles:**
- `pnpm dev` - Servidor de desarrollo
- `pnpm build` - Build de producción (probado y funciona ✓)
- `pnpm preview` - Preview del build

✅ **Características del sitio:**
- Navegación fluida con scroll suave
- Sección Hero con imagen del tigrillo
- Modelo 3D interactivo cargado desde CDN (ver MODELO_3D.md para personalizarlo)
- Grid de productos (CÉDULA AR, BOT JUBI, etc.)
- Sección de Aliados
- Diseño responsivo
- Paleta verde bosque y crema

⚠️ **Nota importante sobre el modelo 3D:**
El modelo 3D actual es un placeholder. Para obtener mejores resultados, reemplázalo con un modelo real de tigrillo siguiendo las instrucciones en `MODELO_3D.md`.

---

## 🎨 Personalizar después del deploy

### Cambiar el nombre del dominio en Vercel

1. En tu proyecto de Vercel, ve a "Settings"
2. "Domains"
3. Agrega tu dominio personalizado

### Actualizar colores o contenido

Edita los archivos en `src/app/components/` y haz push a GitHub.

---

## ⚡ Próximos pasos recomendados

1. **Ahora**: Subir a GitHub y hacer deploy en Vercel
2. **Después**: Agregar Google Analytics (si quieres)
3. **Opcional**: Configurar dominio personalizado
4. **Futuro**: Agregar más secciones o funcionalidades

---

## 🆘 ¿Problemas?

- **El build falla**: Ejecuta `pnpm build` localmente primero para ver errores
- **Imágenes no se ven**: Verifica que estén en `src/imports/`
- **Vercel no encuentra el proyecto**: Asegúrate de haberlo subido a GitHub primero

---

## 📚 Documentación

- `README.md` - Documentación técnica completa
- `DEPLOY.md` - Guía detallada de deploy
- `PROJECT_STRUCTURE.md` - Estructura del proyecto

---

**¡Tu sitio está listo para el mundo! 🐆🌿**

Cualquier duda, consulta los archivos de documentación o la documentación oficial:
- Vercel: https://vercel.com/docs
- Vite: https://vitejs.dev/
- React: https://react.dev/
