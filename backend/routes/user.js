const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/user');
const logger = require('../middleware/logger');

/**
 * Route to handle GET requests for fetching users.
 * 
 * Middleware: 
 * - `logger`: Logs the request and response details, including method, URL, and response time.
 * 
 * Controller:
 * - `getUsers`: Handles the actual logic for fetching and returning the users data.
 * 
 * @name GET /users
 * @function
 * @memberof module:routers/users
 * @inner
 * 
 * @param {Function} logger - Logs request and response time.
 * @param {Function} getUsers - Retrieves the users data.
 * @returns {void}
 */
router.get('/', logger, getUsers);

module.exports = router;
