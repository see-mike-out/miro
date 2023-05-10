//admin
let app_inspector = new File('inspector', 'app', 8128000, '2019/1/20 9:21 PM', 'inspector', null, false, 'all', false);
app_inspector.set_icon('./image/inspector/inspector_icon.svg');
let app_e_mailr = new File('mail', 'app', 6550000, '2019/1/20 9:21 PM', 'mail', null, false, 'all', false);
app_e_mailr.set_icon('./image/notif/notifs_mail.svg');
let app_browser = new File('browser', 'app', 14290000, '2019/1/20 9:21 PM', 'browser', null, false, 'all', false);
app_browser.set_icon('./image/desktop/desktop_browser.svg');
let app_reader = new File('reader', 'app', 10800000, '2019/1/20 9:21 PM', 'reader', null, false, 'all', false);
app_reader.set_icon('./image/desktop/desktop_viewer.svg');

let plg_inspector_config = new File('inspector_config', 'plg', 2700000, '2019/1/20 9:21 PM', {app: 'inspector', fun: 'inspector_enable_update_input'}, null, false, 'all', false);
let plg_firewall = new File('vaccine', 'plg', 6630000, '2019/1/20 9:21 PM', {app: 'browser', fun: 'browser_set_firewall'}, null, false, 'all', false);
// let plg_passiveZ = new File('PassiveZ_Conotroller', 'plg', 8600000, '2019/1/20 9:21 PM', {app: 'browser', fun: 'browser_set_passivez'}, null, false, 'all', false);
let plg_vpn = new File('VPN', 'plg', 4670000, '2019/1/20 9:21 PM', {app: 'browser', fun: 'browser_set_vpn'}, null, false, 'all', false);
let plg_compress = new File('compressor', 'plg', 3140000, '2019/1/20 9:21 PM', {app: 'explorer', fun: 'explorer_enable_compress'}, null, false, 'all', false);
let plg_email_cleaner = new File('mail_cleaner', 'plg', 3140000, '2019/1/20 9:21 PM', {app: 'mail', fun: 'mail_no_delete'}, null, false, 'all', false);

let lnk_computer  = new File('My Computer', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'explorer'}, null, false, 'all', false);
lnk_computer.set_icon('./image/desktop/desktop_computer.svg');
lnk_computer.protect();
let lnk_network  = new File('Network', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'folder', to_go: null}, null, false, 'all', false);
lnk_network.set_icon('./image/desktop/desktop_network.svg');
lnk_network.protect();
let lnk_e_mailr  = new File('Mail', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'mail'}, null, false, 'all', false);
lnk_e_mailr.set_icon('./image/notif/notifs_mail.svg');
let lnk_browser  = new File('Internet Browser', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'browser'}, null, false, 'all', false);
lnk_browser.set_icon('./image/desktop/desktop_browser.svg');
let lnk_inspector  = new File('EDF Inspector', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'inspector'}, null, false, 'all', false);
lnk_inspector.set_icon('./image/inspector/inspector_icon.svg');
let lnk_reader  = new File('File Viewer', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'reader'}, null, false, 'all', false);
lnk_reader.set_icon('./image/desktop/desktop_viewer.svg');
let lnk_bin  = new File('Recycle Bin', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'bin'}, null, false, 'all', false);
lnk_bin.set_icon('./image/desktop/desktop_bin.svg');
lnk_bin.protect();

let img_logo = new File('logo', 'jpg', 0, '2019/1/20 9:21 PM', './image/companylogo.jpg', null, false, 'all', false);
img_logo.protect();
img_logo.hide();

let edf_ver = new File('test', 'edf', 12125, '2019/1/24 03:22 AM', {
name: 'Unknown',
gender: 'Unknown',
nationality: 'Unknown',
birthday: '198X-01-2X',
phone: '010-2233-1251',
desc: 'On runaway with v2.023b'
}, null, false, 'all', false);
edf_ver.encrypt();

