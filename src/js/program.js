function btn_onclick(btn) {
    let more = document.querySelector(".less");
    const moreDisplayStyle = "block";
    if (more.style.display === moreDisplayStyle) {
        btn.innerHTML = "Read more";
        more.style.display = "none"
    } else {
        btn.innerHTML = "Less";
        more.style.display = moreDisplayStyle;
    }
  };