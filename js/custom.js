jQuery(document).ready(function(){
    jQuery('.clickme a').click(function(){
        jQuery('.clickme a').removeClass('activelink');
        jQuery(this).addClass('activelink');
        var tagid = jQuery(this).data('tag');
        jQuery('.list').removeClass('active').addClass('hide');
        jQuery('#'+tagid).addClass('active').removeClass('hide');
    });
    jQuery(document).ready(function(){
        jQuery(".toggle-icon").click(function(){
            jQuery("header nav").slideToggle();
            jQuery("header").toggleClass("menu-opened",3000);
        });
    })
});