import React from 'react'
import { Card, Carousel } from 'antd'

export default class Carousels extends React.Component {

    render () {
        return (
            <div>
                <Card title="文字背景轮播" className="card-warp">
                    <Carousel autoplay>
                        <div><h3>Vue</h3></div>
                        <div><h3>React</h3></div>
                        <div><h3>Angular</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="slide-warp">
                    <Carousel autoplay>
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt="1"/>    
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt="2"/> 
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt="3"/> 
                        </div>
                    </Carousel>
                </Card>     
            </div>
        )
    }

}