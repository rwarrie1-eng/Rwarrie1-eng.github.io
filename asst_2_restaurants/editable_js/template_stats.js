/**
 * STATS VIEW
 * Show aggregate statistics and insights - good for understanding the big picture
 */
function showStats(data) {
  // Requirements:
  // Replace the below "task" description with the following:
  // - One meaningful statistic calculation from the supplied dataset
  // ===- percent of restaurants not passing hand-washing, for example
  // - Present insights visually
  // - Show distributions, averages, counts, etc.
  // - Help users understand patterns in the data
  
const total = data.length;

const facilityClosed = data.filter((restaurant) => restaurant.inspection_results === "Facility Closed").length;
const nonCompliant = data.filter((restaurant) => restaurant.inspection_results === "Non-Compliant - Violations Observed").length;
const rodentViolations = data.filter((restaurant) => restaurant.rodent_and_insects === "Out of Compliance").length;
const handWashingViolations = data.filter((restaurant) => restaurant.proper_hand_washing === "Out of Compliance").length;
  return `
  <h2 class="view-title">Inspection Statistics</h2>
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-label">Total Restaurants</div>
      <div class="stat-number">${total}</div>
    </div>
    <div class="stat-card">
  <div class="stat-label">Facilities Closed</div>
  <div class="stat-number">${facilityClosed}</div>
</div>
    <div class="stat-card">
  <div class="stat-label">Non-Compliant</div>
  <div class="stat-number">${nonCompliant}</div>
</div>
    <div class="stat-card">
      <div class="stat-label">Rodent Violations</div>
      <div class="stat-number">${rodentViolations}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Hand Washing Violations</div>
      <div class="stat-number">${handWashingViolations}</div>
    </div>
  </div>
`;
}

export default showStats