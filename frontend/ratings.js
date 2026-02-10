// ============================================
// RATINGS MODULE
// ============================================

let currentRatingMovie = null;

// Open rating modal
function openRatingModal(movieId) {
  if (!window.userSession) {
    loadUserSession();
  }
  currentRatingMovie = movieId;
  const modal = document.getElementById('rating-modal');
  if (modal) {
    modal.classList.add('show');
    initializeRatingStars();
  }
}

// Close rating modal
function closeRatingModal() {
  const modal = document.getElementById('rating-modal');
  if (modal) {
    modal.classList.remove('show');
  }
  currentRatingMovie = null;
}

// Initialize rating stars
function initializeRatingStars() {
  const starsContainer = document.getElementById('rating-stars');
  if (!starsContainer) return;

  starsContainer.innerHTML = '';
  const currentRating = (window.userSession && window.userSession.userRatings && window.userSession.userRatings[currentRatingMovie]) || 0;
  
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    star.textContent = '★';
    if (i <= currentRating) star.classList.add('active');
    star.dataset.value = i;
    star.addEventListener('click', () => selectRating(i));
    star.addEventListener('mouseover', () => previewRating(i));
    star.addEventListener('mouseout', () => resetRatingPreview());
    starsContainer.appendChild(star);
  }
}

// Select rating
function selectRating(rating) {
  if (currentRatingMovie) {
    if (!window.userSession) {
      loadUserSession();
    }
    if (!window.userSession.userRatings) {
      window.userSession.userRatings = {};
    }
    window.userSession.userRatings[currentRatingMovie] = rating;
    if (typeof saveUserSession === 'function') {
      saveUserSession();
    }
    
    const textElement = document.getElementById('rating-text');
    if (textElement) {
      const ratingText = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
      textElement.textContent = `You rated this movie: ${ratingText[rating - 1]}`;
    }

    setTimeout(() => {
      closeRatingModal();
      if (typeof showAlert === 'function') {
        showAlert('Rating saved successfully!', 'success');
      }
    }, 500);
  }
}

// Preview rating on hover
function previewRating(rating) {
  const stars = document.querySelectorAll('#rating-stars .star');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

// Reset rating preview
function resetRatingPreview() {
  const stars = document.querySelectorAll('#rating-stars .star');
  const currentRating = (window.userSession && window.userSession.userRatings && window.userSession.userRatings[currentRatingMovie]) || 0;
  stars.forEach((star, index) => {
    if (index < currentRating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}
