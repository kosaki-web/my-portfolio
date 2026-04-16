(() => {
    'use strict';

    // =========================
    // DOM取得
    // =========================
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const topBtn = document.getElementById('top-btn');

    // =========================
    // ハンバーガーメニュー
    // =========================
    const toggleMenu = () => {
        nav.classList.toggle('is-open');
    };

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