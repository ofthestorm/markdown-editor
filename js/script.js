;$(function () {
    var windowHeight = $(window).height();
    $('.left').css('height', windowHeight - 70);
    $('.right').css('height', windowHeight - 70);

    //todo: auto scroll
    var displayScrollBar = $('#display-area');
    $('.markdown-area').keyup(function () {
        // alert("ha");
        //  alert($('#display-area')[0].scrollHeight);
        console.log($('#display-area')[0].scrollHeight);
        $('#display-area')[0].scrollTop = $('#display-area')[0].scrollHeight;
        // displayScrollBar.scrollTo('100%');
        // $('#display-area').scrollTop(100);
    });
    // $('#display-area').stop().animate({
    //     scrollTop: $('#display-area')[0].scrollHeight
    // }, 800);
    $('#saveBtn').click(function () {
        var blob = new Blob([vm.input], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "MarkdownLite.md");
    });

});

var vm = new Vue({
    el: '#markdown',
    data: {
        input: "# Hello \n" +
        "\n" +
        "##### Try markdownlite like this :\n" +
        "\n" +
        "- List\n" +
        "\n" +
        "> quote\n" +
        "\n" +
        "```print(\"Hello, world\")```\n" +
        "\n" +
        "***and so on ...***"
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



//todo: rewrite compile markdown