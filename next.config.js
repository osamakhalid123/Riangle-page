/** @type {import('next').NextConfig} */
const nextConfig = {
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.riangle.com",
        port: "3000",
        pathname: "/stories/how-to-open-a-crypto-wallet-and-buy-your-first-nft",
      },
    ],
  },
};

module.exports = nextConfig;
