let image_preloading = [
"./image/welcome/loader_back.png",
"./image/welcome/background.png",
"./image/welcome/welcome_icon.png",
"./image/companylogo.jpg",
"./image/welcome/power_on.png",
"./image/welcome/power_off.png",
"./image/app/app_close.svg",
"./image/app/app_leftarrow.svg",
"./image/app/app_minimize.svg",
"./image/app/app_rightarrow.svg",
"./image/app/app_uparrow.svg",
"./image/app/simple_down.svg",
"./image/app/simple_right.svg",
"./image/desktop/desktop_bin.svg",
"./image/desktop/desktop_browser.svg",
"./image/desktop/desktop_computer.svg",
"./image/desktop/desktop_network.svg",
"./image/desktop/desktop_viewer.svg",
"./image/filetypes/file_document.svg",
"./image/filetypes/file_edf.svg",
"./image/filetypes/file_folder.svg",
"./image/inspector/inspector_changed.svg",
"./image/inspector/inspector_decrypt.svg",
"./image/inspector/inspector_devtools.svg",
"./image/inspector/inspector_fail.svg",
"./image/inspector/inspector_icon.svg",
"./image/inspector/inspector_inspect.svg",
"./image/inspector/inspector_settings.svg",
"./image/inspector/inspector_success.svg",
"./image/mail/mail_attach.svg",
"./image/mail/mail_new.svg",
"./image/mail/mail_reply.svg",
"./image/mail/mail_send.svg",
"./image/notif/notifs_download.svg",
"./image/notif/notifs_mail.svg",
"./image/plugin/firewall.svg",
"./image/taskbar/taskbar_changeuser.svg",
"./image/taskbar/taskbar_network.svg",
"./image/taskbar/taskbar_notifs.svg",
"./image/taskbar/taskbar_poweroff.svg",
"./image/taskbar/taskbar_powersave.svg",
"./image/taskbar/taskbar_start.svg",
"./image/taskbar/taskbar_user.svg",
"./image/wallpaper/background_admin.png",
"./image/wallpaper/background_panopticon.png",
"./image/web/hierarchy.png",
"./image/web/inspector_icon.svg",
"./image/web/intranet_back.png",
"./image/web/intranet_logo.png",
"./image/web/poodle_logo.png",
"./image/web/search_button.png",
"./image/web/vpn.svg"];

let cnt_image_preload = image_preloading.length;
let cnt_image_loaded = 0;
document.addEventListener('DOMContentLoaded', function(){
  image_preloading.forEach(function(e, i) {
    let img = new Image();
    img.src = e;
    img.onload = function() {
      cnt_image_loaded++;
      if (cnt_image_preload == cnt_image_loaded) {
        app.image_loaded();
      }
    }
    img.onerror = function() {
      cnt_image_loaded++;
      if (cnt_image_preload == cnt_image_loaded) {
        app.image_loaded();
      }
    }
    document.getElementById("onloading").appendChild(img);
  })
});