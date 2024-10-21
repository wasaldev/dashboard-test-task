const { performance } = require('perf_hooks');

/**
 * Middleware to log HTTP requests with request time, method, URL, and response duration.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware function in the stack.
 * @returns {void}
 */
const logger = (req, res, next) => {
  const requestTime = new Date().toISOString(); // Get the current timestamp in ISO format
  const start = performance.now(); // Record the start time for performance measurement

  // Listen for the 'finish' event to calculate response duration
  res.on('finish', () => {
    const duration = performance.now() - start; // Calculate the duration in milliseconds
    console.log(
      `[${requestTime}] ${req.method} ${req.url} - ${duration.toFixed(2)} ms`
    ); // Log request details with the duration
  });

  // Call the next middleware in the stack
  next();
};

module.exports = logger;
