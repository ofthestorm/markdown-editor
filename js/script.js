;$(function () {
    var windowHeight = $(window).height();
    $('.left').css('height', windowHeight - 70);
    $('.right').css('height', windowHeight - 70);

    var displayScroll = $('#display-area')[0];
    $('.markdown-area').keyup(function () {
        displayScroll.scrollTop = displayScroll.scrollHeight;
    });

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