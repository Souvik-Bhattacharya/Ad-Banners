"use client";
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPen
} from "@fortawesome/free-solid-svg-icons";
import { AdBanner } from '@/types/AdBanner';

interface BannerImageCompProps {
    banner: AdBanner;
    handleEdit: (id: number) => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ banner, handleEdit }) => {
    return (
        <div className={`w-[533px] after:bg-cover after:bg-center after:bg-no-repeat after:content-[''] after:absolute after:inset-0 after:h-full after:w-full after:z-10 shadow-black shadow-lg card h-[300px] relative flex flex-col p-4`}>
            <Image
                src={banner.image}
                alt=""
                fill
                className='object-cover object-center'
            />
            <button onClick={() => { handleEdit(banner.id) }} className='flex justify-end z-20'>
                <FontAwesomeIcon icon={faPen} className='text-white' height={16}/>
            </button>
            <div className='z-20 flex flex-col justify-between h-full border-b-0 border-gray-400 px-4 pb-8'>
                <div className='flex flex-col gap-4 '>
                    <p className='text-white text-2xl'>{banner.title}</p>
                    <p className='text-gray-300'>{banner.description}</p>
                </div>
                <button className='w-fit px-4 py-2 border border-yellow-500 bg-yellow-500 text-black font-semibold hover:bg-yellow-400'>{banner.cta}</button>
            </div>
        </div>
    );
}

export default BannerImageComp;