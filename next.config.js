/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "img.freepik.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "media.istockphoto.com",
      "tailwindui.com",
      "image.freepik.com",
      "rare-gallery.com",
      "wallpaperaccess.com",
    ],
  },
};

module.exports = nextConfig;
