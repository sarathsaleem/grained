
Add animated grain texture effect to your content.
--------------------------------------------------

With **grained.js** you can add customized noise effect on your web page. It has easily customizable options to generate the animated noise effect.
The animation is added using CSS3 key-frame animation and instantly generated png noise image.

![enter image description here](http://sarathsaleem.github.io/grained/img/textute-list.gif)

**[Create your own](http://sarathsaleem.github.io/grained)**

How to use
------------

Include the library file in your html page.

    <script src="grained.js"></script>

initialize the library by

    grained('elementId',options)

*`'elementId'`* is the id of the container element to add the grain effect.  It is important to note that grainedjs will not change the background of the container element. It appends a div element as the first child of the container. Grainedjs will add two style changes to the container element *`'position:relative;overflow:hidden'.`* If the container position is absolute it will remand as absolute only.

Since a `'div'` element with class `'grained'` is added as first child element with position absolute it will have the the z index priority and appears on top of other contents in the container element. If you want the other elements in container element on top of grained effect you have to  add a css like

*`#container > * { position:relative; }`*

So the ideal structure of implementaion is like follows

    <div id="container">
       <div class="contents">
         your contents goes here .. like <a>, <p> etc
       </div>
    </div>
after initilizing  `grained('#contaoner', {});` it will look like this


    <div id="container">
        <div class='grained'></div>
        <div class="contents">
            your contents goes here .. like <a>, <p> etc
        </div>
    </div>

Options
-------

With these options you can crate customized grained effect , these are the option parameter you can change and the default values.

     var options = {
             animate: true,
             patternWidth: 100,
             patternHeight: 100,
             grainOpacity: 0.05,
             grainDensity: 1,
             grainWidth: 1,
             grainHeight: 1
     };
With animation true/false you can create textures with grain movement and a static one. The other value you can see the live in **[online generator](http://sarathsaleem.github.io/grained)**
