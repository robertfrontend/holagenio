'use client'
import { FileImage } from 'lucide-react';
import SectionList from './SectionList';
import { Button } from '../layout/ui';
import Link from 'next/link';


const Principal = () => {
    return (
        <>
            <div className="text-center mb-6">
                <Link href="/lost-found/create-post">
                    <Button styles="text-lg bg-green-500 hover:bg-green-500 border-none text-white">
                        <FileImage />   Post lost item or animal
                    </Button></Link>
            </div>
            <div className="divider ">Spot Something Familiar?</div>
            <SectionList />
            {/* <Modal isModalOpen={isModalOpen} closeModal={closeModal} showAuth={showAuthForm} /> */}
        </>
    )
}





export default Principal