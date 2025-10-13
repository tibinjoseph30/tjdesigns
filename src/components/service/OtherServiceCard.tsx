import type { ServiceTypes } from "../../constants/types/services.dt";

const OtherServiceCard = ({id, title}: ServiceTypes) => {
    return(
        <article className="flex items-center gap-6 py-4 border-dashed [&:not(:first-child)]:border-t [&:not(:first-child)]:border-slate-300">
            <span className="font-semibold">{id}</span>
            <h5 className="text-2xl font-semibold">{title}</h5>
        </article>
    )
}

export default OtherServiceCard;