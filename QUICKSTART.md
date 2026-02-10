# 🚀 Quick Start Guide - CineBook

Get up and running with CineBook in 2 minutes!

## 📦 What You Get

✅ **8 pre-loaded movies**  
✅ **Full authentication system**  
✅ **Personalized recommendations**  
✅ **5-star rating system**  
✅ **Dark cinematic theme**  
✅ **Fully responsive design**  
✅ **Zero backend dependencies**

## 🎯 How to Run

### Option 1: Direct File Access (Simplest)
1. Navigate to `frontend/` folder
2. Right-click `index.html`
3. Select "Open with Browser"
4. Enjoy! 🎬

### Option 2: Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically with live reload

### Option 3: Python Server
```bash
cd frontend
python -m http.server 8000
```
Then open: `http://localhost:8000`

### Option 4: Node.js HTTP Server
```bash
cd frontend
npx http-server
```

## 🎬 First Time Setup

### Step 1: Explore Home Page
- Click home to see featured movies
- View movie cards with ratings
- Check out our info section

### Step 2: Create Account
- Click "Register" button
- Fill in your details (any email/password works for demo)
- Get instant access

### Step 3: Set Preferences (Optional)
- Click "Preferences" in navigation
- Select your favorite genres
- Choose language and mood
- Click "Apply Preferences"
- Get personalized recommendations!

### Step 4: Browse Movies
- See all 8 movies on homepage
- Movies filtered by your preferences
- Hover for interactive effects

### Step 5: Rate a Movie
- Click "Rate" button on any movie
- Select 1-5 stars
- See instant confirmation

## 🎮 Interactive Features

### Hover Effects
- 🌟 Movie cards lift and glow on hover
- ⭐ Stars change on hover over rating buttons
- 💻 Navigation underlines slide on hover
### Animations
- ↓ Smooth slide-in animations for pages
- ✨ Fade-in effects for content
- 💫 Shine effect on movie posters
- 🔄 Glow pulse effects on accents

### Responsive Behavior
- 📱 Mobile: Single column, touch-friendly
- 📊 Tablet: 2-column layout
- 💻 Desktop: Full featured grid layout

## 📊 Movie Catalog

Pre-loaded with diverse movies:

| Movie | Genre | Mood | Rating |
|-------|-------|------|--------|
| 🚀 Cosmic Nexus | Sci-Fi | Thrilling | 4.5⭐ |
| 💕 Heart's Desire | Romance | Emotional | 4.2⭐ |
| 🔥 Shadow Chase | Action | Thrilling | 4.8⭐ |
| 🔍 Mystery Manor | Thriller | Suspenseful | 4.6⭐ |
| 😂 Laughter Fest | Comedy | Fun | 4.0⭐ |
| 🐉 Dragon's Realm | Fantasy | Adventurous | 4.7⭐ |
| 🌊 Ocean's Tale | Drama | Emotional | 4.3⭐ |
| 🛸 Space Escape | Sci-Fi | Thrilling | 4.4⭐ |

## 🎯 Demo Credentials

For quick testing:
```
Email: demo@cinebook.com
Password: demo123
```

*Actually, any email/password works in demo mode!*

## ⚙️ Features Breakdown

### 🏠 Homepage
- Animated hero section
- Featured movies grid
- Why Choose CineBook section
- Quick preference setup link

### 🔐 Authentication
- Email-based login
- Registration with confirmation
- Session persistence
- Personalized welcome message

### 🎯 Preferences
- Multi-select genres
- Language options
- Mood selection
- Real-time preference saving

### 🎬 Movie Details
- Full movie information
- Large poster display
- Quick rating and booking
- Related movies section

### 🎪 Seat Selection
- Visual seating chart
- Clear seat legends
- Multi-seat selection
- Live booking summary
- Price calculation

### ⭐ Rating System
- 5-star interactive interface
- Hover preview
- Persistent storage
- Visual confirmation

## 🎨 Customization Tips

### Change Colors
Edit `style.css`:
```css
:root {
  --dark-bg: #0a0a0a;
  --accent-gold: #d4af37;
  --accent-red: #ff1744;
}
```

### Change Movies
Edit `script.js` - `MOVIES_DATABASE` array:
```javascript
const MOVIES_DATABASE = [
  {
    id: 1,
    title: "Your Movie",
    genre: "Genre",
    // ... more fields
  }
];
```

## 📱 Browser Support

✅ Chrome (Latest)  
✅ Firefox (Latest)  
✅ Safari (12+)  
✅ Edge (Latest)  
✅ Mobile Chrome  
✅ Mobile Safari

## 🔍 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Tab | Navigate elements |
| Enter | Click button/submit form |
| Space | Toggle checkbox |
| Escape | Close popup/modal |

## 💾 Data Persistence

Everything is saved automatically to browser:
- ✅ Login session
- ✅ User preferences
- ✅ Movie ratings

Your data persists until you clear browser cache!

## 🐛 Troubleshooting

### Movies not showing?
- Refresh the page (Ctrl+R or Cmd+R)
- Clear browser cache
- Try different browser

### Lost session after closing?
- Check browser privacy settings
- Cookies should be enabled
- localStorage must be allowed

### Styles look wrong?
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Disable extensions temporarily

### Responsive design broken?
- Check viewport meta tag in HTML
- Resize browser window
- Use mobile device simulator in DevTools

## 📚 Key Files

| File | Purpose |
|------|---------|
| `index.html` | Homepage with movie grid |
| `login.html` | User login page |
| `register.html` | Account creation |
| `preferences.html` | Filter preferences |
| `movie.html` | Movie details view |
| `style.css` | All styling (1000+ lines) |
| `script.js` | All interactivity (600+ lines) |

## 🎓 Learning Resources

### HTML
- Semantic structure
- Form elements
- Data attributes
- Modal patterns

### CSS
- CSS Grid layouts
- Flexbox alignment
- Custom properties
- Keyframe animations
- Media queries
- Shadow/glow effects

### JavaScript
- localStorage API
- DOM manipulation
- Event handling
- Array methods
- Object management
- String templates

## 🚀 Next Steps

1. **Explore the code** - See how everything works
2. **Customize** - Change colors, add movies, modify text
3. **Learn** - Study CSS animations and JS functionality
4. **Build Backend** - Add server and database later
5. **Deploy** - Host on GitHub Pages or your server

## 📞 Questions?

Check the main [README.md](./README.md) for:
- ✅ Detailed feature documentation
- ✅ Technical architecture
- ✅ Future enhancement ideas
- ✅ Production readiness tips

---

**Enjoy exploring CineBook!** 🎬✨🍿
