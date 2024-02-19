import { IconType } from "react-icons";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  //   const iconMap: { [key: string]: IconType } = {
  //     pc: FaWindows,
  //     playstation: FaPlaystation,
  //     xbox: FaXbox,
  //     apple: FaApple,
  //     linux: FaLinux,
  //     ios: MdPhoneIphone,
  //     android: FaAndroid,
  //     nintendo: SiNintendo,
  //     : BsGlobe,
  //   };

  const getIcon = (slug: string) => {
    switch (slug) {
      case "pc":
        return FaWindows;
      case "playstation":
        return FaPlaystation;
      case "xbox":
        return FaXbox;
      case "apple":
        return FaApple;
      case "linux":
        return FaLinux;
      case "ios":
        return MdPhoneIphone;
      case "android":
        return FaAndroid;
      case "nintendo":
        return SiNintendo;
      default:
        return BsGlobe;
    }
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <>
          <Icon key={platform.id} as={getIcon(platform.slug)} />
          {/* <Icon key={platform.id} as={iconMap[platform.slug]} /> */}
        </>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
