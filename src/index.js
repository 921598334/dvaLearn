import dva from 'dva';
import './index.css';

// 1. Initialize
//const app = dva();

//可以避免hash路由
import createHistroy from 'history/createBrowserHistory'
const app = dva({
    history:createHistroy(),
})

// 2. Plugins
// app.use({});

// 3. Model
 app.model(require('./models/indexTest').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
