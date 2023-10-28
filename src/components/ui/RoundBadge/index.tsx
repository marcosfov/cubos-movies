import * as S from './styles'

interface RoundBadgeProps {
  text: string
  size: 'sm' | 'md' | 'lg'
}

const RoundBadge = ({ text, size }: RoundBadgeProps) => (
  <S.External size={size}>
    <S.Internal size={size}>
      <S.Text size={size}>{text}</S.Text>
    </S.Internal>
  </S.External>
)

export default RoundBadge
