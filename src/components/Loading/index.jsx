import { Dot, LoadingWrapper } from './style'

export default function Loading() {
  return (
    <LoadingWrapper>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
      {/* <Dot delay="0.3s" /> */}
    </LoadingWrapper>
  )
}