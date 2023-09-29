//登出
var logout1 = document.getElementById("logout2");
logout1.addEventListener("click", logout);
    function logout() {
        if (confirm('確認要登出嗎？') == true) {
            window.location.href = "../front/login.html";
            localStorage.clear();
        } else {
            return false;
        }
    }
    

    var center_box1 = document.getElementById("center-box1");
    var menubtn = document.getElementById("mm");
    center_box1.style.display = "none";
    menubtn.addEventListener("click", open);
    function open(){
        if(center_box1.style.display == "flex"){
            center_box1.style.display = "none"
        }else if(center_box1.style.display == "none"){
            center_box1.style.display = "flex"
        }
    }

