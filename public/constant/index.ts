/**
 * @description make common constant of examples
 */

export type MenuItem = {
  id: string;
  name: string;
  path: string;
  tabBar?: boolean;
  onlyMini?: boolean;
};

export type CollapseItem = {
  groupName: string;
  tip?: string;
  menu: MenuItem[];
};

// hooks demo menu
const DEMOHOOKS = [
  'useContext',
  'useEffect',
  'useReducer',
  'useRef',
  'useState',
] as const;
export const HOOKSMENU: MenuItem[] = DEMOHOOKS.map((hooksName) => ({
  name: hooksName.replace('use', 'useTaro'),
  path: `/pages/${hooksName}/index`,
  id: hooksName,
}));

export interface APIChildrenItem {
  id: string;
  name: string;
  tabBar?: boolean;
  onlyMini?: boolean;
  path?: string;
}

export enum APIChildrenName {
  basic = 'basic',
  layout = 'layout',
  environment = 'environment',
  wechat = 'wechat',
  network = 'network',
  feedback = 'feedback',
  media = 'media',
  device = 'device',
}

export const ChildrenList: { [_: string]: APIChildrenItem[] } = {
  [APIChildrenName.basic]: [
    {
      id: 'useWebp',
      name: 'useWebp 判断WebP是否可用',
    },
    {
      id: 'useApp',
      name: 'useApp 应用实例',
    },
    {
      id: 'usePage',
      name: 'usePage 页面(栈)',
    },
    {
      id: 'useEvent',
      name: 'useEvent 事件中心',
    },
    {
      id: 'useRouter',
      name: 'useRouter 路由',
    },
    {
      id: 'useFrom',
      name: 'useFrom 路由来源',
    },
    {
      id: 'useArrayBuffer',
      name: 'useArrayBuffer 转换',
    },
    {
      id: 'useClipboardData',
      name: 'useClipboardData 剪贴板',
    },
    {
      id: 'useSystemInfo',
      name: 'useSystemInfo 系统信息',
    },
    {
      id: 'useDeviceInfo',
      name: 'useDeviceInfo 设备基础信息',
    },
    {
      id: 'useWindowInfo',
      name: 'useWindowInfo 窗口信息',
    },
    {
      id: 'useVisible',
      name: 'useVisible 页面状态',
    },
    {
      id: 'useSelectorQuery',
      name: 'useSelectorQuery 节点查询',
    },
    {
      id: 'usePromise',
      name: 'usePromise 异步',
    },
    {
      id: 'useStorage',
      name: 'useStorage 数据缓存',
    },
  ],
  [APIChildrenName.layout]: [
    {
      id: 'useBackground',
      name: 'useBackground 窗口设置',
      // 背景色共用下拉
      path: '/pages/layout/useManualPullDownRefresh/index',
    },
    {
      id: 'useManualPullDownRefresh',
      name: 'useManualPullDownRefresh 手动下拉刷新',
    },
    {
      id: 'useTabBar',
      name: 'useTabBar tab栏',
      tabBar: true,
    },
  ],
  [APIChildrenName.feedback]: [
    {
      id: 'useToast',
      name: 'useToast 消息提示框',
    },
    {
      id: 'useModal',
      name: 'useModal 模态对话框',
    },
    {
      id: 'useLoading',
      name: 'useLoading 加载提示框',
    },
    {
      id: 'useActionSheet',
      name: 'useActionSheet 操作菜单',
    },
    {
      id: 'useNavigationBar',
      name: 'useNavigationBar 导航条',
    },
    {
      id: 'useAlertBeforeUnload',
      name: 'useAlertBeforeUnload 小程序关闭',
      onlyMini: true,
    },
  ],
  [APIChildrenName.environment]: [
    {
      id: 'useEnv',
      name: 'useEnv 获取当前环境值',
    },
  ],
  [APIChildrenName.wechat]: [
    {
      id: 'useAPICheck',
      name: 'useAPICheck 判断是否可用',
      onlyMini: true,
    },
    {
      id: 'useUpdateManager',
      name: 'useUpdateManager 更新',
      onlyMini: true,
    },
    {
      id: 'useLaunchOptions',
      name: 'useLaunchOptions 启动参数',
      onlyMini: true,
    },
    {
      id: 'useEnterOptions',
      name: 'useEnterOptions 启动参数',
      onlyMini: true,
    },
    {
      id: 'useUserInfo',
      name: 'useUserInfo 用户信息',
      onlyMini: true,
    },
    {
      id: 'useAccountInfo',
      name: 'useAccountInfo 账号信息',
      onlyMini: true,
    },
    {
      id: 'useAuthorize',
      name: 'useAuthorize 用户授权',
      onlyMini: true,
    },
    {
      id: 'useRequestSubscribeMessage',
      name: 'useRequestSubscribeMessage 订阅消息',
      onlyMini: true,
    },
    {
      id: 'useChooseAddress',
      name: 'useChooseAddress 收货地址',
    },
    {
      id: 'useInvoice',
      name: 'useInvoice 发票(抬头)',
      onlyMini: true,
    },
    {
      id: 'useWeRun',
      name: 'useWeRun 微信运动',
      onlyMini: true,
    },
    {
      id: 'useTopBarText',
      name: 'useTopBarText 置顶信息',
      onlyMini: true,
    },
    {
      id: 'useMenuButtonBoundingClientRect',
      name: 'useMenuButtonBoundingClientRect 胶囊位置',
      onlyMini: true,
    },
  ],
  [APIChildrenName.media]: [
    {
      id: 'useImage',
      name: 'useImage 图片',
    },
    {
      id: 'useVideo',
      name: 'useVideo 视频',
    },
    {
      id: 'useAudio',
      name: 'useRecord 录音',
    },
    {
      id: 'useAudio',
      name: 'useAudio 音频',
    },
    {
      id: 'useCamera',
      name: 'useCamera 相机',
    },
    {
      id: 'useMap',
      name: 'useMap 地图',
    },
  ],
  [APIChildrenName.device]: [
    {
      id: 'useBattery',
      name: 'useBattery 电量',
    },
    {
      id: 'useVibrate',
      name: 'useVibrate 震动反馈',
    },
    {
      id: 'useMotion',
      name: 'useMotion 设备方向',
    },
    {
      id: 'useBrightness',
      name: 'useBrightness 屏幕亮度',
    },
    {
      id: 'useLocation',
      name: 'useLocation 地理位置',
    },
    {
      id: 'useScanCode',
      name: 'useScanCode 扫码',
    },
    {
      id: 'useBluetooth',
      name: 'useBluetooth 蓝牙',
    },
    {
      id: 'useKeyboard',
      name: 'useKeyboard 键盘',
      onlyMini: true,
    },
  ],
  [APIChildrenName.network]: [
    {
      id: 'useRequest',
      name: 'useRequest 请求',
    },
    {
      id: 'useNetworkType',
      name: 'useNetworkType 网络类型',
    },
    {
      id: 'useOnline',
      name: 'useOnline 网络状态',
    },
    {
      id: 'useFile',
      name: 'useFile 上传下载',
    },
  ],
};

