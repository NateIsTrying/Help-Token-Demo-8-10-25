// Deploy script for demo
#!/bin/bash
echo "🚀 Deploying HelpToken Demo..."

# Build the static site
npm run export

# Deploy to GitHub Pages (optional)
if [ "$1" = "--github" ]; then
    echo "Deploying to GitHub Pages..."
    
    # Create gh-pages branch if it doesn't exist
    git checkout --orphan gh-pages 2>/dev/null || git checkout gh-pages
    
    # Copy built files
    cp -r out/* .
    
    # Commit and push
    git add .
    git commit -m "Deploy demo $(date)"
    git push origin gh-pages --force
    
    echo "✅ Demo deployed to GitHub Pages!"
else
    echo "✅ Demo built in 'out' directory"
    echo "Deploy options:"
    echo "  - GitHub Pages: ./deploy.sh --github"
    echo "  - Netlify: Drag 'out' folder to netlify.com"
    echo "  - Vercel: npx vercel"
fi