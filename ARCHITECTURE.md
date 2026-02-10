# 📚 Code Architecture & Improvements

## Overview

The CineBook application has been refactored from a monolithic script into a modular, maintainable architecture with improved security, validation, and user experience features.

## 🏗️ New Architecture

### Module Breakdown

#### 1. **data.js** - Movies Database
- Contains all 50 movies with enhanced properties:
  - `showTimes`: Array of available show times (e.g., "10:00 AM", "1:30 PM")
  - `price`: Per-seat ticket price (₹200-₹300)
- Helper functions:
  - `getMovieById(movieId)` - Fetch single movie

#### 2. **utils.js** - Utility Functions
**Security & Validation:**
- `hashPassword(password)` - Simple password hashing
- `verifyPassword(password, hash)` - Password verification
- `isValidEmail(email)` - Email format validation
- `isValidPassword(password)` - Minimum 6 characters
- `getPasswordStrength(password)` - Returns: weak/fair/good/strong/very-strong
- `sanitizeInput(input)` - XSS prevention

**Helpers:**

- `formatCurrency(amount)` - Display prices in Indian Rupees (₹)

#### 3. **auth.js** - Authentication Module
- `loadUserSession()` - Load from localStorage
- `saveUserSession()` - Persist to localStorage
- `handleLogin(event)` - Enhanced with validation & email checking
- `handleRegister(event)` - With password strength validation
- `handleLogout()` - Clear session
- `isLoggedIn()` - Check authentication state
- `requireLogin()` - Redirect if not authenticated

#### 4. **ui.js** - UI Utilities
- `showAlert(message, type)` - Alert notifications (info/success/error/warning)
- `updateAuthUI()` - Update header based on login state
- `generateStars(rating)` - Star rating display
- `toggleModal(modalId, show)` - Show/hide modals
- `showLoading()` / `hideLoading()` - Loading spinner
- `smoothScroll(elementId)` - Smooth scroll to element

#### 5. **movies.js** - Movie Rendering & Management
- `renderMovieCard(movie)` - Display single movie card
- `renderAllMovies()` - Display all movies
- `filterMoviesByPreferences()` - Filter by saved preferences
- `viewMovieDetails(movieId)` - Navigate to movie details
- `rateMovie(movieId)` - Open rating modal
- **Wishlist Features:**
  - `toggleWishlist(movieId)` - Add/remove from wishlist
  - `getWishlistMovies()` - Fetch wishlist movies
  - `displayWishlist()` - Show wishlist view

#### 6. **ratings.js** - Rating System
- `openRatingModal(movieId)` - Show rating interface
- `closeRatingModal()` - Hide rating modal
- `initializeRatingStars()` - Initialize star interaction
- `selectRating(rating)` - Save 1-5 star rating
- `previewRating(rating)` - Show hover preview
- `resetRatingPreview()` - Reset on mouse out

#### 7. **movie-details.js** - Movie Details Page
- `displayMovieDetails()` - Show full movie information
- `redirectToRating(movieId)` - Open rating modal
- Wishlist button integration
- Similar movies suggestions

#### 8. **preferences.js** - User Preferences
- `handlePreferenceChange(event)` - Update preferences
- `applyPreferences()` - Save and redirect
- Genre selection (7 genres)
- Language selection (4 languages)
- Mood selection (5 moods)
- Minimum rating slider

## 🆕 New Features

### 1. Wishlist System
- Heart icon on movie cards
- Add/remove from wishlist
- View wishlist as separate collection
- Persisted in localStorage

### 3. Input Validation
**Email:**
- Format validation (must contain @)
- Real email pattern matching

**Password:**
- Minimum 6 characters required
- Strength meter (weak to very-strong)
- Checks for: uppercase, lowercase, numbers, symbols

### 4. Security Improvements
- Password hashing (client-side implementation)
- XSS prevention via input sanitization
- Session management via localStorage
- Validation before data submission

## 📊 User Session Structure

```javascript
window.userSession = {
  loggedIn: boolean,
  userName: string,
  email: string,
  passwordHash: string,
  preferences: {
    genres: [string],
    language: string,
    mood: string,
    minRating: number
  },
  selectedSeats: [string],
  userRatings: { movieId: rating },
  wishlist: [movieId]
}
```

## 📄 File Organization

```
frontend/
├── index.html              → Homepage
├── login.html              → Login page
├── register.html           → Registration page
├── preferences.html        → Preference settings
├── movie.html              → Movie details
│
├── script.js               → Global state initialization (200 lines)
├── data.js                 → Movie database + search (100 lines)
├── utils.js                → Validation & utilities (80 lines)
├── auth.js                 → Authentication (150 lines)
├── ui.js                   → UI helpers (70 lines)
├── movies.js               → Movie rendering (200 lines)
├── ratings.js              → Rating system (100 lines)
├── preferences.js          → Preferences management (80 lines)
├── movie-details.js        → Movie details page (80 lines)
│
├── index.js                → Home page initialization
│
├── style.css               → Styling (unchanged)
└── assets/                 → Images/icons
```

**Before:** 977 lines in single script.js
**After:** Modular structure across 9 files (~950 lines total, but organized & reusable)

## 🔄 Migration Guide

### Old Code
```javascript
// Everything in script.js
const userSession = { ... };
function renderMovieCard(movie) { ... }
function handleLogin(event) { ... }
function openRatingModal(movieId) { ... }
```

### New Code
```javascript
// script.js - Just the state
window.userSession = { ... };

// utils.js - Pure utilities
function sanitizeInput(input) { ... }
function isValidEmail(email) { ... }

// auth.js - Authentication logic
function handleLogin(event) { ... }

// ratings.js - Rating logic
function openRatingModal(movieId) { ... }

// movies.js - Movie rendering
function renderMovieCard(movie) { ... }
```

## 🚀 Performance Improvements

1. **Code Splitting** - Load only needed modules per page
2. **Better Organization** - Find fixes faster with logical separation
3. **Reusability** - Functions used across multiple pages
4. **Maintenance** - Add features without touching unrelated code
5. **Testing** - Easier to unit test isolated modules

## 🔒 Security Improvements

1. **Password Validation** - Strength requirements enforced
2. **Email Validation** - Prevents invalid email registration
3. **XSS Prevention** - User input sanitized before rendering
4. **Input Validation** - All forms validate before submission
5. **Session Security** - Session data properly managed

## 🎯 Future Enhancements

1. **Backend Integration** - Connect to Node.js/Express API
2. **Database** - MongoDB/PostgreSQL for persistent storage
3. **Payment Gateway** - Razorpay/Stripe integration
4. **Email Notifications** - Send confirmations via email
5. **Admin Dashboard** - Manage movies and shows
6. **Reviews System** - User comments on movies
7. **Recommendations** - ML-based suggestions
