import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'

export default {
  plugins: [vue(), ssr()],
  server: {
    // Configure Vite for HMR with Gitpod.
    hmr: process.env.GITPOD_WORKSPACE_URL
      ? {
          // Due to port fowarding, we have to replace
          // 'https' with the forwarded port, as this
          // is the URI created by Gitpod.
          host: process.env.GITPOD_WORKSPACE_URL.replace("https://", "3000-"),
          protocol: "wss",
          clientPort: 443
        }
      : true
  }
}
