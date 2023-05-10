let ext_map = {
  'edf': 'EDF File',
  'app': 'Application',
  'jpg': 'JPG File',
  'zip': 'ZIP Compressed File',
  'txt': 'TXT File',
  'plg': 'Plugin File',
  'gif': 'GIF File'
};

let icon_map = { //icon update needed
  'edf': './image/filetypes/file_edf.svg',
  'app': './image/taskbar/taskbar_bin.png',
  'jpg': './image/filetypes/file_document.svg',
  'zip': './image/filetypes/file_document.svg',
  'txt': './image/filetypes/file_document.svg',
  'plg': './image/filetypes/file_document.svg',
  'folder': './image/filetypes/file_folder.svg'
};

class Folder {
  constructor(name, subs, par, hidden, stage_cond, removed) {
    this.name = name;
    this.name_changeable = true;
    if (subs != null) {
      for (let i = 0; i < subs.length; i++) {
        subs[i].par = this;
      }
    }
    this.childs = subs;
    this.par = par;
    this.cond = stage_cond;
    this.removed = removed;
    this.removed_permanent = false;
    this.hidden = hidden;
    this.tree_visible = false;
    this.inspect_childs();
    this.encrypted = false;
    this.encryption_password = null;
    this.has_uniq_icon = false;
    this.icon = null;
    this.enabled_file_running = true;
    this.draggable = true;
    this.protected = false;
    this.protected_child = false;
    this.copylock = false;
  }
  disable_rename() {
    this.name_changeable = false;
  }
  change_name(n) {
    if (this.name_changeable) {
      this.name = n; 
      return true;
    } else {
      return false;
    }
  }
  disable_file_running() {
    this.enabled_file_running = false;
  }
  get_fullname() {
    return this.name;
  }
  add_child(o) {
    let self = this;
    this.childs.push(o);
    this.inspect_childs();
  }
  delete_self() {
    this.removed = true;
  }
  perma_delete_self() {
    this.removed = true;
    this.removed_permanent = true;
  }
  recover_self() {
    this.removed = false;
  }
  disable_drag() {
    this.draggable = false;
  }
  protect() {
    this.protected = true;
  }
  protect_child() {
    this.protected_child = true;
  }
  lock_copy() {
    this.copylock = true;
  }
  protect_child() {
    this.protected = true;
  }
  delete_child(n) {
    let d = this.childs.filter(function(el) { return el.name == n});
    d.remove_self();
  }
  encrypt_self(p) {
    this.encrypted = true;
    this.encryption_password = p;
  }
  inspect_childs() {
    let new_child = [];
    let self = this;
    for (let i = 0; i < this.childs.length; i++) {
      if (this.childs[i].constructor.name == "Folder" || this.childs[i].constructor.name == "File") {
        new_child.push(this.childs[i])
      }
    }
    this.childs = _.uniq(new_child);
  }
  get_childs() {
    let fd = [];
    let fl = [];
    for (let s in this.childs) {
      if (this.childs[s].constructor.name == "Folder" && !this.childs[s].removed) {
        fd.push(this.childs[s]);
      }
      else if (this.childs[s].constructor.name == "File" && !this.childs[s].removed) {
        fl.push(this.childs[s]);
      }
    }
    fd.sort(function(a, b) { if (a.name < b.name) return -1; else return 1;});
    fl.sort(function(a, b) { if (a.name < b.name) return -1; else return 1;});
    return fd.concat(fl);
  }
  has_subdir() {
    return this.childs.filter(function(el) { return el.constructor.name == "Folder"}).length > 0;
  }
  get_parent() {
    return this.par;
  }
  set_parent(d) {
    if (d.constructor.name == "Folder") {
      this.par = d;
      let self = this;
      d.add_child(self);
    }
  }
  get_icon(){
    if (this.has_uniq_icon) {
      return this.icon;
    } else {
      return icon_map.folder;
    }
  }
  set_icon(p){
    this.icon = p;
    this.has_uniq_icon = true;
  }
  check_original() {
    return true;
  }
  get_filetype() {
    return '-'
  }
  get_path_obj() {
    let res = [];
    let flag = true;
    let curr = this;
    while (flag) {
      res.push(curr);
      curr = curr.get_parent();
      if (curr == null) flag = false;
    }
    res.reverse();
    return res;
  }
  get_path() {
    let po = this.get_path_obj();
    for (let i = 0; i < po.length; i++) po[i] = po[i].name;
    return po.join('/').toString() + '/';
  }
  get_depth() {
    return this.get_path_obj().length;
  }
  get_treemap() {
    let tree = [];
    let root = this;
    tree.push(root);
    let subs = this.childs;
    if (subs.length) {
      for (let i = 0; i < subs.length; i++) {
        let c = subs[i]
        if (c.constructor.name == "Folder" && !c.removed) {
          let temp = c.get_treemap();
          tree = tree.concat(temp);
        }
      }
    }
    return tree;
  }
  get_removed_childs() {
    let tree = [];
    let subs = this.childs;
    if (subs.length) {
      for (let i = 0; i < subs.length; i++) {
        let c = subs[i]
        if (c.removed && !c.removed_permanent) {
          tree.push(c);
        }
        if (c.constructor.name == "Folder"){
          let temp = c.get_removed_childs();
          tree = tree.concat(temp);
        }
      }
    }
    return tree;
  }
  has_file(f) { //see if there is a file, d
    let subs = this.childs;
    if (subs.length) {
      for (let i = 0; i < subs.length; i++) {
        let c = subs[i]
        if (c.constructor.name == "File" && !c.removed) {
          console.log(c)
          console.log(f)
          if ( c == f && !f.removed ) return true;
        }
        if (c.constructor.name == "Folder" && !c.removed) {
          if  ( c.has_file(f) ) return true;
        }
      }
    }
    return false;
  }
  has_file_by_name(fn) { //see if there is a file of which name is fn
    let subs = this.childs;
    if (subs.length) {
      for (let i = 0; i < subs.length; i++) {
        let c = subs[i];
        if (c.constructor.name == "File" && !c.removed) {
          if ( c.get_fullname() == fn && !c.removed ) return true;
        }
        if (c.constructor.name == "Folder" && !c.removed) {
          if  ( c.has_file_by_name(fn) ) return true;
        }
      }
    }
    return false;
  }
  has_file_by_name_org(fn) { //see if there is a file of which name is fn
    let subs = this.childs;
    if (subs.length) {
      for (let i = 0; i < subs.length; i++) {
        let c = subs[i];
        if (c.constructor.name == "File" && !c.removed) {
          if ( c.get_fullname_org() == fn && !c.removed ) return true;
        }
        if (c.constructor.name == "Folder" && !c.removed) {
          if  ( c.has_file_by_name_org(fn) ) return true;
        }
      }
    }
    return false;
  }
  get_size() {
    let size = 0;
    for (let i = 0; i < this.childs.length; i++) {
      size += this.childs[i].get_size();
    }
    return size;
  }
  show_in_tree() {
    this.tree_visible = true;
  }
  hide_in_tree() {
    this.tree_visible = false;
  }
  toggle_in_tree() {
    this.tree_visible = !this.tree_visible;
  }
  is_tree_visible() {
    return this.tree_visible;
  }
  is_par_tree_visible() {
    if (this.par == null) {
      return true;
    } else {
      return this.get_parent().is_tree_visible();
    }
  }
  reset_tree_visibility() {
    this.tree_visible = false;
    let subs = this.childs;
    if (subs.length) {
      for (let i = 0; i < subs.length; i++) {
        let c = subs[i]
        if (c.constructor.name == "Folder") {
          c.reset_tree_visibility();
        }
      }
    }
  }
  duplicate() {
    let self = this;
    let dup = new Folder(self.name, [], null, self.hidden, self.cond, self.removed)
    let original_childs = this.childs;
    if (original_childs.length > 0) {
      for (let i = 0; i < original_childs.length; i++) {
        let child_dup = original_childs[i].duplicate()
        dup.add_child(child_dup);
        child_dup.set_parent(dup);
      }
    }
    dup.portected = this.protected;
    dup.copylock = this.copylock;
    dup.draggable = this.draggable;
    dup.removed_permanent = this.removed_permanent;
    dup.tree_visible = this.tree_visible;
    dup.encrypted = this.encrypted;
    dup.encryption_password = this.encryption_password;
    dup.enabled_file_running = this.enabled_file_running;
    dup.draggable = this.draggable;
    dup.protected = this.protected;
    dup.protected_child = this.protected_child;
    dup.copylock = this.copylock;
    if (this.has_uniq_icon) {
      dup.set_icon(self.icon)
    }
    return dup;
  }
}

