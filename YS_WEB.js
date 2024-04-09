// ページの読み込み完了時にローディング画面をフェードアウト
window.onload = function () {
    $(".js-loader").delay(800).fadeOut(600); // 画像をフェードアウト
    $(".js-loader-bg").delay(1300).fadeOut(600); // 背景色をフェードアウト
  };
  
$(function () {
    // ウィンドウをスクロールしたら…
    $(window).scroll(function () {
        // ウィンドウの高さを取得
        const wHeight = $(window).height();
        // スクロールした量を取得
        const wScroll = $(window).scrollTop();
        //それぞれのフェードインクラスに繰り返し指定
        $(".fadeIn,.fadeInLeft,.fadeInRight").each(function () {
                // それぞれのフェードインクラスのウィンドウからの高さを取得
                const bPosition = $(this).offset().top;
            // その数値にウィンドウの高さを引き、最後に200pxを足す
            if (wScroll > bPosition - wHeight + 200) {
                // フェードインさせるクラスを付与
                $(this).addClass("fadeInAnime");
            }
        });
    });
});


  