// config.js
import { config } from 'dotenv';

// Load environment variables from .env file
config();

export default {
  apiKey: process.env.API_KEY,
  debug: process.env.DEBUG === 'true',
};
