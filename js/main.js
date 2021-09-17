/*
1. next버튼 클릭
2. .list marginLeft: -200% 이동
3. 이동후에 .list marginLeft: -100%(원상태)로 변경  -> 앞에 하나가 나와있는 상태로 원복
4. 맨앞의 li를 뜯어서 뒷부분으로 보내버린다.
  : 선택자.appendTo(부모요소);  선택요소의 부모요소 안쪽에서 제일 뒤에 배치
    <-> 선택자.prependTo(부모요소);  선택요소의 부모요소 안쪽에서 제일 앞에 배치

*/
// DOM 캐싱
const $list = $(".list");
let enableClick = true;

let len = $list.find("li").length;
console.log(len);


// 이벤트 바인딩
$(".list li").last().prependTo($list); //화면1을 맨처음으로 내보이기


$list.css({                 //개수에따라 변경하기
    width: 100 * len + "%",
    height: "100%"
});
$(".list li").css({
    width: 100 / len + "%",
    height: "100%"
})


$(".next").on("click",function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        $list.animate({marginLeft:'-200%'},1000,function(){
            $list.css({marginLeft:"-100%"});
            $(".list li").first().appendTo($list);
            enableClick = true;
        });
    }
});

$(".prev").on("click",function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        $list.animate({marginLeft:'0%'},1000,function(){
            $list.css({marginLeft:"-100%"});
            $(".list li").last().prependTo($list);
            enableClick = true;
        });        
    }
});