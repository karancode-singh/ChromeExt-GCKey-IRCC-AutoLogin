$(window).on("load", () => {
    chrome.storage.sync.get(['id', 'pass'], function (items) {
        setTimeout(() => {
            $('.ho01e1').val(items['id']);
            $('.ho01e2').val(items['pass']);
        }, 100);
        setTimeout(() => {
            if ($('.btn-primary')[0])
                $('.btn-primary')[0].click()
        }, 200);
    });
});