let edf_TLUC814 = new File('TLUC814', 'edf', 340, '2019/09/06 11:41 PM', {
name: 'Puse Gail',
gender: 'Male',
nationality: 'U.S.',
birthday: '1966-06-13',
phone: '010-2014-7542',
desc: '● 2019.09.06. xx:xx [Computer work] program of unidentified origin run - security alert issued<br/>● 2019.09.06. xx:xx [computer work] 1 EDF file created and filename extension modified in ■■ Directory<br/>● 2019.09.06. xx:xx [Computer work] 1 file moved from ■■ Directory to Document<br/>● 2019.09.06. xx:xx [Computer work] Directory system modulated by unknown process <br/>● 2019.09.06. xx:xx [Computer work] Accessed internal network<br/>● 2019.09.06. xx:xx <Security alert: Level Zeta> Modification occurred in Network due to unknown process - 2 file(s) added<br/>● 2019.09.06. xx:xx [Computer work] Unknown process penetrated into company network<br/>● 2019.09.06. xx:xx [Computer work] shut down programs of unknown origin<br/>● 2019.09.06. xx:xx [captured on CCTV] Detected by cctv#42 - identification confirmed<br/>● 2019.09.06. xx:xx [captured on CCTV] Detected by cctv#42 - identification confirmed, path analysis revealed the target moved outside the building quickly<br/>● 2019.09.06. xx:xx <Security alert: Level Beta> Reported situation information to Ethics center, issued Action 44 : Termin to targets'
}, null, false, 'all', false);
edf_TLUC814.encrypt();

let edf_BR7993 = new File('BR7993', 'edf', 870, '2019/09/06 2:28 PM', {
name: 'Jeremy Foucault',
gender: 'Male',
nationality: 'France',
birthday: '1945-10-15',
phone: '010-2154-7818',
desc:'<br/>● 1994.02.06. xx:xx [Built-in Camera] Eye-tracking signal input succeeded 287 times. Accuracy 99.98%<br/>// Succeeded in replicating the government’s eye-tracking system.<br/>// It’s only a matter of time to distribute the system across the world, as the government has done it.<br/>// Do they really think I wouldn’t have made a backdoor when I was in charge of the project?<br/><br/>● 1994.08.11. xx:xx [captured on CCTV] determination process of cctv#1 initiated - FM5791 identification confirmed.<br/>// The government’s approach wasn’t bad. The one and only system to examine every individual’s thoughts and actions.<br/>// Though the problem was that they used the system for an inhumane purpose of power.<br/><br/>● 1997.10.09. xx:xx [captured on CCTV] cctv#1 analyzed biological response of FM5791 - algorithm synchronized 79%<br/>// What is the most objective saving format? Human engagement always includes the risk of mistakes.<br/>// Now I’ve structured the system to entirely be processed via artificial intelligence. There’s no way in which any human can interrupt the process.<br/>// Including myself. After the final process, these comments will become useless as well.<br/><br/>● 1998.01.02. xx:xx [Added to Calendar] Business Incorporation<br/>// This information collecting system must be spread out.<br/>// People crave for freedom as much as safety at the same time. And I’ll give them both.<br/>// The corporation to distribute this system will give birth soon.<br/>// Everything’s as planned.<br/><br/>● 2000.06.10. xx:xx [Built-in Camera] Testing real-time encoding of eye-tracking signal<br/>// I’m going to add a new function the thoughtless government never would have imagined of. Simply saving files are too unsophisticated.<br/>// It’s a shame that no one had cared enough of saving valuable data securely.<br/>// That’s why I endeavored for years to develop a new encoding method. I named it EDF.<br/>// This encryption method will terminate the data itself if any wrong attempt to access it is detected.<br/><br/>● 2005.09.22. xx:xx [captured on CCTV] filming cctv #1 ..  #5 - full resources concentrated in developing<br/>// Last step! Files encrypted in EDF will be self-destructed when it is browsed with any other program than this one.<br/>// This program that I made is the only program which will succeed in determining whether encryption has succeeded or whether data pairs are identical.<br/>// Everyone will be able to use these functions. But browsing the original information? This will only be available for the ones who share the same minds with me.<br/><br/>● 2006.02.28. xx:xx [Built-in Camera] Self-recording of FM5791 - Endorphine rate increase of subject<br/>// The omnipotent does not interfere. Does God interfere?<br/>// No. God does nothing. God exists. And god’s existence itself empowers people to move forward.<br/>// God’s only job is to oversee. So is mine.<br/>// The possibility of the autonomous human, that is what I intend to see.<br/>// There’s only one thing left to do - to fight my way out of the egg.<br/><br/>● 2006.03.01. 00:00 <System Protocol 00 : Abraxas > Applied termination algorithm for every data created later on as of related to FM5791<br/><br/>----------------------------------------------------------------------------<br/><br/>● <Special notes> - P.G.<br/>Finally, I’ve found you, badass.<br/>I’ll imprint evidence of your misdeeds on your own creations.<br/>'
}, null, false, 'all', false);
edf_BR7993.modify_file('2006/03/01 6:27 PM');
edf_BR7993.encrypt();
edf_BR7993.lock('icarusshallfall');

