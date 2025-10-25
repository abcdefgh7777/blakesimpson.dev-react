# Deployment Guide - Subdomain Architecture

## Architecture Overview

```
Main React App:        https://blakesimpson.dev
Python Backrooms:      https://backrooms.blakesimpson.dev
```

## Step 1: Deploy React App to Vercel

1. **Go to [Vercel](https://vercel.com)**
2. **Import your GitHub repository**
3. **Configure:**
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `build`

4. **Add Environment Variable:**
   ```
   REACT_APP_BACKROOMS_URL=https://backrooms.blakesimpson.dev
   ```

5. **Deploy!**

## Step 2: Deploy Python Backrooms to Railway

1. **Go to [Railway](https://railway.app)**
2. **New Project → Deploy from GitHub**
3. **Configure:**
   - Root Directory: `/whisper`
   - Start Command: `python app_production_autonomous.py`

4. **Add Environment Variables:**
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=8000
   ```

5. **Add Custom Domain:**
   - Go to Settings → Domains
   - Add domain: `backrooms.blakesimpson.dev`
   - Railway will show you a CNAME target

## Step 3: Configure DNS

In your domain provider (Cloudflare, Namecheap, etc.):

### For Main Domain (Vercel):
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP - check Vercel docs for current)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### For Backrooms Subdomain (Railway):
```
Type: CNAME
Name: backrooms
Value: your-app.up.railway.app (Railway provides this)
```

## Step 4: Test

1. Visit `https://blakesimpson.dev` - React app should load
2. Click "backrooms" button
3. Should open `https://backrooms.blakesimpson.dev` in new tab

## Local Development

### Terminal 1 - React App:
```bash
cd C:\COOK\blakesimpson.dev-react
npm start
```
Runs on: http://localhost:3000

### Terminal 2 - Python App:
```bash
cd C:\COOK\blakesimpson.dev-react\whisper
python app_production_autonomous.py
```
Runs on: http://localhost:8000

### Local Environment:
Create `.env` in root:
```
REACT_APP_BACKROOMS_URL=http://localhost:8000
```

## Troubleshooting

### CORS Issues:
The Python app already has CORS configured (`allow_origins=["*"]`). If you need to restrict it:
- Edit `whisper/app_production_autonomous.py` line 82
- Change `["*"]` to `["https://blakesimpson.dev"]`

### Environment Variables Not Working:
- Vercel: Restart deployment after adding env vars
- Railway: Redeploy after adding env vars
- Local: Restart `npm start` after creating `.env`

### Railway Start Command:
If Railway doesn't auto-detect, set custom start command:
```
python app_production_autonomous.py
```

## Cost Estimate

- **Vercel**: Free tier (perfect for personal sites)
- **Railway**: $5/month starter plan
- **Domain**: ~$10/year
- **Total**: ~$7/month

## Alternative: Both on Railway

If you prefer to use Railway for both:

1. Create two services in same project
2. Service 1 (React): Root directory `/`, build command `npm run build`
3. Service 2 (Python): Root directory `/whisper`
4. Connect custom domains to each service
