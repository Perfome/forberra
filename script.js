// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    // Müzik kontrolü
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    const musicText = document.getElementById('musicText');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    // Müzik butonu
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicIcon.className = 'fas fa-play';
            musicText.textContent = 'Müzik';
        } else {
            bgMusic.play().catch(e => {
                console.log("Müzik otomatik oynatma engellendi");
            });
            musicIcon.className = 'fas fa-pause';
            musicText.textContent = 'Durdur';
        }
        isPlaying = !isPlaying;
    });

    // Uçan kalpler oluştur
    createFlyingHearts();

    // Buton etkileşimleri
    document.getElementById('startJourney').addEventListener('click', function() {
        document.getElementById('message').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('playMusic').addEventListener('click', function() {
        if (!isPlaying) {
            bgMusic.play();
            musicIcon.className = 'fas fa-pause';
            musicText.textContent = 'Durdur';
            isPlaying = true;
        }
    });

    // Gizli mesaj
    document.getElementById('revealSecret').addEventListener('click', function() {
        const secretMessage = document.getElementById('secretMessage');
        if (secretMessage.style.display === 'block') {
            secretMessage.style.display = 'none';
            this.innerHTML = '<i class="fas fa-key"></i> Gizli Mesaj';
        } else {
            secretMessage.style.display = 'block';
            this.innerHTML = '<i class="fas fa-times"></i> Gizli Mesajı Kapat';
        }
    });

    // Anılar slider
    setupMemorySlider();

    // Hisler kartları
    setupFeelingCards();

    // Tıklama efektleri
    setupClickEffects();

    // Scroll animasyonları
    setupScrollAnimations();

    // Sayfa açılış animasyonu
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Uçan kalpler
function createFlyingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heartCount = 25
