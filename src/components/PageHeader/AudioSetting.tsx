import React from 'react'
import { useAudioModeManager } from 'state/user/hooks'
import { useMatchBreakpoints } from '../../hooks'
import { Toggle } from '../Toggle'
import { Box } from '../Box'
import Flex from '../Box/Flex'
import { Text } from '../Text'

type AudioSettingModalProps = {
  translateString: (translationId: number, fallback: string) => string
}

const AudioSetting = ({ translateString }: AudioSettingModalProps) => {
  const { isSm, isXs } = useMatchBreakpoints()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()

  return (
    <Box mb="16px">
      <Flex alignItems="center" mb="8px">
        <Text bold>{translateString(999, 'Audio')}</Text>
      </Flex>
      <Box>
        <Toggle scale={isSm || isXs ? 'sm' : 'md'} checked={audioPlay} onChange={toggleSetAudioMode} />
      </Box>
    </Box>
  )
}

export default AudioSetting
