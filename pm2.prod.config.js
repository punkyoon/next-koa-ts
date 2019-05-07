module.exports = {
  apps: [
    {
      name: "next-koa-ts",
      script: "ts-node",
      args: "--project tsconfig.server.json server/index.ts",
      autorestart: true,
      watch: false,
      exec_mode: "cluster",
      instances: 0,
      NODE_ENV: "productuon",
      PORT: 3000
    }
  ]
};
