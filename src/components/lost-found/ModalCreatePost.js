import React, { useEffect, useState } from 'react'
import { Button } from '../layout/ui';
import AuthForm from '../AuthForm';



const Modal = ({ isModalOpen, closeModal, showAuth }) => {
    const [itemType, setItemType] = useState('');
    const [isStep, setNextStep] = useState(0);
    const [isObject, setIsObject] = useState(false);
    const [isPet, setIsPet] = useState(false);


    const handleTypeChange = (e) => {
        setItemType(e.target.value);
    };

    const handleStep = (value) => {
        setNextStep(value)
    }

    const handleCheckboxChange = (type) => {
        if (type === 'object') {
            setIsObject(true);
            setIsPet(false);
        } else {
            setIsObject(false);
            setIsPet(true);
        }
    };

    return (
        <dialog id="lost_found_modal" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
            <div className="modal-box max-w-3xl">
                <button className="btn btn-md text-xl btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                <h3 className="font-bold text-2xl mb-4 text-center mt-2">Post Lost or Found Item/Animal</h3>
                {showAuth && (
                    <AuthForm />
                )}
                {!showAuth && (
                    <>
                        {isStep === 1 && (
                            <div className="step-1 bg-base-200 p-6 rounded-lg">
                                <p className="text-gray-700 mb-6 text-center">
                                    Use this form to report a lost or found item/animal. Please provide accurate information to help reunite lost items with their owners.
                                </p>
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                                    <p className="font-bold">Important Note:</p>
                                    <p>It is not allowed to post illegal items, weapons, or any prohibited content.</p>
                                </div>
                                <button className='btn bg-green-500 text-white w-full text-lg'
                                    onClick={() => handleStep(0)}
                                >Accept & Continue</button>
                            </div>
                        )}

                    </>
                )}

                <div className="modal-action">
                    <Button styles="btn-neutral px-10" onClick={closeModal}>Close</Button>
                </div>
            </div>
        </dialog>
    )
}


export default Modal