import { TYPE_OF_INPUT } from '@constants'
import { InputField } from '@components/common/input'
import { ISwapFormProps } from './swapForm.type'

export function SwapForm({
  payValue,
  currencyOfPay,
  receiveValue,
  currencyOfReceive,
  handleChangeReceiveValue,
  handleChangePayValue,
  setModalInfo
}: ISwapFormProps) {
  return (
    <>
      <InputField
        id={TYPE_OF_INPUT.PAY}
        label='You Pay'
        type='number'
        value={String(payValue)}
        tokenInfo={currencyOfPay}
        onChange={handleChangePayValue}
        onSelectCurrency={() => setModalInfo({ type: TYPE_OF_INPUT.PAY, isOpen: true })}
      />
      <InputField
        id={TYPE_OF_INPUT.RECEIVE}
        label='You Receive'
        type='number'
        value={String(receiveValue)}
        tokenInfo={currencyOfReceive}
        onChange={handleChangeReceiveValue}
        onSelectCurrency={() => setModalInfo({ type: TYPE_OF_INPUT.RECEIVE, isOpen: true })}
      />
      <button className='w-full text-xl text-button bg-buttonSwap p-4 cursor-pointer flex items-center justify-center rounded-t-2xl rounded-b-3xl hover:bg-buttonSwapHover'>
        Swap
      </button>
    </>
  )
}
