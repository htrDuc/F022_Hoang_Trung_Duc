import { TokenType } from '../../common/modal/listTokenModal'
import { ModalInfoType } from '../../../App'

export interface ISwapFormProps {
  payValue: number
  receiveValue: number
  currencyOfPay: TokenType
  currencyOfReceive: TokenType
  handleChangeReceiveValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangePayValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  setModalInfo: (payload: ModalInfoType) => void
}
