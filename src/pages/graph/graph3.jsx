import React from 'react';
import * as echarts from "echarts";
import data from "../../j0.json";


export default function graph3() {
    var data = require('../../j0.json')
    const {
        Comments0,
    } = data
    const f = [0]

    var chartDom = document.getElementById('graph3');
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
