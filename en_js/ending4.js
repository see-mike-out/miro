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

let ending4_content = '● '+TF0022_today_e4_s+' xx:xx [Reality] Start game play<br/>// Started surveillance of participant.<br/>// This experiment’s purpose is to measure how many times the participant disobeys given orders.<br/><br/>● '+TF0022_today_e4_s+' xx:xx [in-game play] Logged in Admin account<br/>// Participant’s speed of entering current game stage rated 32% of all participants.<br/>// Started calculating participant’s system proficiency level.<br/>// MIKE’s comment : Unexpectedly succeeded in entering current game stage. Can expect current participant to be a notable case.<br/><br/>● '+TF0022_today_e4_s+' xx:xx [in-game play] updated Inspector program to hidden version<br/>// Participant’s speed of entering current game stage rated 0.24% of all participants.<br/>// Participant’s system proficiency level: Max. Paused calculation.<br/>// MIKE’s comment : This one knows to distinguish between game environment and reality. Will this participant be able to move on to the next level?<br/><br/>● '+TF0022_today_e4_s+' xx:xx [in-game play] Accessed to current file by extra decoding<br/>// Participant’s speed of entering current game stage rated 0.1% of all participants.<br/>// Participant’s system proficiency level: Paused calculation.<br/>// MIKE’s comment: You’ve finally found this file. Congratulations!<br/><br/><strong><a onclick="app.see_ending4()">The last message of MIKE</a></strong>';

let ending4_replace = function(f) {
  if (f.check_original() && f.name == "TF0022" && f.extension == "edf") {
    f.content.desc = ending4_content;
    f.content.name = "Participant #nnnn";
  }
}
