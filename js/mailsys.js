let mail_address_check = function(to) {
  let p1 = to.split('@');
  if (p1.length != 2) {
    return [false, null, null];
  } else {
    let uid = p1[0];
    let p2 = p1[1].split('.');
    if (p2.length == 2 || p2.length == 3) {
      let uhost = p1[1];
      return [true, uid, uhost];
    } else {
      return [false, uid, null];
    }
  }
}

let attachment_check = function (d) {
  if(d.extension == "edf") { //case 1, 2
    return true;
  } else if (d.extension == "zip") { //case 3,4,5,6
    if (!d.check_original()) {
      return false; //case 6
    } else { //case 3, 4, 5
      let cont = d.content;
      let non_edf_count = 0;
      for (let i = 0; i < cont.length; i++) {
        if (cont[i].extension != 'edf') non_edf_count++;
      }
      if (non_edf_count > 0) return false; // case 4, 5
      else return true; //case 3
    }
  } else { //case 7
    return false;
  }
}
