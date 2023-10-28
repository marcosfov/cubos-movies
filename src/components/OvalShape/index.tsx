import * as S from './styles'

interface OvalShapeProps {
  text: string
}

const OvalShape = ({ text }: OvalShapeProps) => (
  <S.Wrapper>
    <S.Text>{text}</S.Text>
  </S.Wrapper>
)

export default OvalShape
