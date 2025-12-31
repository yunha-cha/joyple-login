type FooterProps = {
    footerContent: string,
    footerLink: string
}

const Footer = ({footerContent, footerLink}: FooterProps) => {
    return(
        <div className="footer">
            <ul className="footer-links">
                <li><a href={footerLink} className="black udL">{footerContent}</a></li>
            </ul>
        </div>
    )

}

export default Footer;