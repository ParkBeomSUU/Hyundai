$(function(){
    var baseW = $(".bill-contents").width();
    //2148px,1614px
    $(".bill-contents").on("mousemove", function(event){
        var x = event.originalEvent.pageX;

        var distW = x/baseW*50;

        $(".tagcloud-pc").animate({
            left : -distW+"%",
            right : +distW+"%",
        },20);
    });

    $(document).scroll(function(){
        var winH = $(window).height();
        if($(this).scrollTop() >= winH){
            $("#menu-tab").addClass("fixed");
        }else{
            $("#menu-tab").removeClass("fixed");
        }
    });


// 디데이 날짜 설정 (UTC 기준)
var dday = new Date("2023-04-13T00:00:00Z");  //신입사원
var dday_1 = new Date("2023-05-13T00:00:00Z"); // 전략소재 구매
var dday_2 = new Date("2023-07-25T00:00:00Z"); //전동화 부품

var ddayText = "2023년 5월 22일"; // 디데이 텍스트 설정
var ddayText_1 = "2023년 6월 22일"; 
var ddayText_2 = "2023년 8월 25일"; 


// 카운트다운 타이머
setInterval(function() {

  // 현재 시간 계산
  var now = new Date().getTime();

  // 디데이까지 남은 시간 계산
  var distance = dday - now;
  var distance_1 = dday_1 - now;
  var distance_2 = dday_2 - now;


  // 남은 시간 계산 (일, 시, 분, 초)
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var days_1 = Math.floor(distance_1 / (1000 * 60 * 60 * 24));
  var days_2 = Math.floor(distance_2 / (1000 * 60 * 60 * 24));

  // 결과 출력
  var countdown = $(".date");
  countdown.html("D-" + days);

  var countdown = $(".date_1");
  countdown.html("D-" + days_1);

  var countdown = $(".date_2");
  countdown.html("D-" + days_2);

  // 디데이가 지나면 출력 변경
  if (distance < 0) {
    clearInterval(x);
    countdown.html("디데이 " + ddayText + "이(가) 지났습니다.");
  }

  if (distance < 0) {
    clearInterval(x);
    countdown.html("디데이 " + ddayText_1 + "이(가) 지났습니다.");
  }

  // 디데이가 지나면 출력 변경
  if (distance < 0) {
    clearInterval(x);
    countdown.html("디데이 " + ddayText_2 + "이(가) 지났습니다.");
  }
}, 1000); // 1초마다 갱신



      $(".card-img > div").hover(function(){
          $(".cover",this).stop().fadeToggle();
      })
});

// 더보기 버튼
$(function() {
  $('.more-btn').on('click', function() {
    $('.hidden-items').slideDown(); // 추가 아이템 보이기
    $(this).hide(); // 더보기 버튼 숨기기
  });
});


