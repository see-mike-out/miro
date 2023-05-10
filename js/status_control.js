const todo_3_status = {
  keys: ['YH7673', 'DQ5461', 'JC5411'],
  files: {
    'YH7673': false,
    'DQ5461': false,
    'JC5411': false
  },
  mission_complete: false
}

let check_todo_3 = function(files, acc){
  //files refine
  if (acc == "lairotut@ptnp.com") {
    let ref_files = [];
    for(let i = 0; i < files.length; i++) {
      let f = files[i];
      if (f.extension == "zip" && f.check_original()) {
        ref_files.concat(f.content);
      } else if (f.extension == "edf" && f.check_original()) {
        ref_files.push(f);
      }
    }
    for (let j = 0; j < ref_files.length; j++) {
      let f = ref_files[j];
      if (f.extension == "edf" && f.check_original() && todo_3_status.keys.indexOf(f.name) >= 0 && f.inspected) {
        todo_3_status.files[f.name] = true;
      }
    }
  }
}

let get_todo_3_status = function() {
  let status = true;
  for (let i = 0; i < todo_3_status.keys.length; i++) {
    let k = todo_3_status.keys[i]
    if (!todo_3_status.files[k]) status = false;
  }
  return status;
}

let check_todo_3_complete = function() {
  todo_3_status.mission_complete = true;
}

let get_todo_3_complete = function() {
  return todo_3_status.mission_complete;
}

const phase2_status = {
  decrypt: false,
  read: false,
  sent: false,
  remove: false
};

let check_phase2_ending = function(files, acc){
  if (acc == "MIKE@poodle-mail.com") {
    let right_file = files.filter(function(el) { return el.name == "BR7993"; })[0];
    if (right_file.check_original_power() && right_file.extension == "edf" && !right_file.encrypted) {
      phase2_status.sent = true;
    }
  }
}

let check_phase3_ending_half = function(f) {
  if (f.check_original_power() && f.name == "BR7993" && f.extension == "edf" && !f.encrypted) {
    phase2_status.decrypt = true;
    phase2_status.read = true;
  }
}

let check_phase3_ending = function(f) {
  if (f.check_original_power() && f.name == "BR7993" && f.extension == "edf" && !f.encrypted && f.removed) {
    phase2_status.remove = true;
  }
}

let get_phase2_status = function() {
  return phase2_status.sent;
}

let get_phase3_status_half = function(f) {
  return phase2_status.decrypt && phase2_status.read;
}

let get_phase3_status = function() {
  return phase2_status.decrypt && phase2_status.read && phase2_status.remove && !phase2_status.sent;
}

const app_registry = {
  "vpn": false
}

let set_app_registry = function(ap) {
  app_registry[ap] = true;
}

let get_app_registry = function(ap) {
  return app_registry[ap];
}
