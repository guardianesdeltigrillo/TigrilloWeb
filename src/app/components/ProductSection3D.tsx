import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ProductSection3DProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
  buttonText?: string;
  dark?: boolean;
}

// Componente Canvas 3D que carga modelo GLB desde CDN
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

    // Luces
    scene.add(new THREE.AmbientLight(0xffffff, 1.5));

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 10, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Piso
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.ShadowMaterial({ opacity: 0.3 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    let model: THREE.Group | null = null;
    let mixer: THREE.AnimationMixer | null = null;

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
    const clock = new THREE.Clock();

    loader.load(
      "https://threejs.org/examples/models/gltf/Horse.glb",
      (gltf) => {
        model = gltf.scene;

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const scale = 3 / Math.max(size.x, size.y, size.z);
        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));

        scene.add(model);

        if (gltf.animations.length) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) =>
            mixer!.clipAction(clip).play()
          );
        }

        setLoading(false);
      },
      undefined,
      () => {
        setError("No se pudo cargar el modelo");
        setLoading(false);
      }
    );

    const animate = () => {
      const delta = clock.getDelta();

      if (mixer) mixer.update(delta);

      if (model) {
        model.rotation.y += (targetRotationY - model.rotation.y) * 0.05;
        model.rotation.x += (targetRotationX - model.rotation.x) * 0.05;
        model.rotation.y += 0.003;

        model.position.y = Math.sin(clock.elapsedTime) * 0.1;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
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

      renderer.dispose();

      if (model) {
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry.dispose();

            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((m) => m.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
      }

      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {loading && <p className="absolute inset-0 flex items-center justify-center">Cargando...</p>}
      {error && <p className="absolute inset-0 flex items-center justify-center text-red-500">{error}</p>}
    </div>
  );
}

export const ProductSection3D = ({
  id,
  title,
  subtitle,
  description,
  reverse = false,
  buttonText = 'Explorar',
  dark = false,
}: ProductSection3DProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        "min-h-screen flex items-center py-20 px-6 md:px-24",
        dark ? "bg-[#1a432e] text-white" : "bg-white text-[#333]"
      )}
    >
      <div className="max-w-7xl mx-auto w-full">
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
                "text-sm font-bold uppercase tracking-widest",
                dark ? "text-white/60" : "text-[#2e7d32]"
              )}>
                {subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                {title}
              </h2>
            </div>
            <p className={cn(
              "text-lg leading-relaxed",
              dark ? "text-white/80" : "text-[#555]"
            )}>
              {description}
            </p>
            <button className={cn(
              "px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all group",
              dark 
                ? "bg-white text-[#1a432e] hover:bg-white/90" 
                : "bg-[#1a432e] text-white hover:bg-[#2e7d32]"
            )}>
              {buttonText}
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* 3D Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Canvas3DScene />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm backdrop-blur-sm">
                Mueve el mouse para interactuar
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};