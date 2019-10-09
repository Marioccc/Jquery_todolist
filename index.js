$(document).ready(function(){
    $(".addBtn").bind("click", function (e) {
        e.preventDefault();
        var value = $(".addVal").val();
        if(value)
        {
            $(".itemList").append("<li><input type='checkbox' class='check'><span>"+value+"</span><a href='#' class='removeBtn'><img src='./images/close.svg' alt='close img'></a></li>");
            if($('.clearall').length==0)
            $(".itemList").before("<button class='clearall'>清除所有</button>");
        }
    });

    $(".addVal").keydown(function (e) { 
        if(e.keyCode=="13")
        $(".addBtn").click();
    });
    $(document).on("change",".check", function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("done");
    });
    $(document).on("click",".removeBtn", function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });
    $(document).on("click",".clearall", function (e) {
        e.preventDefault();
        $(this).next().children().remove();
        $(".addVal").val("");
        $(this).remove();
    });
})