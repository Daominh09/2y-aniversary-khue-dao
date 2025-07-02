(function() {
    var offsetX = $('#loveHeart').width() / 2;
    var offsetY = $('#loveHeart').height() / 2 - 55;
    var together = new Date();
    together.setFullYear(2023, 6, 2);
    together.setHours(5, 17, 24, 0);

    if (!document.createElement('canvas').getContext) {
    var msg = document.createElement('div');
    msg.id = 'errorMsg';
    msg.innerHTML =
        "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
    document.body.appendChild(msg);
    $('#code').hide();
    } else {
    setTimeout(startHeartAnimation, 5000);
    timeElapse(together);
    setInterval(function() {
        timeElapse(together);
    }, 500);
    adjustCodePosition();
    $('#code').typewriter();
     }
})();