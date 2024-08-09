//data
const data = localStorage.getItem('userInfo');
let user: any;

if (data){
  user = JSON.parse(data);
}