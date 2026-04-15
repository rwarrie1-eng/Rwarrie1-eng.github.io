
/**
 * EXTERNAL LIBRARY VIEW
 * Pick an external library and pipe your data to it.
 */
function showTable(data) { 
  // Requirements:
  // - Show data using an external library, such as leaflet.js or chartsjs or similar.
  // - Make a filter on this page so your external library only shows useful data.

const resultCounts = {};
data.forEach(function(restaurant) {
  const result = restaurant.inspection_results;
  resultCounts[result] = (resultCounts[result] || 0) + 1;
});
const chartLabels = Object.keys(resultCounts);
const chartData = Object.values(resultCounts);
setTimeout(function() {
  const canvas = document.querySelector('#restaurant-chart');
  const ctx = canvas.getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [{
        label: 'Number of Restaurants',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      color: '#eaeaea',
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Restaurant Inspection Results',
          color: '#eaeaea'
        },
        legend: {
          labels: { color: '#eaeaea' }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#eaeaea' },
          title: {
            display: true,
            text: 'Number of Restaurants',
            color: '#eaeaea'
          }
        },
        x: {
          ticks: { color: '#eaeaea' }
        }
      }
    }
  });
}, 0);
  return `
    <h2 class="view-title">Inspection Results Chart</h2>
    <div class="chart-container">
      <canvas id="restaurant-chart"></canvas>
    </div>
  `;
}
export default showTable; 