module.exports = {
  globDirectory: "public\\",
  globPatterns: [
    "**/*.{html,ico,json,js,css,png,jpg,map}",
    "src/images/*.{jpg,png}",
  ],
  swDest: "public/service-worker.js",
  globIgnores: ["..\\workbox-cli-config.js", "help/**"],
};
