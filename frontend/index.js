// Index (home) page specific initialization

document.addEventListener('DOMContentLoaded', () => {
  if (typeof loadUserSession === 'function') loadUserSession();
  if (typeof updateAuthUI === 'function') updateAuthUI();

  const grid = document.getElementById('movies-grid');
  if (!grid) return;

  // If user has set preferences (non-empty), show filtered results automatically
  const prefs = window.userSession ? window.userSession.preferences : null;
  const hasPrefs = prefs && (
    (Array.isArray(prefs.genres) && prefs.genres.length > 0) ||
    !!prefs.language ||
    !!prefs.mood ||
    (prefs.minRating && prefs.minRating > 1)
  );

  if (hasPrefs && typeof filterMoviesByPreferences === 'function') {
    filterMoviesByPreferences();
  } else if (typeof renderAllMovies === 'function') {
    renderAllMovies();
  }

  // Modal close on background click
  document.addEventListener('click', (e) => {
    const modal = document.getElementById('rating-modal');
    if (modal && e.target === modal) {
      if (typeof closeRatingModal === 'function') closeRatingModal();
    }
  });
});
