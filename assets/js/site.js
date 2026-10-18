(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#global-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "メニューを開く");
    }));
  }
  document.querySelectorAll("[data-member-track]").forEach(track => {
    const section = track.closest(".team-section");
    const prev = section?.querySelector("[data-scroll-prev]");
    const next = section?.querySelector("[data-scroll-next]");
    const step = () => {
      const card = track.querySelector(".member-card");
      return card ? card.getBoundingClientRect().width + 16 : 280;
    };
    prev?.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next?.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  });
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();