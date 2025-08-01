let ctx = document.getElementById("chart").getContext("2d");
let data=[10,20,15,40];

let chart = new Chart(ctx,{
    type:'line',
    data:{
        labels:[1,2,3,4,5],
        datasets:[{
            label:'size',
            data:[10,20,15,5,30],
            borderColor:'rgba(255,0,0,0.5)',
            borderWidth:3,
            yAxisID:'y1',
            backgroundColor:'rgba(255,0,0,0.5)',
            pointStyle:'circle',
            pointRadius:10,
            pointHoverRadius:15,
        },{
            label:'sunLight',
            data:[150,300,70,20,500],
            borderColor:'rgba(144, 0, 255, 0.5)',
            borderWidth:3,
            yAxisID:'y2',
            backgroundColor:'rgba(144, 0, 255, 0.5)',
            pointStyle:'rect',
            pointRadius:10,
            pointHoverRadius:15,
        }]
    }, 
    options:{
        animation:true,
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
            title:{
                display:true,
                text:'photosynthesiss',
                color:'rgba(0, 76, 255, 0.5)',
                font:{
                    size:30,
                    family:'Arial',
                    weight: 'bold'
                }
            },
            tooltip:{
                callbacks:{
                    label: (ctx)=> 'x = '+ctx.label,
                    title: (items)=> 'y = '+items[0].parsed.y,
                }
            },
            legend:{
                position:'bottom',
                labels:{
                    color:'#333',
                    font:{
                        size:20
                    }
                }
            },
         },
        elements:{
            line:{
                tension:0.1,
            }
        },
        scales:{
            y1:{
                min:0,
                max:70,
                beginAtZero:true,
                type:'linear',
                position:'right',
                ticks:{
                    color:'rgba(255,0,0,0.5)',
                    callback:(val)=>val+'cm',
                    font:{
                        size:20
                    }
                } 
            },
            y2:{
                type:'linear',
                position:'left',
                beginAtZero:true,
                min: 0,
                max:600,
                grid:{
                    drawOnChartArea:false,
                },
                ticks:{
                    color:'rgba(144, 0, 255, 0.5)',
                    callback:(val)=>{return val+'unit';},
                    font:{
                        size:20
                    }
                },
            },
        },
    }
})

/*let intervalId = setInterval(()=>{
    data.push(Math.floor(Math.random()*60));
    chart.data.labels=data;
    chart.data.datasets[0].data=data;
    chart.update();
},1000)*/

console.log('some changes');
console.log('more changes');