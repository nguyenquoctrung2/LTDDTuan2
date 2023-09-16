const url = "https://jsonplaceholder.typicode.com/posts/";
const data = {};
const json = JSON.stringify(data);
const xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.onload = function () {
  const users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "201") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(null);