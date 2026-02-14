module.exports = {
  apps: [
    {
      name: 'imz-website',
      script: 'npx',
      args: 'serve out -l 3000',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_restarts: 3
    }
  ]
}
