// 題目一 ok
function func1(num1){
    let result = num1*3;
    console.log(result);
}

// 題目二 字串轉陣列


function func2(str){
    console.log(str.split(' '))
}



// 題目三：BMI 計算機 ok
function bmi(cm, kg) {

    let howtall = (cm / 100) ** 2;
    let result = kg / (howtall)
  
    if (result < 18.5) {
      return "體重過輕";
    }
  
    else if (result >= 18.5 && result < 24) {
      return "正常範圍";
    }
  
    else if (result >= 24 && result < 27) {
      return "異常範圍";
    }
    else if (result >= 27 && result < 30) {
      return "異常範圍";
    }
    else if (result >= 30 && result < 35) {
      return "異常範圍";
    } 
    else if (result >= 35) {
      return "異常範圍";
    }
  }



// 題目四：手機號碼是否正確 ok
function checkPhoneNumber(num){
    let head=num.substr(0,2)
    if( head=="08"){
        return true;
    }
    else return false;
}



// quiz5 九九乘法表

multiplication8(3)

function nine (num) {
    for(let i = 1; i <= num; i++){
        let str = '';
        let k = 8;
        str += 8 + 'x' + i + '=' + i*k + ' ';
        
        }
        console.log(str)
    }
}
nine(9)


function multiplication8(3)


// quiz6 判斷帶入參數是否有陣列中有大於的值
const numAry = [1,3,4,6,8];

function checkNum(num){
    let a=[];
    if(num<numAry)

}


// 題目七：選出從1到指定數字範圍裡面的奇數

// 下面這個function是用來判斷某數是否為質數
function test(a){
    for(let i=2 ;i<a;i++){
      if(a%i==0){
        return false
        }
    }
    return true
  }
// 下面這個function是判斷1到任意數之間的所有質數
// 注意! 一定要先加入上面的function，下面的function中的test才會有用
  function prime(a){
    let count=[]
    // 遍歷任意數, 利用test方法判斷遍曆數是否為質數;如果是, 就加入數組;
    for(let i=2 ;i<a ;i++){
      if(test(i)){
        count.push(i)
      }
    }
    console.log(count.toString(  ))
  }

// quiz8



// 題目九：兩個陣列尋找相同數字 ok

const a = [1,3,4,6,8];

function checkSame(ary){
    let c =[]
    c = a.filter(value=>ary.includes(value));
    console.log(c);
}

// 題目 10 樂透選號 用for迴圈

function lotto(){
var lottery = [];
var n;
// 直到陣列 lottery 選滿 4 球
while(lottery.length < 4) {
// 取一隨機 1 ~ 10 數字
  n = Math.floor( Math.random() * 10 ) + 1;
// 如果選出來的 n 不存在，就放入陣列
  if( lottery.indexOf( n ) === -1 ){
    lottery.push( n );
  }
}
var lottery=lottery.join();
console.log(lottery)
}