(function($){

    $.fn.minecraftSkin = function(){
        if ($(this).attr("data-minecraft-username")){
            $(this).html("<img src='https://crafatar.com/renders/body/"+$(this).attr("data-minecraft-username")+"' width='40'/>");
        }
    }

})(jQuery);