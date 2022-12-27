import React from 'react';
import {Divider, Card, Row, Col} from 'antd';
import * as echarts from 'echarts'

export default function repo4() {
    var data = require('../../j6.json')
    //console.log(data)
    const {
        repo, developers, active_contributor1, active_contributor2, active_contributor3, open_issues, clos_issues,
        average, max_difference, variance, release, weekdays, weekends
    } = data
    return (
        <div className="repo4">
            <Divider/>
            <div style={{paddingLeft: 40, fontSize: 20}}> The name of repository: {repo} </div>
            <div style={{paddingLeft: 40, fontSize: 20}}> The number of developers: {developers} </div>
            <div style={{paddingLeft: 40, fontSize: 20}}> The most active developers:</div>
            <div style={{paddingLeft: 40}}>
                <Row gutter={18}>
                    <Col span={6}>
                        <Card title="active_contributor1" bordered={true}>
                            name: {active_contributor1.login}
                            <div/>
                            commits: {active_contributor1.commits}
                            <div/>
                            html_url:<a href={active_contributor1.html_url}> {active_contributor1.html_url} </a>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="active_contributor2" bordered={true}>
                            name: {active_contributor2.login}
                            <div/>
                            commits: {active_contributor2.commits}
                            <div/>
                            html_url:<a href={active_contributor2.html_url}> {active_contributor2.html_url} </a>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="active_contributor3" bordered={true}>
                            name: {active_contributor3.login}
                            <div/>
                            commits: {active_contributor3.commits}
                            <div/>
                            html_url:<a href={active_contributor3.html_url}> {active_contributor3.html_url} </a>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={{paddingLeft: 40, fontSize: 20}}> Issues:</div>
            <div style={{paddingLeft: 40}}>
                <Row gutter={12}>
                    <Col span={6}>
                        <Card title="open_issues" bordered={true}>
                            numbers: {open_issues}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="close_issues" bordered={true}>
                            numbers: {clos_issues}
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={{paddingLeft: 40, fontSize: 20}}> The distribution of issues:</div>
            <div style={{paddingLeft: 40}}>
                <Row gutter={18}>
                    <Col span={6}>
                        <Card title="average" bordered={true}>
                            {average}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="max_difference" bordered={true}>
                            {max_difference}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="variance" bordered={true}>
                            {variance}
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={{paddingLeft: 40, fontSize: 20}}> The number of releases: {release}</div>
            <div style={{paddingLeft: 40, fontSize: 20}}> The number of commits between each release:</div>
            <div id="graph4" style={{paddingLeft: 40, width: 800, height: 400}}></div>
            <div style={{paddingLeft: 40, fontSize: 20}}> The time of developers commits:</div>
            <div style={{paddingLeft: 40}}>
                <Row gutter={12}>
                    <Col span={6}>
                        <Card title="weekdays" bordered={true}>
                            numbers: {weekdays}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="weekends" bordered={true}>
                            numbers: {weekends}
                        </Card>
                    </Col>
                </Row>
            </div>
            <div id="bing4" style={{paddingLeft: 40, width: 800, height: 400}}></div>
        </div>
    );
}
