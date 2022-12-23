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
    series:[87,10,30]
};

let pieOptions = {
    width:'100%',
    height:'400px'
};

new Chartist.Pie('.pie-chart',pieData,pieOptions);

//円グラフQ2
let pie2Data = {
    labels:['はい',
            'いいえ',
            '未回答'
            ],
    series:[87,10,30]
};

let pie2Options = {
    width:'100%',
    height:'400px'
};

new Chartist.Pie('.pie2-chart',pie2Data,pie2Options);