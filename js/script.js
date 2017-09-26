;$(function () {
    var windowHeight = $(window).height();
    $('.left').css('height', windowHeight - 70);
    $('.right').css('height', windowHeight - 70);

    //todo: auto scroll
    // var displayScrollBar = $('#display-area');
    // $('.markdown-area').keyup(function () {
    //     // alert("ha");
    //     // alert(displayScrollBar.scrollTop);
    //     displayScrollBar.scrollTop = displayScrollBar.scrollHeight;
    //     // displayScrollBar.scrollTo('100%');
    //
    // });
    // $('#display-area').stop().animate({
    //     scrollTop: $('#display-area')[0].scrollHeight
    // }, 800);

});

var vm = new Vue({
    el: '#markdown',
    data: {
        input: "# Hello \n- Try"
    },
    // computed: {
    //     haha: function () {
    //         return this.message+"!";
    //     }
    // }
    computed: {
        compiledMarkdown: function () {
            return marked(this.input, { sanitize: true })
        }
    },
    methods: {
        update: function(e) {
            this.input = e.target.value;
        }
    }
});
