#!/bin/bash

# Algorithm Master - Start Script
echo "🚀 Starting Algorithm Master Learning Platform..."

# Load Node.js environment
export NVM_DIR="$HOME/.config/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server
echo "🎯 Starting development server..."
echo "📍 Application will be available at: http://localhost:3000"
echo "🌐 Network access: http://192.168.100.176:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev

