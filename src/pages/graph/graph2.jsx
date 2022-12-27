import React from 'react';
import * as echarts from "echarts";
import data from "../../j2.json";


export default function graph2() {
    var data = require('../../j2.json')
    const {
        Comments131,Comments130,Comments129,Comments128,Comments127,Comments126,Comments125,Comments124,Comments123,Comments122,Comments121,Comments120,Comments119,Comments118,Comments117,Comments116,Comments115,Comments114,Comments113,Comments112,Comments111,Comments110,Comments109,Comments108,Comments107,Comments106,Comments105,Comments104,Comments103,Comments102,Comments101,Comments100,Comments99,Comments98,Comments97,Comments96,Comments95,Comments94,Comments93,Comments92,Comments91,Comments90,Comments89,Comments88,Comments87,Comments86,Comments85,Comments84,Comments83,Comments82,Comments81,Comments80,Comments79,Comments78,Comments77,Comments76,Comments75,Comments74,Comments73,Comments72,Comments71,Comments70,Comments69,Comments68,Comments67,Comments66,Comments65,Comments64,Comments63,Comments62,Comments61,Comments60,Comments59,Comments58,Comments57,Comments56,Comments55,Comments54,Comments53,Comments52,Comments51,Comments50,Comments49,Comments48,Comments47,Comments46,Comments45,Comments44,Comments43,Comments42,Comments41,Comments40,Comments39,Comments38,Comments37,Comments36,Comments35,Comments34,Comments33,Comments32,Comments31,Comments30,Comments29,Comments28,Comments27,Comments26,Comments25,Comments24,Comments23,Comments22,Comments21,Comments20,Comments19,Comments18,Comments17,Comments16,Comments15,Comments14,Comments13,Comments12,Comments11,Comments10,Comments9,Comments8,Comments7,Comments6,Comments5,Comments4,Comments3,Comments2,Comments1,Comments0
    } = data
    const f = [Comments131.CommentsNum,Comments130.CommentsNum,Comments129.CommentsNum,Comments128.CommentsNum,Comments127.CommentsNum,Comments126.CommentsNum,Comments125.CommentsNum,Comments124.CommentsNum,Comments123.CommentsNum,Comments122.CommentsNum,Comments121.CommentsNum,Comments120.CommentsNum,Comments119.CommentsNum,Comments118.CommentsNum,Comments117.CommentsNum,Comments116.CommentsNum,Comments115.CommentsNum,Comments114.CommentsNum,Comments113.CommentsNum,Comments112.CommentsNum,Comments111.CommentsNum,Comments110.CommentsNum,Comments109.CommentsNum,Comments108.CommentsNum,Comments107.CommentsNum,Comments106.CommentsNum,Comments105.CommentsNum,Comments104.CommentsNum,Comments103.CommentsNum,Comments102.CommentsNum,Comments101.CommentsNum,Comments100.CommentsNum,Comments99.CommentsNum,Comments98.CommentsNum,Comments97.CommentsNum,Comments96.CommentsNum,Comments95.CommentsNum,Comments94.CommentsNum,Comments93.CommentsNum,Comments92.CommentsNum,Comments91.CommentsNum,Comments90.CommentsNum,Comments89.CommentsNum,Comments88.CommentsNum,Comments87.CommentsNum,Comments86.CommentsNum,Comments85.CommentsNum,Comments84.CommentsNum,Comments83.CommentsNum,Comments82.CommentsNum,Comments81.CommentsNum,Comments80.CommentsNum,Comments79.CommentsNum,Comments78.CommentsNum,Comments77.CommentsNum,Comments76.CommentsNum,Comments75.CommentsNum,Comments74.CommentsNum,Comments73.CommentsNum,Comments72.CommentsNum,Comments71.CommentsNum,Comments70.CommentsNum,Comments69.CommentsNum,Comments68.CommentsNum,Comments67.CommentsNum,Comments66.CommentsNum,Comments65.CommentsNum,Comments64.CommentsNum,Comments63.CommentsNum,Comments62.CommentsNum,Comments61.CommentsNum,Comments60.CommentsNum,Comments59.CommentsNum,Comments58.CommentsNum,Comments57.CommentsNum,Comments56.CommentsNum,Comments55.CommentsNum,Comments54.CommentsNum,Comments53.CommentsNum,Comments52.CommentsNum,Comments51.CommentsNum,Comments50.CommentsNum,Comments49.CommentsNum,Comments48.CommentsNum,Comments47.CommentsNum,Comments46.CommentsNum,Comments45.CommentsNum,Comments44.CommentsNum,Comments43.CommentsNum,Comments42.CommentsNum,Comments41.CommentsNum,Comments40.CommentsNum,Comments39.CommentsNum,Comments38.CommentsNum,Comments37.CommentsNum,Comments36.CommentsNum,Comments35.CommentsNum,Comments34.CommentsNum,Comments33.CommentsNum,Comments32.CommentsNum,Comments31.CommentsNum,Comments30.CommentsNum,Comments29.CommentsNum,Comments28.CommentsNum,Comments27.CommentsNum,Comments26.CommentsNum,Comments25.CommentsNum,Comments24.CommentsNum,Comments23.CommentsNum,Comments22.CommentsNum,Comments21.CommentsNum,Comments20.CommentsNum,Comments19.CommentsNum,Comments18.CommentsNum,Comments17.CommentsNum,Comments16.CommentsNum,Comments15.CommentsNum,Comments14.CommentsNum,Comments13.CommentsNum,Comments12.CommentsNum,Comments11.CommentsNum,Comments10.CommentsNum,Comments9.CommentsNum,Comments8.CommentsNum,Comments7.CommentsNum,Comments6.CommentsNum,Comments5.CommentsNum,Comments4.CommentsNum,Comments3.CommentsNum,Comments2.CommentsNum,Comments1.CommentsNum,Comments0.CommentsNum]

    var chartDom = document.getElementById('graph2');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'category',
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: f,
                type: 'line'
            }
        ]
    };
    myChart.setOption(option);
    return (
        <div>

        </div>
    );
}
