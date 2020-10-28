import React,{Fragment} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Link } from 'dva/router';
import Child from '../components/Child'

class userPage extends React.Component{
  render(){
    return(
      <Fragment>
        <div>
          我是用户
        </div>
        <Link to="/">首页</Link>
        <Child></Child>
      </Fragment>
     
    )
    
  }
}

export default userPage
