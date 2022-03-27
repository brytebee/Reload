// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", () => {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (arrayOfTabs) {
      chrome.tabs.reload(arrayOfTabs[0].id);
    }
  );
});

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// // changeColor.addEventListener("click", async () => {
// //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

// //   chrome.scripting.executeScript({
// //     target: { tabId: tab.id },
// //     function: location.reload();
// //   });
// // });

// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.tabs.getSelected(null, function (tab) {
//     var code = "window.location.reload();";
//     chrome.tabs.executeScript(tab.id, { code: code });
//   });
// });

// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
