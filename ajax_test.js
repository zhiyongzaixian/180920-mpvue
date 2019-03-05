let xmlHttp = new XMLHttpRequest()
xmlHttp.onreadystatechange = function () {
  if(xmlHttp.readystate === 4 && xmlHttp.status === 200){
    console.log(xmlHttp.responseText);
  }
}
// 创建链接并且规定请求的方式
xmlHttp.open(url, method);

xmlHttp.send();