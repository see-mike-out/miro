let month_name =[
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]
class TimeSys {
  constructor(time) {
    this.standard = time;
    this.pc = new Date();
  }
  get_now_value() {
    let c = new Date();
    let delta = c.getTime() - this.pc.getTime();
    let n = new Date(this.standard.getTime() + delta);
    return n;
  }
  get_now_format(f) {
    let n = this.get_now_value();
    if (f == "t") {
      let res = month_name[n.getMonth()] + " " + n.getDate().toString() + " " + n.getFullYear().toString() + "<br/>";
      let h = (n.getHours() % 12).toString();
      let ampm = (n.getHours() / 12 >= 1 ? 'PM' : 'AM');
      res += h + ":" + n.getMinutes().toString() + " " + ampm;
      return res;
    }
    else if (f == "l") {
      let res = month_name[n.getMonth()] + " " + n.getDate().toString() + " " + n.getFullYear().toString() + " ";
      let h = (n.getHours() % 12).toString();
      let ampm = (n.getHours() / 12 >= 1 ? 'PM' : 'AM');
      res += h + ":" + n.getMinutes().toString() + " " + ampm;
      return res;
    }
    else if (f == "ls") {
      let res = month_name[n.getMonth()] + "/" + n.getDate().toString() + "/" + n.getFullYear().toString() + " ";
      let h = (n.getHours() % 12).toString();
      let ampm = (n.getHours() / 12 >= 1 ? 'PM' : 'AM');
      res += h + ":" + n.getMinutes().toString() + " " + ampm;
      return res;
    }
    else if (f == "s") {
      let h = (n.getHours() % 12).toString();
      let ampm = (n.getHours() / 12 >= 1 ? 'PM' : 'AM');
      return h + ":" + n.getMinutes().toString() + " " + ampm;
    }
  }
}

let standard_time = new Date(2019, 9, 29, 9, 13, 0, 0);
let ThisTime = new TimeSys(standard_time);
