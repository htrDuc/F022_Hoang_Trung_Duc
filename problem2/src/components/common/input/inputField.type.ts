import { TokenType } from '../modal/listTokenModal'

export interface IInputProps {
  label?: string
  tokenInfo?: TokenType
  id: string
  value: string
  type?: 'text' | 'number'
  onChange: (e: React.ChangeEvent) => void
  onSelectCurrency?: () => void
}
