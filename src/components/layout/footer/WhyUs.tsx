import FooterSection from "./FooterSection"

const whyUsList = [
    {title: "User-centered Design"},
    {title: "Seamless Development"},
    {title: "Creative Branding Solutions"},
    {title: "Collabaraive Approach"},
    {title: "On-time Delivery"}
]

const WhyUs = () => {
    return(
        <FooterSection title="Why TJ Design" className="sm:col-span-7 lg:col-span-5">
            <ul className="flex gap-2 flex-wrap">
                {whyUsList.map((item, index)=> (
                    <li key={index}  className="border border-white/30 px-4 py-2 rounded-full">
                        {item.title}
                    </li>
                ))}
            </ul>
        </FooterSection>
    )
}

export default WhyUs;