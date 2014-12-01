$(document).ready(function () {
    $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true
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

        Object.keys(custOption).forEach(function(key){
            if (typeof custOption[key] === 'number') {
                custOption[key] = +custOption[key].toFixed(2);
            }
        });

        var text = 'var options = '+ JSON.stringify(custOption, null, 2);
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
    $('.custom-gen')[0].appendChild(gui.domElement);

    var bodyStyle = $('#customGraindent')[0].style;
    $('#demo_apidemo').colorpicker({
        color: bodyStyle.backgroundColor,
        container: $('#customGraindent')
    }).on('changeColor', function (ev) {
        bodyStyle.backgroundColor = ev.color.toHex();
    });

});

function heightCorrect() {
    $('.sessionOne').height(window.innerHeight - 200);
}
if (window.exports) {
    window.exports.heightCorrect = heightCorrect;
} else {
    window.exports = {};
    window.exports.heightCorrect = heightCorrect;
}

function demos() {



}
