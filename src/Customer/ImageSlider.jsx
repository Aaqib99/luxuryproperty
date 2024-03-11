import React, { useState } from "react";
import { Box, Text, Image, Flex, IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import property3 from "../assets/property3.jpg";
import property4 from "../assets/property4.jpg";
import property5 from "../assets/realestate.jpg";
import property6 from "../assets/dream.jpeg";
import property7 from "../assets/4a.jpg";
import property8 from "../assets/3a.jpg";
import ProjectDescription from "./ProjectDescription";

function ImageSlider() {
    const [selectedImage, setSelectedImage] = useState(0);
    const images = [
        { id: 1, url: property1 },
        { id: 2, url: property2 },
        { id: 3, url: property3 },
        { id: 4, url: property4 },
        { id: 5, url: property5 },
        { id: 6, url: property6 },
        { id: 7, url: property7 },
        { id: 8, url: property8 },
    ];

    const handlePreviousImage = () => {
        setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
        console.log("scrolll", selectedImage)
    };

    const handleNextImage = () => {
        setSelectedImage(selectedImage === 2 ? 0 : selectedImage + 1);
    };

    return (
        <>
            <Text fontSize="x-large" ml={"5rem"} mt={"2rem"}>Images & Media</Text>
            <Box
                borderWidth="1px"
                borderRadius="md"
                width={"60%"}
                ml={"5rem"}
                height={"18rem"}
                alignItems={"center"}
                p={4}
                mt={4}
                position="relative"
                overflow="hidden"
            >
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    width={`${images.length * 33.33}%`}
                    height="100%"
                    position="absolute"
                    transition="transform 0.9s ease-in-out"
                    transform={`translateX(-${(selectedImage % images.length) * 33.33}%)`}
                >
                    {images.map((image, index) => (
                        <Box key={index} width="30%" height="100%">
                            <Image
                                src={image.url}
                                alt={`Property ${index + 1}`}
                                width="80%"
                                height="85%"
                                objectFit="cover"
                                style={{ borderRadius: "10px" }}
                            />
                        </Box>
                    ))}
                </Flex>

                {images.length > 3 && (
                    <>
                        <IconButton
                            aria-label="Previous Image"
                            icon={<FaChevronLeft />}
                            variant="outline"
                            bg={"white"}
                            onClick={handlePreviousImage}
                            position="absolute"
                            left="0"
                            top="50%"
                            transform="translateY(-50%)"
                        />
                        <IconButton
                            aria-label="Next Image"
                            icon={<FaChevronRight />}
                            variant="outline"
                            bg={"white"}
                            onClick={handleNextImage}
                            position="absolute"
                            right="0"
                            top="50%"
                            transform="translateY(-50%)"
                        />
                    </>
                )}
            </Box>
            <ProjectDescription />
        </>
    );
}


export default ImageSlider;
