module.exports = {
  apps: [
    {
      name: "next-koa-ts",
      script: "ts-node",
      args: "--project tsconfig.server.json server/index.ts",
      autorestart: true,
      watch: true,
      exec_mode: "cluster",
      instances: 0,
      NODE_ENV: "development",
      PORT: 3000
    }
  ]
};
