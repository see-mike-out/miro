function miro_sound_register () {
  createjs.Sound.alternateExtensions = ["mp3", "wav"];
  //email notification
  createjs.Sound.registerSound("./common/sounds/new.mp3", "new");
  //file inspection notification
  createjs.Sound.registerSound("./common/sounds/okay.wav", "okay");
  //folder password lock
  //something wrong ==> wrong password (file, admin), wrong update info
  createjs.Sound.registerSound("./common/sounds/wrong.wav", "wrong");
  //account opening (done)
  createjs.Sound.registerSound("./common/sounds/opening.wav", "opening");
}

function miro_sound_play(key) {
  createjs.Sound.play(key);
}