let edf_SZ4035 = new File('SZ4035', 'edf', 98, '2019/09/06 2:24 PM', {
name: 'TRUTH',
gender: '-',
nationality: '-',
birthday: '-',
phone: '-',
desc: 'open BR7993<br/>Password: icarusshallfall'
}, null, false, 'all', false);
edf_SZ4035.encrypt();
edf_SZ4035.modify_file('2019/09/06 10:38 PM');
edf_SZ4035.extension = 'jpg';

let edf_UY5774 = new File('UY5774', 'edf', 340, '2006/03/01 6:27 PM', {
name: 'Billy Edwards',
gender: 'Male',
nationality: 'U.S.',
birthday: '1994-10-13',
phone: '010-5932-4534',
desc: '● 2019.10.29. xx:xx [electronic payment] purchased product #048911, #187232 at #seo9134 in Korea<br/>● 2019.10.29. xx:xx [electronic payment] Took the #5513 bus at station #seo913 in Korea<br/>● 2019.10.29. xx:xx [online activity] logged in Tweetch as id:billylove@poodle.com at #seo914001 in Korea - identification verified<br/>● 2019.10.29. xx:xx [online activity] viewed video #cpt04991 in Tweetch - search query: fxxk, holy shxt, axshxle<br/>● 2019.10.29. xx:xx [electronic payment] Left the #5513 bus at station #seo927 in Korea'
}, null, false, 'all', false);
edf_UY5774.encrypt();

let edf_MJ2727 = new File('MJ2727', 'edf', 312, '2019/10/29 9:00 AM', {
name: 'Camila Santiago Himene',
gender: 'Female',
nationality: 'Guatemala',
birthday: '1991-02-21',
phone: '010-9734-9098',
desc: '● 2019.10.28. oo:oo [phone call] started phone call with VF5650 at #seo927451 in South Korea<br/>● 2019.10.28. oo:oo [phone call] ended phone call with VF5650 at #seo927452 in South Korea, calling time 12:06 - frequent words : boss, bossy, resign<br/>● 2019.10.29. oo:oo [captured on CCTV] Detected by cctv#15 at #seo927451 in South Korea - identification confirmed, picked up 20cm * 25cm square object out of bag. Estimated to be a picture of XQ1504<br/>● 2019.10.29. oo:oo [captured on CCTV] Violent action triggered. Ripped picture of XQ1504'
}, null, false, 'all', false);
edf_MJ2727.encrypt();

let edf_KG3245 = new File('KG3245', 'edf', 312, '2019/10/29 9:00 AM', {
name: 'Byungkwon Han',
gender: 'Male',
nationality: 'South Korea',
birthday: '1983-11-29',
phone: '010-3909-7175',
desc: '● 2019.10.28. nn:nn [online activity] created poodle account at 19.255.0.152, id:qudrnjs@poodle.com pw:55ehqkf!<br/>● 2019.10.28. nn:nn [online activity] logged in poodle at 19.255.0.152 as id:qudrnjs@poodle.com - identification confirmed<br/>● 2019.10.28. nn:nn [online activity] sent mail via poodle, To id:zappyboi@poodle.com, message - I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥<br/>● 2019.10.29. nn:nn [online activity] requesting for modification in surveillance level of the current subject'
}, null, false, 'all', false);
edf_KG3245.encrypt();

