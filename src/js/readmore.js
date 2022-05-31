window.btn_onclick = function btn_onclick(btn, selector) {
    let more = document.querySelector(selector);
    const moreDisplayStyle = "block";
    if (more.style.display === moreDisplayStyle) {
        btn.innerHTML = "Read more";
        more.style.display = "none"
    } else {
        btn.innerHTML = "Less";
        more.style.display = moreDisplayStyle;
    }
};