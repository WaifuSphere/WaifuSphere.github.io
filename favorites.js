// ============================================
// MYISTRI FAVORITES SYSTEM
// ============================================

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let favoritesChart = null;

// Initialize favorites on page load
function initializeFavorites() {
    addFavoriteButtonsToCards();
    updateFavoritesDisplay();
}

// Add favorite buttons to all character cards
function addFavoriteButtonsToCards() {
    const cards = document.querySelectorAll('.character-card');
    cards.forEach((card, index) => {
        if (!card.querySelector('.favorite-btn')) {
            const character = charactersDatabase[index % charactersDatabase.length];
            const cardImage = card.querySelector('.card-image');
            const isFavorite = favorites.some(fav => fav.id === character.id);
            
            const favoriteBtn = document.createElement('button');
            favoriteBtn.className = `favorite-btn ${isFavorite ? 'active' : ''}`;
            favoriteBtn.innerHTML = isFavorite ? '❤️' : '🤍';
            favoriteBtn.title = isFavorite ? 'Remove from MyIstri' : 'Add to MyIstri';
            
            favoriteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(character, favoriteBtn);
            });
            
            cardImage.appendChild(favoriteBtn);
        }
    });
}

// Toggle favorite status
function toggleFavorite(character, btn) {
    const isFavorite = favorites.some(fav => fav.id === character.id);
    
    if (isFavorite) {
        favorites = favorites.filter(fav => fav.id !== character.id);
        btn.classList.remove('active');
        btn.innerHTML = '🤍';
        btn.title = 'Add to MyIstri';
    } else {
        favorites.push(character);
        btn.classList.add('active');
        btn.innerHTML = '❤️';
        btn.title = 'Remove from MyIstri';
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesDisplay();
    updateFavoritesChart();
}

// Update the favorites display in the MyIstri section
function updateFavoritesDisplay() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    if (!favoritesGrid) return;
    
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = `
            <div class="empty-state">
                <p>❤️ Belum ada favorit</p>
                <p class="small-text">Klik tombol hati pada karakter untuk menambahkan ke MyIstri</p>
            </div>
        `;
    } else {
        favoritesGrid.innerHTML = favorites.map(character => `
            <div class="favorite-item" title="${character.name}">
                <img src="${character.image}" alt="${character.name}" onerror="this.src='https://via.placeholder.com/150'">
                <p><strong>${character.name}</strong></p>
                <p>${character.series}</p>
                <button class="remove-btn" onclick="removeFavorite(${character.id})">Remove</button>
            </div>
        `).join('');
    }
}

// Remove favorite by ID
function removeFavorite(characterId) {
    favorites = favorites.filter(fav => fav.id !== characterId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesDisplay();
    updateFavoritesChart();
    updateFavoriteButtons();
}

// Update favorite buttons when list changes
function updateFavoriteButtons() {
    const favBtns = document.querySelectorAll('.favorite-btn');
    favBtns.forEach((btn, index) => {
        const character = charactersDatabase[index % charactersDatabase.length];
        const isFavorite = favorites.some(fav => fav.id === character.id);
        btn.classList.toggle('active', isFavorite);
        btn.innerHTML = isFavorite ? '❤️' : '🤍';
        btn.title = isFavorite ? 'Remove from MyIstri' : 'Add to MyIstri';
    });
}

// Update the favorites chart
function updateFavoritesChart() {
    if (favorites.length === 0) {
        if (favoritesChart) {
            favoritesChart.destroy();
            favoritesChart = null;
        }
        const ctx = document.getElementById('favoritesChart');
        if (ctx) {
            ctx.parentElement.innerHTML = '<canvas id="favoritesChart" width="400" height="300"></canvas>';
            const canvasCtx = document.getElementById('favoritesChart').getContext('2d');
            canvasCtx.fillStyle = 'rgba(176, 176, 176, 0.5)';
            canvasCtx.font = '16px Poppins';
            canvasCtx.textAlign = 'center';
            canvasCtx.fillText('Belum ada data favorit', 200, 150);
        }
    } else {
        const rarityCount = {
            'ssr': favorites.filter(f => f.rarity === 'ssr').length,
            'sr': favorites.filter(f => f.rarity === 'sr').length,
            'r': favorites.filter(f => f.rarity === 'r').length
        };
        
        const ctx = document.getElementById('favoritesChart');
        if (ctx) {
            if (favoritesChart) {
                favoritesChart.destroy();
            }
            
            favoritesChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['SSR (Legendary)', 'SR (Rare)', 'R (Normal)'],
                    datasets: [{
                        data: [rarityCount.ssr, rarityCount.sr, rarityCount.r],
                        backgroundColor: [
                            '#ffd700',
                            '#ff69b4',
                            '#87ceeb'
                        ],
                        borderColor: ['#ffed4e', '#ff85c1', '#a0d8ff'],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#b0b0b0',
                                font: { family: "'Poppins', sans-serif", size: 12 },
                                padding: 15
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.label + ': ' + context.parsed + ' karakter';
                                }
                            }
                        }
                    }
                }
            });
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeFavorites();
        updateFavoritesChart();
        loadSharedFavorites();
    }, 500);
});

