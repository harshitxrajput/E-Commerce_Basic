import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useProductStore } from "../store/Product.js";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast()

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {

    const { success, message } = await createProduct(newProduct);
    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
        duration: 2000
      })
    }
    else{
      toast({
        title: "success",
        description: message,
        status: "success",
        isClosable: true,
        duration: 2000
      })
    }

    setNewProduct({
      name: "",
      price: "",
      image: ""
    })
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8} >

        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mt={8}>Create New Product</Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>

          <VStack spacing={4}>

            <Input
              placeholder="Enter Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) => { setNewProduct({ ...newProduct, name: e.target.value }) }}
            />

            <Input
              placeholder="Enter Product Price"
              name="price"
              value={newProduct.price}
              onChange={(e) => { setNewProduct({ ...newProduct, price: e.target.value }) }}
            />

            <Input
              placeholder="Enter Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) => { setNewProduct({ ...newProduct, image: e.target.value }) }}
            />

            <Button colorScheme="blue" onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>
          </VStack>

        </Box>

      </VStack>
    </Container>
  )
};

export default CreatePage;
