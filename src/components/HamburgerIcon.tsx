import Image from "next/image";

import Hamburger from '@/images/more.png'

const HamburgerIcon = () => {
    return(
        <Image
            src={Hamburger.src}
            alt="Hamburger Menu Icon"
            width={30}
            height={30}
            />
    );
}

export default HamburgerIcon;