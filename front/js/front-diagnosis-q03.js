//登出
var logout1 = document.getElementById("logout");
logout1.addEventListener("click", logout);
    function logout() {
        if (confirm('確認要登出嗎？') == true) {
            window.location.href = "../front/login.html";
            localStorage.clear();
        } else {

        }
    }
    


var checkedCount = 0;
var count = document.getElementById("count");
count.innerHTML = "已選"+checkedCount+"/7";
    function checkCount(obj) {
        if (obj.checked === true) {


            if (checkedCount >= 7) {
                alert("最多只能選擇7個哦");
                return false;
            }

            checkedCount++;

            if (checkedCount <= 7) {
                var count = document.getElementById("count");
                count.innerHTML = 0;
                count.innerHTML = "已選"+checkedCount+"/7";
                if(checkedCount == 7){
                    document.querySelector('.count').classList.add('red');
                }
            }

        } else {

            checkedCount--;

            if (checkedCount < 7) {
                var count = document.getElementById("count");
                count.innerHTML = "已選"+checkedCount+"/7";
                if((checkedCount < 7)){
                    document.querySelector('.count').classList.remove('red');
                }
            }

        }

        return true
    }

    
    function next() {
        if(checkedCount == 0){
            alert("最少要選擇1個哦");
        }else if(checkedCount <= 7){
            window.location.href = "./front-diagnosis-q04.html";
        }
    }