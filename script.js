/* Exercise 2: Color picker */

//Color the preview area
function setPreviewColor(color) {
    $('.preview').css('background-color', color);
};

//Colour input box
$(document).on('keyup', '#color', function () {
    setPreviewColor($('#color').val());
    $('.color-code').text($('.preview').css('background-color'));
});

//Make add-to-favorite button work
function addBox(color) {
    let div = document.createElement('div');
    div.classList.add('item');
    div.style.cssText = "background-color: " + color

    $('#colors').prepend(div);
}

$(document).on('click', '#add-to-favorite', function () {
    addBox($('#color').val());
    $('#color').val('');
    $('#color').focus();

    let count = $('#colors .item').length;
    let lastItem = $('#colors .item').last();

    if (count > 16) {
        lastItem.remove();
    }
});

//Set initial colours
let colors = [ '22ac5e', 'd68236', '770077' ];

$(document).ready(function() {
    colors.forEach(function(color) {
        addBox(color);
    });

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    setPreviewColor(randomColor);
})

//Change preview box on mouse over
let previewColor;

$(document).on('mouseenter', '#colors .item', function() {
    previewColor = $('.preview').css("background-color");
    setPreviewColor($(this). css("background-color"));
});

$(document).on('mouseleave', '#colors .item', function() {
    setPreviewColor(previewColor);
})