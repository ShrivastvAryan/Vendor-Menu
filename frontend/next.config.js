// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Home",
        permanent: false,
      },
    ]
  },
}
