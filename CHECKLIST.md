# ✅ CHECKLIST - Deploy del Tigrillo Lanudo

Sigue esta lista paso a paso para subir tu sitio a GitHub y desplegarlo en Vercel.

---

## 📦 Preparación (Antes de empezar)

- [ ] Tengo una cuenta en GitHub (https://github.com)
- [ ] Tengo una cuenta en Vercel (https://vercel.com) - puedo usar mi cuenta de GitHub
- [ ] Tengo Git instalado en mi computadora (`git --version`)
- [ ] Tengo Node.js instalado (`node --version`)

---

## 🔧 Verificación Local

- [ ] El proyecto compila sin errores:
  ```bash
  pnpm build
  ```
  (Debe mostrar "✓ built in X seconds")

- [ ] El servidor de desarrollo funciona:
  ```bash
  pnpm dev
  ```
  (Debe abrir en http://localhost:5173)

---

## 📤 Subir a GitHub

### Paso 1: Inicializar Git

- [ ] Abrir terminal en la carpeta del proyecto
- [ ] Ejecutar:
  ```bash
  git init
  ```

### Paso 2: Agregar archivos

- [ ] Ejecutar:
  ```bash
  git add .
  ```

### Paso 3: Primer commit

- [ ] Ejecutar:
  ```bash
  git commit -m "Initial commit: Sitio web Tigrillo Lanudo"
  ```

### Paso 4: Crear repositorio en GitHub

- [ ] Ir a: https://github.com/new
- [ ] Nombre: `tigrillo-lanudo` (o tu preferido)
- [ ] Descripción: "Sitio educativo sobre el Tigrillo Lanudo"
- [ ] Elegir Público o Privado
- [ ] **NO marcar** "Initialize with README"
- [ ] Click en "Create repository"

### Paso 5: Conectar y subir

- [ ] Copiar los comandos que GitHub muestra (parecidos a):
  ```bash
  git remote add origin https://github.com/TU-USUARIO/tigrillo-lanudo.git
  git branch -M main
  git push -u origin main
  ```
- [ ] Pegar y ejecutar en la terminal
- [ ] Verificar que los archivos aparezcan en GitHub

---

## 🚀 Deploy en Vercel

### Opción A: Desde la web (Recomendado)

- [ ] Ir a: https://vercel.com
- [ ] Click en "Login" → "Continue with GitHub"
- [ ] Autorizar Vercel en GitHub si es primera vez
- [ ] Click en "Add New..." → "Project"
- [ ] Buscar el repositorio `tigrillo-lanudo`
- [ ] Click en "Import"
- [ ] **No cambiar nada** en la configuración
- [ ] Click en "Deploy"
- [ ] Esperar 1-2 minutos
- [ ] ¡Click en el enlace cuando termine! 🎉

### Opción B: Desde la terminal

- [ ] Instalar Vercel CLI:
  ```bash
  npm install -g vercel
  ```
- [ ] Login:
  ```bash
  vercel login
  ```
- [ ] Deploy:
  ```bash
  vercel --prod
  ```

---

## ✨ Verificación Final

- [ ] El sitio abre correctamente en la URL de Vercel
- [ ] La imagen del tigrillo se ve en el Hero
- [ ] El menú de navegación funciona
- [ ] El scroll suave entre secciones funciona
- [ ] El modelo 3D se carga (sección Triviazoo)
- [ ] Los productos aparecen en el grid
- [ ] La sección de Aliados se muestra
- [ ] El sitio se ve bien en móvil (usar DevTools)

---

## 🎯 Siguientes pasos (Opcional)

- [ ] Configurar dominio personalizado en Vercel
- [ ] Agregar Google Analytics
- [ ] Compartir el enlace con el equipo
- [ ] Agregar más contenido
- [ ] Configurar variables de entorno (si es necesario)

---

## 📝 Notas

### Para actualizar el sitio después:

1. Hacer cambios en el código
2. Ejecutar:
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```
3. Vercel automáticamente detecta y despliega los cambios

### URLs importantes:

- GitHub: https://github.com/TU-USUARIO/tigrillo-lanudo
- Vercel Dashboard: https://vercel.com/dashboard
- Tu sitio: https://tigrillo-lanudo.vercel.app (o el que te asignen)

---

## 🆘 Solución de problemas

| Problema | Solución |
|----------|----------|
| Git no está instalado | Descargar de https://git-scm.com/ |
| Error al hacer push | Verificar credenciales de GitHub |
| Build falla en Vercel | Revisar logs en Vercel Dashboard |
| Imágenes no se ven | Verificar rutas en src/imports/ |
| 404 en rutas | Verificar que vercel.json exista |

---

**¡Éxito! 🐆 Tu sitio del Tigrillo Lanudo estará en línea pronto.**

Para más detalles, consulta:
- `INICIO_RAPIDO.md` - Guía paso a paso
- `README.md` - Documentación técnica
- `DEPLOY.md` - Información detallada de deploy
