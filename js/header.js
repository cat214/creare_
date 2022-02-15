var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    var elemTop = $('#concept').offset().top;//#area-2の位置まできたら
    var scroll = $(window).scrollTop();
        //ヘッダーの出し入れをする
        if(scroll == beforePos) {
            //IE11対策で処理を入れない
        }else if(elemTop > scroll || 0 > scroll - beforePos){
            //ヘッダーが上から出現する
            $('#header').removeClass('js-up-move'); //#headerにjs-up-moveというクラス名を除き
            $('#header').addClass('js-down-move');//#headerにjs-down-moveのクラス名を追加
        }else {
            //ヘッダーが上に消える
            $('#header').removeClass('js-down-move');//#headerにjs-down-moveというクラス名を除き
            $('#header').addClass('js-up-move');//#headerにjs-up-moveのクラス名を追加
        }

    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});