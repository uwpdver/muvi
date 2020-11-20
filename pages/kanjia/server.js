import request from '../../lib/request';
import { wait } from './utils';
import fakeData from './fakeData';

export default {
  getOrderRecord: async () => {
    await wait(0);
    return fakeData.messages
  },
  getGoodsInfo: async () => {
    await wait(0);
    return fakeData.goodsInfo
  },
  getHelpRecords: async () => {
    await wait(0);
    return fakeData.records
  }
}