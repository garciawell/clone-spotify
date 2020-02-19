import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({
    // host: '192.168.56.1'
    host: '10.0.3.2',
  }) // controls connection & communication settings
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect(); // let's connect!

  console.tron = tron;

  tron.clear();
}
