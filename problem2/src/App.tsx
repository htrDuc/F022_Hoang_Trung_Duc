import MenuIcon from '@assets/icons/menu-icon.svg?react'
import { ListTokenModal, ModalInfoType, TokenType, TypeOfInputType } from '@components/common/modal/listTokenModal'
import { SwapForm } from '@components/form/swapForm'
import { TYPE_OF_INPUT, URL } from '@constants'
import { roundNumber } from '@utils'
import { useEffect, useState } from 'react'

function App() {
  const [tokens, setTokens] = useState<TokenType[]>([])
  const [payValue, setPayValue] = useState<number>(0)
  const [receiveValue, setReceiveValue] = useState<number>(0)
  const [currencyOfPay, setCurrencyOfPay] = useState<TokenType>({
    currency: 'ETH',
    price: 1645.9337373737374
  })
  const [currencyOfReceive, setCurrencyOfReceive] = useState<TokenType>({
    currency: '',
    price: 0
  })
  const [modalInfo, setModalInfo] = useState<ModalInfoType>({
    type: TYPE_OF_INPUT.PAY,
    isOpen: false
  })
  const [typeOfInputFocus, setTypeOfInputFocus] = useState<TypeOfInputType>(TYPE_OF_INPUT.PAY)

  const handleChangePayValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!currencyOfReceive.currency) {
      setReceiveValue(0)
    }

    setTypeOfInputFocus(TYPE_OF_INPUT.PAY)
    setPayValue(Number(e.target.value))
  }

  const handleChangeReceiveValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!currencyOfReceive.currency) {
      setPayValue(0)
    }
    setTypeOfInputFocus(TYPE_OF_INPUT.RECEIVE)
    setReceiveValue(Number(e.target.value))
  }

  const handleGetTokens = async () => {
    try {
      const res = await fetch(URL).then((res) => res.json())
      setTokens(res)
    } catch (error) {
      setTokens([])
    }
  }

  useEffect(() => {
    handleGetTokens()
  }, [])

  useEffect(() => {
    if (!currencyOfReceive.currency) return

    if (typeOfInputFocus === TYPE_OF_INPUT.PAY) {
      const newReceiveValue = (payValue * currencyOfPay.price) / currencyOfReceive.price
      const roundingNewReceiveValue = roundNumber(newReceiveValue)
      setReceiveValue(Number(roundingNewReceiveValue))
    } else {
      const newPayValue = (receiveValue * currencyOfReceive.price) / currencyOfPay.price
      const roundingNewPayValue = roundNumber(newPayValue)
      setPayValue(Number(roundingNewPayValue))
    }
  }, [
    currencyOfPay.price,
    currencyOfReceive.currency,
    currencyOfReceive.price,
    payValue,
    receiveValue,
    typeOfInputFocus
  ])

  return (
    <>
      <section className='flex justify-center items-center text-white h-[100vh] bg-bg '>
        <main className='w-[464px] h-[374px] bg-semiBlack rounded-3xl shadow-swapWrapper p-swapWrapper border-[1px] border-whiteOpacity7'>
          <div className='flex justify-between items-center mb-2.5'>
            <div className='flex justify-start items-center gap-4 px-3'>
              <div className='text-base font-485 leading-6 text-white'>Swap</div>
              <div className='text-base font-485 leading-6 text-gray'>Buy</div>
            </div>
            <button className='px-3 py-1.5 rounded-2xl'>
              <MenuIcon />
            </button>
          </div>
          <SwapForm
            payValue={payValue}
            receiveValue={receiveValue}
            currencyOfPay={currencyOfPay}
            currencyOfReceive={currencyOfReceive}
            handleChangePayValue={handleChangePayValue}
            handleChangeReceiveValue={handleChangeReceiveValue}
            setModalInfo={setModalInfo}
          />
        </main>
      </section>
      {modalInfo.isOpen && (
        <ListTokenModal
          tokens={tokens}
          modalInfo={modalInfo}
          setModalInfo={setModalInfo}
          setCurrencyOfPay={setCurrencyOfPay}
          setCurrencyOfReceive={setCurrencyOfReceive}
        />
      )}
    </>
  )
}

export default App
