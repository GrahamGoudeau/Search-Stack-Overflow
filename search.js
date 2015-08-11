document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit')
        .addEventListener('click', function (mouseEvt) {
            var searchTerms = mouseEvt.target.form.elements.search.value,
                url = HtmlEncode('https://www.google.com/search?q=site:stackoverflow.com ' + searchTerms);
            chrome.tabs.create({'url': url}, function () {
            });
        });
});

// http://stackoverflow.com/questions/784586/convert-special-characters-to-html-in-javascript
function HtmlEncode(str) {
    var element = document.createElement("div");
    element.innerText = element.textContent = str;
    str = element.innerHTML;

    return str;
}
