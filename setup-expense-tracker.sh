#!/bin/bash
{
export DEBIAN_FRONTEND=noninteractive

# Update and install dependencies
sudo apt update -y
sudo apt install -y curl git nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -
sudo apt install -y nodejs

# Clone GitHub repo
sudo git clone https://github.com/nodejs-express-js/Expense-Tracker.git /var/www/expense-tracker

# ---------------- Frontend ----------------
cd /var/www/expense-tracker/frontend
sudo npm install
sudo npm run build

# Copy frontend build to nginx root
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/

# ---------------- Backend ----------------
cd /var/www/expense-tracker/backend
sudo npm install

sudo tee -a /home/ubuntu/.bashrc <<EOL
export PORT=4000
export MONGODB_URI=mongodb+srv://vishal:Hello123@cluster0.ycbwfir.mongodb.net/
export JWTKEY=asdfadsfasdfasdfasdf
EOL




sudo bash -c "source ~/.bashrc"

echo $PORT
echo $MONGODB_URI
echo $JWTKEY

cat <<EOL > /var/www/expense-tracker/backend/.env
PORT=4000
MONGODB_URI=mongodb+srv://vishal:Hello123@cluster0.ycbwfir.mongodb.net/
JWTKEY=asdfadsfasdfasdfasdf
EOL

cat /var/www/expense-tracker/backend/.env

echo "vishal=============================="

# Install pm2 to keep backend running in background
# sudo npm install -g pm2
# sudo pm2 start server.js --name expense-backend
# sudo pm2 startup
# sudo pm2 save
sudo node server.js &

# ---------------- nginx config ----------------
sudo tee /etc/nginx/sites-available/default > /dev/null <<'NGINXCONF'
server {
    listen 80;
    server_name _;

    root /var/www/html;
    index index.html;
    
    location /assets/ {
        try_files $uri =404;
    }

    location = / {
        # Serve index.html for root
        try_files /index.html =404;
    }

    location / {
        # Proxy everything else
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

NGINXCONF

sudo nginx -t && sudo systemctl restart nginx
}>> /home/ubuntu/setup.log 2>&1