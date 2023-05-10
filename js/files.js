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

let lnk_computer  = new File('내 컴퓨터', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'explorer'}, null, false, 'all', false);
lnk_computer.set_icon('./image/desktop/desktop_computer.svg');
lnk_computer.protect();
let lnk_network  = new File('네트워크', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'folder', to_go: null}, null, false, 'all', false);
lnk_network.set_icon('./image/desktop/desktop_network.svg');
lnk_network.protect();
let lnk_e_mailr  = new File('메일', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'mail'}, null, false, 'all', false);
lnk_e_mailr.set_icon('./image/notif/notifs_mail.svg');
let lnk_browser  = new File('인터넷', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'browser'}, null, false, 'all', false);
lnk_browser.set_icon('./image/desktop/desktop_browser.svg');
let lnk_inspector  = new File('EDF 검사기', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'inspector'}, null, false, 'all', false);
lnk_inspector.set_icon('./image/inspector/inspector_icon.svg');
let lnk_reader  = new File('리더기', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'reader'}, null, false, 'all', false);
lnk_reader.set_icon('./image/desktop/desktop_viewer.svg');
let lnk_bin  = new File('휴지통', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'bin'}, null, false, 'all', false);
lnk_bin.set_icon('./image/desktop/desktop_bin.svg');
lnk_bin.protect();

let img_logo = new File('logo', 'jpg', 0, '2019/1/20 9:21 PM', './image/companylogo.jpg', null, false, 'all', false);
img_logo.protect();
img_logo.hide();

let edf_ver = new File('test', 'edf', 12125, '2019/1/24 03:22 AM', {
name: '아무개',
gender: '알 수 없음',
nationality: '미상',
birthday: '198X-01-2X',
phone: '010-2233-1251',
desc: '현재 개발버전 v2.023b를 들고 도주하였음'
}, null, false, 'all', false);
edf_ver.encrypt();

let edf_TLUC814 = new File('TLUC814', 'edf', 340, '2019/09/06 11:41 PM', {
name: '푸스 가일',
gender: '남',
nationality: '미국',
birthday: '1966-06-13',
phone: '010-2014-7542',
desc: '● 2019.09.06. xx:xx [사내 컴퓨터 작업] 출처 불명의 확인 불가능한 프로그램 가동 - 사내 보안 경보 발령 <br/>● 2019.09.06. xx:xx [사내 컴퓨터 작업] ■■ 디렉토리에 EDF 파일 1개를 생성 후 확장자 변경 <br/>● 2019.09.06. xx:xx [사내 컴퓨터 작업] ■■ 디렉토리의 파일 1개 Documents 폴더로 이동 <br/>● 2019.09.06. xx:xx [사내 컴퓨터 작업] 알 수 없는 프로세스로 Dcouments 폴더 변조 <br/>● 2019.09.06. xx:xx [사내 컴퓨터 작업] 사내 네트워크에 접속 <br/>● 2019.09.06. xx:xx <보안 경보 : Level Zeta> 알 수 없는 프로세스로 네트워크에 수정 내역 발생 - 파일 2개 추가됨 <br/>● 2019.09.06. xx:xx [사내 컴퓨터 작업] 출처 불명의 확인 불가능한 프로그램 종료 <br/>● 2019.09.06. xx:xx [CCTV 포착] 사내 cctv#42에 출현 - 본인 확인 <br/>● 2019.09.06. xx:xx [CCTV 포착] 사내 cctv#31에 출현 - 본인 확인, 경로 분석 결과 빠른 속도로 건물 외부로 향함 <br/>● 2019.09.06. xx:xx <보안 경보 : Level Beta> 상황 정보를 윤리부에 전달, 목표 인원에 대한 Action 44 : Termin 발령'
}, null, false, 'all', false);
edf_TLUC814.encrypt();

