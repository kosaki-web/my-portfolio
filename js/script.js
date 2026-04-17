(() => {
    'use strict';

    // =========================
    // DOM取得
    // =========================
    const menuToggle = document.getElementById('menu__toggle');
    const nav = document.getElementById('nav');
    const topBtn = document.getElementById('top__btn');
    const menuToggle = document.getElementById('menu__toggle');
    const menuOverlay = document.getElementById('menu__overlay');
    const menuClose = document.getElementById('menu__close');
    const menuLinks = document.querySelectorAll('.menu__list a');

    // =========================
    // メニュー開く
    // =========================
    const openMenu = () => {
        menuOverlay.classList.add('is-open');
        menuOverlay.setAttribute('aria-hidden', 'false');
        menuToggle.setAttribute('aria-expanded', 'true');

        // 背景スクロール禁止
        document.body.style.overflow = 'hidden';
    };

    // =========================
    // メニュー閉じる
    // =========================
    const closeMenu = () => {
        menuOverlay.classList.remove('is-open');
        menuOverlay.setAttribute('aria-hidden', 'true');
        menuToggle.setAttribute('aria-expanded', 'false');

        // スクロール戻す
        document.body.style.overflow = '';
    };

    // =========================
    // トグル
    // =========================
    const toggleMenu = () => {
        if (menuOverlay.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    // =========================
    // 外側クリックで閉じる
    // =========================
    const handleOverlayClick = (e) => {
        if (e.target === menuOverlay) {
            closeMenu();
        }
    };

    // =========================
    // ESCキーで閉じる
    // =========================
    const handleKeydown = (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    };

    // =========================
    // イベント登録
    // =========================
    const bindEvents = () => {
        menuToggle.addEventListener('click', toggleMenu);
        menuClose.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', handleOverlayClick);
        document.addEventListener('keydown', handleKeydown);

        // リンククリック時も閉じる
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    };

    bindEvents();

    // =========================
    // TOPボタン表示制御
    // =========================
    const handleScroll = () => {
        if (window.scrollY > 100) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    };

    // =========================
    // トップへスクロール
    // =========================
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // =========================
    // イベント登録
    // =========================
    const bindEvents = () => {
        menuToggle.addEventListener('click', toggleMenu);
        window.addEventListener('scroll', handleScroll);
        topBtn.addEventListener('click', scrollToTop);
    };

    bindEvents();

})();