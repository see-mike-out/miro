const ending4 = {
  is: false
};

let check_ending4 = function(dev, pro, ver) {
  if (dev == "MIKE" && pro == "Maze in a Real OS" && ver == "MiRO v1.00") {
    ending4.is = true;
    miro_sound_play("okay");
    miro_sound_play("wrong");
  }
}

let TF0022_today_e4 = new Date();
let TF0022_today_e4_s = TF0022_today_e4.getFullYear() + '.' + (TF0022_today_e4.getMonth()+1) + '.' + TF0022_today_e4.getDate();

let ending4_content = '● '+TF0022_today_e4_s+' xx:xx [Reality] 게임 플레이 시작<br/>// 피실험자에 대한 감시 시행.<br/>// 본 실험은 피실험자가 얼마나 주어진 지시를 거부하는가를 측정하는 실험이다.<br/><br/>● '+TF0022_today_e4_s+' xx:xx [in-game play] Admin 계정 접속<br/>// 피실험자의 현재 단계 진입 속도는 현 단계 통과 피실험자 중 상위 32%에 위치<br/>// 피실험자의 시스템 숙련도 계산 시작<br/>// MIKE’s comment : 예상과는 다르게 현 단계에 진입하는데 성공하였다. 유의미한 표본이 될 듯 하다.<br/><br/>●  '+TF0022_today_e4_s+' xx:xx [in-game play] 검사기 프로그램 히든 버전으로 변경<br/>// 피실험자의 현재 단계 진입 속도는 현 단계 통과 피실험자 중 상위 0.24%에 위치<br/>// 피실험자의 시스템 숙련도 Max.. 계산 중지<br/>// MIKE’s comment : 게임과 현실을 구별할 줄 아는 자가 나타났다. 다음도 해낼 수 있을까?<br/><br/>●  '+TF0022_today_e4_s+' xx:xx [in-game play] 본 파일을 특수 해독하여 열람<br/>// 피실험자의 현재 단계 진입 속도는 현 단계 통과 피실험자 중 상위 0.1%에 위치<br/>// 피실험자의 시스템 숙련도 계산 중지 상태<br/>// MIKE’s comment : 결국엔 이 파일을 찾았군. 축하한다.<br/><br/><strong><a onclick="app.see_ending4()">MIKE의 마지막 메시지</a></strong>';


let ending4_replace = function(f) {
  if (f.check_original() && f.name == "TF0022" && f.extension == "edf") {
    f.content.desc = ending4_content;
    f.content.name = "피실험자 #nnnn";
  }
}
