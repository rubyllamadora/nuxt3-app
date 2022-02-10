import Image from "./Image";
import Link from "./Link";
import MetaData from "./MetaData";

type Content = {
  title: string;
  banner: Image;
  links: Link;
  metadata: MetaData;
};

export default Content;
