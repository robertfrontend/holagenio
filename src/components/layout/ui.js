import { ArrowRight } from "lucide-react"

const type = {
    lostFound: "bg-green-500 hover:bg-green-500",
}
export const Button = ({ name, styles, children, onClick, isType }) => {
    return (
        <button type="submit" className={`btn btn-primary  ${styles} text-lg`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}


export const WhatsappButton = () => (
    <a href="https://wa.me/18573975959" target="_blank" rel="noopener noreferrer"
        className="mx-[2px] inline-flex items-center px-4 py-2 bg-white 
        text-black rounded-md hover:bg-gray-100 transition-colors text-center text-xl
        border border-gray-300">
        <svg className="w-5 h-5 mr-2" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        Contáctanos
    </a>
)

export const GmailButton = () => (
    <a href="mailto:licencia@ejemplo.com" className="mx-[2px] inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
        Enviar correo
    </a>
)

export const ButtonArrow = ({ text, onClick }) => (
    <button
        className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-lg 
        leading-4 font-medium rounded-md text-primary bg-primary-100 hover:bg-primary-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        onClick={onClick}
    >
        {text} <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
    </button>
)

export const StripeButton = () => (
    <a href="https://buy.stripe.com/00g9CD6Ir3Qi52w8wC"
        className="mx-[2px] flex justify-center items-center px-4 py-2 bg-blue-500
         text-white rounded-md hover:bg-blue-600 transition-colors w-full text-center text-xl"
        target="_blank"
    >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.479 9.883c-1.626-.604-2.512-1.067-2.512-1.803 0-.622.511-1.024 1.411-1.024 1.652 0 3.347.723 4.486 1.368l.666-4.123c-.917-.446-2.818-1.101-5.413-1.101-1.914 0-3.508.498-4.674 1.435C6.117 5.592 5.5 7.139 5.5 9.037c0 2.913 1.782 4.165 4.688 5.227 1.861.664 2.483 1.131 2.483 1.851 0 .698-.563 1.171-1.588 1.171-1.26 0-3.402-.698-4.799-1.579l-.658 4.154c1.19.664 3.402 1.339 5.714 1.339 1.966 0 3.607-.484 4.799-1.393 1.312-1.009 1.972-2.524 1.972-4.54 0-2.997-1.824-4.264-4.632-5.284z" />
        </svg>
        Empezemos!
    </a>
)