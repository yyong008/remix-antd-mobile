import { PageIndicator } from 'antd-mobile'
import AppNav from '~/components/AppNav'
import { DemoBlock } from '~/components/demos'

export default () => {
  return (
    <>
      <AppNav title="组件 - 分页符" />  
      <DemoBlock title='基础用法'>
        <PageIndicator total={4} current={0} />
      </DemoBlock>

      <DemoBlock title='白色' background='rgb(212 212 212)'>
        <PageIndicator total={4} current={0} color='white' />
      </DemoBlock>

      <DemoBlock title='竖直方向'>
        <PageIndicator total={4} current={0} direction='vertical' />
      </DemoBlock>

      <DemoBlock title='自定义颜色和大小'>
        <PageIndicator
          total={4}
          current={0}
          style={{
            '--dot-color': 'rgba(0, 0, 0, 0.4)',
            '--active-dot-color': '#ffc0cb',
            '--dot-size': '10px',
            '--active-dot-size': '30px',
            '--dot-border-radius': '50%',
            '--active-dot-border-radius': '15px',
            '--dot-spacing': '8px',
          }}
        />
      </DemoBlock>
    </>
  )
}
