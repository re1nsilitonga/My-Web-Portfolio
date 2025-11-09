// ../js/script.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-copy-target");
      const text = document.getElementById(targetId)?.innerText;
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        // animasi copy
        btn.style.fill = "#00ff99";
        btn.style.transform = "scale(1.3)";
        setTimeout(() => {
          btn.style.fill = "#07f468";
          btn.style.transform = "scale(1)";
        }, 400);

        // tooltip Copied!
        const tooltip = document.createElement("div");
        tooltip.className = "copy-tooltip";
        tooltip.innerText = "Copied!";
        document.body.appendChild(tooltip);

        const rect = btn.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 10}px`;

        setTimeout(() => tooltip.classList.add("show"), 10);
        setTimeout(() => {
          tooltip.classList.remove("show");
          setTimeout(() => tooltip.remove(), 300);
        }, 1500);
      });
    });
  });
});
