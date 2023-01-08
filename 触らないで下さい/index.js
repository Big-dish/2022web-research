console.log("hello world");
console.log(2+2);

const pagetopBtn = document.querySelector('#page-top');

pagetopBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});

//円グラフQ1
let pieData = {
    labels:['はい',
            'いいえ',
            '未回答'
            ],
    series:[86,10,24]
};

let pieOptions = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie-chart',pieData,pieOptions);

//円グラフQ2
let pie2Data = {
    labels:['非常に役に立つ',
            'ふつう',
            'あまり',
            '未回答'
            ],
    series:[65,19,3,33]
};

let pie2Options = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie2-chart',pie2Data,pie2Options);

//棒グラフQ3
new Chartist.Bar('.ct-chart', {
    labels: ['外部講師による講習', 'グループミーティング', '実車による走行訓練'],
    series: [
      [72, 25, 51],
      [23, 70, 44]
    ]
  }, {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value/1) + '人';
      }
    }
  }).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 60px'
      });
    }
  });

  //棒グラフQ4
new Chartist.Bar('.ct-chart2', {
    labels: ['20代', '30代', '40代', '50代'],
    series: [
      [18, 34, 14, 26],
      [77, 61, 81,69]
    ]
  }, {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value/1) + '人';
      }
    }
  }).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 50px'
      });
    }
  });

  //棒グラフQ5
new Chartist.Bar('.ct-chart3', {
    labels: ['20代', '30代', '40代', '50代'],
    series: [
      [0, 13, 10, 19],
      [9, 16, 3, 6],
      [13, 9, 2,0]
    ]
  }, {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value/1) + '人';
      }
    }
  }).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 50px'
      });
    }
  });
 
  //円グラフQ6
let pie3Data = {
    labels:['非常に感じる',
            '感じる',
            'さほど感じない'
            ],
    series:[7,15,16]
};

let pie3Options = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie3-chart',pie3Data,pie3Options);

 //円グラフQ6-1
 let pie4Data = {
    labels:['20代',
            '30代',
            '40代',
            '50代'
            ],
    series:[8,10,2,1]
};

let pie4Options = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie4-chart',pie4Data,pie4Options);

//円グラフQ7
let pie5Data = {
    labels:['はい',
            '未回答'
            ],
    series:[50,1]
};

let pie5Options = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie5-chart',pie5Data,pie5Options);

//円グラフQ8
let pie6Data = {
    labels:['はい',
            'いいえ',
            '未回答'
            ],
    series:[21,2,1]
};

let pie6Options = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie6-chart',pie6Data,pie6Options);
  
//円グラフQ9
let pie7Data = {
    labels:['はい',
            'いいえ',
            ],
    series:[9,83]
};

let pie7Options = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie7-chart',pie7Data,pie7Options);
  
//円グラフQ9
let pie8Data = {
    labels:['非常に感じる',
            '感じる',
            'さほど感じない',
            '未回答'],
    series:[2,3,1,3]
};

let pie8Options = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie8-chart',pie8Data,pie8Options);

//円グラフQ9
let pie9Data = {
    labels:['運転技術',
            '同乗者の安全確認',
            'その他'],
    series:[8,7,2,]
};

let pie9Options = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie9-chart',pie9Data,pie9Options);

//円グラフQ10
let pie10Data = {
    labels:['はい',
            'いいえ',
            ],
    series:[8,64]
};

let pie10Options = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie10-chart',pie10Data,pie10Options);

//円グラフQ10
let pie11Data = {
    labels:['運転技術',
            '同乗者の安全確認',
            'その他'],
    series:[7,5,4,]
};

let pie11Options = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie11-chart',pie11Data,pie11Options);

//円グラフQ12
let pie12Data = {
    labels:['運転技術',
            '同乗者の安全確認',
            'その他'],
    series:[81,76,22,]
};

let pie12Options = {
    width:'100%',
    height:'300px'
};

new Chartist.Pie('.pie12-chart',pie12Data,pie12Options);

/*btn*/

let btn1 = document.getElementById("btn1");
btn1.addEventListener('click', btnonclick);

function btnonclick () {
  alert('hello');
}
 
/*
function butotnClick(){

    // location.hrefにURLを代入することで画面遷移する
    location.href = "file:///C:/Users/0975/Desktop/web/q11/q11.html";
  }
  
  let button = document.getElementById('btn1');
  button.onclick = butotnClick;

  function butotnClick(){

    // location.hrefにURLを代入することで画面遷移する
    location.href = "./q12.html";
  }
  
  let button = document.getElementById('btn2');
  button.onclick = butotnClick;
  */