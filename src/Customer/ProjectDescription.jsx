import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import CardView from "../Card/CardView";
import MoreCardView from "../Card/MoreCardView";

function ProjectDescription() {
    const [showFullText, setShowFullText] = useState(false);

    const handleToggleText = () => {
        setShowFullText(!showFullText);
    };

    const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    const truncatedText = description.slice(0, 200);

    return (
        <>
            <Text fontSize="x-large" ml={"5rem"} mt={"2rem"}>About Project</Text>
            <Box p={4} borderWidth="1px" borderRadius="md" mt={4} width={"60%"}
                ml={"5rem"}>
                <Text>
                    {showFullText ? description : truncatedText}
                </Text>
                <Button onClick={handleToggleText} mt={2}>
                    {showFullText ? "Show less" : "Show more"}
                </Button>
            </Box>
            <MoreCardView />
        </>
    );
}

export default ProjectDescription;
