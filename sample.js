
var sum = 0;
var subject_points =  [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
var score = subject_points.length;

$(document).ready(function(){//HTMLが全て読み込まれてからjavascriptを実行する

  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    subject_points = [Number($('#national_language').val()),//国語の値を取得する
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
   
    sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
    
    let heikinn=sum/score;
    $("#avarage_indicate").text(heikinn);//ここに、上記を参考にして平均点を出力する処理を書き込む
    //return sum, score;
  }


  function get_achievement(){
    let avarage=sum/score;
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
    if(avarage >= 80){
      $("#evaluation").text("A");
    }else if(avarage >= 60){
      $("#evaluation").text("B");
    }else if(avarage >= 40){
      $("#evaluation").text("C");
    }else{
      $("#evaluation").text("D");
    }/* global $ */
    return $("#evaluation").text()
}

  function get_pass_or_failure(){
    var result = "合格";
    for(let i=0; i<score; i++){ // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
      if(subject_points[i]<60){ 
        result = "不合格";
        $("#judge").text(result);
        break;
      }
      result = "合格";
      $("#judge").text(result);
    }
    return result;
  }
    
  function judgement(){
    let achievement = get_achievement();
    let pass_or_failure =  get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です。</label>`);
  }
  // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    //$('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です</label>`);
  //最終ジャッジボタンの末尾にHTML要素<label>を追加する。

  $('#national_language, #english, #mathematics, #science, #society').change(function() {//要素の中身が変更された時に起こるイベントを設定
   // var sum, score = score_indicate();
   score_indicate();
  });

  $('#btn-evaluation').click(function() {//id値btn-evalitionに対してclickすると起こるイベントを設定
  // var 500 = score_indicate();
  //   get_achievement(500);
  get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });/* global judgement*/
});
// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。