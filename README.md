# 🎬 CineBook - Movie Recommendation & Booking System

A modern, dark-themed movie booking platform with personalized recommendations, interactive seat selection, and star ratings.

## 📋 Project Overview

CineBook is a fully responsive web application that allows users to:
- **Discover movies** based on personalized preferences
- **Rate movies** with a 5-star rating system
- **Book tickets** with an intuitive seat selection interface
- **Manage accounts** with login and registration
- **Get recommendations** based on genre, language, and mood preferences

## 🎨 Design Features

### Theme
- **Dark Theme**: Black (#0a0a0a) with dark secondary (#1a1a1a)
- **Accent Colors**: Gold (#d4af37) and Neon Red (#ff1744)
- **Cinematic Fonts**: Cinzel for headers, Poppins for body text
- **Effects**: Hover glow, animations, smooth transitions, shadow effects

### Responsive Design
- 📱 Mobile-first approach
- 💻 Desktop optimization
- 🖥️ Tablet support
- Flexible grid layouts with media queries

## 📁 Project Structure

```
frontend/
├── index.html        → Homepage with featured movies
├── login.html        → User login page
├── register.html     → User registration page
├── preferences.html  → Genre/language/mood preferences
├── movie.html        → Movie details and rating modal
├── style.css         → Complete styling (1000+ lines)
├── script.js         → Interactive features (600+ lines)
└── assets/
    ├── posters/      → Movie poster images
    └── icons/        → Icon assets
```

## 🎯 Core Features

### 1. **Authentication System**
- Login page with email/password
- Registration with password confirmation
- Session management using localStorage
- Welcome message for logged-in users

### 2. **Preference System**
- **Genre Selection**: Action, Comedy, Drama, Fantasy, Romance, Sci-Fi, Thriller
- **Language Options**: English, Spanish, French, German
- **Mood Filters**: Fun, Emotional, Thrilling, Suspenseful, Adventurous
- Saved preferences in browser storage

### 3. **Movie Catalog**
- 8 pre-loaded movies with details
- Movie cards with posters (emoji representations)
- Title, genre, language, duration, and description
- Quick actions: View Details, Rate

### 4. **Recommendation Engine**
- Filters movies by selected preferences
- Real-time filtering as preferences change
- Shows "no matches" message when filters are too narrow

### 5. **Star Rating System**
- 5-star interactive rating interface
- Hover preview of selected rating
- Stores ratings in user session
- Displays saved ratings on movie cards
- Rating feedback modal with visual confirmation

### 6. **Movie Details Page**
- Large movie display with emoji poster
- Key information: Genre, language, duration, mood
- Full description
- Quick booking and rating buttons
- Similar movies section

## 🔧 Technical Implementation

### Frontend Stack
- **HTML5**: Semantic markup with form validation
- **CSS3**: 
  - CSS Grid for layouts
  - Flexbox for component alignment
  - Keyframe animations
  - CSS custom properties (variables) for theming
  - Mobile-first responsive design
  - 1000+ lines of code

- **JavaScript (ES6+)**:
  - localStorage for persistence
  - DOM manipulation
  - Event handling
  - Session management
  - 600+ lines of interactive code

### Key JavaScript Functions

#### Authentication
- `handleLogin()` - Process user login
- `handleRegister()` - Create new account
- `handleLogout()` - Clear session and redirect
- `updateAuthUI()` - Update navigation based on login status

#### Movies & Recommendations
- `renderMovieCard()` - Generate HTML for movie cards
- `renderAllMovies()` - Display all movies in grid
- `filterMoviesByPreferences()` - Smart filtering system
- `viewMovieDetails()` - Navigate to movie details page

#### Ratings
- `openRatingModal()` - Show rating interface
- `selectRating()` - Save user rating
- `generateStars()` - Create star display
- `initializeRatingStars()` - Setup interactive stars

#### Preferences
- `handlePreferenceChange()` - Update user preferences
- `applyPreferences()` - Save and apply filters

### Data Structure

```javascript
userSession = {
  loggedIn: boolean,
  userName: string,
  email: string,
  preferences: {
    genres: [],
    language: string,
    mood: string
  },
  userRatings: {}
}
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required (frontend-only)

### Installation

1. **Download/Clone the project**
   ```bash
   git clone <repository-url>
   cd movie-booking-system/frontend
   ```

2. **Open in browser**
   - Option A: Double-click `index.html`
   - Option B: Use Live Server (VS Code extension)
   - Option C: Use Python HTTP server
     ```bash
     python -m http.server 8000
     ```

3. **Access the application**
   - `http://localhost:8000` (if using server)
   - Or file path directly in browser

## 📖 User Workflow

### First-Time User
1. Visit homepage → See featured movies
2. Click "Set Preferences" → Select genres, language, mood
3. Click "Create Account" → Register with email
4. Browse filtered movies → See personalized recommendations
5. Click on movie → View details
6. Click "Book" → Select seats and confirm

### Returning User
1. Click "Login" → Enter credentials
2. Browse movies with saved preferences
3. Rate movies
4. Book tickets with seat selection

## 🎬 Movie Database

Pre-loaded with 8 movies:
- **Cosmic Nexus** - Sci-Fi (Thrilling)
- **Heart's Desire** - Romance (Emotional)
- **Shadow Chase** - Action (Thrilling)
- **Mystery Manor** - Thriller (Suspenseful)
- **Laughter Fest** - Comedy (Fun)
- **Dragon's Realm** - Fantasy (Adventurous)
- **Ocean's Tale** - Drama (Emotional)
- **Space Escape** - Sci-Fi (Thrilling)

## 🎨 CSS Highlights

### Custom Properties (Variables)
```css
--dark-bg: #0a0a0a
--accent-gold: #d4af37
--accent-red: #ff1744
--shadow-glow: 0 0 20px rgba(212, 175, 55, 0.3)
```

### Animations
- `slideInDown` - Hero elements entrance
- `slideInUp` - Form entrance from below
- `fadeIn` - Smooth transparency transition
- `shine` - Movie poster shine effect
- `glow-pulse` - Gold glow pulse effect

### Responsive Breakpoints
- 📱 Mobile: max-width 480px
- 📱 Tablet: max-width 768px
- 💻 Desktop: 1200px max-width container

## ⚙️ Browser Storage

Uses `localStorage` to persist:
- User login session
- Saved preferences (genres, language, mood)
- User ratings for movies
- Selected seats for current booking

## 🔐 Security Notes

**Current Implementation (Demo):**
- No backend authentication
- Local storage only
- Demo credentials: any email/password works

**Production Ready Would Include:**
- Backend API authentication
- Password hashing
- HTTPS encryption
- Rate limiting
- Input validation
- CSRF protection

## 📱 Responsive Features

### Mobile Optimizations
- Single-column layouts on small screens
- Adjusted font sizes
- Touch-friendly buttons and inputs
- Simplified navigation
- Optimized seat grid (6 columns instead of 12)

### Desktop Features
- Multi-column grids
- Hover effects
- expanded layouts
- Optimized spacing

## 🎬 Future Enhancements

### Backend Integration
- [ ] Node.js/Express server
- [ ] MySQL database
- [ ] Real user authentication
- [ ] Movie database management
- [ ] Payment gateway integration

### Features to Add
- [ ] Search functionality
- [ ] Advanced filters
- [ ] User reviews and comments
- [ ] Wishlist/favorites
- [ ] Email confirmations
- [ ] Multiple cinema locations
- [ ] Show time selection
- [ ] Payment processing
- [ ] Admin dashboard
- [ ] Analytics

## 📞 Support

For issues or questions:
- Email: support@cinebook.com
- Phone: +1-800-CINEMA

## 📄 License

This project is part of the movie-booking-system portfolio project.

## 👨‍💻 Development

Created with attention to:
- Modern web standards (HTML5, CSS3, ES6+)
- Responsive design principles
- User experience and accessibility
- Clean, maintainable code
- Professional UI/UX design

---

**Version**: 1.0  
**Last Updated**: February 2026  
**Status**: Frontend Complete - Ready for Backend Integration
