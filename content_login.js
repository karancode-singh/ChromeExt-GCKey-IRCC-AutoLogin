$(window).on("load", () => {
    setTimeout(() => {
        $('.ho01e1').val('<>'); //replace <> with your username
        $('.ho01e2').val('<>'); //replace <> with your password
    }, 100);
    setTimeout(() => {
        if($('.btn-primary')[0])
            $('.btn-primary')[0].click()
    }, 200);
});