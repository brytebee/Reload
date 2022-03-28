// Initialize button with user's preferred color
let changeColor = document.getElementById('changeColor');

const reviewProject = document.querySelector('.review-request-project-name');
const noReviews = document.querySelector('.review-request-announcement-header');
const reviewContainer = document.querySelector('.list-unstyled');

const refresh = () => {
  changeColor.addEventListener('click', () => {
    setTimeout(() => {
      chrome.tabs.query(
        { active: true, currentWindow: true },
        function (arrayOfTabs) {
          chrome.tabs.reload(arrayOfTabs[0].id);
        }
      );
    }, 500);
    setInterval(() => {
      chrome.tabs.query(
        { active: true, currentWindow: true },
        function (arrayOfTabs) {
          chrome.tabs.reload(arrayOfTabs[0].id);
        }
      );
    }, 2000);
  });
};

let observer = new MutationObserver((mutations) => {
  refresh();
  for (let mutation of mutations) {
    for (let addedNode of mutation.addedNodes) {
      if (addedNode.nodeName === 'INPUT[CHECKBOX]') {
        console.log('YES', addedNode);
      }
    }
  }
});

observer.observe(document, { childList: true, subtree: true });

// function nodeInsertedCallback(event) {
//   console.log(event);
// }
// document.addEventListener("DOMNodeInserted", nodeInsertedCallback);

// The body of this function will be executed as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
