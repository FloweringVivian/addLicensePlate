;(function($) {
    var add = {
        //添加车牌号
        addNumber: function(){
            $("#carNumber1").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                $("#add-layer1").addClass("in");
                $("#add-layer2").removeClass("in");
            });
            $(".car-number").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                $("#add-layer1").removeClass("in");
                $("#add-layer2").addClass("in");
            });
            $("#add-layer1").find("li").click(function(){
                var thisValue1 = $(this).find("a").html();
                $("#add-all span.active").html(thisValue1);
                $("#add-all span.active").next().addClass("active").siblings().removeClass("active");
                $("#add-layer1").removeClass("in");
                $("#add-layer2").addClass("in");
            });
            $("#add-layer2").find("li").click(function(){
                var thisValue2 = $(this).find("a").html();
                $("#add-all span.active").html(thisValue2);
                $("#add-all span.active").next().addClass("active").siblings().removeClass("active");
            })
        }
    };

    add.addNumber();


})(jQuery, window);

