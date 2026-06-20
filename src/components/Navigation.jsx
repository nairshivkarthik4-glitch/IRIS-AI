import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Satellite, Radar, Zap, BarChart3, FileText, Home } from 'lucide-react'

function Navigation() {
  const location = useLocation()

  const navItems = [
    { path: '/command-center', label: 'Command Center', icon: Radar },
    { path: '/enhancement', label: 'Enhancement', icon: Zap },
    { path: '/interpretation', label: 'Interpretation', icon: Satellite },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/reports', label: 'Reports', icon: FileText },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel-dark border-b border-iris-cyan/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-iris-cyan to-iris-orange rounded-lg flex items-center justify-center shadow-glow-intense">
                <Satellite className="w-6 h-6 text-iris-black" />
              </div>
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-iris-cyan text-sm">IRIS</span>
              <span className="text-xs text-gray-400">AI Intelligence</span>
            </div>
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-iris-cyan/20 text-iris-cyan shadow-glow-cyan'
                        : 'text-gray-300 hover:text-iris-cyan hover:bg-iris-cyan/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.button>
                </Link>
              )
            })}
          </div>

          {/* Status Indicators */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs">
              <div className="status-online"></div>
              <span className="text-green-400">System Active</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
              <span>AI Engine:</span>
              <span className="text-iris-cyan font-mono">ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
