import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'

function ThermalVisualization({ data, type = 'distribution' }) {
  const thermalData = [
    { temp: 'Cold (<0°C)', count: 12, percentage: 8 },
    { temp: 'Cool (0-10°C)', count: 28, percentage: 18 },
    { temp: 'Mild (10-20°C)', count: 42, percentage: 28 },
    { temp: 'Warm (20-30°C)', count: 38, percentage: 25 },
    { temp: 'Hot (30-40°C)', count: 24, percentage: 16 },
    { temp: 'Extreme (>40°C)', count: 8, percentage: 5 },
  ]

  const intensityData = [
    { region: 'Region A', intensity: 65, objects: 3 },
    { region: 'Region B', intensity: 78, objects: 5 },
    { region: 'Region C', intensity: 45, objects: 2 },
    { region: 'Region D', intensity: 92, objects: 7 },
    { region: 'Region E', intensity: 55, objects: 4 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Thermal Scale */}
      <div className="glass-panel p-4">
        <h4 className="text-sm font-semibold text-iris-cyan mb-3">THERMAL INTENSITY SCALE</h4>
        <div className="flex h-8 rounded-lg overflow-hidden border border-iris-cyan/20">
          <div className="flex-1 bg-gradient-to-r from-thermal-cold via-thermal-mild to-thermal-hot"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>-40°C</span>
          <span>0°C</span>
          <span>40°C</span>
          <span>80°C</span>
        </div>
      </div>

      {/* Distribution Chart */}
      <div className="glass-panel p-4">
        <h4 className="text-sm font-semibold text-iris-cyan mb-4">TEMPERATURE DISTRIBUTION</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={thermalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 217, 255, 0.1)" />
            <XAxis dataKey="temp" stroke="#999" fontSize={12} />
            <YAxis stroke="#999" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(5, 8, 16, 0.9)',
                border: '1px solid rgba(0, 217, 255, 0.3)',
              }}
              labelStyle={{ color: '#00D9FF' }}
            />
            <Bar dataKey="count" fill="#00D9FF" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Intensity by Region */}
      <div className="glass-panel p-4">
        <h4 className="text-sm font-semibold text-iris-cyan mb-4">THERMAL INTENSITY BY REGION</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={intensityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 217, 255, 0.1)" />
            <XAxis dataKey="region" stroke="#999" fontSize={12} />
            <YAxis stroke="#999" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(5, 8, 16, 0.9)',
                border: '1px solid rgba(0, 217, 255, 0.3)',
              }}
              labelStyle={{ color: '#00D9FF' }}
            />
            <Line
              type="monotone"
              dataKey="intensity"
              stroke="#FF6B35"
              strokeWidth={2}
              dot={{ fill: '#FF6B35', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Peak Temp', value: '67°C', color: 'text-red-500' },
          { label: 'Avg Temp', value: '22°C', color: 'text-yellow-500' },
          { label: 'Min Temp', value: '-5°C', color: 'text-blue-500' },
          { label: 'Hot Pixels', value: '8.2%', color: 'text-iris-orange' },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            className="glass-panel p-3 text-center"
          >
            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ThermalVisualization
