window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  if (event.origin !== "https://script.google.com/macros/s/AKfycbyqikIQSk4zyPZMjuk5g6lSK_Rlm6IcqMbqrBH6ToM55NW11RDD1jYP5cn8WWAhDghj3A/exec") // replace with the origin of your Google Apps Script
    return;

  // assuming you sent the data as a JSON object
  var data = JSON.parse(event.data);

  // do whatever you need to with the data
  // for example, set it as a cookie
  document.cookie = "name=" + data.name;
  console.log("cookie = " + cookie);
}