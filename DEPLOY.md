# 🚀 Guía Rápida de Deploy

## Preparar para GitHub

1. **Inicializar repositorio Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sitio web Tigrillo Lanudo"
   ```

2. **Crear repositorio en GitHub**
   - Ve a https://github.com/new
   - Crea un nuevo repositorio (público o privado)
   - NO inicialices con README, .gitignore o licencia

3. **Conectar y subir**
   ```bash
   git remote add origin https://github.com/TU-USUARIO/tigrillo-lanudo.git
   git branch -M main
   git push -u origin main
   ```

## Deploy en Vercel

### Opción A: Desde GitHub (Recomendado)

1. Ve a https://vercel.com y haz login
2. Click en "Add New" → "Project"
3. Importa tu repositorio de GitHub
4. Vercel detecta automáticamente Vite
5. Click en "Deploy"
6. ¡Listo! Tu sitio estará en `https://tu-proyecto.vercel.app`

### Opción B: Desde CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Login en Vercel
vercel login

# Deploy (primera vez)
vercel

# Deploy a producción
vercel --prod
```

## Actualizar el Sitio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel automáticamente detectará los cambios y hará un nuevo deploy.

## Variables de Entorno en Vercel

Si necesitas agregar variables de entorno:

1. En tu proyecto de Vercel, ve a "Settings"
2. Click en "Environment Variables"
3. Agrega tus variables (ejemplo: `VITE_API_URL`)
4. Redeploy el proyecto

## Solución de Problemas

### El build falla en Vercel

- Verifica que todas las dependencias estén en `package.json`
- Asegúrate de que el comando de build sea `pnpm build` o `npm run build`
- Revisa los logs de error en el dashboard de Vercel

### Las imágenes no se cargan

- Verifica que las rutas de importación sean correctas
- Asegúrate de que las imágenes estén en `src/imports/`
- Usa importaciones relativas correctas

### Errores de tipado TypeScript

- Ejecuta `pnpm build` localmente primero
- Corrige todos los errores antes de hacer push

---

Para más detalles, consulta el [README.md](./README.md)
