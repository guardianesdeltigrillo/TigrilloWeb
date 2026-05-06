import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AnimatedText } from './AnimatedText';

interface ProductSection3DProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
  dark?: boolean;
}

function Canvas3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f4f0);

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    const sceneLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(sceneLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 10, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.ShadowMaterial({ opacity: 0.3 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    let model: THREE.Group | null = null;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      targetRotationY = x * Math.PI * 0.3;
      targetRotationX = y * 0.1;
    };

    container.addEventListener("mousemove", handleMouseMove);

  const loader = new GLTFLoader();

    loader.load(
      "https://threejs.org/examples/models/gltf/Horse.glb",
      (gltf: any) => {
        // 1. Creamos una variable local (m) que TypeScript sabe que NO es nula
        const m = gltf.scene;
        
        m.traverse((child: any) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });
        
        const box = new THREE.Box3().setFromObject(m);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const scale = 3 / Math.max(size.x, size.y, size.z);
        
        m.scale.setScalar(scale);
        m.position.sub(center.multiplyScalar(scale));
        
        scene.add(m);
        
        // 2. Le pasamos el modelo ya configurado a la variable externa para que se anime
        model = m; 
        setLoading(false);
      },
      undefined,
      (err: any) => {
        console.error("Error cargando modelo 3D:", err);
        setError("Error al cargar el modelo 3D.");
        setLoading(false);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += (targetRotationY - model.rotation.y) * 0.1;
        model.rotation.x += (targetRotationX - model.rotation.x) * 0.1;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 cursor-move" ref={containerRef}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-10">
          <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-10">
          <p className="text-red-400 bg-black/50 px-4 py-2 rounded-lg">{error}</p>
        </div>
      )}
    </div>
  );
}

export const ProductSection3D = ({
  id,
  title,
  subtitle,
  description,
  reverse = false,
  dark = false,
}: ProductSection3DProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        "min-h-screen flex items-center py-20 px-6 md:px-24 overflow-hidden relative",
        dark ? "bg-[#1a432e] text-white" : "bg-[#f9f6f1] text-[#333]"
      )}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-12 md:gap-24",
          reverse ? "md:flex-row-reverse" : ""
        )}>
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <span className={cn(
                "text-sm font-bold uppercase tracking-widest inline-block mb-2",
                dark ? "text-white/60" : "text-[#2e7d32]"
              )}>
                {subtitle}
              </span>
              
              <AnimatedText 
                text={title}
                el="h2"
                className="text-4xl md:text-5xl font-serif leading-tight"
                delay={0.2}
              />
            </div>

            <AnimatedText 
              text={description}
              el="p"
              className={cn(
                "text-lg leading-relaxed",
                dark ? "text-white/80" : "text-[#555]"
              )}
              delay={0.4}
            />
          </motion.div>

          {/* 3D Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className={cn(
              "relative aspect-square w-full max-w-lg mx-auto rounded-none overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] border border-black/5",
              dark ? "bg-white/5 border-white/10" : "bg-black/5"
            )}>
              <Canvas3DScene />
              
              {/* Etiqueta geométrica flotante */}
              <div className="absolute bottom-4 left-4 bg-[#1a432e] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                Mueve el ratón para interactuar
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};