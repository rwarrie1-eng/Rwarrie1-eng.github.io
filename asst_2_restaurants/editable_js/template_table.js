
/**
 * TABLE VIEW
 * Display data in sortable rows - good for scanning specific information
 */
function showTable(data) {
  // Requirements:
  // - Show data in a table format
  // - Include all important fields
  // - Make it easy to scan and compare
  // - Consider adding sorting functionality
  //   https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/

 let rows = '';
 data.forEach((restaurant) => {
    rows += `<tr>
    <td>${restaurant.name}</td>
    <td>${restaurant.inspection_results}</td>
    <td>${restaurant.inspection_date}</td>
    <td>${restaurant.inspection_type}</td>
    <td>${restaurant.owner}</td>
</tr>`;

 });
  return `
<h2 class="view-title"> Restaurant Inspections</h2>
  <table class="restaurant-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Inspection Result</th>
        <th>Date</th>
        <th>Inspection Type</th>
        <th>Owner</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
`;
}
 
export default showTable;