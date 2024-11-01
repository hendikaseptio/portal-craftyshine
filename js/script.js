document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    new WOW().init();

    // Membaca gambar dari folder gallery
    const galleryContainer = document.getElementById('gallery-container');
    const paginationContainer = document.getElementById('pagination');
    const numberOfImages = 11; // Ganti dengan jumlah gambar yang ada
    const imagesPerPage = 6; // Jumlah gambar per halaman
    const images = [];

    // Mengisi array dengan loop
    for (let i = 1; i <= numberOfImages; i++) {
        images.push(`gallery/image${i}.jpeg`); // Sesuaikan dengan format nama file Anda
    }

    let currentPage = 1;
    function displayImages(page) {
        galleryContainer.innerHTML = '';
        const startIndex = (page - 1) * imagesPerPage;
        const endIndex = Math.min(startIndex + imagesPerPage, images.length);
    
        for (let i = startIndex; i < endIndex; i++) {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            col.innerHTML = `
                <a href="${images[i]}" class="gallery-item">
                    <img src="${images[i]}" alt="${images[i]}" class="img-fluid">
                </a>`;
            galleryContainer.appendChild(col);
        }
    }
    
    // Membuat pagination
    function setupPagination() {
        paginationContainer.innerHTML = '';
        const pageCount = Math.ceil(images.length / imagesPerPage);
    
        for (let i = 1; i <= pageCount; i++) {
            const li = document.createElement('li');
            li.className = 'page-item';
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener('click', function (e) {
                e.preventDefault();
                currentPage = i;
                displayImages(currentPage);
            });
            paginationContainer.appendChild(li);
        }
    }
    
    // Inisialisasi
    displayImages(currentPage);
    setupPagination();
    // images.forEach(image => {
    //     const col = document.createElement('div');
    //     col.className = 'col-md-4 mb-3';
    //     col.innerHTML = `<a href="${image}"><img src="${image}" alt="${image}" class="img-fluid"></a>`;
    //     galleryContainer.appendChild(col);
    // });

    new SimpleLightbox({ elements: '#gallery-container a.gallery-item' });

    // or if using jQuery
    $('.imageGallery1 a').simpleLightbox();

    
});
