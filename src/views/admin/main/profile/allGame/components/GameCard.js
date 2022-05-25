import React, { useEffect, useState } from 'react'
import {
  Menu,
  MenuButton,
  Flex,
  Box,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Text,
  Grid,
  Icon,
} from '@chakra-ui/react'
import {
  VSeparator,
  HSeparator,
} from '../../../../../../components/separator/Separator'
import DateUploaded from '../components/MainMenu'
import Headers from '../../../../../../assets/img/logo/Header.png'
import gameThree from '../../../../../../assets/img/logo/gameThree.png'
import { MdHelpOutline, MdKeyboardArrowDown } from 'react-icons/md'
import Masonry from 'react-masonry-css'
export default function GameCard() {
  const [GameCardData, setGameCardData] = useState([
    {
      gameName: 'The Results Are Now – Call of Duty',
      //   img: gameThree,
      img: gameThree,
      followers: '8.1M',
      players: '34K',
      creatorHeader: Headers,
      creatorName: 'Call of Duty',
      RIO: '45353',
      Volume: '32,2342,4242',
      TotalNFT: '453,5354,324',
    },
    {
      gameName: 'The Results Are Now – Call of Duty',
      //   img: gameThree,
      img: gameThree,
      followers: '8.1M',
      players: '34K',
      creatorHeader: Headers,
      creatorName: 'Call of Duty',
      RIO: '45353',
      Volume: '32,2342,4242',
      TotalNFT: '453,5354,324',
    },
    {
      gameName: 'The Results Are Now – Call of Duty',
      //   img: gameThree,
      img: gameThree,
      followers: '8.1M',
      players: '34K',
      creatorHeader: Headers,
      creatorName: 'Call of Duty',
      RIO: '45353',
      Volume: '32,2342,4242',
      TotalNFT: '453,5354,324',
    },
    {
      gameName: 'The Results Are Now – Call of Duty',
      //   img: gameThree,
      img: gameThree,
      followers: '8.1M',
      players: '34K',
      creatorHeader: Headers,
      creatorName: 'Call of Duty',
      RIO: '45353',
      Volume: '32,2342,4242',
      TotalNFT: '453,5354,324',
    },
    {
      gameName: 'The Results Are Now – Call of Duty',
      //   img: gameThree,
      img: gameThree,
      followers: '8.1M',
      players: '34K',
      creatorHeader: Headers,
      creatorName: 'Call of Duty',
      RIO: '45353',
      Volume: '32,2342,4242',
      TotalNFT: '453,5354,324',
    },
    {
      gameName: 'The Results Are Now – Call of Duty',
      //   img: gameThree,
      img: gameThree,
      followers: '8.1M',
      players: '34K',
      creatorHeader: Headers,
      creatorName: 'Call of Duty',
      RIO: '45353',
      Volume: '32,2342,4242',
      TotalNFT: '453,5354,324',
    },
    {
      gameName: 'The Results Are Now – Call of Duty',
      //   img: gameThree,
      img: gameThree,
      followers: '8.1M',
      players: '34K',
      creatorHeader: Headers,
      creatorName: 'Call of Duty',
      RIO: '45353',
      Volume: '32,2342,4242',
      TotalNFT: '453,5354,324',
    },
    {
      gameName: 'The Results Are Now – Call of Duty',
      //   img: gameThree,
      img: gameThree,
      followers: '8.1M',
      players: '34K',
      creatorHeader: Headers,
      creatorName: 'Call of Duty',
      RIO: '45353',
      Volume: '32,2342,4242',
      TotalNFT: '453,5354,324',
    },
    {
      gameName: 'The Results Are Now – Call of Duty',
      //   img: gameThree,
      img: gameThree,
      followers: '8.1M',
      players: '34K',
      creatorHeader: Headers,
      creatorName: 'Call of Duty',
      RIO: '45353',
      Volume: '32,2342,4242',
      TotalNFT: '453,5354,324',
    },
  ])
  const [isShow, setIsshow] = useState(false)
  const [idx, setIdx] = useState('')
  return (
    <Box>
      <Box
        style={{
          color: ' rgba(255,255,255,1)',
          fontSize: '24px',
          fontWeight: ' 500',
          textAlign: 'left',
          lineHeight: '32px',
          marginBottom: '32px',
        }}
      >
        Trending games
      </Box>
      <Box
        style={{
          textAlign: 'right',
          marginBottom: '32px',
          marginRight: '2px',
        }}
      >
        <DateUploaded></DateUploaded>
      </Box>
      <Box>
        {/* <Grid
          templateColumns={{
            base: '1fr',
            lg: '1fr 1fr 1fr',
          }}
          templateRows={{
            base: 'repeat(3, 1fr)',
            lg: '1fr',
          }}
          gap={{ base: '43px', xl: '43px' }}
          //   onChangeUlMaxH={(h) => console.log('ul容器高度-->', h)}
        > */}
        <Masonry
          breakpointCols={{
            default: 3,
            1400: 3,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className="note-masonry-grid"
          columnClassName="note-masonry-grid_column"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {GameCardData.map((item, index) => {
            return (
              <Box
                style={{
                  borderRadius: '24px',
                  background: 'rgba(17,28,68,1)',
                }}
                key={`item+${index}`}
                marginBottom={{
                  base: '40px',
                  md: '20px',
                  sm: '18px',
                }}
              >
                <Box>
                  <img
                    style={{
                      width: '100%',
                      height: '170px',
                      borderRadius: '24px 24px 0 0',
                    }}
                    src={item.img}
                    alt=""
                  />
                </Box>
                <Box
                  style={{
                    padding: '24px',
                    boxSizing: ' border-box',
                  }}
                >
                  <Box
                    style={{
                      color: 'rgba(255,255,255,1)',
                      //   fontSize: '18px',
                      fontWeight: ' 500',
                      textAlign: 'left',
                      lineHeight: '24px',
                    }}
                    fontSize={{
                      base: '18px',
                      md: '14px',
                      sm: '12px',
                    }}
                  >
                    {item.gameName}
                  </Box>

                  <Box
                    style={{
                      alignItems: 'center',
                      display: 'flex',
                    }}
                    marginTop={{
                      base: '18px',
                      md: '12px',
                      sm: '12px',
                    }}
                  >
                    <Box
                      style={{
                        width: '8px',
                        height: ' 8px',
                        background: ' #0049C6',
                        borderRadius: '50%',
                        marginRight: '9px',
                      }}
                    ></Box>
                    <Box
                      style={{
                        color: 'rgba(128,129,145,1)',
                        fontSize: '12px',
                        fontWeight: '400',
                        textAlign: 'right',
                        lineHeight: ' 16px',
                        marginRight: '14px',
                      }}
                    >
                      {item.followers}followers
                    </Box>
                    <Box
                      style={{
                        width: '8px',
                        height: ' 8px',
                        background: ' #7FBA7A',
                        borderRadius: '50%',
                        marginRight: '9px',
                      }}
                    ></Box>
                    <Box
                      style={{
                        color: 'rgba(128,129,145,1)',
                        fontSize: '12px',
                        fontWeight: '400',
                        textAlign: 'right',
                        lineHeight: ' 16px',
                      }}
                    >
                      {item.players}players
                    </Box>
                  </Box>
                  <Box
                    style={{
                      marginTop: '18px',
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          marginRight: '8px',
                        }}
                        src={item.creatorHeader}
                        alt=""
                      />
                    </Box>
                    <Box
                      style={{
                        color: 'rgba(255,255,255,1)',
                        fontSize: '13px',
                        fontWeight: ' 400',
                        textAlign: ' left',
                        lineHeight: '20px',
                      }}
                    >
                      {item.creatorName}®
                    </Box>
                  </Box>
                </Box>
                <HSeparator></HSeparator>
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: ' 13px 21px 11px 21px',
                    boxSizing: ' border-box',
                  }}
                >
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: ' center',
                    }}
                  >
                    <Box
                      style={{
                        width: '90px',
                        height: '24px',
                        borderRadius: '8px',
                        background: 'rgba(228,228,228,0.1)',
                        color: ' rgba(95,117,238,1)',
                        fontSize: '13px',
                        fontWeight: ' 400',
                        textAlign: ' center',
                        lineHeight: '24px',
                        marginRight: '8px',
                      }}
                    >
                      Alpha
                    </Box>
                    <Icon
                      as={MdHelpOutline}
                      color="#808191"
                      w="14px"
                      h="14px"
                    />
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      userSelect: 'none',
                    }}
                    cursor="pointer"
                    onClick={(e) => {
                      console.log(e.target.getAttribute('data-idx'))
                      setIsshow(!isShow)
                      setIdx(e.target.getAttribute('data-idx'))
                    }}
                    color="rgba(128,129,145,1)"
                    _hover={{
                      color: '#fff',
                    }}
                    data-idx={`${index}`}
                  >
                    <Text
                      type="primary"
                      fontSize="12px"
                      fontWeight="400"
                      mr="7px"
                      data-idx={`${index}`}
                    >
                      {idx == index ? (isShow ? 'Hide' : 'Details') : 'Details'}
                    </Text>
                    <Icon
                      as={MdKeyboardArrowDown}
                      data-idx={`${index}`}
                      transform={
                        idx == index
                          ? isShow
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)'
                          : 'rotate(0deg)'
                      }
                      w="18px"
                      h="18px"
                    />
                  </Box>
                </Box>
                <Box
                  //   hidden={idx == index ? isShow : ''}
                  height={idx == index ? (isShow ? '200px' : '0px') : '0px'}
                  transition="0.4s"
                  overflow="hidden"
                  padding={
                    idx == index
                      ? isShow
                        ? '13px 21px 21px 20px'
                        : '0px'
                      : '0px'
                  }
                  style={{
                    boxSizing: ' border-box',
                  }}
                >
                  <Box
                    style={{
                      display: 'flex',

                      alignItems: ' center',
                      marginBottom: '16px',
                    }}
                  >
                    <Box
                      style={{
                        width: '60px',
                        marginRight: '37px',
                        color: ' rgba(128,129,145,1)',
                        fontSize: '13px',
                        fontWeight: '400',
                        textAlign: 'left',
                      }}
                    >
                      RIO
                    </Box>
                    <Box
                      style={{
                        color: 'rgba(255,255,255,1)',
                        fontSize: '13px',
                        fontWeight: '400',
                        textAlign: 'left',
                      }}
                    >
                      {item.RIO} $
                    </Box>
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: ' center',
                      marginBottom: '16px',
                    }}
                  >
                    <Box
                      style={{
                        width: '60px',
                        marginRight: '37px',
                        color: ' rgba(128,129,145,1)',
                        fontSize: '13px',
                        fontWeight: '400',
                        textAlign: 'left',
                      }}
                    >
                      Volume
                    </Box>
                    <Box
                      style={{
                        color: 'rgba(255,255,255,1)',
                        fontSize: '13px',
                        fontWeight: '400',
                        textAlign: 'left',
                      }}
                    >
                      {item.Volume}
                    </Box>
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: ' center',
                      marginBottom: '16px',
                    }}
                  >
                    <Box
                      style={{
                        width: '60px',
                        marginRight: '37px',
                        color: ' rgba(128,129,145,1)',
                        fontSize: '13px',
                        fontWeight: '400',
                        textAlign: 'left',
                      }}
                    >
                      Total NFT
                    </Box>
                    <Box
                      style={{
                        color: 'rgba(255,255,255,1)',
                        fontSize: '13px',
                        fontWeight: '400',
                        textAlign: 'left',
                      }}
                    >
                      {item.TotalNFT}
                    </Box>
                  </Box>
                  <Flex justifyContent="flex-end">
                    <Box
                      style={{
                        width: '101px',
                        height: '28px',
                        borderRadius: ' 8px',
                        background: 'rgba(108,93,211,1)',
                      }}
                    >
                      <Text
                        style={{
                          color: 'rgba(255,255,255,1)',
                          fontSize: '7px',
                          fontWeight: ' 400',
                          textAlign: ' center',
                          lineHeight: ' 28px',
                        }}
                      >
                        swap 8 lowed
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            )
          })}
        </Masonry>
        {/* </Grid> */}
      </Box>
    </Box>
  )
}
