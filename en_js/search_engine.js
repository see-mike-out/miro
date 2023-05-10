let keywords = {
  snp: ['snp 프로젝트', 'snp', '눼', 'social network privacy','social network privacy project', 'snp project'],
  edf: ['edf', 'ㄷㅇㄹ'],
  te: ['te', 'ㅅㄷ'],
  ptnp: ['ptnp', 'ㅔ쉐'],
  jf: ['제레미 푸코', '제레미푸코', 'jeremy foucault', 'jf', 'jeremyfoucault']
};

let search_app = new Vue({
  el: '#search',
  delimiters: ["<%","%>"],
  data: {
    mode: 'search_main',
    modes: ['search_main', 'search_output', 'search_external'],
    search_keyword: '',
    search_code_key: '',
    search_count: 0,
    display_count: 0
  },
  methods: {
    search: function () {
      let value = document.getElementById('search_input').value;
      this.search_keyword = value;
      let lvalue = value.toLowerCase();
      if (keywords.snp.includes(lvalue)) {
        this.search_code_key = 'snp';
        this.mode = this.modes[1];
        // window.location.href = "../web/search_output.html?search_key=snp&ackey=o8dZuW1UQBFKMhwtEU0BN72nn9HzAwsJ&okey="+value;
      } else if (keywords.edf.includes(lvalue)) {
        this.search_code_key = 'edf';
        this.mode = this.modes[1];
        // window.location.href = "../web/search_output.html?search_key=edf&ackey=o8dZuW1UQBFKMhwtEU0BN72nn9HzAwsJ&okey="+value;
      } else if (keywords.te.includes(lvalue)) {
        this.search_code_key = 'te';
        this.mode = this.modes[1];
        // window.location.href = "../web/search_output.html?search_key=te&ackey=o8dZuW1UQBFKMhwtEU0BN72nn9HzAwsJ&okey="+value;
      } else if (keywords.ptnp.includes(lvalue)) {
        this.search_code_key = 'ptnp';
        this.mode = this.modes[1];
        // window.location.href = "../web/search_output.html?search_key=ptnp&ackey=o8dZuW1UQBFKMhwtEU0BN72nn9HzAwsJ&okey="+value;
      } else if (keywords.jf.includes(lvalue)) {
        this.search_code_key = 'jf';
        this.mode = this.modes[1];
        // window.location.href = "../web/search_output.html?search_key=jf&ackey=o8dZuW1UQBFKMhwtEU0BN72nn9HzAwsJ&okey="+value;
      } else {
        this.search_code_key = null;
        this.mode = this.modes[2];
        // window.location.href = "../web/search_external.html?ackey=o8dZuW1UQBFKMhwtEU0BN72nn9HzAwsJ&okey="+value;
      }
    }
  }
});