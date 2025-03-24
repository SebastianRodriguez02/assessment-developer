const circles = document.querySelectorAll('.circle');
const hoverContent = document.getElementById('hoverContent');
const hoverImage = document.getElementById('hoverImage');
const hoverText = document.getElementById('hoverText');

circles.forEach(circle => {
    circle.addEventListener('mouseover', () => {
      const image = circle.getAttribute('data-image');
      const text = circle.getAttribute('data-text');
      if (image) {
        circle.style.backgroundImage = `url('${image}')`;
      }
      hoverText.textContent = text;
    });
  
    circle.addEventListener('mouseout', () => {
      circle.style.backgroundImage = ''; // Quita la imagen al salir
      hoverText.textContent = 'Check here the badges that you can win on your journey through the categories';
    });
  });

const menuItems = document.querySelectorAll('.menu-item[data-target]');
const submenus = document.querySelectorAll('.submenu');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-target');
    submenus.forEach(submenu => {
      if (submenu.id === target) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      } else {
        submenu.style.display = 'none';
      }
    });
  });
});


document.querySelectorAll('.submenu-item').forEach(item => {
    item.addEventListener('click', () => {
      const url = item.getAttribute('data-url');
      if (url) {
        window.location.href = url; // Redirige al archivo HTML especificado
      }
    });
  });


