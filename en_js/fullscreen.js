function launch_fullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function detach_fullscreen() {
  document.exitFullscreen();
}

document.addEventListener("fullscreenchange", function( event ) {
  if(document.fullscreenElement == null) {
    app.on_exit_fullscreen();
  }
});