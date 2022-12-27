import './App.css';
import React, {useEffect, useState, useCallback} from 'react'
import ReactECharts from 'echarts-for-react';
import {Button, Layout, Menu, Tabs} from 'antd';
import Repo1 from './pages/repo1'
import Repo2 from './pages/repo2'
import Repo3 from './pages/repo3'
import Repo4 from './pages/repo4'
import Graph from './pages/graph/index'
function App() {
    const items = [
        {
            label: 'Repo1',
            key: '1',
            children: <Repo1/>
        },
        {
            label: 'Repo2',
            key: '2',
            children: <Repo2/>
        },
        {
            label: 'Repo3',
            key: '3',
            children: <Repo3/>
        },
        {
            label: 'Repo4',
            key: '4',
            children: <Repo4/>
        },
        {
            label: '.',
            key: '5',
            children: <Graph/>
        }
    ]

    return (
        <Layout>
            <Tabs
                size='large'
                defaultActiveKey="1"
                centered
                items={items}
            />
        </Layout>
    );
}

export default App;