class File {
  constructor(name, ext, size, mod_date, content, par, hidden, stage_cond, removed) {
    this.name = name;
    this.original_name = name;
    this.is_original = true;
    this.name_changeable = true;
    this.extension = ext;
    this.original_extension = ext;
    this.size = size,
    this.mod_date = mod_date;
    this.content = content;
    this.par = par;
    this.hidden = hidden;
    this.cond = stage_cond;
    this.removed = removed;
    this.removed_permanent = false;
    this.inspected = false;
    this.modified = false;
    this.encrypted = false;
    this.protected = false;
    this.password = "";
    this.password_locked = false;
    this.copylock = false;
  }
  disable_rename() {
    this.name_changeable = false;
  }
  change_name(n) {
    if (this.name_changeable) {
      let ns = n.split('.');
      let len = ns.length;
      if (len >= 2) {
        this.extension = ns[len-1];
        this.name = ns.slice(0,len-1).join('.');
      } else {
        this.name = ns[0];
      }
      if (this.extension == this.original_extension && this.name == this.original_name) this.is_original = false;
      return this.get_fullname();
    } else {
      return false
    }
  }
  change_extension(e) {
    this.extension = e;
    if (this.extension == this.original_extension && this.name == this.original_name) this.is_original = false;
  }
  get_fullname() {
    return this.name + '.' + this.extension;
  }
  get_fullname_org() {
    return this.original_name + '.' + this.original_extension;
  }
  delete_self() {
    this.removed = true;
  }
  perma_delete_self() {
    this.removed = true;
    this.removed_permanent = true;
  }
  protect() {
    this.protected = true;
  }
  lock_copy() {
    this.copylock = true;
  }
  recover_self() {
    this.removed = false;
  }
  get_parent() {
    return this.par;
  }
  set_parent(d) {
    if (d.constructor.name == "Folder") {
      this.par = d;
      let self = this;
      d.add_child(self);
    }
  }
  get_filetype(){
    if (ext_map[this.extension]) return ext_map[this.extension];
    else return 'Unkown File';
  }
  get_icon(){
    if (this.has_uniq_icon) {
      return this.icon;
    } else {
      if (icon_map[this.extension]) return icon_map[this.extension];
      else return './image/mail/mail_close.png';
    }
  }
  set_icon(p){
    this.icon = p;
    this.has_uniq_icon = true;
  }
  check_original() {
    return this.extension == this.original_extension;
  }
  check_original_power() {
    return this.extension == this.original_extension && this.is_original;
  }
  get_size() {
    return this.size;
  }
  get_size_value() {
    let size = this.size;
    return numeral(size).format('0b');
  }
  modify_file(date) {
    this.mod_date = date;
    this.modified = true;
  }
  hide() {
    this.hidden = true;
  }
  duplicate() {
    let self = this;
    let dup = new File(self.name, self.original_extension, self.size, self.mod_date, self.content, null, self.hidden, self.cond, self.removed)
    if (!this.check_original()) {
      dup.change_extension(self.extension)
    }
    dup.inspected = this.inspected;
    dup.encrypted = this.encrypted;
    dup.modified = this.modified;
    dup.portected = this.protected;
    dup.copylock = this.copylock;
    dup.name_changeable = this.name_changeable;
    dup.removed_permanent = this.removed_permanent;
    dup.password = this.password;
    dup.password_locked = this.password_locked;
    dup.is_original = this.is_original;
    dup.original_name = this.original_name;
    
    if (this.has_uniq_icon) {
      dup.set_icon(self.icon)
    }
    return dup;
  }
  set_inspected() {
    this.inspected = true;
  }
  lock(p) {
    this.password = p;
    this.password_locked = true;
  }
  delock(p) {
    if ( this.password == p) {
      this.password = "";
      this.password_locked = false;
    }
  }
  decrypt() {
    if (this.original_extension == 'edf' && this.encrypted) {
      let t = this.content.desc;
      this.content.desc = inspection_decrypt(t);
      this.encrypted = false;
      return true;
    } else {
      return false;
    }
  }
  encrypt() {
    if (this.original_extension == 'edf' && !this.encrypted) {
      this.content.desc = inspection_encrypt(this.content.desc);
      this.encrypted = true;
      return true;
    } else {
      return false;
    }
  }
}

