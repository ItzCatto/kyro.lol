import { useEffect, useRef } from "react"

const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAG = `
precision mediump float;
uniform float time;
uniform vec2 resolution;

vec3 palette(float t) {
  // Deep purple to near-black gradient palette
  vec3 a = vec3(0.04, 0.02, 0.12);
  vec3 b = vec3(0.11, 0.04, 0.28);
  vec3 c = vec3(0.06, 0.01, 0.18);
  vec3 d = vec3(0.18, 0.11, 0.42);
  return a + b * cos(6.28318 * (c * t + d));
}

float noise(vec2 p) {
  return sin(p.x * 3.0 + time * 0.3)
       * cos(p.y * 2.5 + time * 0.25)
       + sin(p.x * 1.5 - p.y * 2.0 + time * 0.2) * 0.5
       + cos(p.x * 4.0 + p.y * 3.5 + time * 0.15) * 0.3;
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  uv.x *= resolution.x / resolution.y;

  float n = noise(uv * 2.5) * 0.5 + 0.5;
  float radial = 1.0 - length(uv - vec2(0.5 * resolution.x / resolution.y, 0.5)) * 1.2;
  radial = clamp(radial, 0.0, 1.0);

  vec3 col = palette(n + time * 0.05);
  col *= radial * 1.4;

  // Add a soft purple glow in the centre
  float glow = exp(-length(uv - vec2(0.5 * resolution.x / resolution.y, 0.45)) * 4.0);
  col += vec3(0.12, 0.04, 0.35) * glow * 0.6;

  gl_FragColor = vec4(col, 1.0);
}
`

function compileShader(gl: WebGLRenderingContext, src: string, type: number) {
  const s = gl.createShader(type)!
  gl.shaderSource(s, src)
  gl.compileShader(s)
  return s
}

export default function KyroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl")
    if (!gl) return

    const vert = compileShader(gl, VERT, gl.VERTEX_SHADER)
    const frag = compileShader(gl, FRAG, gl.FRAGMENT_SHADER)

    const prog = gl.createProgram()!
    gl.attachShader(prog, vert)
    gl.attachShader(prog, frag)
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    )

    const posLoc = gl.getAttribLocation(prog, "position")
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const timeLoc = gl.getUniformLocation(prog, "time")
    const resLoc = gl.getUniformLocation(prog, "resolution")

    let animId: number
    let start: number | null = null

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener("resize", resize)

    const render = (ts: number) => {
      if (start === null) start = ts
      const t = (ts - start) / 1000

      gl.uniform1f(timeLoc, t)
      gl.uniform2f(resLoc, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
      style={{ display: "block" }}
    />
  )
}