let edf_GP7732 = new File('GP7732', 'edf', 197, '2019/10/29 9:00 AM', {
name: 'Vladimir Strokous',
gender: 'Male',
nationality: 'Poland',
birthday: '1979-08-01',
phone: '010-7430-1283',
desc: '● 2019.10.28. oo:oo [fingerprint recognition] Biometric information requested by Device AC7741-O at #Vlad7142 in Russia<br/>● 2019.10.28. oo:oo [fingerprint recognition] Data verified from bank #1193 at #Mos1130 in Russia - identification confirmed<br/>● 2019.10.29. oo:o [captured on CCTV] Detected by cctv#142 at #Vlad7142 in Russia - identification confirmed'
}, null, false, 'all', false);
edf_GP7732.encrypt();

let edf_TF0022 = new File('TF0022', 'edf', 276, 'In progress', {
  name: 'Tom Maret',
  gender: 'Male',
  nationality: 'U.S.',
  birthday: '1984-08-24',
  phone: '010-4007-7556',
  desc: '● 2019.10.29. 08:17 [alert system] run for 6.283185 seconds and shut down at #seo1 in South Korea<br/>● 2019.10.29. 08:21 [electronic payment] Took the #8507 bus at station #seo8282 in South Korea<br/>● 2019.10.29. 08:52 [electronic payment] Left the #8507 bus at station #seo927 in South Korea<br/>● 2019.10.29. 08:55 [captured on CCTV] In-building cctv #64: passed through #Gate302 using ID card at #ptnp64 in South Korea<br/>● 2019.10.29. 09:03 [captured on CCTV] Arrived at PTNP office#404. Encountered NL7211. dB in office increased.<br/>● 2019.10.29. 09:13 [computer work] Logged in computer, loginNumber#20190412'
}, null, false, 'all', false)
edf_TF0022.encrypt();

let txt_admin_guide = new File('Admin Readme', 'txt', 552, '2019/01/20 12:49pm', '1. To move file(s): select file(s) -> ‘Copy’ or ‘Cut’ -> ‘Paste’<br/><br/>2. ‘Rename’ tab on explorer: can change file’s name and format<br/><br/>3. ‘Hidden items’ tab on explorer: can reveal hidden files<br/><br/>4. Deleted .app, .plg files can be recovered from Network > BackUp folder.<br/><br/>5. To run files in Network folder, files should be copied to desktop environment.', null, false, 'all', false)

let dir_applications_admin = new Folder('Applications', [app_inspector, app_e_mailr, app_browser, app_reader, 
                                                   plg_inspector_config, plg_firewall, plg_compress, plg_email_cleaner], 
                                  null, false, 'all', false);
dir_applications_admin.protect();
let dir_download_admin = new Folder('Downloads', [], null, false, 'all', false);
dir_download_admin.protect()
let dir_networkdrive_admin = new Folder('Network Drive', [img_logo], null, false, 'all', false);
dir_networkdrive_admin.disable_drag();
dir_networkdrive_admin.protect();
let dir_documents_admin = new Folder('Documents', [dir_networkdrive_admin, edf_SZ4035], null, false, 'all', false);
dir_documents_admin.protect();
edf_SZ4035.protect();
let dir_desktop_admin = new Folder('Desktop', [lnk_computer, lnk_network, lnk_e_mailr, lnk_browser, lnk_inspector, lnk_reader, lnk_bin, txt_admin_guide], null, false, 'all', false);
dir_desktop_admin.protect();

let dir_C_admin = new Folder('C', [dir_applications_admin, dir_download_admin, dir_documents_admin, dir_desktop_admin], null, false, 'all', false);
dir_C_admin.protect();
dir_C_admin.lock_copy();

let dir_backup_admin = new Folder('BackUp', [
  app_inspector.duplicate(), app_e_mailr.duplicate(), app_browser.duplicate(), app_reader.duplicate(), 
  plg_inspector_config.duplicate(), plg_firewall.duplicate(), plg_compress.duplicate(), plg_email_cleaner.duplicate()], 
  null, false, 'all', false);
