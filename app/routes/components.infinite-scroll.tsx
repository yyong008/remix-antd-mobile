import { useState } from 'react'
import { InfiniteScroll, List } from 'antd-mobile'
import { sleep } from '~/components/demos'
import AppNav from '~/components/AppNav'

let count = 0

export async function mockRequest() {
  if (count >= 5) {
    return []
  }
  await sleep(2000)
  count++
  return [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
  ]
}

export default () => {
  const [data, setData] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)
  async function loadMore() {
    const append = await mockRequest()
    setData(val => [...val, ...append])
    setHasMore(append.length > 0)
  }

  return (
    <>
      <AppNav title="组件 - 无限滚动" />
      <List>
        {data.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </>
  )
}