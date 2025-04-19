import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaFacebook, FaStackOverflow } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/Taiyob' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/md-oli-009148137' },
    { icon: <FaStackOverflow />, path: 'https://stackoverflow.com/users/11324716/oli?tab=profile' },
    { icon: <FaFacebook />, path: 'https://www.facebook.com/md.oli.7' },
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