dir_backup_admin.disable_file_running();
dir_backup_admin.disable_drag();
dir_backup_admin.protect();
dir_backup_admin.protect_child();
dir_backup_admin.lock_copy();
let dir_v13d_admin = new Folder('Drive', [edf_TLUC814, edf_BR7993, edf_UY5774, edf_MJ2727, edf_KG3245, edf_GP7732, edf_TF0022], null, false, 'all', false);
dir_v13d_admin.encrypt_self('Vision');
dir_v13d_admin.disable_file_running();
dir_v13d_admin.disable_drag();
dir_v13d_admin.protect();
dir_v13d_admin.lock_copy();
dir_v13d_admin.protect_child();

let dir_network_admin = new Folder('Network', [dir_backup_admin, dir_v13d_admin], null, false, 'all', false);
lnk_network.content.to_go = dir_network_admin;
dir_network_admin.disable_file_running();
dir_network_admin.protect();
dir_network_admin.lock_copy();
dir_network_admin.protect_child();

let dir_computer_admin = new Folder('My Computer', [dir_C_admin, dir_network_admin], null, false, 'all', false);
dir_computer_admin.protect();
dir_computer_admin.lock_copy();
dir_computer_admin.show_in_tree();

//worker
let app_inspector_w = new File('inspector', 'app', 8128000, '2019/1/20 9:21 PM', 'inspector', null, false, 'all', false);
app_inspector_w.set_icon('./image/inspector/inspector_icon.svg');
let app_e_mailr_w = new File('mail', 'app', 6550000, '2019/1/20 9:21 PM', 'mail', null, false, 'all', false);
app_e_mailr_w.set_icon('./image/notif/notifs_mail.svg');
let app_browser_w = new File('browser', 'app', 14290000, '2019/1/20 9:21 PM', 'browser', null, false, 'all', false);
app_browser_w.set_icon('./image/desktop/desktop_browser.svg');
let app_reader_w = new File('reader', 'app', 10800000, '2019/1/20 9:21 PM', 'reader', null, false, 'all', false);
app_reader_w.set_icon('./image/desktop/desktop_viewer.svg');

let plg_firewall_w = new File('vaccine', 'plg', 6630000, '2019/1/20 9:21 PM', {app: 'browser', fun: 'browser_set_firewall'}, null, false, 'all', false);
// let plg_passiveZ_w = new File('PassiveZ_Conotroller', 'plg', 8600000, '2019/1/20 9:21 PM', {app: 'browser', fun: 'browser_set_passivez'}, null, false, 'all', false);
let plg_compress_w = new File('compressor', 'plg', 3140000, '2019/1/20 9:21 PM', {app: 'explorer', fun: 'explorer_enable_compress'}, null, false, 'all', false);
let plg_email_cleaner_w = new File('mail_cleaner', 'plg', 3140000, '2019/1/20 9:21 PM', {app: 'explorer', fun: 'explorer_enable_compress'}, null, false, 'all', false);


let lnk_computer_w  = new File('My Computer', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'explorer'}, null, false, 'all', false);
lnk_computer_w.set_icon('./image/desktop/desktop_computer.svg');
lnk_computer_w.protect();
let lnk_e_mailr_w  = new File('Mail', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'mail'}, null, false, 'all', false);
lnk_e_mailr_w.set_icon('./image/notif/notifs_mail.svg');
let lnk_browser_w  = new File('Internet', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'browser'}, null, false, 'all', false);
lnk_browser_w.set_icon('./image/desktop/desktop_browser.svg');
let lnk_inspector_w  = new File('EDF Inspector', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'inspector'}, null, false, 'all', false);
lnk_inspector_w.set_icon('./image/inspector/inspector_icon.svg');
let lnk_reader_w  = new File('File Viewer', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'reader'}, null, false, 'all', false);
lnk_reader_w.set_icon('./image/desktop/desktop_viewer.svg');

let txt_worker_guide = new File('Worker ReadMe', 'txt', 394, '2019/1/20 9:21 PM', '1. Tasks in the company are carried out by mail.<br/><br/>2. To attach a file to a mail, drag and drop the file onto the “Attach files” in the mail.<br/><br/>3. You can check out various notifications in the notification center on the bottom right.<br/><br/>4. Intranet is open to all staff, but external web search is not available on current account.', null, false, 'all', false);

