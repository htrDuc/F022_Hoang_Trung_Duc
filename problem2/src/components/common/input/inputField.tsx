import ArrowDownIcon from '@assets/icons/arrow-down-icon.svg?react'
import { roundNumber } from '@utils'
import { IInputProps } from './inputField.type'
import { SvgIcon } from '../icon'

export function InputField({ label, tokenInfo, onSelectCurrency, ...props }: IInputProps) {
  return (
    <>
      <div className='p-4 rounded-2xl bg-inputWrapper h-[120px] leading-5 font-medium mb-[5px] outline-0 hover:outline-1 hover:outline-gray'>
        <label className='text-sm font-485 text-label' htmlFor={props.id}>
          {label}
        </label>
        <div className='flex justify-between items-center gap-5'>
          <input
            className='bg-inputWrapper text-4xl placeholder:text-inputPlaceholder focus:outline-none w-full'
            {...props}
          />
          {tokenInfo?.currency ? (
            <button
              className='flex justify-between cursor-pointer  items-center outline-none ml-3 rounded-2xl p-button gap-3 bg-semiBlack hover:bg-currencyHover'
              onClick={onSelectCurrency}
            >
              <SvgIcon iconName={tokenInfo.currency} />
              <div className='text-lg'>{tokenInfo.currency.toUpperCase()}</div>
              <ArrowDownIcon />
            </button>
          ) : (
            <button
              className='flex justify-between cursor-pointer  items-center outline-none bg-button border-button ml-3 rounded-2xl p-button gap-3 hover:bg-buttonSelectHover'
              onClick={onSelectCurrency}
            >
              <div className='text-xl font-535 whitespace-nowrap'>Select token</div>
              <ArrowDownIcon className='h-[35%]' />
            </button>
          )}
        </div>
        {Number(props.value) > 0 && (
          <div className='font-485 text-sm text-label mt-2'>
            ${roundNumber(Number(tokenInfo?.price) * Number(props.value))}
          </div>
        )}
      </div>
    </>
  )
}
