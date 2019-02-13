import { getIndexInfo } from '@/services/api';

export default {
  namespace: 'scrollpic',
  state: {
    indexInfo: {
      scrollPictures: null,
      themeColor: null,
    },
  },
  effects: {
    *fetchIndexInfo(_, { put, call }) {
      const data = yield call(getIndexInfo);
      yield put({ type: 'saveIndexInfo', payload: data });
    },
  },
  reducers: {
    saveIndexInfo(state, { payload: OriginIndexInfo }) {
      const indexInfo = OriginIndexInfo;
      return { ...state, indexInfo };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/dashboard/scrollpic') {
          dispatch({
            type: 'fetchIndexInfo',
          });
        }
      });
    },
  },
};
