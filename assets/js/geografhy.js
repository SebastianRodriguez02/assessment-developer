const seasons = document.querySelectorAll('.season');
    const seasonsContainer = document.getElementById('seasonsContainer');
    let currentIndex = 0;

    // Cambiar la estación al hacer clic en el contenedor
    seasonsContainer.addEventListener('click', () => {
      // Ocultar la estación actual
      seasons[currentIndex].classList.remove('active');
      // Calcular el siguiente índice
      currentIndex = (currentIndex + 1) % seasons.length;
      // Mostrar la siguiente estación
      seasons[currentIndex].classList.add('active');
    });

    const zones = {
        pacific: {
          map: "assets/img/Pacif.png",
          title: "Pacific Time",
          description: "The Pacific Time Zone includes states on the west coast, such as California and Washington.",
          image: "assets/img/pacif1.png",
        },
        mountain: {
          map: "assets/img/Mountain.png",
          title: "Mountain Time",
          description: "The Mountain Time Zone includes states like Colorado and Utah, known for its mountainous regions.",
          image: "assets/img/Mountain1.png",
        },
        central: {
          map: "assets/img/Central.png",
          title: "Central Time",
          description: "The Central Time Zone includes states in the central part of the country, like Texas and Illinois.",
          image: "assets/img/Central1.png",
        },
        eastern: {
          map: "assets/img/Eastern.png",
          title: "Eastern Time",
          description: "The Eastern Time Zone includes states on the east coast, such as New York and Florida.",
          image: "assets/img/Eastern1.png",
        },
        alaska: {
          map: "assets/img/Alaska.png",
          title: "Eastern Time",
          description: "The Alaska Time Zone applies to the territory of the state of Alaska east of 169°30′ W, that is, the entire state minus the westernmost portions of the Aleutian Islands.",
          image: "assets/img/Alaska1.png",
        },
        hawai: {
          map: "assets/img/Hawai.png",
          title: "Eastern Time",
          description: "The zone takes its name from the two areas it includes: Hawaii and the portion of Alaska's Aleutian Islands west of 169° 30′ W longitude.",
          image: "assets/img/Hawai1.png",
        },
      };
  
      // Elementos HTML
      const mapElement = document.getElementById("map");
      const infoTitleElement = document.getElementById("info-title");
      const infoDescriptionElement = document.getElementById("info-description");
      const infoImageElement = document.getElementById("info-image");
      const buttons = document.querySelectorAll(".buttons button");
  
      // Evento al hacer clic en los botones
      buttons.forEach(button => {
        button.addEventListener("click", () => {
          // Remover la clase 'active' de todos los botones
          buttons.forEach(btn => btn.classList.remove("active"));
          // Agregar la clase 'active' al botón clicado
          button.classList.add("active");
  
          // Obtener la zona seleccionada
          const zone = button.getAttribute("data-zone");
          const zoneData = zones[zone];
  
          // Cambiar la imagen del mapa, título, descripción e imagen de información
          mapElement.src = zoneData.map;
          infoTitleElement.textContent = zoneData.title;
          infoDescriptionElement.textContent = zoneData.description;
          infoImageElement.src = zoneData.image;
        });
      });