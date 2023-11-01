'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

import StartProfilePic from '../../public/img/profile-pic.png';
import OtherProfilePic from '../../public/img/profile-picture-2.png';

const BackgroundImage = () => {

    const pathName = usePathname();
    const [data, setData] = useState({
        imageSrc: StartProfilePic,
        alt: 'loading...',
        className: 'main-profile-pic-class startpage-profile-pic'
    })


    useEffect(() => {
        switch (pathName) {
            case '/':
                setData({
                    imageSrc: StartProfilePic,
                    alt: 'Profile picture of me',
                    className: 'main-profile-pic-class start-page-profile-pic'
                });
                break;
            case '/about-me':
                setData({
                    imageSrc: StartProfilePic,
                    alt: 'Profile picture of me',
                    className: 'main-profile-pic-class about-page-profile-pic'
                });
                break;
            case '/experiences':
            case '/knowledge':
                setData({
                    imageSrc: OtherProfilePic,
                    alt: 'Profile picture of me',
                    className: 'main-profile-pic-class knowledge-and-experiences-page-profile-pic'
                });
                break;
                
            default:
                setData({
                    imageSrc: StartProfilePic,
                    alt: 'Profile picture of me',
                    className: 'main-profile-pic-class start-page-profile-pic'
                });

        };

    }, [pathName]);

    return (<>
        {data.alt !== 'loading...' &&  (
            <Image priority className={data.className} src={data.imageSrc} alt={data.alt} />
        )}
    </>);
};

export default BackgroundImage;