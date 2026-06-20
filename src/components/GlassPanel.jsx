import { motion } from 'framer-motion'

function GlassPanel({ children, className = '', title, icon: Icon, variant = 'default' }) {
  const variants = {
    default: 'glass-panel',
    dark: 'glass-panel-dark',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ boxShadow: 'var(--tw-shadow-glow-cyan)' }}
      transition={{ duration: 0.3 }}
      className={`${variants[variant]} p-6 transition-all duration-300 ${className}`}
    >
      {(title || Icon) && (
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-iris-cyan/10">
          {Icon && <Icon className="w-5 h-5 text-iris-cyan" />}
          {title && <h3 className="text-lg font-semibold text-iris-cyan">{title}</h3>}
        </div>
      )}
      {children}
    </motion.div>
  )
}

export default GlassPanel
