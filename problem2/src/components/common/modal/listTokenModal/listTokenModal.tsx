import CloseIcon from '@assets/icons/close-icon.svg?react'
import SearchIcon from '@assets/icons/search-icon.svg?react'
import { TYPE_OF_INPUT } from '@constants'
import { useDebounce } from '@hooks/useDebounce'
import { useCallback, useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { SvgIcon } from '../../icon'
import { ListTokensModalProps, ModalInfoType, TokenType, customStyleModal } from '../listTokenModal'

export const ListTokenModal = ({
  tokens,
  modalInfo,
  setModalInfo,
  setCurrencyOfPay,
  setCurrencyOfReceive
}: ListTokensModalProps) => {
  const [searchedToken, setSearchedToken] = useState<string>('')
  const [filterTokens, setFilterTokens] = useState<TokenType[]>(tokens)
  const searchedTokenDebounce = useDebounce(searchedToken)

  const handleSelectToken = (tokenInfo: TokenType) => {
    if (modalInfo.type === TYPE_OF_INPUT.PAY) {
      setCurrencyOfPay(tokenInfo)
      onRequestClose()
    } else if (modalInfo.type === TYPE_OF_INPUT.RECEIVE) {
      setCurrencyOfReceive(tokenInfo)
      onRequestClose()
    }
  }

  const onRequestClose = () => {
    setModalInfo((prev: ModalInfoType) => ({ ...prev, isOpen: !prev.isOpen }))
  }

  const handleSearchToken = useCallback(async () => {
    const newListOfTokens = tokens.filter((token) =>
      token.currency.toLowerCase().includes(searchedTokenDebounce.toLowerCase())
    )
    setFilterTokens(newListOfTokens)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedTokenDebounce])

  useEffect(() => {
    handleSearchToken()
  }, [handleSearchToken])

  return (
    <ReactModal
      isOpen={true}
      style={customStyleModal}
      ariaHideApp={false}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={onRequestClose}
      contentLabel='Select a token'
    >
      <div className='p-5 flex flex-col content-between gap-4'>
        <div className='flex items-center justify-between'>
          <p className='font-535 text-base'>Select a token</p>
          <div>
            <CloseIcon className='cursor-pointer' onClick={onRequestClose} />
          </div>
        </div>
        <div className='w-full relative'>
          <SearchIcon className='absolute top-[50%] left-2 translate-y-[-50%]' />
          <input
            className='w-full h-[40px] p-input outline-none text-input rounded-xl'
            placeholder='Search name or paste address'
            value={searchedToken}
            onChange={(e) => setSearchedToken(e.target.value)}
          />
        </div>
      </div>
      <hr className='border-whiteOpacity7' />
      <div className='max-h-[500px] overflow-auto scrollbar-thumb-gray scrollbar-thin p-5 pt-2 px-0'>
        {filterTokens.length ? (
          filterTokens.map((token, index) => (
            <div
              key={index}
              className='py-2 flex items-center cursor-pointer px-5 hover:bg-zinc-700'
              onClick={() => handleSelectToken(token)}
            >
              <SvgIcon iconName={token.currency} />
              <div className='text-sm font-bold pl-3'>{token.currency.toUpperCase()}</div>
            </div>
          ))
        ) : (
          <>
            <p>Nothing to show here</p>
          </>
        )}
      </div>
    </ReactModal>
  )
}
