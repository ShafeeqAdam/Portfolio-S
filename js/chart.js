function initChart() {
  const data = {
    labels: ["Javascript", "CSS", "HTML", "SaSS"],
    datasets: [
      {
        label: "Niveau",
        data: [200, 200, 200, 100],
        backgroundColor: [
          "rgba(250, 235, 215, 1)",
          "rgba(152, 111, 89, 1)",
          "rgba(0, 0, 64, 1)",
          "rgba(168, 55, 94)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgba(250, 235, 215, 1)",
            font: {
              size: 18,
              family: "Cookie",
            },
          },
        },
      },
    },
  };

  new Chart(document.getElementById("myChart"), config);
}

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      initChart();

      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

observer.observe(document.getElementById("formation-section"));
