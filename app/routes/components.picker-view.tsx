import { useState } from 'react'
import { PickerView } from 'antd-mobile'
import { DemoBlock } from '~/components/demos'

const basicColumns = [
  [
    { label: '周一', value: 'Mon' },
    { label: '周二', value: 'Tues' },
    { label: '周三', value: 'Wed' },
    { label: '周四', value: 'Thur' },
    { label: '周五', value: 'Fri' },
  ],
  [
    { label: '上午', value: 'am' },
    { label: '下午', value: 'pm' },
  ],
]

export default () => {
  const [value, setValue] = useState<(string | null)[]>(['Mon', 'am'])

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <PickerView columns={basicColumns} />
      </DemoBlock>

      <DemoBlock title='自定义高度' padding='0'>
        <PickerView
          columns={basicColumns}
          style={{ '--height': '500px', '--item-height': '2.8rem' }}
        />
      </DemoBlock>

      <DemoBlock title='受控模式' padding='0'>
        <PickerView
          columns={basicColumns}
          value={value}
          onChange={(val, extend) => {
            setValue(val)
            console.log('onChange', val, extend.items)
          }}
        />
      </DemoBlock>

      <DemoBlock title='通过鼠标滚轮进行选择' padding='0'>
        <PickerView columns={basicColumns} mouseWheel={true} />
      </DemoBlock>
    </>
  )
}
