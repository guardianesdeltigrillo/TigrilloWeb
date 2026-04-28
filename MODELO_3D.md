# 🐆 Guía para Reemplazar el Modelo 3D

## Estado Actual

El sitio web ahora carga un **modelo 3D en formato GLB desde CDN** en la sección Triviazoo. Actualmente usa un modelo placeholder (caballo) de ejemplo.

## Cómo Reemplazar con tu Modelo de Tigrillo

### Opción 1: Usar un modelo desde una URL pública

1. **Sube tu modelo GLB a un hosting**:
   - GitHub (en la carpeta `public/` del repo)
   - Cloudinary
   - AWS S3
   - Google Cloud Storage
   - Cualquier CDN público

2. **Actualiza la URL en el código**:
   
   Abre el archivo: `src/app/components/ProductSection3D.tsx`
   
   Busca esta línea (aproximadamente línea 104):
   ```typescript
   const modelURL = 'https://threejs.org/examples/models/gltf/Horse.glb';
   ```
   
   Reemplázala con la URL de tu modelo:
   ```typescript
   const modelURL = 'https://tu-cdn.com/modelo-tigrillo.glb';
   ```

### Opción 2: Incluir el modelo en el proyecto

1. **Coloca tu archivo GLB**:
   
   Crea una carpeta `public/models/` en la raíz del proyecto:
   ```bash
   mkdir -p public/models
   ```
   
   Copia tu archivo GLB ahí:
   ```bash
   cp tigrillo.glb public/models/
   ```

2. **Actualiza la URL en el código**:
   
   ```typescript
   const modelURL = '/models/tigrillo.glb';
   ```

## Dónde Encontrar Modelos de Tigrillo/Felinos

### Repositorios Gratuitos:
- **Sketchfab**: https://sketchfab.com (busca "leopard", "ocelot", "wild cat")
- **CGTrader Free**: https://www.cgtrader.com/free-3d-models
- **TurboSquid Free**: https://www.turbosquid.com/Search/3D-Models/free
- **Poly Pizza**: https://poly.pizza

### Consejos:
- Busca modelos en formato **GLB** o **GLTF**
- Tamaño recomendado: < 10 MB
- Con licencia de uso libre (CC0, Creative Commons)
- Preferiblemente con texturas incluidas
- Palabras clave: "leopard", "ocelot", "margay", "wild cat", "spotted cat"

## Ajustar Escala y Posición del Modelo

Si tu modelo se ve muy grande, pequeño o desplazado, ajusta estos valores en `ProductSection3D.tsx`:

```typescript
// Busca esta sección (aproximadamente línea 120):
const maxDim = Math.max(size.x, size.y, size.z);
const scale = 3 / maxDim;  // Cambia el 3 para ajustar tamaño
model.scale.setScalar(scale);
model.position.y = 0;  // Ajusta la altura (0 = en el suelo)
```

### Ejemplos de ajuste:
- Modelo muy pequeño: cambia `3` por `5` o `7`
- Modelo muy grande: cambia `3` por `1` o `2`
- Elevar el modelo: cambia `model.position.y = 0` a `model.position.y = 1`

## Ajustar la Cámara

Si necesitas cambiar el ángulo de vista inicial:

```typescript
// Busca esta línea (aproximadamente línea 33):
camera.position.set(0, 2, 8);  // (x, y, z)
```

### Ejemplos:
- Vista más cercana: `camera.position.set(0, 2, 5);`
- Vista más lejana: `camera.position.set(0, 2, 12);`
- Vista desde arriba: `camera.position.set(0, 5, 8);`

## Solución de Problemas

### El modelo no se carga

1. **Verifica la URL**: Abre la URL del modelo en tu navegador
2. **CORS**: Asegúrate que el servidor permite CORS
3. **Formato**: Confirma que el archivo es GLB o GLTF válido
4. **Tamaño**: Archivos > 50 MB pueden tardar mucho

### El modelo se ve negro

- Agrega más iluminación en el código
- Verifica que el modelo tenga materiales/texturas

### El modelo está al revés

```typescript
model.rotation.x = Math.PI;  // Voltear verticalmente
model.rotation.y = Math.PI;  // Voltear horizontalmente
```

### El modelo es muy pesado (tarda en cargar)

1. Optimiza el modelo en Blender:
   - Reduce polígonos
   - Comprime texturas
   - Exporta como GLB (binario)

2. Usa un servicio de optimización:
   - https://glb.report/
   - https://gltf.report/

## Recursos Adicionales

- **Three.js GLTFLoader docs**: https://threejs.org/docs/#examples/en/loaders/GLTFLoader
- **Blender (para editar modelos)**: https://www.blender.org/
- **Convertir formatos**: https://anyconv.com/gltf-to-glb-converter/

---

**Nota**: El modelo actual es solo un placeholder. Para obtener el mejor resultado, usa un modelo 3D real de tigrillo o un felino similar.
