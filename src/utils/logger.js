const LOG_LEVELS = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR'
};

class Logger {
  constructor() {
    this.logs = [];
    this.maxLogs = 1000; // Maximum number of logs to keep in memory
  }

  formatMessage(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data
    };

    // Add to logs array
    this.logs.push(logEntry);

    // Keep only the last maxLogs entries
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }

    // Format console output
    const consoleMessage = `[${timestamp}] [${level}] ${message}`;
    return { consoleMessage, logEntry };
  }

  debug(message, data = null) {
    const { consoleMessage, logEntry } = this.formatMessage(LOG_LEVELS.DEBUG, message, data);
    console.debug(consoleMessage, data ? data : '');
    return logEntry;
  }

  info(message, data = null) {
    const { consoleMessage, logEntry } = this.formatMessage(LOG_LEVELS.INFO, message, data);
    console.info(consoleMessage, data ? data : '');
    return logEntry;
  }

  warn(message, data = null) {
    const { consoleMessage, logEntry } = this.formatMessage(LOG_LEVELS.WARN, message, data);
    console.warn(consoleMessage, data ? data : '');
    return logEntry;
  }

  error(message, error = null) {
    const { consoleMessage, logEntry } = this.formatMessage(LOG_LEVELS.ERROR, message, error);
    console.error(consoleMessage, error ? error : '');
    return logEntry;
  }

  // Get all logs
  getLogs() {
    return this.logs;
  }

  // Get logs by level
  getLogsByLevel(level) {
    return this.logs.filter(log => log.level === level);
  }

  // Export logs as JSON
  exportLogs() {
    return JSON.stringify(this.logs, null, 2);
  }

  // Clear logs
  clearLogs() {
    this.logs = [];
  }
}

// Create a singleton instance
const logger = new Logger();
export default logger;
