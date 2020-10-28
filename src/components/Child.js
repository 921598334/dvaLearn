import React from 'react';
import { withRouter } from 'dva/router';

class Child extends React.Component{

  handle=()=>{
    this.props.history.push("/")
  }

  render(){
    return(
      <div>
        <div>我是通用组件</div>
        <button onClick={this.handle}>首页</button>
      </div>
    )
  }

}

//需要用withRouter进行包裹，否则无法得到this.props.history
export default withRouter(Child);
