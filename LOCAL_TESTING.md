# Local Testing Guide

## Testing Static Build Locally

When testing the static build locally, you cannot simply open the `index.html` file directly in your browser due to CORS restrictions. The browser will block loading of CSS, JavaScript, and other assets when using the `file://` protocol.

### Solution: Use Local HTTP Server

We've included a simple HTTP server to serve the static files properly:

```bash
# Build and serve in one command
npm run build:serve

# Or run separately
npm run build
npm run serve
```

This will:

1. Build the static export to the `out/` directory
2. Start a local HTTP server on `http://localhost:3000`
3. Serve all static assets with proper MIME types and CORS headers

### Manual Server Options

Alternatively, you can use other static file servers:

```bash
# Using Python (if installed)
cd out && python3 -m http.server 3000

# Using Node.js http-server (install globally first)
npm install -g http-server
cd out && http-server -p 3000

# Using PHP (if installed)
cd out && php -S localhost:3000
```

### GitHub Pages Deployment

The GitHub Actions workflow automatically handles deployment to GitHub Pages with proper asset serving. The CORS issues only occur when testing locally with the `file://` protocol.

### Troubleshooting

**Port already in use?**

```bash
# Find what's using port 3000
lsof -i :3000

# Kill the process (replace PID with actual process ID)
kill -9 <PID>
```

**Assets not loading?**

- Ensure you're accessing `http://localhost:3000` (not `file://`)
- Check that the `out/` directory exists and contains the built files
- Verify the build completed successfully with `npm run build`

**Styling issues?**

- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows/Linux)
- Check browser developer tools for any remaining 404 errors
- Ensure Tailwind CSS is properly compiled in the build output
