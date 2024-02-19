import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge borderRadius="full" px="2" colorScheme={color} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
