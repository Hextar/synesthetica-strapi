module.exports = ({ env }) => ({
  publisher: {
    enabled: true,
  },
  "schemas-to-ts": {
    enabled: true,
  },
  seo: {
    enabled: env("NODE_ENV") === "production",
  },
  tinymce: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
});
