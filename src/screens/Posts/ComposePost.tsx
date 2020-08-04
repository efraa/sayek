import React, { useState, useRef, useEffect } from 'react'
import sanitizeHtml from 'sanitize-html'
import { truncate } from '../../helpers/truncate'

// Comps
import {
  ComposeInput,
  Wrapper,
  ComposeWrapper,
  ComposeOnWall,
  ComposeInputWrapper,
} from './Style'
import ContentEditable from 'react-contenteditable'
import { Layout } from '../../components/Layout'
import { Messages } from '../../data/messageConstants'
import { Button } from '../../components/Button'
import { ColorPicker } from '../../components/ColorPicker'

const ComposePost = () => {
  const ref = useRef<any>(null)
  const [data, setData] = useState({
    content: '',
    color: {
      id: 0,
      bg: '',
      color: '',
    },
  })

  const onSubmit = e => {
    e.preventDefault()
    console.log(data)
  }

  const formatData = (data: string) => {
    const sanitizeHTML = sanitizeHtml(data, {
      allowedTags: ['b', 'i', 'br', 'div'],
      allowedAttributes: false,
    })

    return sanitizeHTML
  }

  const onInput = e => {
    setData({
      ...data,
      content: formatData(e.target.value),
    })
  }

  useEffect(() => {
    if (ref && ref.current) {
      ref.current?.focus()
    }
  }, [])

  return (
    <Layout title={Messages.posts.create.title}>
      <Wrapper onSubmit={onSubmit}>
        <ComposeInputWrapper
          onClick={() => ref.current?.focus()}
          style={{ background: data.color.bg }}
        >
          <ComposeInput
            innerRef={ref}
            placeholder={Messages.posts.create.placeholder}
            color={data.color.color}
            html={data.content}
            onChange={onInput}
            as={ContentEditable}
          />
        </ComposeInputWrapper>

        <ComposeOnWall>
          <span>{truncate('test wall', 30)}</span>
        </ComposeOnWall>
        <ComposeWrapper>
          <ColorPicker onChangeColor={color => setData({ ...data, color })} />
          <Button type="submit" disabled={data.color.id === 0 || !data.content}>
            {Messages.posts.create.button}
          </Button>
        </ComposeWrapper>
      </Wrapper>
    </Layout>
  )
}

export default ComposePost
