// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1


// Q 2


// Q 3


// Q 4 (難)
// 「for of」を使います。

// Q 5


// Q 6


// Q 8


// Q 9


// Q 10


// Q 11

 var btn = document.querySelector('.q11-btn');
console.log(btn);

btn.addEventListener('click', function () {
var input_name = document.querySelector("#q11-input-name");
var result_name = document.querySelector("#q11-result-name");
var input_age = document.querySelector("#q11-input-age");
var result_age = document.querySelector("#q11-result-age");
  result_name.textContent = input_name.value;
  result_age.textContent = input_age.value;
	if (input_age.value < 20) {
    result_age.textContent = "20歳未満の方の利用は禁止です。";
  	}else{
	result_age.textContent = input_age.value;
	}if(input_name.value === ""){
	result_name.textContent = "名前が空欄です。";
  	}else{
	result_name.textContent = input_age.value;
   }
});


// Q 12
function btna_click(){
	console.log("btna_click");
	var text = document.querySelector(".q12-result");
	var for_btn = document.createElement("p");
	// 押されたボタンの文字を表示する
	for_btn.textContent = document.querySelector(".q12-btn").textContent;
   // 生成したｐタグの追加
    text.appendChild(for_btn);
  }


// Q 13

var btn_first = document.querySelector('.q13-btn');
console.log(btn_first);

btn_first.addEventListener('click', function () {
var p = document.querySelector("#q13-box");
var child_p = document.createElement("li");
child_p.textContent = "リンゴ";
p.appendChild(child_p.textContent);
});

// Q 14

function room_click(){
let ant = document.querySelector('#chicken');
ant.remove();
}

// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。

// var btn_text = document.querySelectorAll('.q15-btn');
// btn_text.addEventListener('click', function () {

// 	var google = document.createElement("a");
// 	google.href ="https://google.com"
// 	google.textContent ="Google"
// 	var youTube = document.createElement("a");
// 	youTube.href ="https://youtube.com"
// 	youTube.textContent ="YouTube"
// 	var amazon = document.createElement("a");
// 	amazon.href ="https://amazon.com"
// 	amazon.textContent ="Amazon"

// 	if(google.textContent ="Google"){
// 		google.textContent = google.href
// 	}


// });






