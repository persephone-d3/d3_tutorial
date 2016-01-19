
//this is our data
var circleRadii = [250, 125, 70];

//this creates a SVG container element to hold SVG elements
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 600)
                                    .attr("height", 600);
//Bind data to SVG Elements

//.selectAll returns an empty selection
//.data(data).enter() binds the specified data to the empty selection
//.append() then creates SVG elements in relation to the number of items in the data set
var circles = svgContainer.selectAll("circle").data(circleRadii).enter().append("circle");

//Use Bound Data to Alter SVG Circles   
//'cx' and 'cy' attributes set the center position of the element
//'r' is the attribute for the radius
//we set the 'r' attribute using function(d) which applies the bound data set to the element
var circleAttributes = circles
                       .attr("cx", 300)
                       .attr("cy", 300)
                       .attr("r", function (d) { return d; })
                       .style("fill", function (d) {
                        var returnColor;
                        if (d === 250) {
                          returnColor = '#f2ffe5';
                        } else if (d === 125) {
                          returnColor = '#b3ff66';
                        } else if (d === 70) {
                          returnColor = '#73e600';
                        }
                        return returnColor;
                       });                  