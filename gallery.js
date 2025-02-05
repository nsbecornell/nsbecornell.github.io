function changeImage(galleryId, direction, slider) {
    window.addEventListener('beforeunload', () => {
        localStorage.clear();
    });
    const gallery = document.getElementById(galleryId);
    const sliderImage = document.getElementById(slider);
    const images = getGalleryImages(galleryId);
    const navigation = document.getElementById(`${galleryId}-nav`);
    const anchors = navigation.querySelectorAll('a');
    let currentIndex = getCurrentIndex(galleryId);

    // Changes the current index of the picture, thereby changing the picture
    previousIndex = currentIndex;
    currentIndex += direction;

    // Ensures that the index remains within the bounds of the array
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    sliderImage.src = images[currentIndex];
    setCurrentIndex(galleryId, currentIndex);

    anchors[currentIndex].style.opacity = 1;
    anchors[previousIndex].style.opacity = 0.7;
}

function getGalleryImages(galleryId) {
    const imageSets = {
        'Accenture': ["./images/gallery-photos/accenture-dinner/accenture1.png", "./images/gallery-photos/accenture-dinner/accenture2.png", "./images/gallery-photos/accenture-dinner/accenture3.png"],
        'FRC': ["./images/gallery-photos/conferenceinfo1.jpg", "./images/gallery-photos/conferenceinfo2.jpeg"],
        'IceCreamSocial': ["./images/gallery-photos/ice-cream-social/icecream1.jpg", "./images/gallery-photos/ice-cream-social/icecream2.JPG"],
        "FacultyPanel": ["./images/gallery-photos/faculty-panel/facultypanel1.jpg", "./images/gallery-photos/faculty-panel/facultypanel2.jpg"],
        "Hot-Takes": ["./images/gallery-photos/hot-takes/hottakes1.jpg", "./images/gallery-photos/hot-takes/hottakes2.jpg"],
        "101": ["./images/gallery-photos/nsbe101/nsbe101_1.JPG", "./images/gallery-photos/nsbe101/nsbe101_2.JPG", "./images/gallery-photos/nsbe101/nsbe101_3.JPG", "./images/gallery-photos/nsbe101/nsbe101_4.JPG", "./images/gallery-photos/nsbe101/nsbe101_5.JPG", "./images/gallery-photos/nsbe101/nsbe101_6.JPG", "./images/gallery-photos/nsbe101/nsbe101_7.JPG", "./images/gallery-photos/nsbe101/nsbe101_8.JPG", "./images/gallery-photos/nsbe101/nsbe101_9.JPG", "./images/gallery-photos/nsbe101/nsbe101_10.JPG", "./images/gallery-photos/nsbe101/nsbe101_11.JPG"],
        "FYGN": ["./images/gallery-photos/first-year-game-night/FYGN-1.jpg", "./images/gallery-photos/first-year-game-night/FYGN-4.jpg", "./images/gallery-photos/first-year-game-night/FYGN-5.jpg"],
        "SpaceX": ["./images/gallery-photos/spacex/spacex-1.jpeg", "./images/gallery-photos/spacex/spacex-2.jpeg", "./images/gallery-photos/spacex/spacex-3.jpeg", "./images/gallery-photos/spacex/spacex-4.jpeg"],
        "WBBBQ": ["./images/gallery-photos/welcomebackbbq/bbq1.jpg", "./images/gallery-photos/welcomebackbbq/bbq2.jpg"],
        "Sweettools": ["./images/gallery-photos/sweettools/sweettools1.jpg", "./images/gallery-photos/sweettools/sweettools2.jpg"]
    };

    return imageSets[galleryId];
}

function getCurrentIndex(galleryId) {
    const currentIndexStorageKey = `${galleryId}_currentIndex`;
    let value = localStorage.getItem(currentIndexStorageKey);
    if (value == null) {
        value = 0;
    }
    value = parseInt(value);
    return value;
}

function setCurrentIndex(galleryId, index) {
    const currentIndexStorageKey = `${galleryId}_currentIndex`;
    localStorage.setItem(currentIndexStorageKey, index);
}