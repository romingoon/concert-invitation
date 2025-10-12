import type { NextConfig } from 'next';
import type { Configuration, Module, Chunk } from 'webpack';
import crypto from 'crypto';
import bundleAnalyzer from '@next/bundle-analyzer';
import path from 'path';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (
    config: Configuration,
    { isServer, dev }: { isServer: boolean; dev: boolean }
  ) => {
    if (!isServer && !dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            defaultVendors: false,

            lib: {
              test(module: Module): boolean {
                const size =
                  typeof module.size === 'function' ? module.size() : 0;
                const identifier =
                  typeof module.identifier === 'function'
                    ? module.identifier()
                    : '';

                return size > 160000 && /node_modules[/\\]/.test(identifier);
              },
              name(module: Module): string {
                const hash = crypto.createHash('sha1');
                const identifier =
                  typeof module.libIdent === 'function'
                    ? module.libIdent({ context: config.context || '' })
                    : null;

                const fallbackIdentifier =
                  typeof module.identifier === 'function'
                    ? module.identifier()
                    : '';

                hash.update(identifier || fallbackIdentifier);
                return hash.digest('hex').substring(0, 8);
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },

            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
            },

            // 작은 공유 모듈
            shared: {
              name(_module: Module, chunks: Chunk[]): string {
                const chunkNames = chunks
                  .filter(
                    (chunk): chunk is Chunk & { name: string } =>
                      typeof chunk.name === 'string' && chunk.name.length > 0
                  )
                  .map((chunk) => chunk.name)
                  .join('');

                const hash = crypto
                  .createHash('sha1')
                  .update(chunkNames || 'default')
                  .digest('hex');

                return hash.substring(0, 8);
              },
              priority: 10,
              minChunks: 2,
              reuseExistingChunk: true,
            },
          },
          maxInitialRequests: 25,
          maxAsyncRequests: 25,
          minSize: 20000,
        },
      };
    }
    return config;
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [60, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'], // 자동 트리쉐이킹
  },
  turbopack: {
    root: path.resolve(__dirname),
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  compiler: {
    styledComponents: true, // styled-components 지원

    reactRemoveProperties: true, // React 속성 제거
  },
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warn'], // error, warn만 유지
      },
    },
  }),
};

export default withBundleAnalyzer(nextConfig);
