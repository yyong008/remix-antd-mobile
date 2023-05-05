import { Tabs } from 'antd-mobile'
import AppNav from '~/components/AppNav'
import { DemoBlock } from '~/components/demos'

export default () => {
  return (
    <>
      <AppNav title="组件 - 标签页" />
      <DemoBlock title='基础用法' padding='0'>
        <Tabs>
          <Tabs.Tab title='水果' key='fruits'>
            菠萝
          </Tabs.Tab>
          <Tabs.Tab title='蔬菜' key='vegetables'>
            西红柿
          </Tabs.Tab>
          <Tabs.Tab title='动物' key='animals'>
            蚂蚁
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title='超长自动滚动' padding='0'>
        <Tabs defaultActiveKey='1'>
          <Tabs.Tab title='Espresso' key='1'>
            1
          </Tabs.Tab>
          <Tabs.Tab title='Coffee Latte' key='2'>
            2
          </Tabs.Tab>
          <Tabs.Tab title='Cappuccino' key='3'>
            3
          </Tabs.Tab>
          <Tabs.Tab title='Americano' key='4'>
            4
          </Tabs.Tab>
          <Tabs.Tab title='Flat White' key='5'>
            5
          </Tabs.Tab>
          <Tabs.Tab title='Caramel Macchiato' key='6'>
            6
          </Tabs.Tab>
          <Tabs.Tab title='Cafe Mocha' key='7'>
            7
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title='没有内容区' padding='0'>
        <Tabs>
          <Tabs.Tab title='水果' key='fruits' />
          <Tabs.Tab title='蔬菜' key='vegetables' />
          <Tabs.Tab title='动物' key='animals' />
        </Tabs>
      </DemoBlock>

      <DemoBlock title='禁用状态' padding='0'>
        <Tabs>
          <Tabs.Tab title='水果' key='fruits' />
          <Tabs.Tab title='蔬菜' key='vegetables' />
          <Tabs.Tab title='动物' key='animals' disabled />
        </Tabs>
      </DemoBlock>
    </>
  )
}