export const SceneEnum: { [_: number]: string } = {
  1020: '公众号 profile 页相关小程序列表',
  1035: '公众号自定义菜单',
  1036: 'App 分享消息卡片',
  1037: '小程序打开小程序',
  1038: '从另一个小程序返回',
  1043: '公众号模板消息',
};

export const PRODUCTIONDISABLEPANEL: string[] = [
  'useVideo',
  'useWeRun',
  'useInvoice',
];

export const NETWORKTYPE = {
  wifi: 'wifi',
  '2g': '2g',
  '3g': '3g',
  '4g': '4g',
  '5g': '5g',
  unknown: 'unknown',
  none: 'none',
};

const MENU: CollapseItem[] = [
  {
    groupName: '基础',
    tip: '包含事件、调试等',
    menu: generateMenuItem(APIChildrenName.basic),
  },
  {
    groupName: '布局',
    tip: '包含tab、背景等',
    menu: generateMenuItem(APIChildrenName.layout),
  },
  {
    groupName: '操作反馈',
    tip: '包含Toast, Modal等',
    menu: generateMenuItem(APIChildrenName.feedback),
  },
  {
    groupName: '网络',
    tip: '包含请求、下载等',
    menu: generateMenuItem(APIChildrenName.network),
  },
  {
    groupName: '媒体',
    tip: '包含图片、音频等',
    menu: generateMenuItem(APIChildrenName.media),
  },
  {
    groupName: '设备',
    tip: '包含地理位置、电量等',
    menu: generateMenuItem(APIChildrenName.device),
  },
  {
    groupName: '小程序',
    tip: '包含管理器、API等',
    menu: generateMenuItem(APIChildrenName.wechat),
  },
  {
    groupName: '环境',
    tip: '包含环境判断等',
    menu: generateMenuItem(APIChildrenName.environment),
  },
];

export function generateMenuItem(key: APIChildrenName): MenuItem[] {
  const menuList = ChildrenList[key];

  return menuList.map(({ id, name, ...item }) => ({
    id,
    name,
    path: `/pages/${key}/${id}/index`,
    ...item,
  }));
}

/**
 * generate menu of examples project index menu
 * @param {boolean} vue vue project?
 * @return {MenuItem[]}
 */
export function generateIndexMenu(vue?: boolean): CollapseItem[] {
  if (vue)
    return [
      { groupName: 'CompositionAPI', tip: 'Vue Hooks', menu: HOOKSMENU },
      ...MENU,
    ];

  return MENU;
}
