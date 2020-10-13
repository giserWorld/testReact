import React,{ Component }from 'react';
import { Resizable } from 'react-resizable';
import './css/myReact.scss';
/********************配置可调整的单元格td*********************
 *更新时间:2020.10.13 wxt
 *1.直接使用组件可伸缩列没有效果，需要添加特定的样式到该组件上
 */
class resizableTd extends Component{
    render(){
        const { onResize, width, ...restProps } = this.props;
        if(!width) {
            return <th {...restProps} />;
        }
        //设置可拖动单元格
        return (
            <Resizable
              width={width}
              height={0}
              handle={
                <span
                  className="react-resizable-handle"
                  onClick={e=>{e.stopPropagation()}}
                />
              }
              onResize={onResize}
              draggableOpts={{ enableUserSelectHack: false }}
            >
              <th {...restProps} />
            </Resizable>
        );
    }
}
export default resizableTd;