let edf_BR7993 = new File('BR7993', 'edf', 870, '2019/09/06 2:28 PM', {name: '제레미 푸코',
gender: '남',
nationality: '프랑스',
birthday: '1945-10-15',
phone: '010-2154-7818',
desc:'● 1994.02.06. xx:xx [내장카메라 촬영] 안구 신호 입력 건수 287회 성공. 정확도 99.98%<br/>// 정부에서 가져온 안구 트래킹 기능을 성공적으로 재현하는데 성공했다.<br/>// 이를 정부가 했듯 전세계로 연동하는 것은 시간 문제다.<br/>// 내가 총괄했던 프로젝트인데, 내가 백도어 하나 못만들어 놓았다고 생각하는걸까.<br/><br/>● 1994.08.11. xx:xx [CCTV 포착] cctv#1에서 판별 프로세스 시작 - FM5791 본인 확인<br/>// 정부의 시도는 좋았다. 모든 사람들의 행위와 생각을 관찰할 수 있는 전후무후한 시스템.<br/>// 하지만 그들은 그걸 권력이라는 야만적인 목적의 수단으로 사용한 것이 문제였다.<br/><br/>● 1997.10.09. xx:xx [CCTV 포착] cctv#1에서 FM5791의 생체 리듬 분석 - 알고리즘 동기화 79%<br/>// 가장 객관적인 저장 방식이라고 하면 무엇일까. 인간이 관여하는 방식은 어디선가 실수가 필연적으로 발생하는 법이다.<br/>// 나는 이제 이 시스템을 완전히 인공지능이 전달받아 프로세싱하도록 설계했다. 이 과정에서 인간이 손댈 수 있는 영역은 없다.<br/>// 심지어 나마저도. 마지막 단계가 되면 이 주석들마저도 필요 없어질 것이다.<br/><br/>● 1998.01.02. xx:xx [캘린더 작성] 법인 설립 신청<br/>// 이 정보 수집의 방식을 세계적으로 퍼뜨릴 필요가 있다.<br/>// 사람들은 자유를 원하는 만큼 역설적으로 안전 또한 갈구한다. 그리고 나는 둘 모두를 만족시켜 줄 것이다.<br/>// 이제 이 기술을 세상에 퍼트릴 모체가 될 기업의 탄생도 코앞이다.<br/>// 모든 것은 계획대로 흘러가고 있다.<br/><br/>● 2000.6.10. xx:xx [내장카메라 촬영] 안구 신호 실시간 인코딩 진행 실험<br/>// 이젠 멍청한 정부가 생각해보지 않았던 기능을 추가할 생각이다. 파일의 단순한 저장은 일차원적이다.<br/>// 소중한 정보를 안전하게 보관할 생각을 게을리하다니 낭비이자 모욕이나 다름없다.<br/>// 그래서 수 년 간의 연구를 통해 새로운 인코딩 방식을 개발해내었다. 명칭은 EDF.<br/>// 이 암호화 방식은 외부에서 조금이라도 잘못된 접근이 발생할 경우 저장된 데이터 자체를 소멸시켜버린다.<br/><br/>● 2005.09.22. xx:xx [CCTV 포착] 사내 cctv #1 ..  #5 촬영 중 - 프로그램 개발 작업 몰두<br/>// 마지막 단계다. EDF로 암호화한 파일은 열람에 있어 특정 프로그램을 통하지 않을 경우 스스로 소멸하게 만들었다.<br/>// 그리고 내가 만든 이 검사 프로그램을 통해야만 자료를 파기하지 않고 암호화 성공 여부와 대조 확인을 할 수 있다.<br/>// 여기까지는 모두가 사용할 수 있다. 하지만 실제 원본 정보를 열람하는 것. 이 기능은 나와 내 뜻을 공유하는 일부만이 사용할 수 있을 것이다.<br/><br/>● 2006.02.28. xx:xx [내장카메라 촬영] FM5791의 셀프 촬영 기록 - 대상의 엔돌핀 수치 평균 이상<br/>// 진정 전지전능한 자는 간섭하지 않는다. 신이 간섭하는 적을 본 적이 있는가?<br/>// 아니다. 그는 아무것도 하지 않는다. 다만 존재할 뿐. 그리고 그의 존재에 사람들은 스스로 힘을 얻고 진보해나간다.<br/>// 신이 하면 되는 일은 그저 관찰하기만 하면 된다. 그리고 이 것이 바로 내가 하려는 일이다.<br/>// 인간 스스로의 가능성, 나는 그 장엄한 과정을 관찰하는 신이 될 것이다.<br/>// 그러기 위해서 남은 단계는 이제 단 한가지 - 내가 만든 알을 까고 나오는 것.<br/><br/>● 2006.03.01. 00:00 <시스템 프로토콜 00 : Abraxas > FM5791으로 등록된 모든 추후 데이터에 대해 소거 알고리즘 적용<br/><br/>------------------------------------<br/><br/>● <특수 기록> - P.G.<br/>하, 드디어 찾아냈다 이놈.<br/>네 악행의 증거를 네 피조물에 영원히 각인시켜주지.<br/>비록 나를 막을 수는 있어도 네가 만든 괴물 속에 숨겨둔 진실도 막을 수 있을까?<br/>엿이나 먹어라 푸코.'
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
name: '빌리 에드워즈',
gender: '남',
nationality: '미국',
birthday: '1994-10-13',
phone: '010-5932-4534',
desc: '● 2019.10.29. xx:xx [전자 결제] 대한민국 #seo91341 매장에서 상품번호 #048911, #187232를 49,800원에 구매 <br/>● 2019.10.29. xx:xx [전자 결제] 대한민국 #seo913 정류장에서 #5513 버스 탑승 <br/>● 2019.10.29. xx:xx [인터넷 활동] 대한민국 #seo914001에서 Tweetch에 id:billylove@poodle.com로 로그인 - 본인 확인  <br/>● 2019.10.29. xx:xx [인터넷 활동] Tweetch #cpt04991 영상 시청 - 키워드 입력 : fxxk, holy shxt, axshxle <br/>● 2019.10.29. xx:xx [전자 결제] 대한민국 #seo927 정류장에서 #5513 버스 하차'
}, null, false, 'all', false);
edf_UY5774.encrypt();

