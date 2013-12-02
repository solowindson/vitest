function read(dialog) {
        //var googleUrl = "http://translate.google.cn/translate_tts?ie=UTF-8&q={{word}}&tl=en&total=2&idx=1&textlen={{textlen}}&prev=input";
        var googleUrl = "http://translate.google.com/translate_tts?ie=UTF-8&q={{word}}%0A&tl=en&prev=input&textlen={{textlen}}&client=webapp"
        var url = googleUrl.replace("{{word}}", dialog).replace("{{textlen}}", dialog.length);
        speaker.setAttribute("src", url);
    }