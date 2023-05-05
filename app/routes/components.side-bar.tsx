import { SideBar, Badge  } from 'antd-mobile'
import AppNav from '~/components/AppNav'
import { DemoBlock } from '~/components/demos'

const tabs = [
  {
    key: 'key1',
    title: '选项一',
    badge: Badge.dot,
  },
  {
    key: 'key2',
    title: '选项二',
    badge: '5',
  },
  {
    key: 'key3',
    title: '选项三',
    badge: '99+',
    disabled: true,
 
  },
]
export default () => {
  return (
    <>
      <AppNav title="组件 - 侧边导航" />
      <DemoBlock title='基础用法' padding='0'>
        <SideBar>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title='搭配 Badge 使用' padding='0'>
        <SideBar>
          {tabs.map(item => (
            <SideBar.Item
              key={item.key}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title='禁用状态' padding='0'>
        <SideBar>
          {tabs.map(item => (
            <SideBar.Item
              key={item.key}
              title={item.title}
              disabled={item.disabled}
            />
          ))}
        </SideBar>
      </DemoBlock>
    </>
  )
}
