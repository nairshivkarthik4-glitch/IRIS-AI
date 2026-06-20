import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'

function BeforeAfterSlider({ before, after, beforeLabel = 'Original', afterLabel = 'Enhanced' }) {
  const [sliderPos, setSliderPos] = useState(50)
  const [zoom, setZoom] = useState(1)
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.max(0, Math.min(100, pos)))
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setZoom(Math.max(1, zoom - 0.2))}
            className="p-2 bg-iris-cyan/10 hover:bg-iris-cyan/20 rounded-lg text-iris-cyan transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </motion.button>
          <span className="text-sm text-gray-400 font-mono">{(zoom * 100).toFixed(0)}%</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setZoom(Math.min(3, zoom + 0.2))}
            className="p-2 bg-iris-cyan/10 hover:bg-iris-cyan/20 rounded-lg text-iris-cyan transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </motion.button>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-iris-cyan/10 hover:bg-iris-cyan/20 rounded-lg text-iris-cyan transition-colors"
        >
          <Maximize2 className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full h-96 bg-black rounded-lg overflow-hidden cursor-col-resize group border border-iris-cyan/20 shadow-glow-cyan"
      >
        {/* After Image */}
        <div className="absolute inset-0">
          {after ? (
            <img
              src={after}
              alt={afterLabel}
              className="w-full h-full object-cover"
              style={{ transform: `scale(${zoom})` }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-iris-cyan/10 to-iris-orange/10">
              <span className="text-gray-500">Enhanced Image</span>
            </div>
          )}
        </div>

        {/* Before Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          {before ? (
            <img
              src={before}
              alt={beforeLabel}
              className="w-full h-full object-cover"
              style={{ transform: `scale(${zoom})` }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <span className="text-gray-500">Original Image</span>
            </div>
          )}
        </div>

        {/* Slider Handle */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-iris-cyan shadow-glow-intense cursor-col-resize group"
          style={{ left: `${sliderPos}%` }}
          drag="x"
          dragElastic={0}
          dragConstraints={containerRef}
          onDrag={(_, info) => {
            const rect = containerRef.current?.getBoundingClientRect()
            if (rect) {
              const pos = ((info.x + rect.width / 2) / rect.width) * 100
              setSliderPos(Math.max(0, Math.min(100, pos)))
            }
          }}
        >
          <div className="absolute -top-3 -left-3 w-7 h-7 bg-iris-cyan rounded-full shadow-glow-intense flex items-center justify-center group-hover:scale-125 transition-transform">
            <div className="w-1 h-4 bg-iris-black rounded-full"></div>
          </div>
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-sm font-semibold text-iris-cyan bg-black/50 px-3 py-1 rounded backdrop-blur">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 z-10">
          <span className="text-sm font-semibold text-iris-orange bg-black/50 px-3 py-1 rounded backdrop-blur">
            {afterLabel}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BeforeAfterSlider
