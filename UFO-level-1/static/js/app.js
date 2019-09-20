// from data.js
var tableData = data;

// select the button
var button = d3.select("#filter-btn");


button.on("click", function(){
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(dateSearch => dateSearch.datetime === inputValue);

    console.log(filteredData);

    var tbody = d3.select("tbody");

    filteredData.forEach(r => {
        var row = tbody.append("tr");
        Object.entries(r).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
