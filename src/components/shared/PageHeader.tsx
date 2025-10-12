type pageHeaderProps = {
    title?: string;
}

const PageHeader = ({title}: pageHeaderProps) => {
    return(
        <header>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">{title}</h1>
        </header>
    )
}

export default PageHeader;