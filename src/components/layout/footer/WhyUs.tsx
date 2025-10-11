import FooterSection from "./FooterSection"

const whyUsList = [
    {title: "ucer-centered design"},
    {title: "Seamless development"},
    {title: "Creative branding solutions"},
    {title: "Collabaraive approach"},
    {title: "On-time delivery"}
]

const WhyUs = () => {
    return(
        <FooterSection title="Why TJ Design" classname="col-span-5">
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