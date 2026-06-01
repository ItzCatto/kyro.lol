import { useEffect, useRef } from "react"
import { ShaderMount, meshGradientFragmentShader, getShaderColorFromString } from "@paper-design/shaders"

// Purple + black palette for Kyro
const COLORS = [
  "#000000",   // black
  "#0d0118",   // near-black purple
  "#1a0a2e",   // deep purple
  "#2d1b69",   // medium purple
  "#7c3aed",   // vivid violet
] as const

export default function KyroBackground() {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parent = divRef.current
    if (!parent) return

    const u_colors = COLORS.map((c) => getShaderColorFromString(c))
    const u_colorsCount = COLORS.length

    let mount: InstanceType<typeof ShaderMount> | null = null
    try {
      mount = new ShaderMount(
        parent,
        meshGradientFragmentShader,
        {
          // MeshGradient uniforms
          u_colors,
          u_colorsCount,
          u_distortion: 0.8,
          u_swirl: 0.3,
          u_grainMixer: 0.04,
          u_grainOverlay: 0.0,
          // Sizing uniforms (cover = 2)
          u_fit: 2,
          u_scale: 1,
          u_rotation: 0,
          u_offsetX: 0,
          u_offsetY: 0,
          u_originX: 0.5,
          u_originY: 0.5,
          u_worldWidth: 0,
          u_worldHeight: 0,
        },
        /* webGlContextAttributes */ undefined,
        /* speed */ 0.4,
      )
    } catch {
      // WebGL not available in this environment — CSS fallback is visible via body background
    }

    return () => {
      mount?.dispose()
    }
  }, [])

  return (
    <div
      ref={divRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none overflow-hidden"
    />
  )
}
