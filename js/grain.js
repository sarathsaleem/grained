/*

grain(element,options);

@element : html element selector, ID  eg: #container
@options : Object ,
{
  animate : boolean, //default true
  patternWidth :
  patternhwight :
  grainOpacity :
  grainDensity :
  grainWidth :
  grainChaos :
  grainSpeed :

}

*/

function grain(ele, opt) {



    var prefixes = ["", "-moz-", "-o-animation-", "-webkit-"];
    var element = ele;

    var options = {
        animate: true, //default true
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.1,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1,
        grainChaos: 5,
        grainSpeed: 10

    };

    Object.keys(opt).forEach(function (key) {
        options[key] = opt[key];
    });


    var generateNoise = function () {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = options.patternWidth;
        canvas.height = options.patternHeight;
        for (var x = 0; x < options.patternWidth; x += options.grainDensity) {
            for (var y = 0; y < options.patternHeight; y += options.grainDensity) {
                var n = Math.random() * 256 | 0;
                ctx.fillStyle = 'rgba(' + [n, n, n, options.grainOpacity].join() + ')';
                ctx.fillRect(x, y, options.grainWidth, options.grainHeight);
            }
        }
        return canvas.toDataURL('image/png');
    };


    function addCSSRule(sheet, selector, rules, index) {
        var ins = '';
        if (selector.length) {
            ins = selector + "{" + rules + "}";
        } else {
            ins = rules;
        }

        if ("insertRule" in sheet) {
            sheet.insertRule(ins, index);
        } else if ("addRule" in sheet) {
            sheet.addRule(selector, rules, index);
        }
    }

    function clearCSSRules(sheet) {
        var i = sheet.cssRules.length - 1;
        // Remove all the rules from the end inwards.
        while (i >= 0) {
            if ("deleteRule" in sheet) {
                sheet.deleteRule(i);
            } else if ("removeRule" in sheet) {
                sheet.removeRule(i);
            }
            i--;
        }
    }


    var noise = generateNoise();

    var animation = '@-webkit-keyframes grain{0%,100%{-moz-transform:translate(0,0);-ms-transform:translate(0,0);-webkit-transform:translate(0,0);transform:translate(0,0)}10%{-moz-transform:translate(-5%,-10%);-ms-transform:translate(-5%,-10%);-webkit-transform:translate(-5%,-10%);transform:translate(-5%,-10%)}20%{-moz-transform:translate(-15%,5%);-ms-transform:translate(-15%,5%);-webkit-transform:translate(-15%,5%);transform:translate(-15%,5%)}30%{-moz-transform:translate(7%,-25%);-ms-transform:translate(7%,-25%);-webkit-transform:translate(7%,-25%);transform:translate(7%,-25%)}40%{-moz-transform:translate(-5%,25%);-ms-transform:translate(-5%,25%);-webkit-transform:translate(-5%,25%);transform:translate(-5%,25%)}50%{-moz-transform:translate(-15%,10%);-ms-transform:translate(-15%,10%);-webkit-transform:translate(-15%,10%);transform:translate(-15%,10%)}60%{-moz-transform:translate(15%,0);-ms-transform:translate(15%,0);-webkit-transform:translate(15%,0);transform:translate(15%,0)}70%{-moz-transform:translate(0%,15%);-ms-transform:translate(0%,15%);-webkit-transform:translate(0%,15%);transform:translate(0%,15%)}80%{-moz-transform:translate(3%,35%);-ms-transform:translate(3%,35%);-webkit-transform:translate(3%,35%);transform:translate(3%,35%)}90%{-moz-transform:translate(-10%,10%);-ms-transform:translate(-10%,10%);-webkit-transform:translate(-10%,10%);transform:translate(-10%,10%)}}';
    animation += '@-moz-keyframes grain{0%,100%{-moz-transform:translate(0,0);-ms-transform:translate(0,0);-webkit-transform:translate(0,0);transform:translate(0,0)}10%{-moz-transform:translate(-5%,-10%);-ms-transform:translate(-5%,-10%);-webkit-transform:translate(-5%,-10%);transform:translate(-5%,-10%)}20%{-moz-transform:translate(-15%,5%);-ms-transform:translate(-15%,5%);-webkit-transform:translate(-15%,5%);transform:translate(-15%,5%)}30%{-moz-transform:translate(7%,-25%);-ms-transform:translate(7%,-25%);-webkit-transform:translate(7%,-25%);transform:translate(7%,-25%)}40%{-moz-transform:translate(-5%,25%);-ms-transform:translate(-5%,25%);-webkit-transform:translate(-5%,25%);transform:translate(-5%,25%)}50%{-moz-transform:translate(-15%,10%);-ms-transform:translate(-15%,10%);-webkit-transform:translate(-15%,10%);transform:translate(-15%,10%)}60%{-moz-transform:translate(15%,0);-ms-transform:translate(15%,0);-webkit-transform:translate(15%,0);transform:translate(15%,0)}70%{-moz-transform:translate(0%,15%);-ms-transform:translate(0%,15%);-webkit-transform:translate(0%,15%);transform:translate(0%,15%)}80%{-moz-transform:translate(3%,35%);-ms-transform:translate(3%,35%);-webkit-transform:translate(3%,35%);transform:translate(3%,35%)}90%{-moz-transform:translate(-10%,10%);-ms-transform:translate(-10%,10%);-webkit-transform:translate(-10%,10%);transform:translate(-10%,10%)}}';
    animation += '@-ms-keyframes grain{0%,100%{-moz-transform:translate(0,0);-ms-transform:translate(0,0);-webkit-transform:translate(0,0);transform:translate(0,0)}10%{-moz-transform:translate(-5%,-10%);-ms-transform:translate(-5%,-10%);-webkit-transform:translate(-5%,-10%);transform:translate(-5%,-10%)}20%{-moz-transform:translate(-15%,5%);-ms-transform:translate(-15%,5%);-webkit-transform:translate(-15%,5%);transform:translate(-15%,5%)}30%{-moz-transform:translate(7%,-25%);-ms-transform:translate(7%,-25%);-webkit-transform:translate(7%,-25%);transform:translate(7%,-25%)}40%{-moz-transform:translate(-5%,25%);-ms-transform:translate(-5%,25%);-webkit-transform:translate(-5%,25%);transform:translate(-5%,25%)}50%{-moz-transform:translate(-15%,10%);-ms-transform:translate(-15%,10%);-webkit-transform:translate(-15%,10%);transform:translate(-15%,10%)}60%{-moz-transform:translate(15%,0);-ms-transform:translate(15%,0);-webkit-transform:translate(15%,0);transform:translate(15%,0)}70%{-moz-transform:translate(0%,15%);-ms-transform:translate(0%,15%);-webkit-transform:translate(0%,15%);transform:translate(0%,15%)}80%{-moz-transform:translate(3%,35%);-ms-transform:translate(3%,35%);-webkit-transform:translate(3%,35%);transform:translate(3%,35%)}90%{-moz-transform:translate(-10%,10%);-ms-transform:translate(-10%,10%);-webkit-transform:translate(-10%,10%);transform:translate(-10%,10%)}}';
    animation += '@keyframes grain{0%,100%{-moz-transform:translate(0,0);-ms-transform:translate(0,0);-webkit-transform:translate(0,0);transform:translate(0,0)}10%{-moz-transform:translate(-5%,-10%);-ms-transform:translate(-5%,-10%);-webkit-transform:translate(-5%,-10%);transform:translate(-5%,-10%)}20%{-moz-transform:translate(-15%,5%);-ms-transform:translate(-15%,5%);-webkit-transform:translate(-15%,5%);transform:translate(-15%,5%)}30%{-moz-transform:translate(7%,-25%);-ms-transform:translate(7%,-25%);-webkit-transform:translate(7%,-25%);transform:translate(7%,-25%)}40%{-moz-transform:translate(-5%,25%);-ms-transform:translate(-5%,25%);-webkit-transform:translate(-5%,25%);transform:translate(-5%,25%)}50%{-moz-transform:translate(-15%,10%);-ms-transform:translate(-15%,10%);-webkit-transform:translate(-15%,10%);transform:translate(-15%,10%)}60%{-moz-transform:translate(15%,0);-ms-transform:translate(15%,0);-webkit-transform:translate(15%,0);transform:translate(15%,0)}70%{-moz-transform:translate(0%,15%);-ms-transform:translate(0%,15%);-webkit-transform:translate(0%,15%);transform:translate(0%,15%)}80%{-moz-transform:translate(3%,35%);-ms-transform:translate(3%,35%);-webkit-transform:translate(3%,35%);transform:translate(3%,35%)}90%{-moz-transform:translate(-10%,10%);-ms-transform:translate(-10%,10%);-webkit-transform:translate(-10%,10%);transform:translate(-10%,10%)}}';
    
    var styleAdded = document.getElementById('grain-animation');
    if(styleAdded){
        styleAdded.parentElement.removeChild(styleAdded);
    }
    
    var css = document.createElement("style");
    css.type = "text/css";
    css.id= 'grain-animation';
    css.innerHTML = animation;
    document.body.appendChild(css);

    var rule = 'background-image: url(' + noise + ');';

    var ai = prefixes.length;
    while (ai--) {

        rule += prefixes[ai] + 'animation-name:grain;';
        rule += prefixes[ai] + 'animation-iteration-count: infinite;';
        rule += prefixes[ai] + 'animation-duration: ' + Math.round(options.grainChaos) + 's;';
        rule += prefixes[ai] + 'animation-timing-function: steps(' + Math.round(options.grainSpeed) + ', end);';
    }


    // Use it!
    clearCSSRules(document.styleSheets[1]);
    addCSSRule(document.styleSheets[1], element + '::after', rule);


}



var element = '#container';
var options = {
    animate: true, //default true
    patternWidth: 100,
    patternHeight: 100,
    grainOpacity: 0.1,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1,
    grainChaos: 5,
    grainSpeed: 10

};

function addGrain() {
    grain(element, options);
}
addGrain();

var gui = new dat.GUI();
gui.add(options, 'animate').onChange(addGrain);
gui.add(options, 'patternWidth', 10, 500).onChange(addGrain);
gui.add(options, 'patternHeight', 10, 500).onChange(addGrain);
gui.add(options, 'grainOpacity', 0.0, 1).onChange(addGrain);
gui.add(options, 'grainDensity', 1, 10).onChange(addGrain);
gui.add(options, 'grainWidth', 1, 10).onChange(addGrain);
gui.add(options, 'grainHeight', 1, 10).onChange(addGrain);
gui.add(options, 'grainChaos', 1, 10, 1.0).onChange(addGrain);
gui.add(options, 'grainSpeed', 1, 50, 1.0).onChange(addGrain);