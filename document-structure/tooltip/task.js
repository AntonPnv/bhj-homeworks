const tooltips = document.querySelectorAll(".has-tooltip");
let activeTooltip = null;

tooltips.forEach(tooltip => {
  tooltip.addEventListener("click", event => {
    event.preventDefault();

    if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
      return;
    }

    const title = tooltip.getAttribute("title");
    const tooltipDiv = document.createElement("div");
    tooltipDiv.classList.add("tooltip");
    tooltipDiv.textContent = title;

    const rect = tooltip.getBoundingClientRect();
    tooltipDiv.style.left = rect.left + "px";
    tooltipDiv.style.top = rect.bottom + "px";
    tooltipDiv.classList.add("tooltip_active");

    document.body.appendChild(tooltipDiv);
    activeTooltip = tooltipDiv;

    tooltip.removeAttribute("title");

    tooltipDiv.addEventListener("click", () => {
      tooltip.remove();
      activeTooltip = null;
    });
  });
});