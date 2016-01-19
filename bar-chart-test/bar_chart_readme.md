## Basic D3 Setup
You can either 
```
npm install d3
```
 or simply link to the CDN using a script tag:
 ```
 <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
 ```
One of the most exciting parts of D3 is that its selection operators, such as attr, style, and property, allow you either specify a value that is either a constant or a function, like this:

[img_1]

## Making a Simple Bar Chart Using SVG

Scalable Vector Graphics (SVG) an XML-based vector image format. Basically, it's like HTML but allows for interactivity and animation through curves, gradients, and masks. One major difference is thar SVG elements must be positioned relative to the top-left corner of the container -- there is no flow layout or text-wrapping.

After the style tag, set the svg class to graph.

![img_2](https://raw.githubusercontent.com/persephone-d3/d3_tutorial/master/bar-chart-test/img_2.png)

Then you need to set the SVG element's size using Javascript.

[img_3]

Next, selectAll creates "g" elements assigned to the variable called bar. The .data(data) method binds the data hardcoded above, as var data, to the g elements. The .enter() method returns the new, data-bound g elments, which can then be appended to the origin bar and given the transform-translate attribute, which is then shifted based on the y-axis relative to its barHeight.

[img_4]

Finally, we simply append those rect and text elements to the bar variable. D3's dx and dy attribute shifts the element along the respective axis. Here, we're moving it .35em.

And that's it! You've made a bar graph using SVG.

 


