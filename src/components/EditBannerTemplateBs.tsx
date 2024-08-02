import React, { useState } from 'react';
import { AdBanner } from '@/types/AdBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXmark,
    faFileImage
} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

interface EditBannerTemplateBsProps {
    banner: AdBanner;
    handleSave: (banner: AdBanner) => void;
    handleClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ banner, handleSave, handleClose }) => {
    const [data, setData] = useState<AdBanner>(banner);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const save = () => {
        handleSave(data);
        handleClose();
    };

    const convert = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                setData({ ...data, image: reader.result as string })
            }
        }
    }

    return (
        <div className="fixed h-screen w-full items-center justify-center z-30 flex before:bg-black before:opacity-90 before:h-full before:w-full before:absolute before:-z-10">
            <form onSubmit={save} className='flex flex-col max-h-[75%] gap-2 w-2/5 p-8 bg-white rounded-md'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl text-teal-900 font-bold'>Edit Banner</h1>
                    <button title='Close' onClick={handleClose} className='text-3xl'>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className='overflow-y-auto flex flex-col gap-4 p-4'>
                    <div className='p-4 flex justify-center'>
                        <div className={`w-[360px] after:bg-cover after:bg-center after:bg-no-repeat after:content-[''] after:absolute after:inset-0 after:h-full after:w-full after:z-10 shadow-black shadow-md card h-[202.5px] relative flex flex-col p-4`}>
                            <Image
                                src={data.image}
                                alt=""
                                fill
                                className='object-cover object-center'
                            />
                            <div className='z-20 flex flex-col justify-between h-full px-4 pb-8'>
                                <div className='flex flex-col gap-4 '>
                                    <p className='text-white text-base'>{data.title}</p>
                                    <p className='text-gray-300 text-xs'>{data.description}</p>
                                </div>
                                <div className='w-fit px-2 py-1 border border-yellow-500 bg-yellow-500 text-black font-semibold text-xs'>{data.cta}</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex relative'>
                        <input id='title' type='text' name="title" value={data.title} onChange={handleChange} placeholder="Add Title" className='block w-full px-4 py-2 rounded-md bg-transparent border-2 border-solid border-gray-400 outline-none focus:border-teal-800' required />
                        <label className="text-lg text-teal-800 rounded-md absolute top-0 -translate-y-1/2 bg-white px-1 left-4" htmlFor="title">Title</label>
                    </div>
                    <div className='flex relative'>
                        <textarea id='desc' rows={3} name="description" value={data.description} onChange={handleChange} placeholder="Add Description" className='block w-full px-4 py-2 rounded-md bg-transparent border-2 border-solid border-gray-400 outline-none focus:border-teal-800' required />
                        <label className="text-lg text-teal-800 rounded-md absolute top-0 -translate-y-1/2 bg-white px-1 left-4" htmlFor="desc">Description</label>
                    </div>
                    <div className='flex relative'>
                        <input id='cta' type='text' name="cta" value={data.cta} onChange={handleChange} placeholder="Add CTA" className='block w-full px-4 py-2 rounded-md bg-transparent border-2 border-solid border-gray-400 outline-none focus:border-teal-800' required />
                        <label className="text-lg text-teal-800 rounded-md absolute top-0 -translate-y-1/2 bg-white px-1 left-4" htmlFor="desc">CTA</label>
                    </div>
                    <div className='flex relative'>
                        <input id='img' type='file' name="image" onChange={convert} className='hidden' />
                        <label className="w-full cursor-pointer bg-gray-300 rounded-md p-12 flex flex-col items-center justify-center hover:bg-gray-200" htmlFor="img">
                            <FontAwesomeIcon icon={faFileImage} className='text-5xl text-gray-500' />
                            <p className='text-sm text-gray-500'>Choose An Image</p>
                        </label>
                    </div>

                </div>
                <button type='submit' className='font-semibold px-4 py-2 bg-teal-900 rounded-md border border-teal-900 hover:bg-teal-800 hover:border-teal-800 text-white'>Save</button>
            </form>
        </div>
    );
};

export default EditBannerTemplateBs;
