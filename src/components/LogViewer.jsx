import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logger from '../utils/logger';

const LogViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    // Update logs every second
    const interval = setInterval(() => {
      setLogs(logger.getLogs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredLogs = logs.filter(log => {
    if (filter === 'ALL') return true;
    return log.level === filter;
  });

  const getLogColor = (level) => {
    switch (level) {
      case 'DEBUG': return 'text-gray-600 dark:text-gray-400';
      case 'INFO': return 'text-blue-600 dark:text-blue-400';
      case 'WARN': return 'text-yellow-600 dark:text-yellow-400';
      case 'ERROR': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-700 dark:text-gray-300';
    }
  };

  const downloadLogs = () => {
    const blob = new Blob([logger.exportLogs()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-logs-${new Date().toISOString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? 'Hide Logs' : 'Show Logs'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-16 right-4 w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Application Logs</h3>
                <div className="flex gap-2">
                  <select
                    className="bg-gray-100 dark:bg-gray-700 rounded-lg px-2 py-1"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="ALL">All Levels</option>
                    <option value="DEBUG">Debug</option>
                    <option value="INFO">Info</option>
                    <option value="WARN">Warning</option>
                    <option value="ERROR">Error</option>
                  </select>
                  <button
                    onClick={downloadLogs}
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
                  >
                    Download
                  </button>
                </div>
              </div>

              <div className="h-96 overflow-y-auto bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                {filteredLogs.length === 0 ? (
                  <p className="text-center text-gray-500">No logs to display</p>
                ) : (
                  <div className="space-y-2">
                    {filteredLogs.map((log, index) => (
                      <div
                        key={index}
                        className="font-mono text-sm"
                      >
                        <span className="text-gray-500">{new Date(log.timestamp).toLocaleTimeString()}</span>
                        {' '}
                        <span className={getLogColor(log.level)}>[{log.level}]</span>
                        {' '}
                        <span className="text-gray-700 dark:text-gray-300">{log.message}</span>
                        {log.data && (
                          <pre className="mt-1 text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            {JSON.stringify(log.data, null, 2)}
                          </pre>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LogViewer;
