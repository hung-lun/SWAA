document.getElementById("exportPDF").addEventListener("click", function () {

    var today = new Date();
var year = today.getFullYear();
var month = String(today.getMonth() + 1).padStart(2, "0"); // 月份從 0 開始，所以需要 +1
var day = String(today.getDate()).padStart(2, "0");

var hours = String(today.getHours()).padStart(2, '0');
var minutes = String(today.getMinutes()).padStart(2, '0');
var seconds = String(today.getSeconds()).padStart(2, '0');

var formattedDate = year + '-' + month + '-' + day;
var formattedTime = hours + ':' + minutes + ':' + seconds;


  var element = document.getElementById("history"); //顯示 PDF 內容在 pdf-output 區塊。
  var print = document.getElementById("printtime");
  print.innerHTML = "產生PDF時間：" + formattedDate + '　' + formattedTime;
  var options = {
    margin: 0, // 設定頁邊距，單位為毫米
    filename: "2023-09-22" + " _ history.pdf", // 設定生成的 PDF 檔案名稱
    image: { type: "jpeg", quality: 0.98 }, // 設定圖片品質和類型
    html2canvas: { scale: 5 }, // 設定 html2canvas 的參數
    jsPDF: { unit: "mm", format: "a3", orientation: "portrait" }, // 設定 jsPDF 的參數
  };

  // 將 HTML 轉換為 PDF
  html2pdf()
    .from(element) //指定從element生成 PDF
    .set(options)
    .save(); //保存生成的 PDF，會被提示要下載轉換後的檔案。
});

// function mdtopdf() {

//         var element = document.getElementById('pdf-output'); //顯示 PDF 內容在 pdf-output 區塊。
//         element.innerHTML = html; //渲染在頁面上

//         // 將 HTML 轉換為 PDF
//         html2pdf()
//             .from(element) //指定從element生成 PDF
//             .save(); //保存生成的 PDF，會被提示要下載轉換後的檔案。
//     };

//     reader.readAsText(file);
//     //readAsText(file) 是 FileReader 的方法之一，用於以文本格式讀取文件的內容。
//     //開始讀取指定的文件，文件讀取完成後，會觸發上面的 onload 事件，並將文件作為文本儲存在 event.target.result 中。
