import React from 'react';
import * as echarts from "echarts";
import data from "../../j4.json";


export default function graph1() {
    var data = require('../../j4.json')
    const {
        Comments0,
        Comments1,
        Comments2,
        Comments3,
        Comments4,
        Comments5,
        Comments6,
        Comments7,
        Comments8,
        Comments9,
        Comments10,
        Comments11,
        Comments12,
        Comments13,
        Comments14,
        Comments15,
        Comments16,
        Comments17,
        Comments18,
        Comments19,
        Comments20,
        Comments21,
        Comments22,
        Comments23,
        Comments24,
        Comments25,
        Comments26,
        Comments27,
        Comments28,
        Comments29,
        Comments30,
        Comments31,
        Comments32,
        Comments33,
        Comments34,
        Comments35,
        Comments36,
        Comments37,
        Comments38,
        Comments39,
        Comments40
    } = data
    const f = [Comments40.CommentsNum, Comments39.CommentsNum, Comments38.CommentsNum, Comments37.CommentsNum,
        Comments36.CommentsNum, Comments35.CommentsNum, Comments34.CommentsNum, Comments33.CommentsNum,
        Comments32.CommentsNum, Comments31.CommentsNum, Comments30.CommentsNum, Comments29.CommentsNum,
        Comments28.CommentsNum, Comments27.CommentsNum, Comments26.CommentsNum, Comments25.CommentsNum,
        Comments24.CommentsNum, Comments23.CommentsNum, Comments22.CommentsNum, Comments21.CommentsNum,
        Comments20.CommentsNum, Comments19.CommentsNum, Comments18.CommentsNum, Comments17.CommentsNum,
        Comments16.CommentsNum, Comments15.CommentsNum, Comments14.CommentsNum, Comments13.CommentsNum,
        Comments12.CommentsNum, Comments11.CommentsNum, Comments10.CommentsNum, Comments9.CommentsNum,
        Comments8.CommentsNum, Comments7.CommentsNum, Comments6.CommentsNum, Comments5.CommentsNum,
        Comments4.CommentsNum, Comments3.CommentsNum, Comments2.CommentsNum, Comments1.CommentsNum, Comments0.CommentsNum]

    var chartDom = document.getElementById('graph1');
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
