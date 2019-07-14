import jsonp from './jsonp';
import { URL, PARAM, OPTION } from './config';
export function getCarousel() {
  return jsonp(
    URL.carousel,
    {
      ...PARAM,
      _: new Date().getTime(),
      g_tk: 5381,
      uin: 0,
      platform: 'h5',
      needNewCode: 1,
    },
    OPTION
  )
}

export function test() {
  return jsonp(
    URL.carousel,
    {
      data: {"page":1,"pageSize":"10","pid":"137185","appPlat":"m"},
      'mw-group': 'scene_social',
      'mw-appkey': 100028,
      'mw-ttid': 'NMMain@mgj_h5_1.0',
      'mw-t': 1562407634310,
      'mw-uuid': '90f0ec30-b0fa-4860-b034-35a58c2a5dbd',
      'mw-h5-os': 'iOS',
      'mw-sign': '9df0d1f6216cddaa25c60665445115d6',
      'callback': 'mwpCb1',
      '_': 1562407634319
    }
  )
}
