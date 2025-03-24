   // Mapa de días destacados y sus imágenes por mes
   const daysWithImages = {
    January: {
      1: {
        main: "assets/img/Ene1.png",
        tooltip: "assets/img/NewYear.png",
      },
      15: {
        main: "assets/img/Ene15.png",
        tooltip: "assets/img/NewYear.png",
      },
    },
    February: {
      19: {
        main: "assets/img/Feb19.png",
        tooltip: "assets/img/NewYear.png",
      },
    },
    March: {
      25: {
        main: "assets/img/Mar25.png",
        tooltip: "assets/img/NewYear.png",
      },
    },
    June: {
      19: {
        main: "assets/img/Jun19.png",
        tooltip: "assets/img/NewYear.png",
      },
    },
    July: {
      4: {
        main: "assets/img/Jul4.png",
        tooltip: "assets/img/NewYear.png",
      },
    },
    September: {
      2: {
        main: "assets/img/Sep2.png",
        tooltip: "assets/img/NewYear.png",
      },
    },
    October: {
      7: {
        main: "assets/img/Oct7.png",
        tooltip: "assets/img/NewYear.png",
      },
    },
    November: {
      11: {
        main: "assets/img/Nov11.png",
        tooltip: "assets/img/NewYear.png",
      },
      28: {
        main: "assets/img/Nov28.png",
        tooltip: "assets/img/NewYear.png",
      },
    },
    December: {
      25: {
        main: "assets/img/Dec25.png",
        tooltip: "assets/img/NewYear.png",
      },
    },
  };

  const highlightedDatesContainer = document.getElementById('days-container');
  const months = document.querySelectorAll('.months div');
  const mainImage = document.getElementById('highlighted-image');
  const tooltipImage = document.getElementById('tooltip-image');

  // Función para actualizar los días destacados
  function updateHighlightedDays(month) {
    highlightedDatesContainer.innerHTML = ''; // Limpiar días anteriores
    const days = Object.keys(daysWithImages[month] || {}).map(Number);
    for (let i = 1; i <= 31; i++) {
      const day = document.createElement('div');
      day.textContent = i;

      if (days.includes(i)) {
        day.classList.add('highlight');
        day.addEventListener('click', () => {
          mainImage.src = daysWithImages[month][i].main;
          tooltipImage.src = daysWithImages[month][i].tooltip;
        });
      }

      highlightedDatesContainer.appendChild(day);
    }
  }

  // Configurar meses
  months.forEach(month => {
    month.addEventListener('click', () => {
      if (!month.classList.contains('disabled')) {
        // Cambiar el mes activo
        document.querySelector('.months .active').classList.remove('active');
        month.classList.add('active');

        // Actualizar los días destacados
        const monthName = month.getAttribute('data-month');
        updateHighlightedDays(monthName);
      }
    });
  });

  // Inicializar con el primer mes activo (Enero)
  updateHighlightedDays('January');