import React ,{ Component }from 'react';
import Slider from 'react-slick';//图片轮播
//样式
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.scss'
/**************************react_slick*********************
 *1.注意需要引入样式
 **************************属性**********************
 *1.
 **/

class react_slick extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_slick",
        }
    }
    render(){
        //Slider配置
        let settings={
            className:"widget_slick",
            dots: true,
            infinite:true,//无限包裹内容
            speed: 1000,//动画速度，以毫秒为单位
            autoplay:false,//是否自动播放幻灯片
            slidesToShow:1,//一帧显示多少张幻灯片
            slidesToScroll:1,//一次滚动几张幻灯片
            centerMode:false,//居中当前幻灯片
            //afterChange:function(idx){}//索引更改回调
        };
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <div className="widgetDiv">
                    <Slider {...settings}>
                        <div>
                            <img className="listImg" src="./static/images/1.jpg"></img>
                        </div>
                        <div>
                            <img className="listImg" src="./static/images/2.jpg"></img>
                        </div>
                        <div>
                            <img className="listImg" src="./static/images/3.jpg"></img>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default react_slick;