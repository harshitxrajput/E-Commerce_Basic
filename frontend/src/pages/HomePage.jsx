import React, { useEffect } from "react";
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/Product.js";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProduct, products } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>

        <Text
          fontSize={{ base: "22", sm: "28" }}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          fontWeight={"extrabold"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 4,
          }}
          spacing={10}
          w={"full"}
        >

          {
            products.map((product) => {
              return (
                <ProductCard key={product._id} product={product} />
              );
            })
          }

        </SimpleGrid>

        {
          products.length === 0 && (
            <Text fontSize="xl" textAlign={"center"} fontWeight={"bold"} color={"gray.500"} >
              No Products Found 🥲{" "}
              <Link to="/create">
                <Text as="span" color={"blue.500"} _hover={{ textDecoration: "underline" }} >Create a Product</Text>
              </Link>
            </Text>
          )}
      </VStack>
    </Container>
  );
};

export default HomePage;