let edf_MJ2727 = new File('MJ2727', 'edf', 312, '2019/10/29 9:00 AM', {
name: '카밀라 산티아고 히메네즈',
gender: '여',
nationality: '과테말라',
birthday: '1991-02-21',
phone: '010-9734-9098',
desc: '● 2019.10.28. oo:oo [전화 통화] 대한민국 #seo927451에서 VF5650와 통화 시작 <br/>● 2019.10.28. oo:oo [전화 통화] 대한민국 #seo927452에서 VF5650와 통화 끝, 통화 시간 12:06 - 주로 언급한 단어 : 상사, 꼰대, 퇴사 <br/>● 2019.10.29. oo:oo [CCTV 포착] 대한민국 #seo927451 cctv#15에 출현, 본인확인, 가방에서 가로 20cm, 세로 25cm의 사각형 물체를 꺼냄. 세부 분석 결과, XQ1504의 사진으로 판명. <br/>● 2019.10.29. oo:oo [CCTV 포착] 폭력적 행위 발생. XQ1504의 사진을 갈기갈기 찢음.'
}, null, false, 'all', false);
edf_MJ2727.encrypt();

let edf_KG3245 = new File('KG3245', 'edf', 312, '2019/10/29 9:00 AM', {
name: '한 병권',
gender: '남',
nationality: '대한민국',
birthday: '1983-11-29',
phone: '010-3909-7175',
desc: '● 2019.10.28. nn:nn [인터넷 활동] 19.255.0.152에서 poodle 계정 생성, id:qudrnjs@poodle.com pw:55ehqkf! <br/>● 2019.10.28. nn:nn [인터넷 활동] 19.255.0.152에서 poodle에 접속, id:qudrnjs@poodle.com로 접속 - 본인확인 <br/>● 2019.10.29. nn:nn [인터넷 활동] poodle 이메일 작성, To id:zappyboi@poodle.com, 내용 - I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ I Love You♥ <br/>● 2019.10.29. nn:nn [인터넷 활동] 해당 인원의 주시도 레벨 조정 요청'
}, null, false, 'all', false);
edf_KG3245.encrypt();

