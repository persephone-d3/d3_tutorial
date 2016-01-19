
// // define our data set
// var data = [4, 8, 15, 16, 23, 42];

// // d3.select(".chart")
// //   .selectAll("div")
// //   .data(data)
// //   .enter().append("div")
// //   .style("width", function(d) { 
// //     return d * 10 + "px"; 
// //   })
// //   .text(function(d) {
// //     return d;
// // });

// // select the chart div
// var chart = d3.select(".chart");
// // declare the elements we want to exist (aka initiate the data join)
// var bar = chart.selectAll("div");
// // join the data
// var barUpdate = bar.data(data);
// // returns empty so we instantiate the missing elements?
// var barEnter = barUpdate.enter().append("div");
// // set width
// barEnter.style("width", function(d) { return d * 10 + "px"; });
// // set text content
// barEnter.text(function(d) { return d; });
