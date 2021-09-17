// DOM 캐싱
const $box1 = $("#box1");
const $box2 = $("#box2");
const $top = $box1.find(".top");
const $right = $box1.find(".right");
const $bottom = $box1.find(".bottom");
const $left = $box1.find(".left");
const $content = $("#content");
const $close1 = $content.find(".btn_close1");
const $close2 = $box2.find(".btn_close2");
const $btn1 = $(".btn1");
const $btn2 = $(".btn2");

let isDone = true;


//이벤트 바인딩
$btn1.on("click",function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if(isOn) return;

    if(isDone){
        closeBox2();
        openBox1();
        $(".btns li a").removeClass("on");
        $(this).children("a").addClass("on");

        isDone = false;
    }
});

$close1.on("click",function(e){
    e.preventDefault();

    closeBox1();
    $(".btns li a").removeClass("on");
});


$btn2.on("click",function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if(isOn) return;

    if(isDone){
        closeBox1();
        openBox2();
        $(".btns li a").removeClass("on");
        $(this).children("a").addClass("on");

        isDone = false;
    }
});

$close2.on("click",function(e){
    e.preventDefault();
    closeBox2();
    $(".btns li a").removeClass("on");
});


//함수 정의
function openBox1(){
    $top.animate({width: "100%"},1000);
    $bottom.animate({width: "100%"},1000,function(){
        $right.animate({height: "100%"},1000);
        $left.animate({height: "100%"},1000,function(){
            $content.fadeIn(1000,function(){
                $close1.animate({opacity: 1, right: 20},500,function(){
                    isDone = true;
                });
            });
        });
    });
}

function closeBox1(){
    $close1.animate({opacity:0,right: "-20px"},500);
    $content.fadeOut(500,function(){
        $top.animate({width: "0%"},500);
        $bottom.animate({width:"0%"},500,function(){
            $right.animate({height:"0%"},500);
            $left.animate({height:"0%"},500);
        });
    });
}

function openBox2(){
    $box2.animate({height:"400px",marginTop:"-200px"},1000,function(){
        $close2.animate({opacity:1},500,function(){
            isDone = true;
        });
    });
}

function closeBox2(){
    $close2.animate({opacity:0},500,function(){
        $box2.animate({height:0,marginTop:0},500);
    });
}