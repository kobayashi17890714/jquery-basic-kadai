// slick
$(function(){
    $('.mv-img').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true
      });


// スムーススクロール

// 固定ヘッダーの高さ（＋追加したい余白）
var headerHeight = jQuery('header').outerHeight() + 20;

// ページ内のアンカーへスクロール
// #を含むa要素をクリックした時
jQuery('a[href*="#"]').click(function () {
  // リンク先を指定（href="#"ならばhtml、そうでなければ指定したアンカーを代入）
  var target = jQuery(this.hash === '' ? 'html' : this.hash);
  // リンク先の位置から固定ヘッダー分の高さを引く（重なり防止）
  var position = target.offset().top - headerHeight;
  // リンク先が存在する時
  if (target.length) {
    // スクロール実行（500ミリ秒、swingの動きを指定）
    jQuery('html, body').animate({scrollTop:position}, 500, 'swing');

    // #タグをURLに残す場合は削除
    return false;
  }
});

// ページ外のアンカーへスクロール
// URLのアンカー（#以降の部分）を取得
var urlHash = location.hash;
// URLのアンカーが存在する時
if(urlHash) {
  // リンク先をURLのアンカーに指定
  var target = jQuery(urlHash);
  // リンク先の位置から固定ヘッダー分の高さを引く（重なり防止）
  var position = target.offset().top - headerHeight;
  // どこからスクロールさせるか ※一番上ならscrollTop(0)
  jQuery('body,html').stop().scrollTop(position - 200);
  // ロード時の処理を待ち、時間差でスクロール実行（100ミリ秒）
  setTimeout(function(){
    // スクロール実行（500ミリ秒、swingの動きを指定）
    jQuery('body,html').stop().animate({scrollTop:position}, 500, 'swing');
  }, 100);
}



    });

    // to-top
        $(window).on('scroll', function() {
        if ( 10 < $(this).scrollTop()){
        $('.toTop').addClass('is-show');
        } else {
        $('.toTop').removeClass('is-show');
        }
    });

    // アニメーション
    // 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


  //modal
    // 変数に要素を入れる
    var trigger = $('.js-modal-trigger'),
    wrapper = $('.modal'),
    layer = $('.modal_layer'),
    container = $('.modal_container'),
    close = $('.modal_close');

    // 『モーダルを開くボタン』をクリックしたら、『モーダル本体』を表示
    $(trigger).click(function() {
    var index = $(this).index();
    $(wrapper).eq(index).fadeIn(400);

    // スクロール位置を戻す
    $(container).scrollTop(0);

    // サイトのスクロールを禁止にする
    $('html, body').css('overflow', 'hidden');
    });

    // 『背景』と『モーダルを閉じるボタン』をクリックしたら、『モーダル本体』を非表示
    $(layer).add(close).click(function() {
    $(wrapper).fadeOut(400);

    // サイトのスクロール禁止を解除する
    $('html, body').removeAttr('style');
    });

