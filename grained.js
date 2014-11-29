/*

grained

*/
(function (window, doc) {

    "use strict";

    function grained(ele, opt) {

        var element = null,
            elementId = null,
            selectorElement = null;

        if (typeof ele === 'string') {
            element = doc.getElementById(ele.split('#')[1]);
        }

        if (!element) {
            console.error('Grained: cannot find the element with id ' + ele);
            return;
        } else {
            elementId = element.id;
        }

        //set style for parent
        if (element.style.position !== 'absolute') {
            element.style.position = 'relative';
        }
        element.style.overflow = 'hidden';

        var prefixes = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"];

        //default option values
        var options = {
            animate: true,
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
            var canvas = doc.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = options.patternWidth;
            canvas.height = options.patternHeight;
            for (var w = 0; w < options.patternWidth; w += options.grainDensity) {
                for (var h = 0; h < options.patternHeight; h += options.grainDensity) {
                    var rgb = Math.random() * 256 | 0;
                    ctx.fillStyle = 'rgba(' + [rgb, rgb, rgb, options.grainOpacity].join() + ')';
                    ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
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


        var noise = generateNoise();

        var animation = '',
            keyFrames = ['0%:-10%,10%', '10%:-25%,0%', '20%:-30%,10%', '30%:-30%,30%', '40%::-20%,20%', '50%:-15%,10%', '60%:-20%,20%', '70%:-5%,20%', '80%:-25%,5%', '90%:-30%,25%', '100%:-10%,10%'];

        var pre = prefixes.length;
        while (pre--) {
            animation += '@' + prefixes[pre] + 'keyframes grained{';
            for (var key = 0; key < keyFrames.length; key++) {
                var keyVal = keyFrames[key].split(':');
                animation += keyVal[0] + '{';
                animation += prefixes[pre] + 'transform:translate(' + keyVal[1] + ');';
                animation += '}';
            }
            animation += '}';
        }

        var styleAdded = doc.getElementById('grained-animation-' + elementId);
        if (styleAdded) {
            styleAdded.parentElement.removeChild(styleAdded);
        }

        var style = doc.createElement("style");
        style.type = "text/css";
        style.id = 'grained-animation-' + elementId;
        if (options.animate) {
            style.innerHTML = animation;
        } else {
            style.innerHTML = '';
        }
        doc.body.appendChild(style);

        var rule = 'background-image: url(' + noise + ');';
        rule += 'position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;';
        pre = prefixes.length;
        if (options.animate) {
            while (pre--) {
                rule += prefixes[pre] + 'animation-name:grained;';
                rule += prefixes[pre] + 'animation-iteration-count: infinite;';
                rule += prefixes[pre] + 'animation-duration: ' + Math.round(options.grainChaos) + 's;';
                rule += prefixes[pre] + 'animation-timing-function: steps(' + Math.round(options.grainSpeed) + ', end);';
            }
        }

        var graine = document.createElement('div');
        graine.setAttribute('class', 'grained');
        // element.parentElement.removeChild()
        // element.insertBefore(graine, element.firstChild);

        //selecter element to add grains        
        selectorElement = '#' + elementId + '::before';


        addCSSRule(style.sheet, selectorElement, rule);


    }

    window.grained = grained;
    //END
})(window, document);