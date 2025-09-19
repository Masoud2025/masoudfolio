'use client'

import { useEffect, useRef } from 'react'

const FluidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    import('webgl-fluid').then(({ default: fluid }) => {
      const canvas = canvasRef.current!
      fluid(canvas, {
        SIM_RESOLUTION: 64,
        DYE_RESOLUTION: 256,
        DENSITY_DISSIPATION: 3,
        VELOCITY_DISSIPATION: 0.4,
        PRESSURE: 0.6,
        PRESSURE_ITERATIONS: 15,
        CURL: 20,
        SPLAT_RADIUS: 0.2,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 6,
        BACK_COLOR: { r: 255, g: 255, b: 255 }, //  white background
        TRANSPARENT: false,
        BLOOM: true,
      })

      // Mouse movement and splash the color on the page
      const splat = (x: number, y: number) => {
        const e = new CustomEvent('splats', {
          detail: {
            x,
            y,
            dx: (Math.random() - 0.5) * 500,
            dy: (Math.random() - 0.5) * 500,
            color: [Math.random(), Math.random(), Math.random()],
          },
        })
        canvas.dispatchEvent(e)
      }

      const moveHandler = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        splat(x, y)
      }

      window.addEventListener('mousemove', moveHandler)
      return () => window.removeEventListener('mousemove', moveHandler)
    })
  }, [])

  return (
    <canvas ref={canvasRef} className='fixed inset-0 w-full h-full -z-10' />
  )
}

export default FluidBackground
