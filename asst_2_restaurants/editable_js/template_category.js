/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories - good for understanding relationships and patterns
 */
function showCategories(data) {
  // Requirements:
  // - Group data by a meaningful category (cuisine, neighborhood, price, etc.)
  // - Show items within each group
  // - Make relationships between groups clear
  // - Consider showing group statistics

const cities = [...new Set(data.map((restaurant) => restaurant.city))];
let categoriesHTML = '';
cities.forEach((city) => {
  const restaurantsInCity = data.filter((restaurant) => restaurant.city === city);
  
  categoriesHTML += `
    <div class="category-section">
      <h3 class="category-header">${city} (${restaurantsInCity.length})</h3>
      <div class="category-items">
        ${restaurantsInCity.map((restaurant) => `
          <div class="category-item">
            <span>${restaurant.name}</span>
            <span>${restaurant.inspection_results}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
});
return `
  <h2 class="view-title"> Restaurants by City</h2>
  ${categoriesHTML}
`;
} 

export default showCategories;