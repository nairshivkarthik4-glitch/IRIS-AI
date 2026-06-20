import { motion } from 'framer-motion'

function StatusCard({ label, value, status = 'normal', icon: Icon, trend }) {
  const statusColors = {
    normal: 'text-iris-cyan',
    warning: 'text-yellow-500',
    critical: 'text-red-500',
    success: 'text-green-500',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-panel p-4 group cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {Icon && (
            <div className={`p-2 rounded-lg bg-iris-cyan/10 ${statusColors[status]}`}>
              <Icon className="w-5 h-5" />
            </div>
          )}
          <span className="text-sm text-gray-400">{label}</span>
        </div>
        {status !== 'normal' && (
          <div className={`w-2 h-2 rounded-full ${statusColors[status]}`}></div>
        )}
      </div>
      <div className="flex items-end justify-between">
        <h4 className={`text-2xl font-bold ${statusColors[status]}`}>{value}</h4>
        {trend && (
          <span className={`text-xs font-mono ${
            trend.direction === 'up' ? 'text-green-500' : 'text-red-500'
          }`}>
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default StatusCard
