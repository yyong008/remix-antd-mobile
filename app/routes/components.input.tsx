import { useState } from 'react'
import { Input } from 'antd-mobile'
import { DemoBlock } from '~/components/demos'
import styles from '~/styles/demo1.module.css'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import AppNav from '~/components/AppNav'

export default () => {
  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(false)
  return (
    <>
      <AppNav title="组件 - 输入框" />
      <DemoBlock title='基础用法'>
        <Input
          placeholder='请输入内容'
          value={value}
          onChange={val => {
            setValue(val)
          }}
        />
      </DemoBlock>

      <DemoBlock title='带清除按钮'>
        <Input placeholder='请输入内容' clearable />
      </DemoBlock>

      <DemoBlock title='输入内容右对齐'>
        <Input
          placeholder='请输入验证码'
          style={{ '--text-align': 'right' }}
          clearable
        />
      </DemoBlock>

      <DemoBlock title='只读状态'>
        <Input placeholder='请输入内容' value='只读模式的输入框' readOnly />
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Input placeholder='请输入内容' value='被禁用的输入框' disabled />
      </DemoBlock>

      <DemoBlock title='查看密码'>
        <div className={styles.password}>
          <Input
            className={styles.input}
            placeholder='请输入密码'
            type={visible ? 'text' : 'password'}
          />
          <div className={styles.eye}>
            {!visible ? (
              <EyeInvisibleOutline onClick={() => setVisible(true)} />
            ) : (
              <EyeOutline onClick={() => setVisible(false)} />
            )}
          </div>
        </div>
      </DemoBlock>
    </>
  )
}
