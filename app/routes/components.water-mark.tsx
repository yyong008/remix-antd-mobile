import { useState } from 'react'
import { Button, WaterMark } from 'antd-mobile'

import '~/styles/demo1.module.css'

const textProps = {
  content: 'Ant Design Mobile',
}

const rowsTextProps = {
  content: ['Ant Design Mobile', 'Ant Design Mobile Pro'],
}

const imageProps = {
  image:
    'https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg',
  imageWidth: 115,
  imageHeight: 36,
  width: 140,
  height: 80,
}

export default () => {
  const [props, setProps] = useState<{ [key: string]: any }>(textProps)

  return (
    <div className='water-mark-overlay'>
      <Button onClick={() => setProps(textProps)}>普通水印</Button>
      <br />
      <Button onClick={() => setProps(rowsTextProps)}>多行文字水印</Button>
      <br />
      <Button onClick={() => setProps(imageProps)}>图片水印</Button>
      <WaterMark {...props} />
    </div>
  )
}
