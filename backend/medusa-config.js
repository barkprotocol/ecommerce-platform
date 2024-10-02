const dotenv = require("dotenv");

// Determine which environment file to load based on NODE_ENV
let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

// Load environment variables from the correct file
try {
  dotenv.config({ path: `${process.cwd()}/${ENV_FILE_NAME}` });
  console.log(`Environment variables loaded from ${ENV_FILE_NAME}`);
} catch (e) {
  console.error(`Failed to load environment file: ${ENV_FILE_NAME}`, e);
}

// CORS settings for admin and store
const ADMIN_CORS = process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001";
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8000";

// Database and Redis configuration
const DATABASE_URL = process.env.DATABASE_URL || "postgres://localhost/medusa-starter-default";
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Plugins configuration
const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: `@medusajs/file-local`,
    options: {
      upload_dir: "uploads",
    },
  },
  {
    resolve: "@medusajs/admin",
    options: {
      serve: true,
      autoRebuild: true,
      backend: process.env.MEDUSA_ADMIN_BACKEND_URL,
      develop: {
        open: process.env.OPEN_BROWSER !== "true",
        allowedHosts: 'all',
      },
    },
  },
  {
    resolve: 'medusa-plugin-variant-images',
    options: {
      enableUI: true,
    },
  },
  {
    resolve: 'medusa-plugin-category-images',
    options: {
      enableUI: true,
    },
  },
  {
    resolve: `medusa-payment-stripe`,
    options: {
      api_key: process.env.STRIPE_API_KEY,
      webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
    },
  },
  {
    resolve: `medusa-payment-paypal`,
    options: {
      sandbox: process.env.PAYPAL_SANDBOX,
      clientId: process.env.PAYPAL_CLIENT_ID,
      clientSecret: process.env.PAYPAL_CLIENT_SECRET,
      authWebhookId: process.env.PAYPAL_AUTH_WEBHOOK_ID,
    },
  },
  // Add S3 file storage plugin
  {
    resolve: `medusa-file-s3`,
    options: {
      s3_url: process.env.S3_URL,
      bucket: process.env.S3_BUCKET,
      region: process.env.S3_REGION,
      access_key_id: process.env.S3_ACCESS_KEY_ID,
      secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
      cache_control: process.env.S3_CACHE_CONTROL,
      download_file_duration: process.env.S3_DOWNLOAD_FILE_DURATION,
      prefix: process.env.S3_PREFIX,
    },
  },
];

// Optional Redis modules for caching and event bus
const modules = {
  // Uncomment to enable Redis for event bus and caching
  /* eventBus: {
    resolve: "@medusajs/event-bus-redis",
    options: {
      redisUrl: REDIS_URL,
    },
  },
  cacheService: {
    resolve: "@medusajs/cache-redis",
    options: {
      redisUrl: REDIS_URL,
    },
  }, */
};

// Project configuration for Medusa
const projectConfig = {
  jwt_secret: process.env.JWT_SECRET || "supersecret",
  cookie_secret: process.env.COOKIE_SECRET || "supersecret",
  store_cors: STORE_CORS,
  database_url: DATABASE_URL,
  admin_cors: ADMIN_CORS,
  // Uncomment the following lines to enable Redis
  // redis_url: REDIS_URL,
};

module.exports = {
  projectConfig,
  plugins,
  modules,
};