let edf_GP7732 = new File('GP7732', 'edf', 197, '2019/10/29 9:00 AM', {
name: '블라디미르 스트로쿠스',
gender: '남',
nationality: '폴란드',
birthday: '1979-08-01',
phone: '010-7430-1283',
desc: '● 2019.10.28. oo:oo [지문 인식] 러시아 #Wlad7142에서 Device AC7741-O로부터 GP7732 생체정보 인증 요청 <br/>● 2019.10.28. oo:oo [지문 인식] 러시아 #Mos1130에서 은행 #1193로부터 데이터 확인  - 본인확인 완료 <br/>● 2019.10.29. oo:o [CCTV 포착] 러시아 #Wlad7142 cctv#142에 출현 - 본인 확인'
}, null, false, 'all', false);
edf_GP7732.encrypt();

let edf_TF0022 = new File('TF0022', 'edf', 276, '진행 중', {
  name: '톰 마렛',
  gender: '남',
  nationality: '미국',
  birthday: '1984-08-24',
  phone: '010-4007-7556',
  desc: '● 2019.10.29. 08:17 [알람 시스템] 대한민국 #seo1, 6.283185초 간 작동한 후, 강제 종료<br/><br/>● 2019.10.29. 08:21 [전자 결제] 대한민국 #seo8282 정류장에서 #8507 버스 탑승<br/><br/>● 2019.10.29. 08:52 [전자 결제] 대한민국대한민국 #seo927 정류장에서 #8507 버스 하차<br/><br/>● 2019.10.29. 08:55 [CCTV 포착] 사내 cctv #64 .. 대한민국 #ptnp64에서 사원증을 이용해 #Gate302 통과<br/><br/>● 2019.10.29. 09:03 [CCTV 포착] PTNP 사무실#404 도착. NL7211와 조우. 사무실 내 dB 상승.<br/><br/>● 2019.10.29. 09:13 [사내 컴퓨터 작업] 사내 컴퓨터에 접속, loginNumber#20190412'
}, null, false, 'all', false)
edf_TF0022.encrypt();

let txt_admin_guide = new File('Admin 계정 설명서', 'txt', 552, '2019/01/20 12:49pm', '1. 파일들을 이동하기 위해서는 ‘복사’ / ’잘라내기’ 후 ‘붙여넣기’를 해야합니다.<br/><br/>2. 폴더 기능 탭에서 ‘이름 바꾸기’를 통해 파일의 이름과 확장자명을 바꿀 수 있습니다.<br/><br/>3. 폴더 기능 탭에서 ‘숨김 파일 표시’를 통해 숨겨진 파일들을 볼 수 있습니다.<br/><br/>4. 지워진 .app, .plg 파일들은 회사 Network의 BackUp 폴더에서 다시 가져올 수 있습니다.<br/><br/>5. Network 폴더 내의 파일들은 직접 실행이 불가능합니다. 자신의 컴퓨터로 복사본을 옮겨와서 복사본을 실행해야 합니다.', null, false, 'all', false)

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


let lnk_computer_w  = new File('내 컴퓨터', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'explorer'}, null, false, 'all', false);
lnk_computer_w.set_icon('./image/desktop/desktop_computer.svg');
lnk_computer_w.protect();
let lnk_e_mailr_w  = new File('메일', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'mail'}, null, false, 'all', false);
lnk_e_mailr_w.set_icon('./image/notif/notifs_mail.svg');
let lnk_browser_w  = new File('인터넷', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'browser'}, null, false, 'all', false);
lnk_browser_w.set_icon('./image/desktop/desktop_browser.svg');
let lnk_inspector_w  = new File('EDF 검사기', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'inspector'}, null, false, 'all', false);
lnk_inspector_w.set_icon('./image/inspector/inspector_icon.svg');
let lnk_reader_w  = new File('리더기', 'lnk', 0, '2019/1/20 9:21 PM', {type: 'app', to_go: 'reader'}, null, false, 'all', false);
lnk_reader_w.set_icon('./image/desktop/desktop_viewer.svg');

