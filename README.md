## Dependencies

* [SASS](http://sass-lang.com/install)
* [Compass](http://compass-style.org/install/)

## Development

1. To view the project at http://localhost:8000/index.html, you'll need to do a python -m SimpleHTTPServer from the project directory.


## Importing into the FC CMS
In CMS post BODY COPY field:
[widget name=widgetCustomContent config=][/widget]


## For Graphics pulled in via Pym/iframes

1. In main.js setup variables of your project
var pymChild = new pym.Child();

2. To call iframe resize (say, on text expanding)
pymChild.sendHeightToParent();

3. Upload your graphic to our S3 infographics.fastcompany.com bucket
// You'll need to make files public and it can get confusing--don't be afraid to reach out for help at this step

4. In WIDGET: CUSTOM CONTENT field in the cms:
// TODO: Replace CDN of pym with hosted copy
<div class="viz-article" id="viz-pym">
	<script>
		// var graphicURL = "URL OF YOUR GRAPHIC FROM http://infographics.fastcompany.com/";
		$.getScript("https://cdn.rawgit.com/nprapps/pym.js/master/src/pym.js", function(){
		    pym.Parent('viz-pym', graphicURL, {});
		 });
	</script>
</div>





## For graphics living in the custom HTML/CSS CMS fields (no iframe)

```
<article class="viz-article" id="viz-pym">
	<script type="text/javascript">
		window.FC = window.FC || {};
		window.FC.inlineFunctions = window.FC.inlineFunctions || {};

		window.FC.inlineFunctions.vizScript = function() {
			// main.js pasted here
		};

		// Add any libs such as _, d3, etc...
		require(['/js/vendor/d3.min.js'], function(d3) {
			window.d3 = d3;
			window.FC.inlineFunctions.vizScript();
		});
	</script>
</article>
```