// Re-initialize favorites when navigating to gallery
const galleryLink = document.querySelector('a[href="#gallery"]');
if (galleryLink) {
    galleryLink.addEventListener('click', () => {
        setTimeout(() => {
            initializeFavorites();
        }, 100);
    });
}

// ============================================
// SHARE FAVORITES SYSTEM
// ============================================

function generateShareLink() {
    if (favorites.length === 0) {
        alert('Tambahkan beberapa karakter ke favorit terlebih dahulu!');
        return;
    }

    // Create share data dengan hanya ID favorit
    const shareData = {
        ids: favorites.map(f => f.id),
        count: favorites.length,
        date: new Date().toLocaleDateString('id-ID')
    };

    // Encode to base64
    const encodedData = btoa(JSON.stringify(shareData));
    const shareLink = window.location.href.split('?')[0] + '?favorites=' + encodedData;

    // Show modal dengan link
    showShareModal(shareLink);
}

function showShareModal(link) {
    const modal = document.getElementById('shareModal');
    const shareLinkInput = document.getElementById('shareLink');
    
    if (modal && shareLinkInput) {
        shareLinkInput.value = link;
        modal.classList.add('active');
    }
}

function closeShareModal() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function copyShareLink() {
    const shareLinkInput = document.getElementById('shareLink');
    if (shareLinkInput) {
        shareLinkInput.select();
        document.execCommand('copy');
        
        // Show copy success message
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }
}

function clearAllFavorites() {
    if (confirm('Apakah Anda yakin ingin menghapus semua favorit?')) {
        favorites = [];
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoritesDisplay();
        updateFavoritesChart();
        updateFavoriteButtons();
    }
}

function loadSharedFavorites() {
    // Check if URL contains shared favorites
    const urlParams = new URLSearchParams(window.location.search);
    const sharedData = urlParams.get('favorites');

    if (sharedData) {
        try {
            // Decode from base64
            const decodedData = JSON.parse(atob(sharedData));
            const sharedIds = decodedData.ids;

            // Load favorites dari database berdasarkan IDs
            favorites = charactersDatabase.filter(char => sharedIds.includes(char.id));
            
            // Update display
            updateFavoritesDisplay();
            updateFavoritesChart();
            
            // Scroll ke MyIstri section untuk menampilkan favorites yang di-share
            const myIstriSection = document.getElementById('myistri');
            if (myIstriSection) {
                setTimeout(() => {
                    myIstriSection.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }

            // Show notification
            showNotification(`Loaded ${sharedIds.length} shared favorites! 💕`);
        } catch (error) {
            console.error('Error loading shared favorites:', error);
        }
    }
}

function showNotification(message) {
    // Create simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #a020f0, #c77dff);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 0 40px rgba(160, 32, 240, 0.6);
        z-index: 3000;
        animation: slideDown 0.5s ease-out;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('shareModal');
    if (modal && e.target === modal) {
        closeShareModal();
    }
});
