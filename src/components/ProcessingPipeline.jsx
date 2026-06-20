import { motion } from 'framer-motion'
import { CheckCircle2, Circle, ChevronRight } from 'lucide-react'

function ProcessingPipeline({ steps, currentStep = 0 }) {
  return (
    <div className="glass-panel p-6">
      <h3 className="text-lg font-semibold text-iris-cyan mb-6">AI PROCESSING PIPELINE</h3>
      
      <div className="space-y-3">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isActive = index === currentStep
          const isPending = index > currentStep

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                className={`flex-shrink-0 ${
                  isCompleted
                    ? 'text-green-500'
                    : isActive
                    ? 'text-iris-cyan'
                    : 'text-gray-600'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </motion.div>
              
              <div className="flex-1">
                <p className={`text-sm font-medium ${
                  isCompleted
                    ? 'text-green-500'
                    : isActive
                    ? 'text-iris-cyan'
                    : 'text-gray-500'
                }`}>
                  {step}
                </p>
              </div>

              {isActive && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-iris-cyan"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      {currentStep === steps.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
        >
          <p className="text-sm text-green-400 text-center font-medium">
            ✓ Processing Complete
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default ProcessingPipeline
