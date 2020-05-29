import React ,{ Component }from 'react';
import { Anchor } from 'antd';
import { Card, Col, Row } from 'antd';
const { Link } = Anchor;

class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index",
        }
    }
    render(){
        return(
            <div className="wrap">
                <Row gutter={16}>
                <Col span={6}>
                    <Card title="目录" bordered={false}>    
                
                        {/* 设置指定目标容器  记得带上 官方事件  这样就不会 进行路由跳转 */}
                        <Anchor onClick={e => e.preventDefault()} getContainer={() => document.getElementById('content')}  >
                            <Link href="#First"  title="第一章节"  />
                            <Link href="#Second" title="第二章节" />
                        </Anchor>
                    </Card>
                </Col>
                <Col span={4}  >
                    <Card title="内容" bordered={false} >
                        //目标容器 处设置高度 以及 滚动
                        <div  id='content' style={{height:100,overflow:'auto'}}> // 关键点
                            <h1 id="First">第一章节</h1>
                            <span>
                            JavaScript是一种属于网络的脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML中来实现自身的功能的。
                            是一种解释性脚本语言（代码不进行预编译）。
                            主要用来向HTML（标准通用标记语言下的一个应用）页面添加交互行为。
                            可以直接嵌入HTML页面，但写成单独的js文件有利于结构和行为的分离。
                            跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如Windows、Linux、Mac、Android、iOS等）。
                            Javascript脚本语言同其他语言一样，有它自身的基本数据类型，表达式和算术运算符及程序的基本程序框架。Javascript提供了四种基本的数据类型和两种特殊数据类型用来处理数据和文字。而变量提供存放信息的地方，表达式则可以完成较复杂的信息处理。
                        </span>
                            <h1 id="Second">第二章节</h1>
                            <span>
                            它最初由Netscape的Brendan Eich设计。JavaScript是甲骨文公司的注册商标。Ecma国际以JavaScript为基础制定了ECMAScript标准。JavaScript也可以用于其他场合，如服务器端编程。完整的JavaScript实现包含三个部分：ECMAScript，文档对象模型，浏览器对象模型。 [7]
                            Netscape在最初将其脚本语言命名为LiveScript，后来Netscape在与Sun合作之后将其改名为JavaScript。JavaScript最初受Java启发而开始设计的，目的之一就是“看上去像Java”，因此语法上有类似之处，一些名称和命名规范也借自Java。但JavaScript的主要设计原则源自Self和Scheme。JavaScript与Java名称上的近似，是当时Netscape为了营销考虑与Sun微系统达成协议的结果。为了取得技术优势，微软推出了JScript来迎战JavaScript的脚本语言。为了互用性，Ecma国际（前身为欧洲计算机制造商协会）创建了ECMA-262标准（ECMAScript）。两者都属于ECMAScript的实现。尽管JavaScript作为给非程序人员的脚本语言，而非作为给程序人员的脚本语言来推广和宣传，但是JavaScript具有非常丰富的特性。 [8]
                            发展初期，JavaScript的标准并未确定，同期有Netscape的JavaScript，微软的JScript和CEnvi的ScriptEase三足鼎立。1997年，在ECMA（欧洲计算机制造商协会）的协调下，由Netscape、Sun、微软、Borland组成的工作组确定统一标准：ECMA-262。
                            </span>
                        </div>
                    </Card>
                </Col>
                </Row>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
