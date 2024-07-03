document.addEventListener('DOMContentLoaded', function() {
    let swiper;

    function initializeSwiper() {
        const isMobile = window.matchMedia('(max-width: 758px)').matches;// булевое значение(Метод matches возвращает true, если текущая ширина экрана соответствует медиа-запросу, и false в противном случае. )

        swiper = new Swiper('.swiper', {
            speed: 300,
            slidesPerView: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,
            loop: true,
            lazy: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            zoom: {
                maxRatio: 3, // Максимальный зум
                minRatio: 1, // Минимальный зум
                enabled: isMobile, // Включаем зум только на мобильных устройствах
                limitToOriginalSize: true,
            },
        });
    }

    initializeSwiper();
});



// Инициализация модального окна
document.addEventListener('DOMContentLoaded', function() {
    const modalElements = document.querySelectorAll('.js-modal');
    window.modals = {};

    modalElements.forEach(function(modal) {
        const modalId = modal.getAttribute('data-modal-id');
        if (modalId) {
            window.modals[modalId] = {
                element: modal,
                close: function() {
                    modal.classList.remove('modal--active');
                    modal.setAttribute('aria-hidden', 'true');
                }
            };
        }
    });
});

// Определение функции modalClose()
function modalClose(id) {
    if (window.modals && window.modals[id]) {
        window.modals[id].close();
    }
}

// Привязка функции modalClose() к кнопкам закрытия
const modalCloseButtons = document.querySelectorAll('.js-modal-close-btn');
modalCloseButtons.forEach(function(btn) {
    const modalId = btn.closest('.js-modal').getAttribute('data-modal-id');
    btn.addEventListener('click', function() {
        modalClose(modalId);
    });
});

/*
function modalOpen(id, trigger = false) {
    if (window.modals && window.modals[id]) {
        if (trigger) {
            window.modals[id].open({trigger: trigger});
        } else {
            window.modals[id].open();
        }
    }
}
*/

