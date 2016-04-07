$(document).ready(function () {

    $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true,
        updateURL: false
    });

    $('.more_on').on('click', function () {
        if ($(".main").moveTo) {
            $(".main").moveTo(3)
        } else {
             $("html, body").animate({ scrollTop: $('#page3').offset().top }, 1000);
        }
    });
    $('.generate-btn').on('click', function () {
      if ($(".main").moveTo) {
            $(".main").moveTo(2)
        } else {
            $("html, body").animate({ scrollTop: $('#page2').offset().top }, 1000);
        }
    });


    var element = '#page1';
    var options = {
        animate: true, //default true
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.05,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1

    };
    var options3 = {
        animate: true, //default true
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.05,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1

    };

    var custOption = {
        animate: true, //default true
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.05,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1
    };

    grained(element, options);
    grained("#page3", options3);

    function addGrain() {


        grained("#customGraindent", custOption);

        Object.keys(custOption).forEach(function (key) {
            if (typeof custOption[key] === 'number') {
                custOption[key] = +custOption[key].toFixed(2);
            }
        });

        var text = 'var options = ' + JSON.stringify(custOption, null, 2);
        text += '\ngrained("#elementId", options);\n\n/*\nbackground-color :' + $("#customGraindent").css('backgroundColor') + '\n*/';
        $('.getCode textarea').text(text);
    }
    addGrain();

    var gui = new dat.GUI({
        autoPlace: false
    });

    var customize = gui.addFolder('Generate');
    customize.add(custOption, 'animate').onChange(addGrain);
    customize.add(custOption, 'patternWidth', 10, 500).onChange(addGrain);
    customize.add(custOption, 'patternHeight', 10, 500).onChange(addGrain);
    customize.add(custOption, 'grainOpacity', 0.0, 1).onChange(addGrain);
    customize.add(custOption, 'grainDensity', 1, 10).onChange(addGrain);
    customize.add(custOption, 'grainWidth', 1, 10).onChange(addGrain);
    customize.add(custOption, 'grainHeight', 1, 10).onChange(addGrain);
    customize.open();
    $('#optionWrapper').append(gui.domElement);

    var bodyStyle = $('#customGraindent')[0].style;
    $('#demo_apidemo').colorpicker({
        color: bodyStyle.backgroundColor,
        container: $('#customGraindent')
    }).on('changeColor', function (ev) {
        bodyStyle.backgroundColor = ev.color.toHex();
        addGrain();
    });

    demos();


    $('.patterns li').on('click', function () {
        var color = window.getComputedStyle(this).getPropertyValue('background-color'),
            image = window.getComputedStyle(this, ':before').getPropertyValue('background-image');
        getPngImage(color, image);
    });

    $('.getMytexture').on('click', function () {
        var color = window.getComputedStyle($("#customGraindent")[0]).getPropertyValue('background-color'),
            image = window.getComputedStyle($("#customGraindent")[0], ':before').getPropertyValue('background-image');
        getPngImage(color, image);
    });


});

function heightCorrect() {
    $('.sessionOne').height(window.innerHeight - 250);
}

if (window.exports) {
    window.exports.heightCorrect = heightCorrect;
} else {
    window.exports = {};
    window.exports.heightCorrect = heightCorrect;
}

function demos() {

    var options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 0.61,
        "grainDensity": 1.99,
        "grainWidth": 2.39,
        "grainHeight": 2.49
    };
    grained("#tv", options);

    options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 0.12,
        "grainDensity": 1.99,
        "grainWidth": 1.79,
        "grainHeight": 3.28
    };
    grained("#grass", options);
    options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 0.18,
        "grainDensity": 2.49,
        "grainWidth": 2.69,
        "grainHeight": 2.19
    };
    grained("#wood", options);
    options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 0.03,
        "grainDensity": 2.09,
        "grainWidth": 7.85,
        "grainHeight": 5.07
    };
    grained("#filim", options);

    options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 0.34,
        "grainDensity": 6.95,
        "grainWidth": 2.69,
        "grainHeight": 6.36
    }
    grained("#rain", options);
    options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 0.08,
        "grainDensity": 1.3,
        "grainWidth": 1.4,
        "grainHeight": 1.2
    }
    grained("#sky", options);

}

var getPngImage = function (color, imageSrc) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 100;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 150, 150);
    var image = new Image();
    image.src = imageSrc.slice(4, -1);
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
        var img = canvas.toDataURL('image/png');
        window.open(canvas.toDataURL('image/png'), '_blank');
    };
};
