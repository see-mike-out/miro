var app = new Vue({
  el: '#game',
  delimiters: ["<%","%>"],
  data: {
    //os
    is_image_loaded_complete: false,
    is_capslock_on: false,
    is_fullscreen: false,
    is_logged: false,
    is_admin: false,
    is_sleeping: false,
    is_about_shutdown: false,
    lnk_has_no_app: false,
    stage: 'welcome_1',
    is_admin_first: true,
    ending: "",
    admin_login_count: 0,
    about_to_ending4: false,
    visibility: {
      os_admin_password: false,
      os_admin_password_wrong: false,
      start_menu: false,
      notification_center: false,
      app_mail: false,
      app_explorer: false,
      app_inspector: false,
      app_browser: false,
      app_reader: false,
      app_bin: false
    },
    promotion_mail: {
      min5: false,
      min8: false
    },
    os_time: '',
    os_time_checking: false,
    //user_accounts
    os_user_accounts: [['Admin', 'TF0022'], ['Worker','']],
    os_user_accounts_current: [['Admin', 'TF0022'], ['Worker','']],
    //task_management
    user_tasks: [
      {code: 'download', name: '이메일 프로그램(메일)을 통해 오늘자 검사 자료 다운로드'},
      {code: 'inspect', name: 'edf 검사기 프로그램을 이용해 해당 자료 검사'},
      {code: 'send', name: '검사된 자료를 이메일로 보내기'},
      {code: 'sleep', name: '절전 모드로 전환'}],
    //desktop
    desktop_icons: [
      {image: "./image/desktop/desktop_bin.svg", name: "휴지통"},
      {image: "./image/filetypes/file_foler.svg", name: "내 폴더"}
    ],
    //notification center
    notifications: {
      'mail': {
        icon: "./image/notif/notifs_mail.svg",
        name: "메일",
        data: []
      },
      'download': {
        icon: "./image/notif/notifs_download.svg",
        name: "다운로드",
        data: []
      },
      'inspector': {
        name: "EDF 검사기",
        icon: "./image/inspector/inspector_inspect.svg",
        data: []
      }
    },
    notification_app_order: ['mail', 'download', 'inspector'],
    notification_total_count: 0,
    //notification banner
    instant_notification: [],
    //fs
    root_dir: dir_computer_worker,
    desktop_folder: dir_desktop_worker,
    download_dir: dir_download_worker,
    C_dir: dir_C_worker,
    apps_dir: dir_applications_worker,
    //app_data
    app_running: {
      app_mail: false,
      app_explorer: false,
      app_inspector: false,
      app_browser: false,
      app_reader: false,
      app_bin: false
    },
    app_active: {
      app_mail: false,
      app_explorer: false,
      app_inspector: false,
      app_browser: false,
      app_reader: false,
      app_bin: false
    },
    app_position: {
      recent: null,
      mail: [200, 90],
      explorer: [220, 105],
      inspector: [240, 120],
      browser: [260, 135],
      reader: [280, 150],
      bin: [300, 165]
    },
    installed_apps: ['mail', 'explorer', 'inspector', 'browser', 'reader', 'bin'],
    app_mail: {
      mail_contacts: [
        {name: "GM", date: "", account: "GovernmentManager@****.gov"}, //0
        {name: "쑨 이저우", date: "2019/10/28 8:57 PM", account: "lairotut@ptnp.com"}, //1
        {name: "아카토시 오오츠노미야", date: "2019/06/28 9:27 AM", account: "ofa_afo@ptnp.com"}, //2
        {name: "나타 리온", date: "2019/10/25 3:22 PM", account: "gabby_natar@ptnp.com"}, //3
        {name: "임용덕", date: "2019/01/14 3:33 PM", account: "dragonvirtue@ptnp.com"}, //4
        {name: "루디 산체스", date: "2019/09/04 1:38 PM", account: "ays@ptnp.com"}, //5
        {name: "티에리 마르티네즈", date: "2019/10/28 5:57 PM", account: "thierry_securite@ptnp.com"}, //6
        {name: "프레드 마틴", date: "2019/05/31 5:14 PM", account: "anniversaire@ptnp.com"} //7
      ],
      my_account: 'tom0824@ptnp.com',
      mail_data: {
        "GM": [],
        "쑨 이저우": [mail_pre_1],
        "나타 리온": [mail_pre_3],
        "아카토시 오오츠노미야": [mail_pre_4],
        "티에리 마르티네즈": [mail_pre_2],
        "임용덕": [mail_pre_5],
        "루디 산체스": [mail_pre_6],
        "프레드 마틴": [mail_pre_7_3, mail_pre_7_4, mail_pre_7_5],
      },
      mail_data_current: null,
      write_mode: false,
      mail_write_to: null,
      mail_write_data: {
        attachment: [],
        to: "",
        title: "",
        desc: ""
      },
      detail_mode: false,
      detail_mail: null
    },
    hints: {
      mode: false,
      new_count: 0,
      availability: {
        "GM_worker_1": "unused",
        "GM_worker_2": "unused",
        "GM_worker_3": "unused",
        "GM_admin_1": "unused",
        "GM_admin_2": "unused",
        "GM_admin_3": "unused",
        "GM_admin_4": "unused",
        "GM_admin_5": "unused",
        "GM_admin_6": "unused",
      },
      hint_map: {
        "GM_worker_1": mail_GM_worker_1,
        "GM_worker_2": mail_GM_worker_2,
        "GM_worker_3": mail_GM_worker_3,
        "GM_admin_1": mail_GM_admin_1,
        "GM_admin_2": mail_GM_admin_2,
        "GM_admin_3": mail_GM_admin_3,
        "GM_admin_4": mail_GM_admin_4,
        "GM_admin_5": mail_GM_admin_5,
        "GM_admin_6": mail_GM_admin_6,
      },
    },
    app_explorer: {
      history: [],
      pivot: 0,
      current_tree: null,
      current_selected: [],
      multiselect: false,
      show_ext: false,
      show_hidden: false,
      clipboard: [],
      clipboard_cut: [],
      rename_mode: false,
      rename_dup: false,
      wrong_filetype: false,
      cant_open: false,
      ask_password: false,
      wrong_password: false,
      secure_move_to: null,
      file_running: false,
      is_copiable: true,
      is_removable: true
    },
    app_inspector: {
      mode: 'default',
      wrong_permission: false,
      wrong_filetype: false,
      inspection_data: [],
      inspected_data: [],
      available: true,
      decrypt_enabled: false,
      allow_insert: true,
      development_data: [
        {name:'J F', version:'v1.00a', is_encrypted: false},
        {name:'J F', version:'v1.00b', is_encrypted: false},
        {name:'J F', version:'v2.00a', is_encrypted: false},
        {name:'N L', version:'v2.01a', is_encrypted: false},
        {name:'CSG', version:'v2.02a', is_encrypted: false},
        {name:'KYL', version:'v2.03a', is_encrypted: false},
        {name:'J F', version:'v2.03b', is_encrypted: false},
        {name:'N L', version:'v3.00a', is_encrypted: false}
      ],
      setting_wrong: [],
      while_inspecting: false,
    },
    app_browser: {
      access_code: 'o8dZuW1UQBFKMhwtEU0BN72nn9HzAwsJ',
      in_iframe: '',
      current_tab_pivot: 0,
      tabs: [
        {
          current_pivot: 0,
          permission: 'Anyone',
          name: 'Intranet',
          is_history_move: false,
          history: [
            {title: '인트라넷', address_deep: './web/intranet.html'},
          ]
        },
        {
          current_pivot: 0,
          permission: 'Admin',
          name: 'Search',
          is_history_move: false,
          history: [
            {title: '검색', address_deep: './web/search.html'},
          ]
        },
      ],
      wrong_permission: false
    },
    app_reader: {
      file: null,
      locked_file: null,
      ask_password: false,
      wrong_password: false
    },
    app_bin: {
      files: [],
      current_selected: []
    }
  },
  methods: {
    image_loaded: function() {
      this.is_image_loaded_complete = true;
    },
    set_fullscreen: function () {
      launch_fullscreen(document.body); //fullscreen.js
      this.is_fullscreen = true;
      // axios.post('/api/init');
    },
    on_exit_fullscreen: function () {
      this.os_before_shutdown();
      this.is_fullscreen = false;
      this.update_log('exit_fullscreen');
    },
    set_stage: function(_s) {
      this.stage = _s;
      this.update_log('reached_the_stage: '+_s);
    },
    is_stage: function(_s) {
      return this.stage == _s;
    },
    set_ending: function(_e) {
      this.ending = _e;
      this.update_log('reached_ending: '+_e);
    },
    //os
    os_sleep: function() {
      this.update_log('os_sleep');
      this.is_sleeping = true;
      for(let i = 0; i < this.installed_apps.length; i++) {
        let n = this.installed_apps[i];
        this.minimize_app(n);
      }
      let mof = this.os_wakeup;
      setTimeout(function(){
        $("#sleeping_screen").on('mouseover', mof);
      }, 1000);
      // this.welcome_revert_account_selection();
    },
    os_wakeup: function() {
      this.update_log('os_wakeup');
      this.is_sleeping = false;
      $("#sleeping_screen").off('mouseover')
      let dsf = this.activate_app;
      let def = this.change_position_app;
      let self = this;
      this.installed_apps.forEach(function(a){
        $( function() {
          $( ".app_frame#app_"+a ).draggable({handle: "div.app_title_bar", start: function() {
            self.app_inspector.allow_insert = false;
          }, stop: function() { 
            def(a);
            setTimeout(function() {
              self.app_inspector.allow_insert = true;  
            }, 30);
          } });
        } );
      });
      miro_sound_play("opening");
      this.set_taskbar_position();
    },
    set_taskbar_position: function() {
      $(function(){
        $("#taskbar").css('left', '');
        $("#taskbar").css('top', '');
        $('#taskbar').css('bottom',0)
        $('#taskbar').css('left', 0);
      });
    },
    os_logout: function() {
      this.update_log('os_logout_out_of: ' + this.os_user_accounts_current[0][0]);
      this.is_logged = false;
      this.os_before_shutdown();
      this.welcome_revert_account_selection();
    },
    set_welcome_screen_position: function() {
      $(function(){
        $("#welcome_screen").css('left', '');
        $("#welcome_screen").css('top', '');
        $('#welcome_screen').css('top',0)
        $('#welcome_screen').css('left', 0);
      });
    },
    os_logon: function() {
      this.update_log('os_login_to: ' + this.os_user_accounts_current[0][0]);
      this.is_logged = true;
      if (this.os_user_accounts_current[0][0] == "Worker") {
        this.root_dir = dir_computer_worker;
        this.desktop_folder = dir_desktop_worker;
        this.download_dir = dir_download_worker;
        this.C_dir = dir_C_worker;
        this.apps_dir = dir_applications_worker;
        this.is_admin = false;
        let self = this;
        setTimeout(function() {
          miro_sound_play("opening");
        }, 3000);
        setTimeout(function(){
          if(self.stage == 'welcome_1') {
            self.mail_receive(mail_first_mail_1);
            self.stage = "first_mail_sent"
          }
        },9000);
        if (self.admin_login_count == 0) {
          setTimeout(function(){
            self.mail_receive(mail_GM_start);
          },1000);
          self.hint_enable("GM_worker_1");
          setTimeout(function(){
            if( self.stage == 'first_mail_sent' ) {
              self.mail_receive(mail_missed_todo_3);
              self.stage = "missed_todo_3"
            }
          },180000);
          // setTimeout(function(){
          //   if(self.os_user_accounts_current[0][0] == "Worker" && self.admin_login_count == 0 && !self.promotion_mail.min5 ) {
          //     self.mail_receive(mail_promote_min5);
          //     self.promotion_mail.min5 = true;
          //   }
          // },300000);
          // setTimeout(function(){
          //   if(self.os_user_accounts_current[0][0] == "Worker" && self.admin_login_count == 0 && !self.promotion_mail.min8 ) {
          //     self.mail_receive(mail_promote_min8);
          //     self.promotion_mail.min8 = true;
          //   }
          // },480000);
        }
        $('#logon_loading').attr('data-shown', 'true');
        setTimeout(function() {
          $('#logon_loading').attr('data-shown', 'false');
        }, 3000);
      } else if (this.os_user_accounts_current[0][0] == "Admin") {
        this.root_dir = dir_computer_admin;
        this.desktop_folder = dir_desktop_admin;
        this.download_dir = dir_download_admin;
        this.C_dir = dir_C_admin;
        this.apps_dir = dir_applications_admin;
        this.is_admin = true;
        this.admin_login_count++;
        if (this.is_admin_first) this.set_stage('admin_on');
        $('#logon_loading').attr('data-shown', 'true');
        $('#logon_loading').attr('data-animated', 'true');
        setTimeout(function() {
          $('#logon_loading').attr('data-shown', 'false');
          $('#logon_loading').attr('data-animated', 'false');
        }, 3000);
        setTimeout(function() {
          miro_sound_play("opening");
        }, 3000);
        this.hint_disable("GM_worker_1");
        this.hint_disable("GM_worker_2");
        this.hint_disable("GM_worker_3");
        this.hint_check("GM_admin_1");
        
        let self = this;
        setTimeout(function(){
          if(self.stage == 'admin_on') {
            self.mail_receive(mail_admin_on_1);
            self.mail_receive(mail_admin_on_2);
            self.stage = "admin_first_mail_sent";
            self.is_admin_first = false;
          }
        },7000)
      }
      this.app_explorer.history = [this.root_dir];
      this.app_explorer.current_tree = this.app_explorer.history[0].get_treemap();
      this.os_set_time();
      this.organize_notification();
      this.set_taskbar_position();
    },
    os_before_shutdown: function() {
      this.is_logged = false;
      for(let i = 0; i < this.installed_apps.length; i++) {
        let n = this.installed_apps[i];
        this.close_app(n);
      }
      let vis = this.visibility;
      let vis_terms = Object.keys(vis);
      for (let i = 0; i < vis_terms.length; i++) {
        this.visibility[vis_terms[i]] = false;
      }
      
      $( function() {
        $("#notification_banner_area").removeProp('left');
        $("#notification_banner_area").removeProp('top');
        $("#notification_banner_area").css('left', '');
        $("#notification_banner_area").css('top', 45);
        $("#notification_banner_area").css('right', 42);
      });
      this.set_welcome_screen_position();
    },
    os_shutdown: function() {
      this.update_log('os_about_shutdown_from: ' + this.os_user_accounts_current[0][0]);
      this.is_about_shutdown = true;
    },
    os_force_shutdown: function() {
      this.update_log('os_shutdown_from: ' + this.os_user_accounts_current[0][0]);
      this.is_about_shutdown = false;
      this.os_before_shutdown();
      this.welcome_revert_account_selection();
      this.is_fullscreen = false;
      detach_fullscreen();
      document.location.reload(true);
    },
    os_set_time: function() {
      if (!this.os_time_checking) {
        let self = this;
        self.os_time = ThisTime.get_now_format('t');
        setInterval(function(){
          self.os_time = ThisTime.get_now_format('t');
        }, 60000);
        this.os_time_checking = true;
      }
    },
    go_download: function() {
      let dl_dir = this.download_dir;
      let move = this.explorer_move_to;
      let act = this.activate_app;
      let open = this.open_app;
      let runnings = this.app_running;
      setTimeout(function() { 
        if (! runnings.app_explorer ) {
          open('explorer');
        }
        act('explorer');
        move(dl_dir);
      }, 150);
    },
    os_has_app: function(fn) {
      return this.apps_dir.has_file_by_name(fn)
    },
    //on welcome stage
    welcome_ask_password: function(ac) {
      this.os_user_accounts_current = [ac];
      if (ac[1].length > 0) {
        this.visibility.os_admin_password = true;
        miro_sound_play("wrong");
      } else {
        this.os_logon();
        this.is_sleeping = false;
      }
    },
    welcome_revert_account_selection: function() {
      this.visibility.os_admin_password = false;
      this.os_user_accounts_current = this.os_user_accounts;
    },
    welcome_check_password: function(event) {
      let ps = $('input#welcome_password').val().toString();
      if (this.os_user_accounts_current[0][1] == ps) {
        let accname = this.os_user_accounts_current[0][0];
        this.visibility.os_admin_password_wrong = false;
        this.os_logon();
        this.is_sleeping = false;
      } else {
        this.visibility.os_admin_password_wrong = true;
        miro_sound_play("wrong");
        this.is_capslock_on = event.getModifierState("CapsLock");
      }
    },
    welcome_check_password_by_enter: function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        this.welcome_check_password(event)
      }
    },
    //desktop
    arrange_desktop_icon: function() {
      $('#icon_grid .icon').each(function(){
        let x = parseInt($(this).attr('data-x')[0]);
        let y = parseInt($(this).attr('data-y'));
        $(this).css('top', 10 + y*126).css('left', 10 + x*126);
      })
    },
    remove_task_item: function(c) {
      let item = this.user_tasks.filter(function(el) {return el.code == c})[0];
      let idx = this.user_tasks.indexOf(item);
      this.user_tasks.splice(idx, 1);
    },
    //notification
    close_notification: function() {
      this.visibility.notification_center = false;
    },
    open_notification: function() {
      this.visibility.notification_center = true;
      this.organize_notification();
    },
    toggle_notification: function() {
      this.visibility.notification_center = !this.visibility.notification_center;
      this.update_log('toggle_notification_from: ' + !this.visibility.notification_center + ' _to: ' + this.visibility.notification_center);
      this.organize_notification();
    },
    fire_notification: function(ap, data) {
      if ( ap == "download" || this.os_has_app(ap + '.app') ) {
        this.update_log('fire_notification_app: ' + ap + ' _data:' + data.title + "$" + data.desc);
        if (ap == "mail" && this.os_has_app('mail.app')) {
          data['icon'] = './image/taskbar/taskbar_changeuser.svg';
        }
        this.notifications[ap].data.splice(0,0,data);
        this.organize_notification();
        this.fire_instant_notification(ap, data.title);
      } else {
        this.update_log('fire_notification_app_blocked: ' + ap + ' _data:' + data.title + "$" + data.desc);
      }
    },
    fire_instant_notification: function(ap, ttl) {
      if ( ap == "download" || this.os_has_app(ap + '.app') ) {
        this.update_log('fire_notification_app: ' + ap + ' _data:' + ttl);
        let ic = this.notifications[ap].icon;
        let term = {icon: ic, title: ttl};
        this.instant_notification.splice(0, 0, term);
        let ins = this.instant_notification;
        setTimeout(function() {
          let idx = ins.indexOf(term);
          ins.splice(idx, 1)
        }, 3000);
        
        $( function() {
          $("#notification_banner_area").removeProp('left');
          $("#notification_banner_area").removeProp('top');
          $("#notification_banner_area").css('left', '');
          $("#notification_banner_area").css('top', 45);
          $("#notification_banner_area").css('right', 42);
        });
      } else {
        this.update_log('fire_notification_app_blocked: ' + ap + ' _data:' + ttl);
      }
    },
    clear_app_notification: function(ap) {
      this.update_log('clear_notification_app: '+ap);
      this.notifications[ap].data = [];
      this.organize_notification();
    },
    notification_app_action: function(ap, idx, param) {
      if (ap == "mail") {
        let cnt = this.app_mail.mail_contacts.filter(function(e) { return e.name == param; }).length;
        if (cnt > 0 ) {
          this.open_app(ap);
          this.mail_select(param);
        }
      } else if (ap == "download") {
        this.go_download()
      }
      this.notifications[ap].data.splice(idx, 1);
      this.organize_notification()
    },
    organize_notification: function(){
      let temp_ord = {}, n = 0;
      for (let i = 0; i < this.notification_app_order.length; i++ ) {
        let key = this.notification_app_order[i];
        this.notifications[key].data.sort(function(a, b) { return a.desc <  b.desc});
        if (this.notifications[key].data.length > 0) {
          temp_ord[key] = this.notifications[key].data[0].desc;  
        } else {
          temp_ord[key] = 'XXXXXX';
        }
        n += this.notifications[key].data.length;
      }
      this.notification_app_order.sort(function(a, b) { return temp_ord[a] < temp_ord[b]});
      this.notification_total_count = n;
    },
    //start_menu
    close_start: function() {
      this.visibility.start_menu = false;
    },
    open_start: function() {
      this.visibility.start_menu = true;
    },
    toggle_start: function() {
      this.visibility.start_menu = !this.visibility.start_menu;
      this.update_log('toggle_notification_from: ' + !this.visibility.start_menu + ' _to: ' + this.visibility.start_menu);
    },
    //app control
    open_app: function(a) {
      this.update_log('open_app: '+a);
      if ('app_'+a in this.visibility) {
        this.visibility['app_'+a] = true;
        $('#app_'+a+'.app_frame').css('left', this.app_position[a][0]);
        $('#app_'+a+'.app_frame').css('top', this.app_position[a][1]);
      }
      
      this.activate_app(a);
      let dsf = this.activate_app;
      let def = this.change_position_app;
      let self = this;
      $( function() {
        dsf(a);
        $( ".app_frame#app_"+a ).draggable({handle: "div.app_title_bar", start: function(e, u) {
          self.app_inspector.allow_insert = false;
          dsf(a);
        }, stop: function() { 
          def(a);
          setTimeout(function() {
            self.app_inspector.allow_insert = true;  
          }, 30);
        } });
      } );
      
      if (a == "mail") {
        this.mail_sort();
        let con = this.app_mail.mail_contacts;
        if (!this.app_running['app_mail']) this.mail_select(con[0].name);
      }
      
      if (a == "inspector") {
        let self = this;
        $( function() {
          $( '.inspector_file_list' ).droppable({
            drop: function() { self.inspector_add_items(); }
          });
        } );
      }
      
      if (a == "browser") {
        this.browser_select_tab(0)
      }
      
      if (a == "reader") {
        let self = this;
        $( function() {
          $( '.no_file, .wrong_file' ).droppable({
            drop: function() { self.reader_open_file_drag(); }
          });
        } );
      }
      
      if (a == "bin") {
        this.bin_collect_removed_files();
      }
      
      if ('app_'+a in this.app_running) {
        this.app_running['app_'+a] = true;
      }
    },
    toggle_app: function(a) {
      if ('app_'+a in this.visibility) {
        if(this.visibility['app_'+a] && this.app_active['app_'+a]) this.minimize_app(a);
        else if (this.visibility['app_'+a] && !this.app_active['app_'+a]) this.activate_app(a);
        else this.open_app(a);
      }
    },
    close_app: function(a) {
      this.update_log('close_app: '+a);
      if ('app_'+a in this.visibility) {
        this.visibility['app_'+a] = false;
        this.app_active['app_'+a] = false;
      }
      
      if ('app_'+a in this.app_running) {
        this.app_running['app_'+a] = false;
      }
      
      if (a == "explorer") {
        this.root_dir.reset_tree_visibility();
        this.app_explorer.history = [this.root_dir];
        this.app_explorer.pivot = 0;
        this.app_explorer.current_tree = this.root_dir.get_treemap();
        this.app_explorer.current_selected = [];
      }
      
      if (a == "mail") {
        this.mail_discard_detail();
        this.app_mail.mail_write_data.to = "";
        this.app_mail.mail_write_data.title = "";
        this.app_mail.mail_write_data.desc = "";
        this.app_mail.mail_write_data.attachment = [];
      }
      
      if (a == "inspector") {
        this.app_inspector.inspected_data = [];
        this.app_inspector.mode = 'default';
      }
      
      if (a == "reader") {
        this.app_reader.file = null;
      }
    },
    minimize_app: function(a) {
      this.update_log('minimize_app: '+a);
      if ('app_'+a in this.visibility) {
        this.visibility['app_'+a] = false;
        this.app_active['app_'+a] = false;
      }
      if (a == "explorer") {
        this.app_explorer.current_selected = [];
      }
      if (a == "bin") {
        this.app_bin.current_selected = [];
      }
    },
    activate_app: function(a) {
      this.update_log('activate_app: '+a);
      let activity = this.app_active;
      this.installed_apps.forEach(function(e){
        activity['app_'+e] = false;
      })
      this.app_active['app_'+a] = true;
      let pos = this.app_position;
      $(function() {
        $('#app_'+a+'.app_frame').css('left', 0);
        $('#app_'+a+'.app_frame').css('top', 0);
        $('#app_'+a+'.app_frame').css('left', pos[a][0]);
        $('#app_'+a+'.app_frame').css('top', pos[a][1]);
        
        $('.app_frame').removeClass('app_active');
        $('.app_frame').addClass('app_deact');
        $('#app_'+a+'.app_frame').removeClass('app_active');
        $('#app_'+a+'.app_frame').addClass('app_active');
      })
      if(a == "explorer") {
        this.explorer_draggable();
      }
    },
    alert_cancel: function(ap, flag) {
      this.update_log('alert_app: '+ap+' _flag: '+flag);
      if (ap.length > 0) {
        this['app_'+ap][flag] = false;  
        if (ap == "explorer" && flag == "ask_password") {
          this.app_explorer.wrong_password = true;
        }
      } else {
        this[flag] = false;
      }
    },
    change_position_app: function(a) {
      this.update_log('app_move: '+a);
      
      let left = $('#app_'+a+'.app_frame').css('left');
      let top = $('#app_'+a+'.app_frame').css('top');
      this.app_position[a] = [left, top];
    },
    //plugins
    has_plugin: function(pn) {
      return this.apps_dir.has_file_by_name(pn);
    },
    //desktop 
    desktop_click: function(idx, event) {
      this.update_log('desktop_click: '+idx);
      let item = $("#icon_grid .icon[data-id='" + idx.toString() + "']");
      if(event.shiftKey) {
        if (idx >= 0 && item) {
          if (item.attr('data-clicked') == "false") {
            item.attr('data-clicked', 'true');
          } else {
            item.attr('data-clicked', 'false');
          }
        }
      } else {
        if (idx >= 0 && item) {
          $("#icon_grid .icon").attr('data-clicked', 'false');
          item.attr('data-clicked', 'true');
        }
      }
    },
    desktop_click_off: function(event) {
      this.update_log('desktop_click_off');
      if (!event.target.classList.contains('icon') && event.target.tagName != 'IMG' && event.target.tagName != 'SPAN') {
        $("#icon_grid .icon").attr('data-clicked', 'false');
      }
    },
    //mail
    mail_select: function(n) {
      this.update_log('mail_select: '+n);
      this.app_mail.mail_data_current = n;
      this.mail_discard_write();
      this.mail_discard_detail();
      if (n == "GM") {
        this.mail_hint_mode();
      } else {
        this.mail_hint_mode_cancel();
      }
    },
    mail_sort: function() {
      this.app_mail.mail_contacts.sort(function(a, b) { return b.date.localeCompare(a.date); });
      let GM = this.app_mail.mail_contacts.filter(function(e) { return e.name == "GM"} )[0];
      let GM_i = this.app_mail.mail_contacts.indexOf(GM);
      this.app_mail.mail_contacts.splice(GM_i, 1);
      this.app_mail.mail_contacts.unshift(GM);
    },
    mail_current_out_address: function() {
      let curr = this.app_mail.mail_data_current;
      return this.app_mail.mail_contacts.filter(function(e) {return e.name == curr})[0].account;
    },
    mail_new_count_update: function() {
      let md = this.app_mail.mail_data;
      this.app_mail.mail_contacts.forEach(function(el) {
        el.new_count = md[el.name].reduce(function(a,b) {
          if (b.io == "in") return a+b.is_new;
          else return a+0;
        }, 0);
      })
    },
    mail_download_attachment: function (d) {
      this.update_log('mail_download_attachment: '+d.get_fullname());
      if (d.constructor.name == "File" && !( this.has_plugin('vaccine.plg') && d.extension == 'plg' )) {
        this.explorer_add_items(this.download_dir, d)
        this.fire_notification('download', {title: d.get_fullname()+' 다운로드 완료', desc: ThisTime.get_now_format('s')})
        this.go_download();
        miro_sound_play("okay");
      } else if ( this.has_plugin('vaccine.plg') && d.extension == 'plg' ) {
        this.fire_notification('download', { 
          title: '백신에 의한 다운로드 실패',
          desc: ThisTime.get_now_format('s')
        });
        miro_sound_play("wrong");
      }
    },
    mail_reply: function() {
      this.update_log('mail_reply: '+this.app_mail.mail_data_current);
      this.app_mail.mail_write_to = this.app_mail.mail_data_current;
      this.app_mail.write_mode = true;
      this.app_mail.mail_write_data.attachment = [];
      let self = this;
      $( function() {
        $( '.attachment.droppable' ).droppable({
          drop: function() { self.mail_add_attachment(); }
        });
      } );
    },
    mail_write: function() {
      this.update_log('mail_write');
      this.app_mail.mail_write_to = null;
      this.app_mail.mail_data_current = "";
      this.app_mail.write_mode = true;
      this.app_mail.mail_write_data.attachment = [];
      let self = this;
      $( function() {
        $( '.attachment.droppable' ).droppable({
          drop: function() { self.mail_add_attachment(); }
        });
      } );
    },
    mail_add_attachment: function() {
      let items = this.app_explorer.current_selected;
      for (let i = 0; i < items.length; i++) {
        if (attachment_check(items[i])) {
          this.app_mail.mail_write_data.attachment.push({file: items[i].duplicate(), original: items[i]});  
          this.update_log('mail_add_attachment_file: ' + items[i].get_fullname());
        }
      }
      
      this.activate_app('mail');
    },
    mail_send: function() {
      let to = $("#mail_write_to").val();
      let address_check = mail_address_check(to);
      this.update_log('mail_send: ' + to);
      if (address_check[0] && (
          ( address_check[2] == 'ptnp.com' && !this.has_plugin('VPN.plg') )
          || this.has_plugin('VPN.plg'))
        ) {
        $("#mail_write_to").attr('data-wrong', 'false')
        // error detection > further task
        let ttl = $("#mail_write_title").val();
        let bd = $("#mail_write_body").val();
        let attachment = [], attachment_size = this.app_mail.mail_write_data.attachment.length;
        for (let i = 0; i < attachment_size; i++) {
          let it = this.app_mail.mail_write_data.attachment[i]
          attachment.push(it.file);
          if (this.C_dir.has_file_by_name('email_cleaner.plg')){
            it.original.delete_self();
          }
        }
        
        this.bin_collect_removed_files();
        this.app_mail.mail_write_data.attachment = [];
        let dt = ThisTime.get_now_format("ls");
        
        let mail_item = {io: "out", date: dt, title: ttl, content: bd, attatch: attachment, is_new: false}
        let accs = this.app_mail.mail_contacts.filter(function(el) { return el.account == to; });
        let acc = null;
        if (accs.length == 0){
          acc = {name: to, date: dt, account: to}
          this.app_mail.mail_contacts.push(acc)
          this.app_mail.mail_data[acc.name] = [];
        } else {
          acc = accs[0];
          acc.date = dt;
        }
        this.app_mail.mail_data[acc.name].push(mail_item)
        
        check_phase2_ending(attachment, to);
        check_todo_3(attachment, acc.account);
        let self = this;
        let act = this.os_sleep;
        if (get_todo_3_status()) {
          this.set_stage("met_todo_3");
        }
        if (this.is_stage("met_todo_3") && !get_todo_3_complete()) {
          setTimeout(function(){
            self.mail_receive(mail_met_todo_3);
            self.set_ending("phase1");
            check_todo_3_complete()
          }, 2000);
        }
        
        if(get_phase2_status()) {
          self.set_ending("phase2");
          setTimeout(act, 3000);
        }
        
        this.mail_discard_write();
        this.mail_select(acc.name);
      } else {
        $("#mail_write_to").attr('data-wrong', 'true')
      }
    },
    mail_discard_write: function() {
      this.update_log('mail_write_cancel');
      this.app_mail.mail_write_to = null;
      this.app_mail.write_mode = false;
      
      //mail write data reset
      this.app_mail.mail_write_data.to = "";
      this.app_mail.mail_write_data.title = "";
      this.app_mail.mail_write_data.attachment = [];
      this.app_mail.mail_write_data.desc = "";
    },
    mail_detail_view: function(m) {
      this.update_log('mail_view: ' + m.title);
      this.app_mail.detail_mail = m;
      this.app_mail.detail_mode = true;
      m.is_new = false;
      this.mail_new_count_update();
    },
    mail_discard_detail: function() {
      this.update_log('mail_discard_detail');
      this.app_mail.detail_mail = null;
      this.app_mail.detail_mode = false;
    },
    mail_receive: function(m) {
      //m: sender (name, address), title, content, attatch
      let mail = {
        io: 'in', is_new: true,
        title: m.title, content: m.content, attatch: m.attatch,
        date: ThisTime.get_now_format('ls')
      };
      
      let accs = this.app_mail.mail_contacts.filter(function(el) { return el.account == m.sender.address; });
      this.update_log('mail_received: ' + mail.title);
      let acc = null;
      if (accs.length == 0){
        acc = {name: m.sender.name, date: ThisTime.get_now_format('ls'), account: m.sender.address}
        this.app_mail.mail_contacts.push(acc)
        this.app_mail.mail_data[acc.name] = [];
      } else {
        acc = accs[0];
        acc.date = ThisTime.get_now_format('ls');
      }

      this.app_mail.mail_data[acc.name].push(mail)
      miro_sound_play("new");
      
      this.fire_notification('mail', {title: m.sender.name, desc: ThisTime.get_now_format('s')})
      this.mail_new_count_update();
      this.mail_sort();
    },
    mail_save_temp: function() {
      this.app_mail.mail_write_data.to = $("#mail_write_to").val();
      this.app_mail.mail_write_data.title = $("#mail_write_title").val();
      this.app_mail.mail_write_data.desc = $("#mail_write_body").val();
    },
    //mail > hints
    mail_hint_mode: function() {
      this.hints.mode = true;
    },
    mail_hint_mode_cancel: function() {
      this.hints.mode = false;
    },
    hint_disable: function(i) {
      this.hints.availability[i] = "disabled";
    },
    hint_enable: function(i) {
      if ( this.hints.availability[i] == "unused") {
        this.hints.availability[i] = "available";
        let i_seq = i.split('_');
        let isn = parseInt(i_seq[2]);
        for (let j = 1; j < isn; j++) {
          this.hint_disable(i_seq[0] + "_" + i_seq[1] + "_" + j.toString());
        }
      }
    },
    hint_use: function(i) {
      this.hints.availability[i] = "given";
    },
    request_hint: function() {
      let self = this;
      let hint_keys = Object.keys(self.hints.availability);
      let avails = hint_keys.filter(function(e) { return self.hints.availability[e] == "available" });
      for (let i = 0; i < avails.length; i++) {
        let k = avails[i];
        self.mail_receive(self.hints.hint_map[k]);
        this.hint_disable(k);
        if (k == "GM_worker_1") {
          this.hint_enable("GM_worker_2");
        } else if (k == "GM_worker_2") {
          this.hint_enable("GM_worker_3");
        }
      }
    },
    get_available_hints_count: function() {
      let self = this;
      let hint_values = Object.values(self.hints.availability);
      return hint_values.filter(function(el) { return el == "available"}).length;
    },
    hint_check: function(d) { 
      if (d == "GM_admin_1") {
        if (this.apps_dir.has_file_by_name_org("vaccine.plg")) this.hint_enable("GM_admin_1");
        else this.hint_disable("GM_admin_1");
      } else if (d == "GM_admin_2") {
        if (this.apps_dir.has_file_by_name_org("VPN.plg")) {
          this.hint_enable("GM_admin_2");
        }
      } else if (d == "GM_admin_3") {
        if (this.app_inspector.setting_wrong.length > 0) {
          this.hint_enable("GM_admin_3");
        } else if (this.app_inspector.setting_wrong.length == 0) {
          this.hint_enable("GM_admin_4");
        }
      } else if (d == "GM_admin_5") {
        this.hint_enable("GM_admin_5");
      } else if (d == "GM_admin_6") {
        if (this.app_explorer.history[this.app_explorer.pivot] == dir_v13d_admin) this.hint_enable("GM_admin_6");
      } else if (d == "GM_admin_7") {
        if (this.C_dir.has_file_by_name_org("TLUC814.edf")) this.hint_disable("GM_admin_6");
      }
    },
    //explorer
    explorer_history_move: function(d) {
      if (d == "back") {
        this.app_explorer.pivot -= 1;
        if (this.app_explorer.pivot < 0) this.app_explorer.pivot = 0;
      } else if (d == "forward") {
        this.app_explorer.pivot += 1;
        if (this.app_explorer.pivot >= this.app_explorer.history.length) this.app_explorer.pivot = this.app_explorer.history.length - 1;
      } else if (d == "up") {
        let par = this.app_explorer.history[this.app_explorer.pivot].get_parent();
        if (par != null) {
          this.explorer_move_to(par);
        }
      }
      this.update_log('explorer_move_history: ' + d + ' _to: ' + this.app_explorer.history[this.app_explorer.pivot].get_fullname());
    },
    explorer_move_to: function(d) {
      if (d.encrypted) {
        this.app_explorer.ask_password = true;
        this.app_explorer.secure_move_to = d;
      } else {
        this._explorer_move_to(d)
      }
      this.update_log('explorer_move_to: ' + this.app_explorer.history[this.app_explorer.pivot].get_fullname());
    },
    explorer_move_to_secure: function() {
      let to_go = this.app_explorer.secure_move_to;
      let user_password = $('#explorer_folder_password').val();
      if (to_go.encryption_password == user_password) {
        this._explorer_move_to(to_go);
        this.app_explorer.ask_password = false;
        this.app_explorer.wrong_password = false;
      } else {
        this.app_explorer.wrong_password = true;
      }
      this.update_log('explorer_move_secure_to: ' + this.app_explorer.history[this.app_explorer.pivot].get_fullname() + " _with: " + user_password);
    },
    explorer_move_to_secure_by_enter: function() {
      event.preventDefault();
      if (event.keyCode === 13) {
        this.explorer_move_to_secure()
      }
    },
    _explorer_move_to: function(d) {
      this.app_explorer.history.splice(this.app_explorer.pivot + 1);
      this.app_explorer.history.push(d);
      this.app_explorer.pivot = this.app_explorer.history.length - 1;
      if (d.get_parent()) d.get_parent().show_in_tree();
      this.app_explorer.current_selected = [];
      this.explorer_draggable();
      this.app_explorer.file_running = d.enabled_file_running;
      this.hint_check("GM_admin_6");
    },
    explorer_open_folder: function(d) {
      this.explorer_move_to(d);
    },
    explorer_open_file: function(d) {
      if (d.check_original()) {
        if (d.extension == 'app') {
          let a = d.content;
          this.open_app(a);
        } else if (d.extension == 'edf') {
          this.reader_open_file(d);
          this.open_app('reader');
        } else if (d.extension == 'plg') {
          //add plugin
        } else if (d.extension == 'txt') {
          this.reader_open_file(d);
          this.open_app('reader');
        } else if (d.extension == 'jpg') {
          this.reader_open_file(d);
          this.open_app('reader');
        } else if (d.extension == 'lnk') {
          let t = d.content.type;
          if (t == 'app') {
            if (d.content.to_go == 'bin' || d.content.to_go == 'explorer' || this.os_has_app(d.content.to_go + '.app')) this.open_app(d.content.to_go)
            else this.lnk_has_no_app = true;
          }
          else if (t == 'folder') {
            this.open_app('explorer');
            this.explorer_move_to(d.content.to_go);
          }
        } else {
          this.app_explorer.cant_open = true;
        }
      } else {
        this.app_explorer.wrong_filetype = true;
      }
      this.update_log('open_file: ' + d.get_fullname());
    },
    explorer_draggable: function() {
      if (this.app_explorer.history[this.app_explorer.pivot].draggable) {
        let self = this;
        $( function() {
          $( ".explorer_drag_item" ).draggable({ revert: "invalid", helper: "clone", containment: "#game_content", start:function() {
            let name = $(this).attr('data-name');
            self.explorer_select_while_dragging(name)
          } });
        } );
      }
    },
    explorer_toggle_select_item: function(d, event) {
      if(event.shiftKey) {
        let idx = this.app_explorer.current_selected.indexOf(d);
        if (idx >= 0) {
          this.app_explorer.current_selected.splice(idx, 1);
          $('#explorer_'+d.name.trim_all()).attr('data-selected', false);
          this.update_log('select_file: ' + d.get_fullname());
        }
        else {
          this.app_explorer.current_selected.push(d);
          $('#explorer_'+d.name.trim_all()).attr('data-selected', true);
          this.update_log('select_file: ' + d.get_fullname());
        }
      } else {
        this.app_explorer.current_selected = [];
        $('#explorer_dir_list tbody tr').attr('data-selected', false);
        this.app_explorer.current_selected = [d];
        $('tr#explorer_'+d.name.trim_all()).attr('data-selected', 'true');
        this.update_log('select_file: ' + d.get_fullname());
      }
      let cp = false;
      let rm = false;
      this.app_explorer.current_selected.forEach(function(el){
        if (!el.copylock) cp = true;
        if (!el.protected) rm = true;
      });
      this.app_explorer.is_copiable = cp;
      this.app_explorer.is_removable = rm;
    },
    explorer_select_while_dragging: function(n) {
      let siblings = this.app_explorer.history[this.app_explorer.pivot].get_childs();
      let filtered = siblings.filter(function(el) { return el.name == n });
      let self = this;
      filtered.forEach(function(e) {
        self.explorer_toggle_select_item(e, event)
      });
    },
    explorer_deselect_all: function(event) {
      if (event.target.tagName != 'TBODY' && event.target.tagName != 'TR' && event.target.tagName != 'TD' 
          && !event.target.classList.contains('explorer_drag_item') && !event.target.classList.contains('explorer_nondrag_item')) {
        this.app_explorer.current_selected = [];
        $('#explorer_dir_list tbody tr').attr('data-selected', false);
      }
      this.update_log('deselect_all');
    },
    explorer_item_is_selected: function(d) {
      let idx = this.app_explorer.current_selected.indexOf(d);
      return idx >= 0;
    },
    explorer_toggle_view: function(t) {
      this.app_explorer['show_'+t] = !this.app_explorer['show_'+t];
      let self = this;
      $( function() {
        $( ".explorer_drag_item" ).draggable({ revert: "invalid", helper: "clone", containment: "#game_content", start:function() {
          let name = $(this).attr('data-name');
          self.explorer_select_while_dragging(name)
        } });
      } );
      this.update_log('toggle_view');
    },
    explorer_copy_items: function() {
      this.app_explorer.clipboard = [];
      let cps = [];
      this.app_explorer.current_selected.forEach(function(el) {
        if (!el.copylock) cps.push(el);
      });
      this.app_explorer.clipboard = cps;
      this.app_explorer.mod_cut = false;
      this.update_log('copy: ' + this.app_explorer.clipboard.reduce(function(a, b) { return (a + ', ' + b.get_fullname());}, ""));
    },
    explorer_cut_items: function() {
      this.app_explorer.clipboard = [];
      this.app_explorer.clipboard_cut = [];
      let cps = [];
      this.app_explorer.current_selected.forEach(function(el) {
        if (!el.copylock) cps.push(el);
      });
      this.app_explorer.clipboard = cps;
      this.app_explorer.clipboard_cut = cps;
      this.app_explorer.mod_cut = true;
      this.update_log('cut: ', this.app_explorer.clipboard.reduce(function(a, b) { return (a + ', ' + b.get_fullname());}, ""));
    },
    explorer_paste_items: function(d) {
      let cs = this.app_explorer.clipboard;
      this.update_log('paste: ' + this.app_explorer.clipboard.reduce(function(a, b) { return (a + ', ' + b.get_fullname());}, ""));
      for (let i= 0; i < cs.length; i++) {
        let dup = cs[i].duplicate();
        let flag = true;
        while (flag) {
          if (d.get_childs().filter(function(el) {return !el.removed && el.name == dup.name }).length) dup.name = dup.name + ' (copy)'
          else flag = false;
        }
        dup.set_parent(d);
        if (this.app_explorer.mod_cut) cs[i].perma_delete_self();
      }
      this.explorer_draggable();  
      if (!get_app_registry("vpn") && this.has_plugin('VPN.plg') && this.is_admin) {
        this.set_stage("vpn_installed");
        set_app_registry("vpn")
      }
      if (this.is_stage("vpn_installed")) {
        let self = this;
        setTimeout(function() {
          self.mail_receive(mail_after_vpn);
          self.stage = "instruct_decrypt"
        }, 2500);
      }
      this.hint_check("GM_admin_1");
      this.hint_check("GM_admin_7");
    },
    explorer_add_items: function(d, f) {
      this.update_log('add: ' + f.get_fullname() );
      let cs = [f];
      for (let i= 0; i < cs.length; i++) {
        let dup = cs[i].duplicate();
        let flag = true;
        while (flag) {
          if (d.get_childs().filter(function(el) {return !el.removed && el.name == dup.name }).length) dup.name = dup.name + ' (copy)'
          else flag = false;
        }
        dup.set_parent(d);
        if (this.app_explorer.mod_cut) cs[i].perma_delete_self();
      }
      this.explorer_draggable();
      this.hint_check("GM_admin_1");
      this.hint_check("GM_admin_7");
    },
    explorer_compress: function() {
      //file name count
      let exp = this.app_explorer;
      let curr_childs = exp.history[exp.pivot].get_childs();
      let curr_child_zip = curr_childs.filter(function(e) { return e.extension == 'zip'});
      let name = '';
      if (curr_child_zip.length > 0) {
        let basic_zip_count = [];
        for (let i = 0; i < curr_child_zip.length; i++) {
          if (curr_child_zip[i].name == 'Archive') {
            basic_zip_count.push(0);
          }
          else if(curr_child_zip[i].name.match(/Archive\s\([0-9]+\)/g)) {
            basic_zip_count.push(parseInt(curr_child_zip[i].name.substring(9)))
          }
        }
        let new_count = Math.max(...basic_zip_count) + 1;
        name = 'Archive ('+new_count.toString()+')'
      }
      else {
        name = 'Archive'
      }
      
      //compression
      let content = [];
      let to_copy = this.app_explorer.current_selected;
      this.update_log('compress: ' + to_copy.reduce(function(a, b) { return (a + ', ' + b.get_fullname());}, "") + " _to: " + name );
      for (let i = 0; i < to_copy.length; i++) {
        content.push(to_copy[i].duplicate());
      }
      let size = content.reduce(function(acc,cur) {return acc + cur.get_size();}, 0) * 0.95;
      let par = this.app_explorer.history[this.app_explorer.pivot];
      //create file
      
      let zip = new File(name, 'zip', size, ThisTime.get_now_format('s'), content, par, false, 'all', false);
      par.add_child(zip);
      
    },
    explorer_extract: function() {
      //file name count
      let exp = this.app_explorer;
      let to_extract = exp.current_selected[0];
      
      let curr_childs = exp.history[exp.pivot].get_childs();
      let curr_child_fold = curr_childs.filter(function(e) { return e.constructor.name == 'Folder'});
      let name = to_extract.name+'_extracted';
      
      let this_childs = to_extract.content;
      let this_par = exp.history[exp.pivot];
      let extr = new Folder(name, this_childs, this_par, false, 'all', false);

      this_par.add_child(extr);
      this.app_explorer.current_tree = this.root_dir.get_treemap();
      
      if (!get_app_registry("vpn") && this.has_plugin('VPN.plg') && this.is_admin) {
        this.set_stage("vpn_installed");
        set_app_registry("vpn")
      }
      if (this.is_stage("vpn_installed")) {
        let self = this;
        setTimeout(function() {
          self.mail_receive(mail_after_vpn);
          self.stage = "instruct_decrypt"
        }, 2500);
      }
      
      this.update_log('extract: ' + this_childs.reduce(function(a, b) { return (a + ', ' + b.get_fullname());}, "") + " _to: " + this_par.get_fullname() );
      this.hint_check("GM_admin_1");
      this.hint_check("GM_admin_7");
    },
    explorer_name_changeable: function() {
      if (this.app_explorer.current_selected.length == 1) {
        if (this.app_explorer.current_selected[0].name_changeable) return true;
        else return false;
      } else return false;
    },
    explorer_rename: function() {
      this.app_explorer.rename_mode = true;
    },
    explorer_get_curr_name: function() {
      if (this.app_explorer.current_selected.length>0)
      return this.app_explorer.current_selected[0].get_fullname();
    },
    explorer_confirm_rename: function() {
      let el = this.app_explorer.current_selected[0];
      this.update_log("rename_from: " + el.get_fullname());
      let name = $("#explorer_name_to_change").val();
      let sep = name.split('.')
      let sep_ext = sep[sep.length-1];
      let siblings = this.app_explorer.history[this.app_explorer.pivot].get_childs();
      let is_dup = false;
      for (let i = 0; i < siblings.length; i++) {
        let is_dup1 = (siblings[i].get_fullname() == name ? true : false);
        let is_dup2 = (siblings[i].get_fullname() == name + '.' + sep_ext ? true : false);
        is_dup = (is_dup1 || is_dup2);
        if (is_dup) break;
      }
      if (name == el.get_fullname() || name + '.' + sep_ext == el.get_fullname()) is_dup = false;
      this.update_log("rename_to: " + name);
      if (!is_dup) {
        el.change_name(name)
        this.app_explorer.rename_mode = false;
        this.app_explorer.rename_dup = false;
      }
      else this.app_explorer.rename_dup = true;
      
    },
    explorer_cancel_rename: function() {
      this.update_log("cancel_rename");
      this.app_explorer.rename_mode = false;
    },
    explorer_remove: function() {
      let self = this;
      this.app_explorer.current_selected.forEach(function(el) {
        if (!el.protected) el.delete_self();
        check_phase3_ending(el);
        if (el.extension == 'app') {
          if ( !self.os_has_app(el.get_fullname()) ) {
            self.close_app(el.name)
          }
        }
      });
      this.update_log("remove: " + this.app_explorer.current_selected.reduce(function(a, b) { return (a + ', ' + b.get_fullname());}, "") );
      this.app_explorer.current_selected = [];
      this.bin_collect_removed_files();
      if (get_phase3_status()) {
        this.set_ending("phase3");
        let act = this.os_sleep;
        setTimeout(act, 3000);
      }
      this.hint_check("GM_admin_1");
      this.hint_check("GM_admin_7");
    },
    //inspector
    inspector_cancel_permission: function() {
      this.app_inspector.wrong_permission = false;
    },
    inspector_cancel_filetype: function() {
      this.app_inspector.wrong_filetype = false;
    },
    inspector_add_items: function() {
      let items = this.app_explorer.current_selected;
      if (this.app_inspector.allow_insert) {
        this.update_log("inspector_add_files: " + this.app_explorer.current_selected.reduce(function(a, b) { return (a + ', ' + b.get_fullname());}, "") );
        let wrong_filetype = 0;
        for (let i = 0; i < items.length; i++) {
          let same_items = this.app_inspector.inspection_data.filter(function(e) { return e.file == items[i] } )
          if (same_items.length == 0 && items[i].constructor.name == "File" ) {
            let ires = inspection_function(items[i]);
            if (ires == 'done') {
              this.app_inspector.inspection_data.push({file: items[i], result: 'wait'});
            } else if (ires == 'has_change') {
              this.app_inspector.inspection_data.push({file: items[i], result: 'wait_mod'});
            } else if (ires == 'fail') {
              this.app_inspector.inspection_data.push({file: items[i], result: 'wait_fail'});
            } else wrong_filetype += 1;
          }
        }
        this.activate_app('inspector');
        if (wrong_filetype) {
          this.app_inspector.wrong_filetype = true;
          miro_sound_play("wrong");
        }
      }
    },
    inspector_start: function() {
      this.update_log("inspector_start: " + this.app_inspector.inspection_data.reduce(function(a, b) { return (a + ', ' + b.file.get_fullname());}, "") );
      let self = this;
      let file_length = this.app_inspector.inspection_data.length - 1;
      this.app_inspector.inspection_data.forEach(function(e, i) {
        setTimeout(function() {
          // e.result = 'ongoing';
          if (e.file.password_locked) {
            e.ongoing = false;
            e.result = 'locked';
            let x = self.app_inspector.inspection_data.indexOf(e)
            self.app_inspector.inspection_data.splice(x,1);
            self.app_inspector.inspected_data.push(e);
          } else {
            self.app_inspector.available = false;
            e.ongoing = true;
            $('div.status_bar[data-order=' + i.toString() + ']').animate( { width: '100%' }, e.file.get_size() ); 
          }
        }, 75*i);
        setTimeout(function() {
          if (!e.file.password_locked) {
            let res = inspection_result_map[e.result];
            let was_decryption = false;
            
            if (self.app_inspector.decrypt_enabled && self.app_inspector.mode == "decrypt" && e.file.encrypted && !e.file.password_locked && e.file.extension == 'edf') {
              let r2 = e.file.decrypt();
              if (r2) res = 'done';
              else res = 'failed';
              was_decryption = true;
            }
            e.result = res;
            e.file.set_inspected();
            if (ending4.is) {
              ending4_replace(e.file);
            }
            let x = self.app_inspector.inspection_data.indexOf(e)
            self.app_inspector.inspection_data.splice(x,1);
            self.app_inspector.inspected_data.push(e);
            self.app_inspector.available = true;
            if (was_decryption){
              if (i == file_length) {
                miro_sound_play("okay");
              }
              self.fire_notification('inspector', {title: '파일 해독이 완료되었습니다.', desc: ThisTime.get_now_format('s')});
            } else if (e.result != 'locked') {
              if (i == file_length) {
                miro_sound_play("okay");
              }
              self.fire_notification('inspector', {title: '파일 검사가 완료되었습니다.', desc: ThisTime.get_now_format('s')});  
            }
          } else {
            e.result = "locked";
          }
        }, 75*i + ( e.file.get_size() > 1200 ? 1200 : e.file.get_size() ) );
      });
    },
    inspector_before_close: function() {
      if (this.app_inspector.inspection_data.length > 0 ) {
        this.app_inspector.while_inspecting = true;
      } 
    },
    __inspector_before_close: function() {
      if (this.app_inspector.inspection_data.length > 0 ) {
        this.app_inspector.while_inspecting = true;
      } else {
        this.close_app('inspector');
      }
    },
    inspector_flush: function() {
      this.update_log("inspector_flush: " + this.app_inspector.inspected_data.reduce(function(a, b) { return (a + ', ' + b.file.get_fullname());}, ""));
      this.app_inspector.inspected_data = [];
    },
    inspector_enable_decryption: function() {
      this.update_log("inspector_upgrade_tried");
      let dev = $("#inspector_setting_developer").val(),
          pro = $("#inspector_setting_project").val(),
          ver = $("#inspector_setting_version").val();
      if (dev == "제레미 푸코" && pro == "Social Network Privacy" && ver=="v2.03b") {
        miro_sound_play("okay");
        let devdata = this.app_inspector.development_data;
        for (let i = 0; i < devdata.length; i++) {
          if (devdata[i].is_encrypted && inspection_decrypt(devdata[i].name) == "제레미 푸코") {
            new_dt = {name: inspection_decrypt(devdata[i].name), version: inspection_decrypt(devdata[i].version), is_encrypted: false}
            this.app_inspector.development_data.splice(i, 1, new_dt);
          }
        }
        this.app_inspector.setting_wrong = [];
        if (!this.app_inspector.decrypt_enabled) this.set_stage("inspector_upgraded");
        this.app_inspector.decrypt_enabled = true;
      } else {
        miro_sound_play("wrong");
        check_ending4(dev, pro, ver);
        this.about_to_ending4 = ending4.is;
        if (!ending4.is)  {
          this.app_inspector.setting_wrong = [];
          if (dev != "제레미 푸코") this.app_inspector.setting_wrong.push("dev");
          if (pro != "Social Network Privacy") this.app_inspector.setting_wrong.push("pro");
          if (ver != "v2.03b") this.app_inspector.setting_wrong.push("ver");
        }
      }
      if (this.is_stage("inspector_upgraded")) {
        let self = this;
        setTimeout(function() {
          self.mail_receive(mail_inspector_upgraded)
          self.stage = "phase2_predone";
        }, 2000)
      }
      this.hint_check("GM_admin_3");
    },
    inspector_default_mode: function() {
      this.inspector_before_close();
      if (!this.app_inspector.while_inspecting) {
        if ( this.app_inspector.mode != "default" ) {
          this.app_inspector.inspected_data = [];
          this.app_inspector.inspection_data = [];
        }
        this.app_inspector.mode = "default";
        this.update_log("inspector_set_default");
        let self = this;
        $( function() {
          $( '.inspector_file_list' ).droppable({
            drop: function() { self.inspector_add_items(); }
          });
        } );
        
      }
    },
    inspector_decrypt_mode: function() {
      this.inspector_before_close();
      if (!this.app_inspector.while_inspecting) {
        if ( this.app_inspector.mode != "decrypt" ) {
          this.app_inspector.inspected_data = [];
          this.app_inspector.inspection_data = [];
        }
        this.app_inspector.mode = "decrypt";
        this.update_log("inspector_set_decrypt");
        let self = this;
        $( function() {
          $( '.inspector_file_list' ).droppable({
            drop: function() { self.inspector_add_items(); }
          });
        } );
      }
    },
    inspector_setting_mode: function() {
      this.inspector_before_close();
      if (!this.app_inspector.while_inspecting) {
        this.app_inspector.setting_wrong = [];
        this.app_inspector.inspected_data = [];
        this.app_inspector.inspection_data = [];
        this.app_inspector.mode = "setting";
        this.hint_check("GM_admin_2");
        this.update_log("inspector_set_setting");
      }
    },
    inspector_admin_mode: function() {
      this.inspector_before_close();
      if (!this.app_inspector.while_inspecting) {
        this.app_inspector.inspected_data = [];
        this.app_inspector.inspection_data = [];
        this.app_inspector.mode = "admin";
        this.update_log("inspector_set_admin");
      }
    },
    //browser
    browser_select_tab: function(i) {
      this.app_browser.current_tab_pivot = i;
      if (i == 1 && !this.has_plugin('VPN.plg')) {
        this.app_browser.wrong_permission = true;
        this.update_log("browser_blocked_by_vpn");
        miro_sound_play("wrong");
      } else {
        this.app_browser.wrong_permission = false;
        this.update_log("browser_not_blocked");
        let t = this.app_browser.tabs[this.app_browser.current_tab_pivot];
        let address = t.history[t.current_pivot].address_deep;
        this.app_browser.in_iframe = address + "?ackey=" + this.app_browser.access_code;
        this.update_log("browser_select_tab: " + i);
      }
      
    },
    browser_history_move: function(dir){
      let tp = this.app_browser.current_tab_pivot;
      this.app_browser.tabs[tp].is_history_move = true;
      if (dir == "b") {
        this.app_browser.tabs[tp].current_pivot -= 1;
        if ( this.app_browser.tabs[tp].current_pivot < 0) this.app_browser.tabs[tp].current_pivot = 0;
      } else if (dir == "f") {
        this.app_browser.tabs[tp].current_pivot += 1;
        if ( this.app_browser.tabs[tp].current_pivot >= this.app_browser.tabs[tp].history.length) 
          this.app_browser.tabs[tp].current_pivot = this.app_browser.tabs[tp].history.length - 1;
      }
      this.update_log("browser_history_move: " + dir);
      this.browser_select_tab(tp);
    },
    browser_update_history: function() {
      let tp = this.app_browser.current_tab_pivot;
      let t_name = this.app_browser.tabs[tp].name;
      let hp = this.app_browser.tabs[tp].current_pivot;
      let left = this.app_browser.tabs[tp].history.length - hp
      let name = this.app_browser.tabs[tp].name;
      let self = this;
      let iframe_src = document.getElementById('browser_iframe').contentWindow.location.href.split('?')[0];
      if (!self.app_browser.tabs[tp].is_history_move) {
        let term = {title: t_name, address_deep: iframe_src};
        self.app_browser.tabs[tp].history.splice(hp+1, left);
        self.app_browser.tabs[tp].history.push(term);
        self.app_browser.tabs[tp].current_pivot += 1;
      }
      this.app_browser.tabs[tp].is_history_move = false;
    },
    //reader
    reader_open_file: function(d) {
      if(this.app_inspector.allow_insert) {
        this.update_log("reader_open_file: " + d.get_fullname());
        this.activate_app('reader');
        if (!d.password_locked) {
          this.app_reader.file = d;
          if (!get_phase3_status_half()) {
            check_phase3_ending_half(d);
            if (get_phase3_status_half()) {
              this.mail_receive(mail_after_br7993);
            } 
          }
        } else {
          this.activate_app('reader');
          this.app_reader.locked_file = d;
          this.app_reader.ask_password = true;
        }
        let self = this;
        $( function() {
          $( '.no_file, .wrong_file' ).droppable({
            drop: function() { self.reader_open_file_drag(); }
          });
        } );
      }
      if (this.app_reader.file.get_fullname_org() == "logo.jpg") {
        this.hint_check("GM_admin_5");
      }
    },
    reader_open_secure: function () {
      let to_go = this.app_reader.locked_file;
      let user_password = $('#reader_file_password').val();
      if (to_go.password == user_password) {
        this._reader_open_file_secure(to_go, user_password);
        this.app_reader.ask_password = false;
        this.app_reader.wrong_password = false;
      } else {
        this.app_reader.wrong_password = true;
      }
      this.update_log('reader_secure_open_to: ' + to_go.get_fullname() + " _with: " + user_password);
    },
    _reader_open_file_secure: function(d, p) {
      d.delock(p)
      this.activate_app('reader');
      this.app_reader.file = d;
      this.app_reader.locked_file = null;
      this.alert_cancel('reader', 'ask_password');
      check_phase3_ending_half(d);
    },
    reader_open_secure_by_enter: function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        this.reader_open_secure();
      }
    },
    reader_open_file_drag: function() {
      if(this.app_inspector.allow_insert) {
        let f = this.app_explorer.current_selected[0];
        this.update_log("reader_open_by_drag_file: " + f.get_fullname());
        this.reader_open_file(f);
      }
    },
    //bin
    bin_collect_removed_files: function() {
      this.app_bin.files = this.root_dir.get_removed_childs();
    },
    bin_empty: function() {
      this.update_log("bin_empty" + this.app_bin.files.reduce(function(a, b) { return (a + ', ' + b.get_fullname());}, ""));
      this.app_bin.files.forEach(function(e){
        e.perma_delete_self();
      });
      this.app_bin.current_selected = [];
      $('#bin_dir_list tbody tr').attr('data-selected', false);
      this.bin_collect_removed_files();
    },
    bin_perma_delete: function() {
      let selected = this.app_bin.current_selected;
      this.update_log("bin_empty" + selected.reduce(function(a, b) { return (a + ', ' + b.get_fullname());}, ""));
      selected.forEach(function(e){
        e.perma_delete_self();
      });
      this.app_bin.current_selected = [];
      $('#bin_dir_list tbody tr').attr('data-selected', false);
      this.bin_collect_removed_files();
    },
    bin_recover: function() {
      let selected = this.app_bin.current_selected;
      this.update_log("bin_recover" + selected.reduce(function(a, b) { return (a + ', ' + b.get_fullname());}, ""));
      selected.forEach(function(e){
        e.recover_self();
      });
      this.app_bin.current_selected = [];
      $('#bin_dir_list tbody tr').attr('data-selected', false);
      this.bin_collect_removed_files();
    },
    bin_toggle_select_item: function(d, event) {
      if(event.shiftKey) {
        let idx = this.app_bin.current_selected.indexOf(d);
        if (idx >= 0) {
          this.app_bin.current_selected.splice(idx, 1);
          $('#bin_'+d.name.trim_all()).attr('data-selected', false);
        }
        else {
          this.app_bin.current_selected.push(d);
          $('#bin_'+d.name.trim_all()).attr('data-selected', true);
        }
      } else {
        let idx = this.app_bin.current_selected.indexOf(d);
        this.app_bin.current_selected = [];
        $('#bin_dir_list tbody tr').attr('data-selected', false);
        this.app_bin.current_selected = [d];
        $('tr#bin_'+d.name.trim_all()).attr('data-selected', 'true');
      }
      this.update_log("bin_select_toggle: " + d.get_fullname());
    },
    bin_deselect_all: function(event) {
      if (event.target.tagName != 'TBODY' && event.target.tagName != 'TR' && event.target.tagName != 'TD' && !event.target.classList.contains('explorer_drag_item')) {
        this.app_bin.current_selected = [];
        $('#bin_dir_list tbody tr').attr('data-selected', false);
      }
      this.update_log("bin_deselect_all");
    },
    //ending4
    see_ending4: function() {
      if(ending4.is) {
        this.set_ending("phase4");
        let act = this.os_sleep;
        setTimeout(act, 3000);
      }
    },
    //logging
    update_log: function(dt) {
      // axios.post('/api/save', {data: dt});
    }
  }
})
