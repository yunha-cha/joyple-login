const Header = ({title}: {title?:string}) => {

    return (
        <div className="titleWrap">
            <h1 className="title">{title}</h1>
        </div>
    )

}

export default Header;