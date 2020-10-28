import * as apis from '../services/example'


export default {

  namespace: 'indexTest',

  state: {
    test:"测试"
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line

      console.log(history)
 

      if(history.location.pathname==="/user"){
        console.log("用户页") 
      }else{
        console.log("其他") 
      }

      // history.listen(({pathName})=>{
      //   if(pathName=="/user"){
      //     console.log("用户页") 
      //   }else{
      //     console.log("其他页面："+pathName)
      //   }
      // })
    },
  },

  //异步方法
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    *setNameSync({ payload }, { call, put }) {  // eslint-disable-line

      //put传入reducers里面的方法
      yield put({ type: 'save',data:{name:"超人强大"} });
       
      //call发接口
    },
    *test1({ payload }, { call, put }) {  // eslint-disable-line

      console.log("开始发送请")
       //同步请求，会堵塞（如果不加yield就是同步）
      let rel = yield call(apis.testRequest)
      
      if(rel.data){
        console.log("得到结果:")
        yield put({ type: 'save',data:{name:rel.data.key} });
      }else{
        console.log("没有得到结果:")
      }

      console.log(rel)
      
    },

    *testMock({ payload }, { call, put }) {  // eslint-disable-line
      console.log('测试mock')
      let rel = yield call(apis.mockData)
      console.log(rel)
    },





  },

  //同步方法
  reducers: {
    //第二个参数表示从组件传过来的参数，该函数必须返回state
    save(state, action) {
      console.log(action.data.name)

      //把数据返回给前端需要这样写，固定写法
      let _state = JSON.parse(JSON.stringify(state))
      _state.name = action.data.name

      return { ..._state, ...action.payload };
    },
  },

};
