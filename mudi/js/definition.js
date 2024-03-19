$("[id^=definition] > a").click(function(e) {
    e.preventDefault();
    var isPlaying = !$("#passage-audio")[0].paused;
    if (isPlaying) {
        $("#passage-audio")[0].pause();

        $("#def-audio").bind('ended', function() {
            setTimeout(function() {
                $("#passage-audio")[0].play();
                $("#def-audio").unbind();
            }, 500);
        });
    }
    $("#def-audio > source")[0].src = e.target.href;
    $("#def-audio")[0].load();
    setTimeout(function() {
        $("#def-audio")[0].play()
    }, 500);

    // $("#definition-audio > source").play();
    console.log(e.target.href);
    return false;
});
$('.defined-word').click(function(e) {
    var num = this.id.substr(13);
    var defId = '#definition' + num;
    $('#page-right p').hide();
    $(defId).show();
    // $('#page-right div').animate({
    //     scrollTop: $(defId).offset().top - $('#page-right div').offset().top + $('#page-right div').scrollTop()
    // });
});
$('.defined-word').mouseover(function(e) {
    var num = this.id.substr(13);
    var defId = '#definition' + num;
    $(defId).css("background-color", "salmon");
});
$('.defined-word').mouseout(function(e) {
    var num = this.id.substr(13);
    var defId = '#definition' + num;
    $(defId).css("background-color", "transparent");
});
