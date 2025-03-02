import { FileText, BookOpen, Calendar, Car, CreditCard, CheckCircle, Languages } from 'lucide-react'
import { StripeButton, WhatsappButton } from '@/components/layout/ui'
import React from 'react'


const Page = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className='text-center'>
                <h1 className="text-3xl font-extrabold text-gray-800 sm:text-5xl md:text-4xl">
                    Servicio de Asistencia para Licencia de Conducir de MA
                </h1>

            </div>
            <div className='text-center pt-2'>
                <p className="mb-6 text-lg">
                    Nuestro servicio de asistencia para
                    obtener la licencia de conducir de
                    MA está diseñado para simplificar todo el proceso. Ofrecemos ayuda en:
                </p>
            </div>
            <ul className="list-none space-y-3 mb-6 p-4 rounded-lg shadow-sm">
                <li className="flex items-start">
                    <FileText className="mr-2 text-primary w-5 h-5" />
                    <span>Recopilación y subida de documentos necesarios (identificación, prueba de residencia, etc.)</span>
                </li>
                <li className="flex items-start">
                    <BookOpen className="mr-2 text-primary w-5 h-5" />
                    <span>Preparación para el examen teórico, incluyendo materiales de estudio en español</span>
                </li>
                <li className="flex items-start">
                    <Calendar className="mr-2 text-primary w-5 h-5" />
                    <span>Agendamiento de citas para el examen teórico y la prueba de manejo</span>
                </li>
                <li className="flex items-start">
                    <Car className="mr-2 text-primary w-5 h-5" />
                    <span>Información sobre los requisitos del vehículo para la prueba de manejo</span>
                </li>
                <li className="flex items-start">
                    <CreditCard className="mr-2 text-primary w-5 h-5" />
                    <span>Asistencia en el proceso de solicitud y pago de la licencia</span>
                </li>
            </ul>

            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Beneficios de nuestro servicio:</h3>
                <ul className="space-y-4">
                    <li>
                        <h4 className="text-lg font-semibold">✅ Ahorro de tiempo</h4>
                        <p className="flex items-start">
                            <span>Nos encargamos de todos los trámites por ti</span>
                        </p>
                    </li>
                    <li>
                        <h4 className="text-lg font-semibold">✅ Asistencia en español</h4>
                        <p className="flex items-start">
                            <span>Comunicación clara y sin barreras lingüísticas</span>
                        </p>
                    </li>
                    <li>
                        <h4 className="text-lg font-semibold">✅ Reducción de errores</h4>
                        <p className="flex items-start">
                            <span>Evitamos retrasos por documentación incorrecta</span>
                        </p>
                    </li>
                    <li>
                        <h4 className="text-lg font-semibold">✅ Orientación personalizada</h4>
                        <p className="flex items-start">
                            <span>Te guiamos en cada paso del proceso</span>
                        </p>
                    </li>
                    <li>
                        <h4 className="text-lg font-semibold">✅ Tranquilidad</h4>
                        <p className="flex items-start">
                            <span>Nos aseguramos de que todo esté en orden para tus exámenes</span>
                        </p>
                    </li>
                </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Nuestro servicio incluye:</h3>
                <ul className="space-y-2">
                    <li className="flex items-start">
                        <span className="mr-2">-</span>
                        <span>Pago para obtener el permiso de conducir</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2">-</span>
                        <span>Pago de la prueba de manejo</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2">-</span>
                        <span>Licencia</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2">-</span>
                        <span>Asistencia completa de BizCategories</span>
                    </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 border-l-4 border-primary rounded-r-md shadow-md">
                    <p className="text-sm text-gray-800 font-medium">
                        <span className="font-bold">Nota importante:</span> Los costos del permiso, prueba y licencia son tarifas oficiales del RMV
                        (Registry of Motor Vehicles) y están incluidos en nuestro servicio.
                    </p>
                </div>
                <div className="mt-8 space-y-4 text-center flex flex-col justify-center items-center">
                    {/* <a className="w-full max-w-md bg-green-500 text-white font-extrabold text-xl py-4 px-6 
                    rounded-lg shadow-lg hover:bg-green-600 transform hover:scale-105
                    transition duration-300 animate-pulse cursor-pointer"
                        href="https://buy.stripe.com/3csbKL9UD4UmeD63cj"
                    >
                        ¡Empieza Ya!
                    </a> */}
                    <a className="w-full max-w-md bg-green-500 text-white font-extrabold text-xl py-4 px-6 
                    rounded-lg shadow-lg hover:bg-green-600 transform hover:scale-105
                    transition duration-300 animate-pulse cursor-pointer"
                        href="https://wa.me/18573975959" target="_blank" rel="noopener noreferrer"
                    >
                        ¡Empieza Ya!
                    </a>
                    {/* <div className="divider my-6">O contáctanos para más información</div> */}
                    {/* <WhatsappButton className="w-full max-w-md" /> */}
                </div>
            </div>
            <MessageT />
        </div>
    )
}

const MessageT = () => (
    <>
        <p className="text-sm mt-4 text-gray-700">
            <strong>Nota importante:</strong> Este proceso puede realizarse de forma gratuita por cuenta propia.
            BizCategories ofrece este servicio para brindar comodidad y agilizar el trámite para quienes lo deseen.
        </p>
    </>
)

export default Page