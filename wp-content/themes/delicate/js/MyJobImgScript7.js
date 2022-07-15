$(document).ready(function() {

    //fancybox
    $(".btnAdd").click(function() {

        MyParent = $(this).parents(".MyJobImg");
        ArrayImg = MyParent.find('img');

        var AttrScr = []; // переменная, которая будет хранить ссылки на img
        ArrayImg.each(function(indx) {
            AttrScr.push($(this).attr('href'));
        });

        $.fancybox.open(AttrScr, {
            prevEffect: 'none',
            nextEffect: 'none',

            closeBtn: false,
            arrows: false,
            nextClick: true,

            helpers: {
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        });

    });

    $("#MyJobAccordion").accordion({
        heightStyle: "content",
        collapsible: true
    });

});
