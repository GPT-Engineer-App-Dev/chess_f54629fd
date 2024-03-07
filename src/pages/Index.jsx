import { Box, Flex, Grid, GridItem, Text, Center, useColorModeValue } from "@chakra-ui/react";
import { FaChessPawn, FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing } from "react-icons/fa";

const boardSize = 8;

// Chess piece icons for both colors
const whitePieces = {
  pawn: <FaChessPawn color="white" />,
  rook: <FaChessRook color="white" />,
  knight: <FaChessKnight color="white" />,
  bishop: <FaChessBishop color="white" />,
  queen: <FaChessQueen color="white" />,
  king: <FaChessKing color="white" />,
};

const blackPieces = {
  pawn: <FaChessPawn color="black" />,
  rook: <FaChessRook color="black" />,
  knight: <FaChessKnight color="black" />,
  bishop: <FaChessBishop color="black" />,
  queen: <FaChessQueen color="black" />,
  king: <FaChessKing color="black" />,
};

// Helper function to place pieces
const placePiece = (row, column) => {
  if (row === 1) return blackPieces.pawn;
  if (row === 6) return whitePieces.pawn;
  if (row === 0 || row === 7) {
    const pieces = row === 0 ? blackPieces : whitePieces;
    if (column === 0 || column === 7) return pieces.rook;
    if (column === 1 || column === 6) return pieces.knight;
    if (column === 2 || column === 5) return pieces.bishop;
    if (column === 3) return pieces.queen;
    if (column === 4) return pieces.king;
  }
  return null;
};

const Index = () => {
  const lightSquareColor = useColorModeValue("gray.200", "gray.600");
  const darkSquareColor = useColorModeValue("gray.500", "gray.800");

  const squares = Array.from({ length: boardSize }, (_, row) =>
    Array.from({ length: boardSize }, (_, column) => {
      const isLightSquare = (row + column) % 2 === 0;
      const bgColor = isLightSquare ? lightSquareColor : darkSquareColor;
      const piece = placePiece(row, column);
      return (
        <GridItem key={`${row}-${column}`} bg={bgColor} w="100%" h="100%">
          <Center w="100%" h="100%">
            {piece}
          </Center>
        </GridItem>
      );
    }),
  );

  return (
    <Flex direction="column" align="center" p={4}>
      <Text fontSize="2xl" mb={4}>
        Chess Game
      </Text>
      <Grid templateColumns={`repeat(${boardSize}, 1fr)`} gap={1} w="500px" h="500px">
        {squares.flat()}
      </Grid>
    </Flex>
  );
};

export default Index;
