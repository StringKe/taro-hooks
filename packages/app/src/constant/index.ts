export interface APIListItem {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export type APIList = APIListItem[];

export const List: APIList = [
  {
    id: 'Basic',
    title: '基础Hooks',
    content: '包含事件、调试等',
    icon: 'filter',
  },
  {
    id: 'Environment',
    title: '环境Hooks',
    content: '包含环境判断等',
    icon: 'equalizer',
  },
];

export interface APIChildrenItem {
  id: string;
  name: string;
}

export enum APIChildrenName {
  basic = 'basic',
  environment = 'environment',
}

export const ChildrenList: { [_: string]: APIChildrenItem[] } = {
  [APIChildrenName.basic]: [
    {
      id: 'useAPICheck',
      name: 'useAPICheck 判断是否可用',
    },
  ],
  [APIChildrenName.environment]: [
    {
      id: 'useEnv',
      name: 'useEnv 获取当前环境值',
    },
  ],
};