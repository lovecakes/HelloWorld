
$(document).ready(function () {

//Start Collision Detection
    function collision($box, $goal) {
        var x1 = $box.offset().left;
        var y1 = $box.offset().top;
        var h1 = $box.outerHeight(true);
        var w1 = $box.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $goal.offset().left;
        var y2 = $goal.offset().top;
        var h2 = $goal.outerHeight(true);
        var w2 = $goal.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return "";
        return true;
    }


    window.setInterval(function () {
        $('#result').text(collision($('#box'), $('#goal')));
    }, 20);

    //

    function collision($box, $goal) {
        var x1 = $box.offset().left;
        var y1 = $box.offset().top;
        var h1 = $box.outerHeight(true);
        var w1 = $box.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $goal.offset().left;
        var y2 = $goal.offset().top;
        var h2 = $goal.outerHeight(true);
        var w2 = $goal.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return "";
        return true;
    }


    window.setInterval(function () {
        $('#result2').text(collision($('#box'), $('#pane')));
    }, 20);


//End Collision Detection 

//Start Movement
var pane = $('#pane'),
    box = $('#box'),
    goal = $('#goal'),
    maxValue = 1000,
    //maxValue = pane.width() - box.width(),
    keysPressed = {},
    distancePerIteration = 3;

function calculateNewValue(oldValue, keyCode1, keyCode2) {
    var newValue = parseInt(oldValue, 10)
                   - (keysPressed[keyCode1] ? distancePerIteration : 0)
                   + (keysPressed[keyCode2] ? distancePerIteration : 0);
    return newValue < 0 ? 0 : newValue > maxValue ? maxValue : newValue;
}

$(window).keydown(function (event) { keysPressed[event.which] = true; });
$(window).keyup(function (event) { keysPressed[event.which] = false; });

setInterval(function () {
    box.css({
        left: function (index, oldValue) {
            return calculateNewValue(oldValue, 37, 39);
        },
        top: function (index, oldValue) {
            return calculateNewValue(oldValue, 38, 40);
        }
    });
}, 20);
//End Movement

//Start Animate Obj
    function animatethis(targetElement, speed) {
        $(targetElement).animate({ marginLeft: "+=250px" },
        {
            duration: speed,
            complete: function () {
                targetElement.animate({ marginLeft: "-=250px" },
                {
                    duration: speed,
                    complete: function () {
                        animatethis(targetElement, speed);
                    }
                });
            }
        });
    };

    animatethis($('#goal'), 5000);
});
//End Animate Obj