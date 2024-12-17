import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: '' },
    { icon: <FaLinkedinIn />, path: '' },
    { icon: <FaYoutube />, path: '' },
    { icon: <FaTwitter />, path: '' },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((item, index) => {
                    return (
                        <Link className={iconStyles} key={index} href={item.path}>{item.icon}</Link>
                    )
                })
            }
        </div>
    );
};

export default Social;