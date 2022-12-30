module.exports = {
  apps: [
    {
      name: "whatsappbot",
      script: "./dist/main.js",
      // Restart after memory hit 1GB
      max_memory_restart: "1024M",
      args: ["--color"]
    }
  ]
}
