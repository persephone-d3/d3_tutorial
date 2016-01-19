## Basic D3 Setup
You can either 
```
npm install d3
```
 or simply link to the CDN using a script tag:
 ```
 <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
 ```
One of the msot exciting parts of D3 is that its selection operators, such as attr, style, and property, allow you either specify a value that is either a constant or a function, like this

[img-1]

## Making a Simple Bar Chart Using SVG

Scalable Vector Graphics (SVG) an XML-based vector image format. Basically, it's like HTML but allows for interactivity and animation through curves, gradients, and masks. One major difference is thar SVG elements must be positioned relative to the top-left corner of the container -- there is no flow layout or text-wrapping.

After the style tag, set the svg class to graph.

[img-2]

Then you need to set the SVG element's size using Javascript.

[img-3]

Next, selectAll creates a "g" element assigned to 



