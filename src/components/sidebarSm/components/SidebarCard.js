import React from 'react'
// Chakra imports
import {
  Box,
  Flex,
  Text,
  Badge,
  LightMode,
  Image,
  Link,
} from '@chakra-ui/react'
import LineChart from 'components/charts/LineChart'
import { useHistory } from 'react-router-dom'
import Vector from '../../../assets/img/logo/Vector.png'
// Custom components
export default function SidebarDocs() {
  const bgColor = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
  const history = useHistory()

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg={bgColor}
      //   background="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
      borderRadius="24px"
      me="20px"
      position="relative"
      width="228px"
      height="190px"
      //   marginTop='240px'
      cursor="pointer"
      onClick={() => {
        history.push({ pathname: '/pass' })
      }}
    >
      <Flex
        width="94px"
        height="94px"
        background="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
        position="absolute"
        border="5px solid #111C44"
        borderRadius="50%"
        top="-50px"
      >
        <Image
          src={Vector}
          alt="Horizon UI"
          width="41px"
          height="41px"
          margin="auto"
        />
      </Flex>
      <Flex marginTop="26px" marginBottom="10px" textAlign="center">
        <Text fontSize="16px" color="#FFFFFF" fontWeight="700">
          Get Hook Pass
        </Text>
      </Flex>
      <Flex textAlign="center" width="221px">
        <Text
          fontSize="14px"
          color="#E9EDF7"
          fontWeight="500"
          letterSpacing="-0.28px"
        >
          To get access to all features, learn more here!{' '}
        </Text>
      </Flex>
    </Flex>
  )
}
