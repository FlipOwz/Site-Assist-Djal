// Função para detectar quando os elementos entram na viewport
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add('show');
      }
    });
  }
  
  // Adiciona o evento de scroll
  window.addEventListener('scroll', handleScroll);