let dir_applications_worker = new Folder('Applications', [app_inspector_w, app_e_mailr_w, app_browser_w, app_reader_w, 
                                                         plg_firewall_w, plg_compress_w, plg_email_cleaner_w], 
                                  null, false, 'all', false)
dir_applications_worker.protect();
let dir_download_worker = new Folder('Downloads', [], null, false, 'all', false);
dir_download_worker.protect();
let dir_desktop_worker = new Folder('Desktop', [lnk_computer_w, lnk_e_mailr_w, lnk_browser_w, lnk_inspector_w, lnk_reader_w, txt_worker_guide], null, false, 'all', false);
dir_desktop_worker.protect();

let dir_C_worker = new Folder('C', [dir_applications_worker, dir_download_worker, dir_desktop_worker], null, false, 'all', false);
dir_C_worker.protect();
dir_C_worker.lock_copy();

let dir_computer_worker = new Folder('My Computer', [dir_C_worker], null, false, 'all', false);
dir_computer_worker.protect();
dir_computer_worker.lock_copy();

dir_computer_worker.show_in_tree();

//email_attachment
let edf_mail_pre_1_1 = new File('YH7673', 'edf', 320, '2019/10/29 8:55 AM', {
original: 'YH7673',
name: 'Ratio Scott',
gender: 'Male',
nationality: 'U.S.',
birthday: '1985-06-27',
phone: '010-4009-2716',
desc: '● 2019.10.28. xx:xx [SNS Activity] U.S. #illi648246) logged into Wonderwall by id:zappyboi@poodle.com - verified account<br/>● 2019.10.28. xx:xx [SNS Activity] showed interest in post#122 of friend on Wonderwall id:andreassasin96@poodle.com<br/>● 2019.10.28. xx:xx [SNS Activity] uploaded 3692 word length post on Wonderwall about the policy and technology of the company -  entered keywords: anxiety, suspicious, surveillance etc. <br/>● 2019.10.28. xx:xx [SNS Activity] Logged out after series of activities including refreshing the page 276 times within 40 minutes - requesting for increase in surveillance level of the current subject'
}, null, false, 'all', false);
edf_mail_pre_1_1.encrypt();

let edf_mail_pre_1_2 = new File('DQ5461', 'edf', 320, '2019/10/29 8:55 AM', {
original: 'DQ5461',
name: 'Custodia Santiago Himenes',
gender: 'Male',
nationality: 'Chile',
birthday: '1991-07-09',
phone: '010-0893-1561',
desc: '● 2019.10.27. oo:oo [Built-in camera] Detected camera action at Chile #eastisl16<br/>● 2019.10.27. oo:oo [Built-in camera] Detected camera action at Chile #eastisl16<br/>● 2019.10.27. oo:oo [Built-in camera] Started voice recording - Verified vocabulary for the statue of the location through real-time analysis<br/>● 2019.10.27. oo:oo [Built-in camera] Voice recording continued - Detected unknown theoretical word combination not included in company database after content analysis - updated DB after analysis<br/>● 2019.10.27. oo:oo [Built-in camera] Voice recording ended - Requesting for modification of surveillance level of current subject'
}, null, false, 'all', false);
edf_mail_pre_1_2.encrypt();

let edf_mail_pre_1_3 = new File('JC5411', 'edf', 320, '2019/10/29 8:55 AM', {
original: 'JC5411',
name: 'Poena Edwards',
gender: 'Female',
nationality: 'Canada',
birthday: '1986-07-26',
phone: '010-4478-8907',
desc: '● 2019.10.28. nn:nn [captured on CCTV] Detected by cctv #487326 at Canada #vanq984 - identification confirmed<br/>● 2019.10.28. nn:nn [captured on CCTV] Quarrel with companion OV2012 - identification confirmed<br/>● 2019.10.28 nn:nn [captured on CCTV] Physical fight engaged<br/>● 2019.10.28 nn:nn [captured on CCTV] No biological response detected of OV2012 - Request for data correction about OV2012<br/>● 2019.10.28 nn:nn [GPS activated] search on maps application - search query: quiet, near, lake'
}, null, false, 'all', false);
edf_mail_pre_1_3.encrypt();