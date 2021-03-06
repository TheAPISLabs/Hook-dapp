// Chakra Imports
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import AdminNavbarLinks from 'components/navbar/NavbarLinksAdmin'

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false)
  const [isShowSidebar, setIsShowSidebar] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar)

    return () => {
      window.removeEventListener('scroll', changeNavbar)
    }
  })

  const { secondary, message, brandText } = props

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText = useColorModeValue('navy.700', 'white')
  let secondaryText = useColorModeValue('gray.700', 'white')
  let navbarPosition = 'fixed'
  let navbarFilter = 'none'
  let navbarBackdrop = 'blur(20px)'
  let navbarShadow = 'none'
  let navbarBg = useColorModeValue('whiteAlpha.500', 'rgba(11,20,55,0.5)')
  let navbarBorder = 'transparent'
  let secondaryMargin = '0px'
  let paddingX = '15px'
  let gap = '0px'
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    setIsShowSidebar(localStorage.getItem('isShowSidebar'))
  }, [localStorage.getItem('isShowSidebar')])

  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={{ sm: '#0B1437', md: navbarBg }}
      borderColor={{ mb: navbarBorder }}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius={{
        sm: '0',
        md: '16px',
      }}
      borderWidth={{ sm: '0', md: '1.5' }}
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: 'center' }}
      display={secondary ? 'block' : 'flex'}
      minH={{
        sm: '96px',
        md: '75px',
      }}
      justifyContent={{ xl: 'center' }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      right={{ base: '12px', md: '30px', lg: '30px', xl: '30px' }}
      px={{
        sm: paddingX,
        md: '10px',
      }}
      ps={{
        xl: '12px',
      }}
      pt="8px"
      top={{ sm: '0', base: '12px', md: '16px', xl: '18px' }}
      left={{ sm: '0', md: 'initial' }}
      ml={{ sm: '0', md: 'initial' }}
      paddingLeft="0px !important"
      w={{
        sm: '100%',
        base: 'calc(100vw -350px)',
        md: 'calc(100vw - 350px)',
        lg: 'calc(100vw - 350px)',
        xl: 'calc(100vw - 350px)',
        '2xl': 'calc(100vw - 365px)',
      }}
      //   background="yellow"
      zIndex="9"
      borderBottom={{ sm: '1px solid rgba(225, 225, 225, 0.2)', md: '0px' }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: 'column',
          md: 'row',
        }}
        alignItems={{ xl: 'center' }}
        mb={gap}
      >
        <Box mb={{ sm: '8px', md: '0px' }}>
          {/* <Breadcrumb>
            <BreadcrumbItem color={secondaryText} fontSize='sm' mb='5px'>
              <BreadcrumbLink href='#' color={secondaryText}>
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={secondaryText} fontSize='sm'>
              <BreadcrumbLink href='#' color={secondaryText}>
                {brandText}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb> */}
          {/* Here we create navbar brand, based on route name */}
          {['Game', 'Overview', 'Track', 'Drop', 'SearchErr'].includes(
            brandText
          ) ? (
            ''
          ) : (
            <Box
              color={mainText}
              bg="inherit"
              borderRadius="inherit"
              fontWeight="bold"
              fontSize="34px"
              line-height="42px"
              _hover={{ color: { mainText } }}
              _active={{
                bg: 'inherit',
                transform: 'none',
                borderColor: 'transparent',
              }}
              cursor="pointer"
              _focus={{
                boxShadow: 'none',
              }}
              onClick={() => {
                window.history.back()
              }}
              display={{ sm: 'none', md: 'block' }}
            >
              <b className="iconfont">&#xe6a7;</b>
            </Box>
          )}
        </Box>
        <Box ms="auto" w={{ sm: '100%', md: 'unset' }}>
          <AdminNavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
            scrolled={scrolled}
          />
        </Box>
      </Flex>
      {secondary ? <Text color="white">{message}</Text> : null}
    </Box>
  )
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
}