let txt_worker_guide = new File('Worker 계정 설명서', 'txt', 394, '2019/1/20 9:21 PM', '1. 회사의 업무는 메일을 통해서 진행됩니다.<br/><br/>2. 메일에서 파일을 첨부하려면, 메일의 첨부파일 란에 파일을 드래그 앤 드롭하면 됩니다.<br/><br/>3. 우측 하단의 알림 센터에서 여러 가지 알림 내역을 확인할 수 있습니다.<br/><br/>4. 인트라넷은 사원 모두에게 열려있지만, 외부 검색은 현 계정에서는 진행할 수 없습니다.', null, false, 'all', false);

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
name: '라티오 스콧',
gender: '남',
nationality: '미국',
birthday: '1985-06-27',
phone: '010-4009-2716',
desc: '● 2019.10.28. xx:xx [SNS 활동] 미국 #illi648246에서 wonderwall에 id:zappyboi@poodle.com 로 접속 - 본인 확인 <br/>● 2019.10.28. xx:xx [SNS 활동] wonderwall의 친구 id:andreassasin96@poodle.com의 글#122에 관심 표시 <br/>● 2019.10.28. xx:xx [SNS 활동] wonderwall에 회사의 정책과 기술에 관련된  3692 글자의 글을 게시 - 입력 키워드: 불안, 의심, 감시 등 <br/>● 2019.10.29. xx:xx [SNS 활동] 40분 동안 276번의 새로고침 등의 활동을 한 후 로그 아웃 - 해당 인원의 주시도 레벨 조정 요청'
}, null, false, 'all', false);
edf_mail_pre_1_1.encrypt();

let edf_mail_pre_1_2 = new File('DQ5461', 'edf', 320, '2019/10/29 8:55 AM', {
original: 'DQ5461',
name: '쿠스토디아 산티아고 히메네즈',
gender: '남',
nationality: '칠레',
birthday: '1991-07-09',
phone: '010-0893-1561',
desc: '● 2019.10.27. oo:oo [내장카메라 촬영] 칠레 #eastisl16에서 카메라 작동 <br/>● 2019.10.27. oo:oo [내장카메라 촬영] 녹음 시작 - 실시간 임시 분석 결과 해당 지역의 석상과 이에 대한 어휘 확인 <br/>● 2019.10.27. oo:oo [내장카메라 촬영] 녹음 지속 - 내용 세부 분석 결과 회사 데이터베이스에 존재하지 않는 새로운 개념 어휘의 조합 발견 - 분석 후 데이터베이스 수정 반영 <br/>● 2019.10.27. oo:oo [내장카메라 촬영] 녹음 종료 - 해당 인원의 주시도 레벨 조정 요청'
}, null, false, 'all', false);
edf_mail_pre_1_2.encrypt();

let edf_mail_pre_1_3 = new File('JC5411', 'edf', 320, '2019/10/29 8:55 AM', {
original: 'JC5411',
name: '포에나 에드워즈',
gender: '여',
nationality: '캐나다',
birthday: '1986-07-26',
phone: '010-4478-8907',
desc: '● 2019.10.28. nn:nn [CCTV 포착] 캐나다 #vanq984에서 cctv #487326에 출현 - 본인 확인 <br/>● 2019.10.28. nn:nn [CCTV 포착] 동행인 OV2012 - 본인 확인 - 와 함께 언쟁 <br/>● 2019.10.28 nn:nn [CCTV 포착] 몸싸움 발생 <br/>● 2019.10.28 nn:nn [CCTV 포착] OV2012 생체 반응 없음 - OV2012 관련 데이터 수정 요청 <br/>● 2019.10.28 nn:nn [GPS 작동] 지도 앱에 검색 - 검색 키워드 : 한적한, 가까운, 호수'
}, null, false, 'all', false);
edf_mail_pre_1_3.encrypt();