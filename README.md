# d3_tutorial
D3 stands for Data Driven Documents. D3 is a Javascript library that allows you to easily incorporate data visualization into your web applications using just HTML, SVG, and CSS.

## Basic D3 Setup
You can either 
```
npm install d3
```
 or simply link to the CDN using a script tag:
 ```
 <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
 ```
One of the most exciting parts of D3 is that its selection operators, such as attr, style, and property, allow you either specify a value that is either a constant or a function.

## Making a Simple Bar Chart Using SVG

Scalable Vector Graphics (SVG) an XML-based vector image format. Basically, it's like HTML but allows for interactivity and animation through curves, gradients, and masks. One major difference is thar SVG elements must be positioned relative to the top-left corner of the container -- there is no flow layout or text-wrapping.

After the style tag, set the svg class to graph.

![img_2](https://raw.githubusercontent.com/persephone-d3/d3_tutorial/master/bar-chart-test/img_2.png)

Then you need to set the SVG element's size using Javascript.

![img_3](https://raw.githubusercontent.com/persephone-d3/d3_tutorial/master/bar-chart-test/img_3.png)

Next, selectAll creates "g" elements assigned to the variable called bar. The .data(data) method binds the data hardcoded above, as var data, to the g elements. The .enter() method returns the new, data-bound g elments, which can then be appended to the origin bar and given the transform-translate attribute, which is then shifted based on the y-axis relative to its barHeight.

![img_4](https://raw.githubusercontent.com/persephone-d3/d3_tutorial/master/bar-chart-test/img_4.png)

Finally, we simply append those rect and text elements to the bar variable. D3's dx and dy attribute shifts the element along the respective axis. Here, we're moving it .35em.

And that's it! You've made a bar graph using SVG.

**TO MAKE A BUBBLE CHART**

![test](https://raw.githubusercontent.com/persephone-d3/d3_tutorial/master/md_guides/html.png)

This is what you want on the bubble html

For this example, in the scripts we are using JQuery, d3, and our linked sheet which we will get to next. In the body, there is a single element, an svg tag, which we will be appending to through javascript in the bubble_main.js.

SVG stands for scalable vector graphics - we are using it to generate an image on the page which we will be able to edit using XML.

ONTO the javascript:

![full](https://raw.githubusercontent.com/persephone-d3/d3_tutorial/master/md_guides/full.png)

That's a lot! Let's break it down.

![ready](https://raw.githubusercontent.com/persephone-d3/d3_tutorial/master/md_guides/ready.png)

Over here we're making sure things are linked, and calling the function we're about to make that will create the chart

![data](https://raw.githubusercontent.com/persephone-d3/d3_tutorial/master/md_guides/data.png)

Before we call the function, let's get some data up here. The x value represents how many times I try to pick up my cat, and the y value represents how many scratches I get as a result. Sometimes he's ornery, and sometimes he's sleepy, so the results vary.

![initchart](https://raw.githubusercontent.com/persephone-d3/d3_tutorial/master/md_guides/initchart.png)

FROM HERE ON OUT, everything is withing the Initialize function!

First, we're going to select the element we made in the html file.
Next we're going to define the ranges. There are two very important distinctions here, ranges and domains. The domain is what you'd expect a 'range' to be, it's the minimum and maximum value for values. To get the min and max values to use for the domain, we're going to call d3.max and d3.min on our array of sample data to find the largest and smallest value to use for max and min. We're also going to determine the range, which is the amount of space we are going to use to put the values from the domain in. once we have both the range and domain, we're going to call d3.scale.linear() on all of that to plot the graph. 

![append](https://raw.githubusercontent.com/persephone-d3/d3_tutorial/master/md_guides/append.png)

Next, we're going to use d3.svg.axis().scale() with the ranges we defined before. This will set the axis with what we've just defined before with the xRange and yRange. When we do this, there are more options for us to orient this. The ‘g’ element is a container element for grouping together related graphics elements. When we're appending it, we append it with that, then .call the axis we defined above. .call will call it on all the tick marks being used on each axis, and then it will add the transform attribute to each group of data (defined with the g). The translate will actually be changed to reflect the points in the axis ticker data.

![circles](https://raw.githubusercontent.com/persephone-d3/d3_tutorial/master/md_guides/defining_circles.png)

Alright, last step is making the points of data viewable. Our graph is still not rendered, because it is waiting to be told what the pieces of data from sampleData are going to be displayed as. calling var cicles like this will make sure they're circles (we could instead make them rectangles, or all sorts of other things). We use .enter().insert('circle') to add them in, and then we need to set the attributes for where the circle x and y values are, what the style is, and what the radius is.

For more information, check out http://www.janwillemtulp.com/2011/04/01/tutorial-line-chart-in-d3/ and http://www.sitepoint.com/simple-bubble-charts-using-d3-js/.

