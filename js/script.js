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

//todo: save md file
function saveFile() {
    var win=window.open('','','top=10000,left=10000');
    win.document.write(document.getElementById(content).innerHTML);
    win.document.execCommand('SaveAs','',filename)
    win.close();

}

//todo: rewrite compile markdown