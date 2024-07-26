import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components/index';
import { Link } from 'react-router-dom';
import one from '../image/one.jpg';
import two from '../image/two.jpg';
import three from '../image/three.jpg';
import four from '../image/four.jpg';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <>
                {/* First Section */}
                <div className='flex flex-col lg:flex-row bg-[#101517] w-full h-auto p-6 lg:p-10'>
                    <div className='lg:w-1/2 text-left mb-6 lg:mb-0  lg:mt-16 ml-0 lg:ml-10 mr-0 lg:mr-28'>
                        <div className='text-white text-4xl lg:text-6xl font-serif pt-3 ml-0 lg:ml-6'>
                            <h1>Create & Explore blogs</h1>
                        </div>
                        <div className='text-white text-base lg:text-lg mt-3 ml-0 lg:ml-6'>
                            <h2>Join Bloggy and empower your creativity. Harness intuitive tools designed </h2>
                            <h2>for writers and bloggers to thrive in the digital age.</h2>
                        </div>
                        <button className='bg-white text-black text-base lg:text-lg relative mt-4 ml-0 lg:ml-8 rounded p-2'>
                            <Link
                                to="/login"
                                className="font-medium text-primary transition-all duration-200 hover:underline">
                                Get Started
                            </Link>
                        </button>
                    </div>
                    <div className='flex justify-center items-center mb-6 lg:mb-10 p-4 lg:p-16'>
                        <img src={one} alt="hero-image" className='w-full lg:w-80 h-auto lg:h-80' />
                    </div>
                </div>


                {/* Second Section */}
                <div className='flex flex-col lg:flex-row bg-white w-full h-auto p-6 lg:p-10'>
                    <div className='lg:w-1/2 flex justify-center items-center mb-24 mt-16 mr-8 '>
                        <img src={two} alt="laptop" className='w-full lg:w-[65%] h-auto max-w-[400px] rounded' />
                    </div>
                    <div className='lg:w-1/2 text-black text-base lg:text-lg mt-6 lg:mt-0 lg:ml-6'>
                        <p className='font-serif font-medium  mb-24 mt-24 mr-10 '>
                            In today's digital age, laptops have become indispensable tools for work, study, and entertainment. With a plethora of options available, selecting the perfect laptop can be overwhelming. Whether you're a student, a professional, or a gamer, this guide will help you navigate through the myriad choices to find a laptop that suits your specific needs. Modern laptops come in various styles to cater to diverse user preferences and requirements. Ultrabooks, known for their slim profiles and lightweight designs, are perfect for professionals and students who need portability without sacrificing performance.
                        </p>
                    </div>
                </div>



                {/* Third Section */}
                <div className='flex flex-col lg:flex-row bg-[#101518] w-full h-auto p-6 lg:p-10'>

                    <div className='lg:w-1/2 text-white text-base lg:text-lg mt-6 lg:mt-0 lg:ml-6'>
                        <p className='font-serif font-medium mt-20 ml-16'>
                            Realme has confirmed that the Realme 13 Pro and Realme 13 Pro+ will feature the HYPERIMAGE+ photography architecture. In terms of optics, the Realme 13 Pro+ will sport a dual-camera setup on the back, including a 50MP Sony LYT 701 sensor with OIS and a 50MP Sony LYT 600 sensor with 3x optical zoom. Both devices will also come with TÜV Rheinland High Resolution Camera Certification. The devices will also boast impressive hardware specs, including powerful processors, ample RAM, and high-resolution displays, ensuring smooth performance and a great user experience. The Realme 13 Pro and Pro+ are set to redefine smartphone photography, making it accessible to a wider audience while pushing the boundaries of what's possible in mobile imaging.
                        </p>
                    </div>
                    <div className='lg:w-1/2 flex justify-center items-center'>
                        <img src={four} alt="mobile" className='w-full lg:w-[65%] h-auto max-w-[400px] rounded-lg  mb-24 mt-24' />
                    </div>
                </div>

                {/* Fourth Section */}
                <div className='flex flex-col lg:flex-row bg-white w-full h-auto p-6 lg:p-10'>
                    <div className='lg:w-1/2 flex justify-center items-center'>
                        <img src={three} alt="jalebi" className='w-full lg:w-[65%] h-auto max-w-[400px]  mb-24 mt-20' />
                    </div>
                    <div className='lg:w-1/2 flex flex-col justify-center text-left mb-6 lg:mb-0 ml-24'>
                        <div className='text-black text-base lg:text-lg'>
                            <p className='font-serif font-medium mb-8 mr-20'>
                                Welcome to a journey into one of the most beloved culinary combinations in Indian cuisine—Dahi Jalebi. This delightful duo brings together the crispy, syrupy sweetness of jalebi with the cool, tangy creaminess of dahi (yogurt). Whether you're looking for a unique breakfast treat, a festive dessert, or a snack that perfectly balances flavors and textures, Dahi Jalebi is sure to satisfy your cravings. Let’s explore the history, preparation, and enjoyment of this wonderful dish.
                            </p>
                        </div>
                    </div>

                </div>

                <div className='w-full h-auto py-8'>
                    <Container>
                        <div className='flex flex-wrap'>
                            {posts.map((post) => (
                                <div key={post.$id} className='w-full md:w-1/2 lg:w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </>
        );
    }

    return (
        <div className='w-full h-auto py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='w-full md:w-1/2 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
