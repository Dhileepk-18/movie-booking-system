// ============================================
// PREFERENCES MODULE
// ============================================

// Handle preference changes
function handlePreferenceChange(event) {
  const target = event.target;
  const type = target.dataset.type;

  if (!window.userSession.preferences) {
    window.userSession.preferences = {
      genres: [],
      language: null,
      mood: null,
      minRating: 1.0
    };
  }

  if (type === 'genre') {
    const value = target.value;
    if (target.checked) {
      if (!window.userSession.preferences.genres.includes(value)) {
        window.userSession.preferences.genres.push(value);
      }
    } else {
      window.userSession.preferences.genres = window.userSession.preferences.genres.filter(g => g !== value);
    }
  } else if (type === 'language') {
    window.userSession.preferences.language = target.value;
  } else if (type === 'mood') {
    window.userSession.preferences.mood = target.value;
  } else if (type === 'rating') {
    window.userSession.preferences.minRating = parseFloat(target.value);
    // Update the display values
    const ratingValue = document.getElementById('ratingValue');
    const ratingDisplay = document.getElementById('ratingDisplay');
    if (ratingValue) ratingValue.textContent = target.value;
    if (ratingDisplay) ratingDisplay.textContent = target.value;
  }

  saveUserSession();
}

// Apply preferences and redirect
function applyPreferences() {
  saveUserSession();
  showAlert('Preferences saved! Redirecting to recommendations...', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1200);
}

// ============================================
// PREFERENCES PAGE INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  if (typeof loadUserSession === 'function') loadUserSession();
  if (typeof updateAuthUI === 'function') updateAuthUI();
  
  // Initialize preference checkboxes from saved preferences
  if (window.userSession && window.userSession.preferences) {
    const prefs = window.userSession.preferences;
    
    // Set genres
    const genreCheckboxes = document.querySelectorAll('input[data-type="genre"]');
    genreCheckboxes.forEach(cb => {
      if (prefs.genres && prefs.genres.includes(cb.value)) {
        cb.checked = true;
      }
    });
    
    // Set language
    if (prefs.language) {
      const langRadios = document.querySelectorAll('input[data-type="language"]');
      langRadios.forEach(radio => {
        radio.checked = radio.value === prefs.language;
      });
    }
    
    // Set mood
    if (prefs.mood) {
      const moodRadios = document.querySelectorAll('input[data-type="mood"]');
      moodRadios.forEach(radio => {
        radio.checked = radio.value === prefs.mood;
      });
    }
    
    // Set rating
    if (prefs.minRating) {
      const ratingSlider = document.getElementById('rating-slider') || document.getElementById('minRating');
      if (ratingSlider) {
        ratingSlider.value = prefs.minRating;
        const ratingValue = document.getElementById('ratingValue');
        const ratingDisplay = document.getElementById('ratingDisplay');
        if (ratingValue) ratingValue.textContent = prefs.minRating;
        if (ratingDisplay) ratingDisplay.textContent = prefs.minRating;
      }
    }
  }
});
