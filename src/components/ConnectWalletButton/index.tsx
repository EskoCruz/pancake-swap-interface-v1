import React from 'react'
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'
// import { useWalletModal } from '../../widgets/WalletModal'
import { useWalletModal } from '@pancakeswap-libs/uikit'
import { Button, ButtonProps } from '../Button'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
