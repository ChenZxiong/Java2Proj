import React from 'react';
import * as echarts from "echarts";
import data from "../../j6.json";


export default function bing4() {
    var data = require('../../j6.json')

    var chartDom = document.getElementById('bing4');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: data[1], name: 'dawn' },
                    { value: data[2], name: 'morning' },
                    { value: data[3], name: 'noon' },
                    { value: data[4], name: 'afternoon' },
                    { value: data[5], name: 'night' }
                ]
            }
        ]
    };
    myChart.setOption(option);
    return (
        <div>

        </div>
    );
}
