window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  if (event.origin !== "https://script.google.com/macros/s/AKfycbw9tlrF7-BbRLq84vj1CsC_kVa6to9kaHB5Wu9nk5sdnPEdBqiSEoYacN4mail7_HSP8Q/exec") // replace with the origin of your Google Apps Script
    return;

  // assuming you sent the data as a JSON object
  var data = JSON.parse(event.data);

  // do whatever you need to with the data
  // for example, set it as a cookie
  document.cookie = "name=" + data.name;
  console.log("cookie = " + cookie);
}