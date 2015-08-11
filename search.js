document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', function (mouseEvt) {
        var searchTerms = mouseEvt.target.form.elements.search.value,
            url = HtmlEncode('https://www.google.com/search?q=site:stackoverflow.com ' + searchTerms);

        // create a new tab with the search that the user entered
        chrome.tabs.create({'url': url}, function () {
        });
    });
});

// http://stackoverflow.com/questions/784586/convert-special-characters-to-html-in-javascript
// encode the search string the user entered as HTML so we can turn it into a search
function HtmlEncode(str) {
    var element = document.createElement("div");
    element.innerText = element.textContent = str;
    str = element.innerHTML;

    return str;
}
