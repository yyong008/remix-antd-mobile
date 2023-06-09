import { Skeleton } from 'antd-mobile'
import AppNav from '~/components/AppNav'
import { DemoBlock } from '~/components/demos'
import styles from '~/styles/demo1.module.css'

export default () => {
  return (
    <>
      <AppNav title="组件 - 骨架屏" />
      <DemoBlock title='基础用法'>
        <Skeleton.Title />
        <Skeleton.Paragraph />
      </DemoBlock>
      <DemoBlock title='有动画的骨架屏'>
        <Skeleton.Title animated />
        <Skeleton.Paragraph lineCount={5} animated />
      </DemoBlock>
      <DemoBlock title='自定义'>
        <Skeleton animated className={styles.customSkeleton} />
      </DemoBlock>
    </>
  )
}
