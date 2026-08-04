export type PaintColor = 'violet' | 'acid'

export interface HeadlineWord {
  id: string
  text: string
  color: PaintColor
  variant: 'bold' | 'pixel'
}

export const heroWords: HeadlineWord[] = [
  { id: 'designing', text: 'Designing', color: 'acid', variant: 'pixel' },
  { id: 'people', text: 'people', color: 'violet', variant: 'bold' },
  { id: 'need', text: 'need', color: 'acid', variant: 'bold' },
]

type Segment = { type: 'word'; id: string } | { type: 'text'; value: string }

export const headlineSegments: Segment[] = [
  { type: 'word', id: 'designing' },
  { type: 'text', value: ' what ' },
  { type: 'word', id: 'people' },
  { type: 'text', value: ' actually ' },
  { type: 'word', id: 'need' },
  { type: 'text', value: '.' },
]
