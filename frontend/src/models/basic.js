import update from 'immutability-helper';
import { getIndexInfo } from '../services/index';
import { indexScrollPicFolderPath } from '../globalConfig';

export default {
  // 可以省略 namespace: 'basic'
  state: {
    indexInfo: {
      scrollPictures: null,
      themeColor: null,
    },
  },
  reducers: {
    saveIndexInfo(state, { payload: OriginIndexInfo }) {
      // 【comment temporarily】
      // const indexInfo = update(OriginIndexInfo, {
      //   scrollPictures: {
      //     $set: OriginIndexInfo.scrollPictures.map(item => indexScrollPicFolderPath + item),
      //   },
      // });
      const indexInfo = OriginIndexInfo;
      return { ...state, indexInfo };
    },
  },
  effects: {
    *fetchIndexInfo({ payload }, { put, call }) {
      const reqResult = yield call(getIndexInfo);
      // check it right
      console.log(reqResult);
      const { data } = reqResult;
      yield put({ type: 'saveIndexInfo', payload: data });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'fetchIndexInfo',
          });
        }
      });
    },
  },
};
