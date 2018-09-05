import React from 'react'
import { Card } from 'antd'
import axios from './../../axios'

export default class BikeMap extends React.Component {

    state = {}

    componentWillMount () {
        this.requestList()   
    }

    requestList = () => {
        axios.ajax({
            url: '/map/bike_list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then(res => {
            if (res.status == 1) {
                this.setState({
                    total_count: res.data.total_count
                })
                this.renderMap(res)
            }
        })
    }

    //渲染地图数据
    renderMap = (res) => {
        let list = res.data.route_list;
        this.map = new window.BMap.Map('contanier');
        this.map.enableScrollWheelZoom(true);

        //调用添加地图控件方法
        this.addMapControl();

        let gps1 = list[0].split(',');
        let startPoint = new window.BMap.Point(gps1[0], gps1[1]);
        let gps2 = list[list.length-1].split(',');
        let endPoint = new window.BMap.Point(gps2[0], gps2[1]);

        //地图中心点
        this.map.centerAndZoom(endPoint,11);

        //绘制起点图标
        let startIcon = new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36, 42),{
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        })
        let startMarker = new window.BMap.Marker(startPoint, {icon: startIcon});
        this.map.addOverlay(startMarker);

        //绘制终点图标
        let endIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42),{
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        })
        let endMarker = new window.BMap.Marker(endPoint, {icon: endIcon});
        this.map.addOverlay(endMarker);

        //绘制车辆行驶路线
        let routeList = [];
        list.forEach(item => {
            let p = item.split(',');
            routeList.push(new window.BMap.Point(p[0], p[1]))
        });

        let polyline = new window.BMap.Polyline(routeList, {
            strokeColor: "#ef4136",
            strokeWeight: 2,
            strokeOpacity: 1
        })
        this.map.addOverlay(polyline);

        //绘制服务区
        let servicePointList = [];
        let serviceList = res.data.service_list;
        serviceList.forEach(item => {
            servicePointList.push(new window.BMap.Point(item.lon, item.lat))
        })

        let polygon = new window.BMap.Polygon(servicePointList,{
            strokeColor: "#ef4136",
            strokeWeight: 3,
            strokeOpacity: 1
        })
        this.map.addOverlay(polygon);

        //添加地图中的自行车图标
        let bikeList = res.data.bike_list;
        let bikeIcon = new window.BMap.Icon('/assets/bike.jpg', new window.BMap.Size(36, 42),{
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        })
        bikeList.forEach(item => {
            let p = item.split(',');
            let point = new window.BMap.Point(p[0], p[1]);
            let bikeMarker = new window.BMap.Marker(point, {icon: bikeIcon});
            this.map.addOverlay(bikeMarker);
        });
    }

    //添加地图控件
    addMapControl = () => {
        var map = this.map;
        map.addControl(new window.BMap.ScaleControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT}));
        map.addControl(new window.BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT}));
    }
    
    render () {
        return (
            <div>
                <Card>
                    <div>共{ this.state.total_count }辆</div>
                    <div id="contanier" style={{ height: 700 }}></div>
                </Card>        
            </div>
        )
    }

}