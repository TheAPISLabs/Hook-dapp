import React, { useEffect, useState, useRef } from "react";
// Chakra imports
import {
  Flex,
  Image,
  Text,
  Avatar,
  Box,
  Button,
  useToast,
  Icon
} from "@chakra-ui/react";
import { MdMoreHoriz } from 'react-icons/md'
import Transfer from "components/dataDisplay/Transfer";
import Card from "components/card/Card.js";
import { dateDiff } from './until.js';
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar7.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import Nft5 from 'assets/img/nfts/Nft5.png'
import NFT from 'components/card/NFT'
import collectIcon from 'assets/img/users/collectIcon.png'
import commentIcon from 'assets/img/users/commentIcon.png'
import expandIcon from 'assets/img/users/expandIcon.png'
import likedIcon from 'assets/img/users/liked.png'
import DateUploaded from "./MainMenu";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { AiOutlineLike } from 'react-icons/ai'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { BASE64 } from './base64'
import {
  getComments,
  writeComment,
  gameCommentLiked,
} from '../../../../../../hook/hook'
import { isMobile } from './until.js'
export default function Comments(props) {
  const { gpId } = props;
  const uId = localStorage.getItem('uId')
  const [isShow, ShowFun] = useState(false)
  const [CommentsDate, setCommentsDate] = useState([])
  const [content, setContent] = useState(BraftEditor.createEditorState('null'))
  const [grId, setgrId] = useState("")
  const [parentId, setParentId] = useState("")
  const [rootParentId, setRootParentId] = useState("")
  const [page, setPage] = useState("")
  const [pageSize, setPageSize] = useState(isMobile()?3:7)
  const [sort, setSort] = useState("")
  const toast = useToast();
  const [commentShow, setCommentShow] = useState(false)
  const [sortField, SetsortField] = useState("ALL")
  const getCommentsDate = () => {
    getComments(gpId, page, pageSize, sort,sortField, uId).then((res) => {
      setCommentsDate(res.data.data.records)
    })
  };
  useEffect(() => {
    getCommentsDate()
  }, []) 
 const chooseSort = (sortField) => {
    getComments(gpId, page, pageSize, sort,sortField, uId).then((res) => {
      setCommentsDate(res.data.data.records)
    })
  }
  return (
    <Box 
    padding={{sm:"16px" ,md: "30px 28px", "2xl": "40px 39.68px"}}
    m={{sm:"40px 0 45px" ,md: "30px 0 45px",}}
    style={{
      background: "#111C44",
      borderRadius: "24px",
    }}>
      <Flex justifyContent="space-between" mb="12px" flexDirection={{md:"initial",sm:"column"}} >
        <Text
          color=" rgba(255,255,255,1)"
          fontSize="24px"
          fontWeight=" 500"
          textAlign="left"
          lineHeight="32px"
          as="span"
          pl={{sm:"16px",md:'0'}}
          marginBottom='24px'
          className="font-Inter-SemiBold"
          >
          Comments
        </Text>
        <DateUploaded sortField={sortField} SetsortField={SetsortField} chooseSort={chooseSort}></DateUploaded>
      </Flex>
      <Card direction='column' w='100%' p='0px' bgColor='transparent' >
        <Box>
          {
            CommentsDate.map((item, key) => {
              return (
                <Flex key={key}
                  w='100%'
                  padding={{sm:"8vw 3.4vw",md:"20px 16px"}}
                  mb={{sm:"0",md:"12px"}}
                  borderRadius='12px'
                  pr={{ base: "5px", "2xl": "20%" }}
                  _hover={{ bgColor: 'rgba(228, 228, 228, 0.1)' }}
                >
                  <Avatar h='48px' w='48px' src={item.img} me='14px' mr={{sm:'24px',md:'14px'}} />
                  <Box>
                    <Box fontSize="13px" >
                      <Text as="span" color="#5F75EE">{item.userName}</Text>
                      <Text as="span" color="#B2B3BD" ml="3">{dateDiff(item.time, null)}</Text>
                    </Box>
                    <Text
                      m="10px 0"
                      color="#B2B3BD"
                      fontSize="14px"
                      lineHeight="24px"
                      wordBreak="break-all"
                    >
                      <div dangerouslySetInnerHTML={{ __html: BASE64.decrypt(item.content) }}></div>
                    </Text>
                    <Flex>
                      {!item.isLiked ? <Flex
                        alignItems="center"
                        cursor="pointer"
                        onClick={() => {
                          if (!uId) {
                            toast({
                              title: `please sign in`,
                              position: "top",
                              status: "warning",
                              isClosable: true,
                              duration: 1000,
                            });
                            return
                          }
                          gameCommentLiked(item.grId, 1, uId).then((res) => {
                              if(res.data){
                                getCommentsDate();
                              }
                          })
                        }}
                      >
                        <Icon
                          w="4"
                          h="4"
                          as={AiOutlineLike}
                        />
                        <Text
                          color="#808191"
                          fontSize="14px"
                          ml="6px"
                          fontWeight="600"
                        > Like</Text>
                      </Flex> : (
                        <Flex cursor="pointer"
                        onClick={() => {
                          if (!uId) {
                            toast({
                              title: `please sign in`,
                              position: "top",
                              status: "warning",
                              isClosable: true,
                              duration: 1000,
                            });
                            return
                          }
                          gameCommentLiked(item.grId, 0, uId).then((res) => {
                              if(res.data){
                                getCommentsDate();
                              }
                          })
                        }}
                        >
                         <Image src={likedIcon}/>
                          <Text
                            color="#808191"
                            fontSize="14px"
                            ml="6px"
                            fontWeight="600"
                          > Like</Text>
                        </Flex>
                      )}

                      {/* <Image src={commentIcon}></Image>
                        <Image m="0 16px" src={collectIcon}></Image>
                        <Image src={expandIcon}></Image> */}
                    </Flex>
                  </Box>
                </Flex>
              )
            })
          }
        </Box>
        {CommentsDate.length >= (isMobile()?3:7 )? (!commentShow ?
          <Box
            textAlign="center"
            cursor="pointer"
            mt="4"
            mb="4"
            display="inline-block"
            color="#5F75EE"
            onClick={() => {
              setCommentShow(true);
              getComments(gpId, page, '', sort,sortField,uId).then((res) => {
                setCommentsDate(res.data.data.records)
              })
            }}>
              <Button 
               display={{md:"none"}}
                variant="brand"
                width="82.9vw"
                bgColor="#6C5DD3"
                height="14.7vw"
                h={{
                  base: '54px',
                  sm: '50px',
                  xl: '54px',
                  '2xl': '72px',
                }}
                fontWeight="500"
                fontSize="14px"
                _hover={{
                  bgColor: 'rgba(108,93,211 ,0.6)',
                }}
                borderRadius="16px"
                >
                Load More
              </Button>
              <Text display={{sm:"none",md:"block"}}>View More</Text>
          </Box> : '')

          : ''}
        <BraftEditor
          contentStyle={{ height: 100 }}
          language="en"
          value={content}
          style={{
            border: '1px solid rgba(225, 225, 225, 0.2)',
            marginBottom: '20px'
          }}
          onChange={(editorState) => {
            setContent(editorState)
          }}
          placeholder="comment length should be above 10 and below 500 characters."
        />
        <Button
          variant="brand"
          width="180px"
          height="56px"
          m="32px auto"
          fontWeight="400"
          fontSize="14px"
          onClick={() => {
            if (!uId) {
              toast({
                title: `please sign in`,
                position: "top",
                status: "warning",
                isClosable: true,
                duration: 1000,
              });
              return
            }
            let str = content.toHTML().replace(/<[^>]+>|&[^>]+;/g, "").trim();
            if (str.length < 10 || str.length > 500) {
              toast({
                title: `comment length should be above 10 and below 500 characters`,
                position: "top",
                status: "warning",
                isClosable: true,
                duration: 1500,
              });
              return
            }
            writeComment(BASE64.encoder(content.toHTML()), gpId, grId, parentId, rootParentId, "", uId).then((res) => {
              if (res.data.code == 200) {
                toast({
                  title: `Comment successful`,
                  position: "top",
                  status: "success",
                  duration: 1000,
                });
                setContent(BraftEditor.createEditorState('null'));
                getCommentsDate();
              } else {
                toast({
                  title: `error`,
                  position: "top",
                  status: "error",
                  isClosable: true,
                  duration: 1500,
                });
              }
            })
          }
          }
        > Write comment</Button>
      </Card>
    </Box >


  );
}