String.prototype.trim_all = function() {
  let copy = this.slice(0);
  return copy.replace(/ /g, '_').replace(/[\(\)\[\]\=\'\"\#\^\$\+]/g,'_')
}

let inspection_function = function(d) {
  //case 1 edf == edf
  if (d.extension == 'edf' && d.extension == d.original_extension && !d.modified) return 'done';
  else if (d.extension == 'edf' && d.extension == d.original_extension && d.modified) return 'has_change';
  else if (d.extension == 'edf' && d.extension != d.original_extension) return 'fail';
  else if (d.extension != 'edf') return 'cannot';
}

let inspection_result_map = {
  wait: 'done',
  wait_mod: 'changed',
  wait_fail: 'failed'
}

let inspection_encrypt = function (theText) {
  let output = new String;
  let Temp = new Array();
  let Temp2 = new Array();
  let TextSize = theText.length;
  for (let i = 0; i < TextSize; i++) {
    let rnd = Math.round(Math.random() * 122) + 68;
    Temp[i] = theText.charCodeAt(i) + rnd;
    Temp2[i] = rnd;
  }
  for (i = 0; i < TextSize; i++) {
    output += String.fromCharCode(Temp[i], Temp2[i]);
  }
  return output;
}

let inspection_decrypt = function(theText) {
  let output = new String;
  let Temp = new Array();
  let Temp2 = new Array();
  let TextSize = theText.length;
  for (let i = 0; i < TextSize; i++) {
    Temp[i] = theText.charCodeAt(i);
    Temp2[i] = theText.charCodeAt(i + 1);
  }
  for (i = 0; i < TextSize; i = i+2) {
    output += String.fromCharCode(Temp[i] - Temp2[i]);
  }
  return output;
}
