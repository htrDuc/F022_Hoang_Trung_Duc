import { ModalInfoType } from '@/App.tsx'
import { TYPE_OF_INPUT } from '@constants'
import { ObjectAsEnum } from '@utils'

export interface ListTokensModalProps {
  tokens: TokenType[]
  modalInfo: ModalInfoType
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfoType>>
  setCurrencyOfPay: React.Dispatch<React.SetStateAction<TokenType>>
  setCurrencyOfReceive: React.Dispatch<React.SetStateAction<TokenType>>
}

export interface TokenType {
  currency: string
  price: number
}

export type TypeOfInputType = ObjectAsEnum<typeof TYPE_OF_INPUT>
export type ModalInfoType = { type: TypeOfInputType; isOpen: boolean }
