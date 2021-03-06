import React, { useEffect, useState, useRef } from 'react'

// Chakra imports
import {
  Flex,
  Text,
  Avatar,
  AvatarGroup,
  Box,
  Image,
  useToast,
  Button,
} from '@chakra-ui/react'
import Transfer from 'components/dataDisplay/Transfer'
import Card from 'components/card/Card.js'
// Assets
import avatar1 from 'assets/img/avatars/avatar1.png'
import avatar2 from 'assets/img/avatars/avatar2.png'
import avatar3 from 'assets/img/avatars/avatar3.png'
import avatar4 from 'assets/img/avatars/avatar4.png'
import smiley from 'assets/img/users/smiley.png'
import addIcon from 'assets/img/users/addIcon.png'
import amin from 'assets/img/users/amin.gif'
import { Picker } from 'emoji-mart'
import data from '@emoji-mart/data'
import { BASE64 } from './base64.js'
import {
  getGameIcons,
  userSetGameIcon,
  getGameItemsDatas,
  getGameIconByGpId,
  uploadGameIcon,
  delUserSetGameIcon,
} from '../../../../../../hook/hook'

export default function Earn(props) {
  const uId = localStorage.getItem('uId')
  const [gameIcons, SetGameIcons] = useState([])
  const { gpId } = props
  const [animate, setAnimate] = useState(false)
  const [idx, setIdx] = useState('')
  const toast = useToast()
  const [showEmojiModa, setShowEmojiModa] = useState(false)
  const [emoji, setEmojia] = useState('')
  function EmojiPicker(props) {
    const ref = React.useRef()
    React.useEffect(() => {
      new Picker({ ...props, data, ref })
    }, [])
    return <div ref={ref} />
  }
  const checkEmoji = (emoji, event) => {
    setEmojia(emoji.native)
  }
  const ref = useRef()
  useEffect(() => {
    new Picker({ data, ref })
    getGameIconByGpId(gpId, uId).then((res) => {
      SetGameIcons(res.data.data.records)
    })
  }, [])

  return (
    <div>
      <Text
        color=" rgba(255,255,255,1)"
        fontSize="24px"
        fontWeight=" 500"
        textAlign="left"
        lineHeight="32px"
        marginBottom={{ sm: '8px', md: '10px' }}
        className="font-Inter-SemiBold"
      >
        React to earn
      </Text>
      <Card
        direction="column"
        w="100%"
        p="0px"
        bgColor="transparent"
        className="yscroll"
        height={{ sm: '378px', md: '585px', '2xl': '746px' }}
      >
        {/* {gameIcons} */}
        {gameIcons.map((item, index) => {
          return (
            <Flex
              key={index}
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              padding={{ sm: '15px 16px', md: '9px 16px', '2xl': '15px 16px' }}
              mb="12px"
              borderRadius="16px"
              border="1px solid rgba(225, 225, 225, 0.2)"
            >
              <Box position="relative">
                <Flex
                  h={{ sm: '48px', md: '44px', '2xl': '48px' }}
                  w={{ sm: '48px', md: '44px', '2xl': '48px' }}
                  me="14px"
                  bg="#0c1437"
                  cursor="pointer"
                  borderRadius="50%"
                  border={
                    item.isLiked ? '2px solid #0049C6' : '2px solid #353D59'
                  }
                  fontSize={{ sm: '36px', md: '30px', '2xl': '36px' }}
                  justifyContent="center"
                  alignItems="center"
                  className={idx == index ? (animate ? 'animate' : '') : ''}
                  data-idx={`${index}`}
                  onClick={(e) => {
                    setAnimate(!animate)
                    setTimeout(() => {
                      setAnimate(false)
                    }, 1100)
                    setIdx(e.target.getAttribute('data-idx'))
                    if (!uId) {
                      toast({
                        title: `please sign in`,
                        position: 'top',
                        status: 'warning',
                        isClosable: true,
                        duration: 1000,
                      })
                      return
                    }
                    if (item.isLiked) {
                      delUserSetGameIcon(item.giId, '', gpId, uId).then(
                        (res) => {
                          if (res.data.code == 200) {
                            getGameIconByGpId(gpId, uId).then((res) => {
                              SetGameIcons(res.data.data.records)
                            })
                          } else {
                          }
                        }
                      )
                      return
                    }
                    userSetGameIcon(item.giId, '', gpId, uId).then((res) => {
                      if (res.data.code == 200) {
                        getGameIconByGpId(gpId, uId).then((res) => {
                          SetGameIcons(res.data.data.records)
                        })
                      } else {
                        toast({
                          title: res.data.msg,
                          position: 'top',
                          status: 'warning',
                          isClosable: true,
                          duration: 2000,
                        })
                      }
                    })
                  }}
                >
                  {/* {item.icon} */}
                  <Text
                    height={{ sm: '52px', md: '44px', '2xl': '52px' }}
                    data-idx={`${index}`}
                  >
                    {' '}
                    {BASE64.decrypt(item.icon)}
                  </Text>
                </Flex>
                <Image
                  src={amin}
                  display={idx == index ? (animate ? 'block' : 'none') : 'none'}
                  style={{
                    width: '200px',
                    position: 'absolute',
                    maxWidth: 'none',
                    top: '-20px',
                    left: '-70px',
                  }}
                ></Image>
              </Box>
              <AvatarGroup
                max={9}
                size="sm"
                fontSize="12px"
                fontWeight="700"
                color="#fff"
              >
                {item.userIcons
                  ? item.userIcons.map((avt, key) => (
                      <Avatar
                        key={key}
                        w={{ base: '28px', '2xl': '32px' }}
                        height={{ base: '28px', '2xl': '32px' }}
                        borderWidth="0"
                        src={avt.userIcon}
                      />
                    ))
                  : ''}
              </AvatarGroup>
            </Flex>
          )
        })}
      </Card>
      <Box pr="15px">
        <Flex
          alignItems="center"
          w="100%"
          padding={{
            sm: '15px 16px',
            md: '9px 16px',
            base: '9px 16px',
            '2xl': '15px 16px',
          }}
          mb="12px"
          borderRadius="16px"
          border="1px solid rgba(225, 225, 225, 0.2)"
        >
          {emoji ? (
            ''
          ) : (
            <Box
              border="2px solid #353D59"
              h={{ sm: '48px', md: '44px', '2xl': '48px' }}
              w={{ sm: '48px', md: '44px', '2xl': '48px' }}
              borderRadius="50%"
              cursor="pointer"
              position="relative"
              onClick={() => {
                setEmojia('')
                setShowEmojiModa(!showEmojiModa)
              }}
            >
              <Image
                src={addIcon}
                w={{ base: '28px', '2xl': '34px' }}
                m="2px auto"
                display={{ sm: 'none', md: 'block' }}
              ></Image>
              <Text
                display={{ md: 'none' }}
                width="6.8vw"
                height="6.8vw"
                background="#D8D8D8"
                borderRadius="50%"
                position="absolute"
                right="-3px"
              ></Text>
            </Box>
          )}
          {showEmojiModa && emoji ? (
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Text fontSize="30px" margin="0 10px">
                {emoji}
              </Text>

              {emoji ? (
                <Button
                  variant="brand"
                  width="60px"
                  bgColor="#6C5DD3"
                  height="20px"
                  fontWeight="500"
                  fontSize="18px"
                  onClick={() => {
                    let emcode = BASE64.encoder(emoji)
                    if (!uId) {
                      toast({
                        title: `please sign in`,
                        position: 'top',
                        status: 'warning',
                        isClosable: true,
                        duration: 1000,
                      })
                      return
                    }
                    uploadGameIcon('', emcode).then((res) => {
                      if (res.data.code == 200) {
                        toast({
                          title: `successful`,
                          position: 'top',
                          status: 'success',
                          isClosable: true,
                          duration: 1000,
                        })
                        setEmojia('')
                        setShowEmojiModa(!showEmojiModa)
                        getGameIconByGpId(gpId, uId).then((emojiRes) => {
                          SetGameIcons(emojiRes.data.data.records)
                        })
                      }
                    })
                  }}
                >
                  OK
                </Button>
              ) : (
                ''
              )}
            </Flex>
          ) : (
            ''
          )}
        </Flex>
      </Box>
      <Box>
        {showEmojiModa ? (
          <EmojiPicker
            onEmojiSelect={(emoji, event) => {
              checkEmoji(emoji, event)
            }}
            theme="dark"
            bgColor="red"
            native
            emojiSize={25}
            sheetSize={32}
            emojiButtonColors="['rgba(102, 51, 153, .2)']"
            data={data}
          />
        ) : (
          ''
        )}
      </Box>
    </div>
  )
}
