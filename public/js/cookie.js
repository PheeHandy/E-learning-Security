window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  if (event.origin !== "https://script.google.com/macros/s/AKfycbxjFROVgYidAFtfb7o0zjWznNnZ_Ehok5mo3l3Pzczpabl-oGHvgQ-kyDgNg2gQcPLe_A/exec") // replace with the origin of your Google Apps Script
    return;

  // assuming you sent the data as a JSON object
  var data = JSON.parse(event.data);

  // do whatever you need to with the data
  // for example, set it as a cookie
  document.cookie = "name=" + data.name;
  console.log("cookie = " + cookie);
}