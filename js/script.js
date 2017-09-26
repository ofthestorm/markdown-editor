;$(function () {
    var windowHeight = $(window).height();
    $('.left').css('height', windowHeight - 70);
    $('.right').css('height', windowHeight - 70);

});

var vm = new Vue({
    el: '#markdown',
    data: {
        message: ""
    },
    computed: {
        displayMessage: function () {
            return this.message.join('!');
        }
    }
});
