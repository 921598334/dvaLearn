import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import * as apis from '../services/example'
import PropTypes from 'prop-types';


class IndexPage extends React.Component{



  handleNamereduct=()=>{
    console.log(this.props);
    //访问model的reduce
    this.props.dispatch({
      //前面的表示命名空间，后面的是方法名称
      type:"indexTest/save",
      data:{
        name:"猪猪下"
      }

    })
  }


  handleNameeffect=()=>{
    console.log(this.props);
   
    this.props.dispatch({
      //前面的表示命名空间，后面的是方法名称
      type:"indexTest/setNameSync",
      data:{
        name:"猪猪下11"
      }

    })
  }


  handleNameCall=()=>{
   
    this.props.dispatch({
      //前面的表示命名空间，后面的是方法名称
      type:"indexTest/test1",
     

    })
  }

  handleNameMock=()=>{
   
    this.props.dispatch({
      //前面的表示命名空间，后面的是方法名称
      type:"indexTest/testMock",
     

    })
  }





  render(){
    console.log(this.props)
    return(
      <div>
        
        <h1>Hello, {this.props.name}</h1>

        {this.props.name}

        <button onClick={this.handleNamereduct}>reduct</button>

        <button onClick={this.handleNameeffect}>effect</button>

        <button onClick={this.handleNameCall}>call</button>

        <button onClick={this.handleNameMock}>Mock</button>
        
      </div>
     
     
    )
  }
}


const mapStateToProps=state=>{
  //实现model数据和页面进行绑定
  console.log(state);
  return {
    //让前端页面的prop可以得到该数据
    msg:"我爱背景",
    name:state.indexTest.name
  }
}

IndexPage.propTypes = {
  name: PropTypes.string
};

export default connect(mapStateToProps)(IndexPage);
