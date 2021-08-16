$(function () {
    $('#gckey').click(function () {
        chrome.storage.sync.get('id', function (data) {
            if (typeof data.id === 'undefined')
                chrome.runtime.openOptionsPage();
            else
                chrome.tabs.create({ url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html" });
        })
    })
    $('#options').click(function () {
        chrome.runtime.openOptionsPage();
    })
})