import Chart from 'chart.js/auto';

export function toggleContent(header) {
  const content = header.nextElementSibling;
  content.classList.toggle('show');
}

let slideIndex = 1;
export function plusSlides(n) {
  showSlides(slideIndex += n);
}

export function showSlides(n) {
  let slides = document.querySelectorAll('.item');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex - 1].style.display = 'block';
}

// Chart.jsの設定
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('bar-graph').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Amount (g)',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  showSlides(slideIndex);
});
