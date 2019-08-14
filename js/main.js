(function($){
        //custom scrollbars
        $(window).on("load",function(){
            $(".days").mCustomScrollbar({
                mouseWheel:{ enable: true },
                contentTouchScroll: true,
                documentTouchScroll: true
            });

            $(".events").mCustomScrollbar({
                mouseWheel:{ enable: true },
                contentTouchScroll: true,
                documentTouchScroll: true
            });

            $('.wrapper').mCustomScrollbar({
                axis:"x",
                mouseWheel:{ enable: true },
                contentTouchScroll: true,
                documentTouchScroll: true
            });
        });

        //handles day click
        $('.day').on('click', function(){
            $('.day').removeClass('current');
            $(this).addClass('current');
        });

      
})(jQuery);