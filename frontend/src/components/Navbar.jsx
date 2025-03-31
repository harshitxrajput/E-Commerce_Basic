import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {PlusSquareIcon} from '@chakra-ui/icons'
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"1530px"} px={"4"} bg={useColorModeValue("gray.100", "gray.900")}>
            <Flex h={"16"} alignItems={"center"} justifyContent={"space-between"} flexDirection={{ base: "column", sm: "row" }}>
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    bgGradient={'linear(to-r, cyan.400, blue.500)'}
                    bgClip={'text'}
                    textTransform={"uppercase"}
                    fontWeight={'extrabold'}
                >
                    <Link to='/'>Product Store 🛒</Link>
                </Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={22}/>
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light"? <IoMoon /> : <LuSun size={20}/>}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar
