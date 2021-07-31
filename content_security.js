$(window).on("load", () => {
    setTimeout(() => {
        if ($('strong')[0].innerText == '\"<>\"') { //replace <> with your security question 1
            $('#answer').val('<>'); //replace <> with answer to your security question 1
        } else if ($('strong')[0].innerText == '\"<>\"') { //replace <> with your security question 2
            $('#answer').val('<>'); //replace <> with your security question 2
        } else if ($('strong')[0].innerText == '\"<>\"') { //replace <> with your security question 3
            $('#answer').val('<>'); //replace <> with your security question 3
        } else if ($('strong')[0].innerText == '\"<>\"') { //replace <> with your security question 4
            $('#answer').val('<>'); //replace <> with your security question 4
        }
    }, 100);
    setTimeout(() => {
        $('.btn-primary')[0].click()
    }, 200);
});