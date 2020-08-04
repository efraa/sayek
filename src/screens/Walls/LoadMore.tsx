import React from 'react'
import { LoadMoreContent, LoadMore as More } from './Style'

interface IProps {
  show: boolean
  loadRef: React.RefObject<HTMLDivElement>
}

export const LoadMore: React.FC<IProps> = ({ show, loadRef }) => (
  <More ref={loadRef}>
    {show ? (
      <>
        {[1, 2, 3].map(i => (
          <LoadMoreContent key={i}>
            <div className="load" />
            <div className="load" />
          </LoadMoreContent>
        ))}
      </>
    ) : null}
  </More>
)
