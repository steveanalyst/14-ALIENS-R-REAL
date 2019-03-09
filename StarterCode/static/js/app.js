// from data.js
var tableData = data;

// Select the filter button
var submit = d3.select("#filter-btn");

submit.on("click", function(){
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value");

  // Select the input element and get the raw HTML node
  var inputElement2 = d3.select("#city");
  // Get the value property of the input element
  var inputValue2 = inputElement2.property("value").toLowerCase().trim();

  console.log(inputValue1);
  console.log(inputValue2)
  console.log(tableData);

  var filteredData1 = tableData.filter(tableData => tableData.datetime === inputValue1);
  var filteredData2 = tableData.filter(tableData => tableData.city === inputValue2);

  console.log(filteredData1);
  console.log(filteredData2);


  // Get a reference to the table body
  var tbody = d3.select("tbody");

  // clear the existing output if existing
  tbody.html("");

  // add the filtered data to the `ul` tag
  // loop through
  filteredData1.forEach((dateData) => {
    var row = tbody.append("tr");
    Object.entries(dateData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  
  

});