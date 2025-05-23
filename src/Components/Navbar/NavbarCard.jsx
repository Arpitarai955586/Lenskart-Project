import React from "react";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import NavbarCard5 from "./NavbarCard5";
import { NavbarDetail1 } from "./NavbarDetail";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Flex,
  Spacer,
  Image,
  Input,
  Button,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody
} from "@chak/react";

export const NavbarCard1 = () => {
  return (
    <Box cursor="pointer" style={{border:"2px solid black"}}>
      <Flex gap={2} pl={5} pt={2}>
        {NavbarDetail1.map((i, index) => (
          <a 
             key={index}
             href={i.url}
             target="_blank"
          >
            <Text fontSize="12px" _hover={{ textDecoration: "underline" }}>
              {i.label}
            </Text>
            <Spacer />
          </a>
        ))}
      </Flex>
    </Box>
  );
};

export const NavbarCard2 = () => {
  const { isAuth, setisAuth, Authdata } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Box cursor="pointer">
      <HStack m="auto">
        <Box w="20%">
          <Link to="/">
            <Image src="/assets/images/logo3.png" alt="logo" w="40%" p={2} />
          </Link>
        </Box>
        <HStack w="85%" m="auto">
          <Box w="15%">
            <HStack fontSize="16px" fontWeight="bold">
              <FiPhoneCall />
              <Text as="a" href="tel:+919828534540">+91 9828534540</Text>
            </HStack>
          </Box>
          <Box w="55%">
            <Input
              placeholder="What are you looking for"
              border="1px solid black"
              w="95%"
              fontSize="17px"
              h="45px"
            />
          </Box>
          <HStack w="35%">
            <Button
              size="lg"
              bg="whiteAlpha.900"
              fontSize="14px"
              fontWeight="400"
              onClick={() => navigate("/orderhistory")}
            >
              Track Order
            </Button>
            {isAuth === true ? (
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Box
                    fontWeight={"600"}
                    fontSize="15px"
                    m="auto"
                    mt="-2px"
                    w="90px"
                    textAlign="center"
                  >
                    {Authdata[0].first_name}
                    <TriangleDownIcon
                      ml="2px"
                      fontSize={"9px"}
                      _hover={{ transform: "rotate(180deg)" }}
                    />
                  </Box>
                </PopoverTrigger>
                <PopoverContent
                  w="120px"
                  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                >
                  <PopoverBody
                    h={"40px"}
                    pl="6"
                    fontSize="15px"
                    _hover={{ fontWeight: "bold" }}
                  >
                    <Box
                      color="#333368"
                      onClick={() => {
                        setisAuth(false);
                        return <Navigate to="/" />;
                      }}
                    >
                      Sign Out
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ) : (
              <Box display={"flex"}>
                <Login />
                <Signup />
              </Box>
            )}
            <Button
              leftIcon={<CiHeart />}
              size="lg"
              bg="whiteAlpha.900"
              fontSize="14px"
              fontWeight="400"
              onClick={() => navigate("/wishlist")}
            >
              Wishlist
            </Button>
            <Link to="/cart">
              <Button
                leftIcon={<CgShoppingCart />}
                size="lg"
                bg="whiteAlpha.900"
                fontSize="14px"
                fontWeight="400"
              >
                Cart
              </Button>
            </Link>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export const NavbarCard4 = () => {
  return (
    <Box cursor="pointer" bg="#fbf9f7" p={2.5}>
      <Flex gap={4} pl={5} pt={2} justifyContent="space-between">
        <NavbarCard5 />
        <HStack w="20%" ml="5%" justifyContent="right">
          <Image
            src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
          <Image
            src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
        </HStack>
      </Flex>
    </Box>
  );
};
