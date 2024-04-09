// ページの読み込み完了時にローディング画面をフェードアウト
window.onload = function () {
    $(".js-loader").delay(800).fadeOut(600); // 画像をフェードアウト
    $(".js-loader-bg").delay(1300).fadeOut(600); // 背景色をフェードアウト
  };



  