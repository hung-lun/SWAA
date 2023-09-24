var checkedCount = 0;
var count = document.getElementById("count");
count.innerHTML = "已選"+checkedCount+"個";
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
                count.innerHTML = "已選"+checkedCount+"個";
                if(checkedCount == 7){
                    document.querySelector('.count').classList.add('red');
                }
            }

        } else {

            checkedCount--;

            if (checkedCount < 7) {
                var count = document.getElementById("count");
                count.innerHTML = "已選"+checkedCount+"個";
                if((checkedCount < 7)){
                    document.querySelector('.count').classList.remove('red');
                }
            }

        }

        return true
    }

    var count = document.getElementById("count");