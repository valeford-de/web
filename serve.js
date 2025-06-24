const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const OUT_DIR = path.join(__dirname, "out");

// MIME types for different file extensions
const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || "application/octet-stream";
}

const server = http.createServer((req, res) => {
  let filePath = path.join(OUT_DIR, req.url === "/" ? "index.html" : req.url);

  // Handle trailing slashes by looking for index.html
  if (req.url.endsWith("/") && req.url !== "/") {
    filePath = path.join(OUT_DIR, req.url, "index.html");
  }

  // Security: prevent directory traversal
  if (!filePath.startsWith(OUT_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404);
        res.end("File not found");
      } else {
        res.writeHead(500);
        res.end("Server error");
      }
      return;
    }

    const mimeType = getMimeType(filePath);
    res.writeHead(200, {
      "Content-Type": mimeType,
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Static server running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${OUT_DIR}`);
  console.log(`\n📖 Open http://localhost:${PORT} in your browser\n`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(
      `❌ Port ${PORT} is already in use. Please stop other servers or use a different port.`,
    );
  } else {
    console.error("❌ Server error:", err);
  }
});
