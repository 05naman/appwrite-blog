import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components/index'
import { Link } from 'react-router-dom'
import one from '../image/one.jpg'
import two from '../image/two.jpg'
import three from '../image/three.jpg'
import four from '../image/four.jpg'


function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <>
                <div className='flex bg-[#101517] w-auto h-auto'>
                    <div className='w-auto h-52 text-left mb-4 mt-24 ml-28 mr-28'>
                        <div className='text-white text-6xl font-serif pt-3 ml-6'>
                            <h1>Create & Explore blogs</h1>
                        </div>
                        <div className='text-white text-lg mt-3  ml-6'>
                            <h2>Join Bloggy and empower your creativity.Harness intuitive tools designed </h2>
                            <h2>for writers and bloggers to thrive in the digital age.</h2>
                        </div>
                        <button className='w-auto h-auto bg-white text-black text-lg relative mt-4  ml-8 rounded p-2' >
                            <Link
                                to="/login"
                                className="font-medium text-primary transition-all duration-200 hover:underline" >
                                Get Started
                            </Link>
                        </button>
                    </div>
                    <div className=' mb-10 p-16' >
                        <img src={one} alt="hero-image" className='w-80 h-80  mt-10' />
                    </div>
                </div>
                  {/* 2nd  box */}
            <div className='flex  bg-white w-screen h-auto'>
                    <div className='w-auto h-auto ml-40 mb-44 mt-28 mr-28'  >
                        <img src={two} alt="laptop" className='w-screen h-80 rounded' />
                    </div>

                    <div className='text-black text-lg mt-10  ml-32 pl-3 pb-36'>
                        <p className=' font-serif text-lg font-medium pr-60 mt-24'>
                        In today's digital age, laptops have become indispensable tools for work, study, and entertainment. With a plethora of options available, selecting the perfect laptop can be overwhelming. Whether you're a student, a professional, or a gamer, this guide will help you navigate through the myriad choices to find a laptop that suits your specific needs.Modern laptops come in various styles to cater to diverse user preferences and requirements. Ultrabooks, known for their slim profiles and lightweight designs, are perfect for professionals and students who need portability without sacrificing performance.</p>

                    </div>

                </div>


            {/* 3rd box */}

            <div className='flex  bg-[#0d0f10] w-screen h-auto'>
                    <div className='w-auto h-52 text-left mb-24 mt-28 ml-36'>
                        <div className='text-white text-lg mt-3  ml-6 pb-36'>
                           <p className=' ml-8 font-serif text-lg font-medium text-white mr-20 pr-16'>
                            Welcome to a journey into one of the most beloved culinary combinations in Indian cuisine—Dahi Jalebi. This delightful duo brings together the crispy, syrupy sweetness of jalebi with the cool, tangy creaminess of dahi (yogurt). Whether you're looking for a unique breakfast treat, a festive dessert, or a snack that perfectly balances flavors and textures, Dahi Jalebi is sure to satisfy your cravings. Let’s explore the history, preparation, and enjoyment of this wonderful dish.</p>
                        </div>
                    </div>
                    <div className='w-auto h-auto mr-80 mb-44 mt-7' >
                        <img src={three} alt="jalebi" className='w-screen h-60 mt-24 ml-28 mr-56' />
                    </div>
                </div>

          

                {/* 4th box */}

                <div className='flex  bg-white w-screen h-auto'>
                    <div className='w-auto h-auto ml-20 mb-44 mt-28 mr-20'  >
                        <img src={four} alt="chess" className='w-screen h-80 rounded-lg ml-20' />
                    </div>

                    <div className='text-black text-lg mt-5  ml-10 pl-3 pb-36'>
                        <p className=' font-serif text-lg font-medium pr-60 mt-36 ml-10 pl-16'>
                        Realme has confirmed that the Realme 13 Pro and Realme 13 Pro+ will feature the HYPERIMAGE+ photography architecture. In terms of optics, the Realme 13 Pro+ will sport a dual-camera setup on the back, including a 50MP Sony LYT 701 sensor with OIS and a 50MP Sony LYT 600 sensor with 3x optical zoom. Both devices will also come with TÜV Rheinland High Resolution Camera Certification.The devices will also boast impressive hardware specs, including powerful processors, ample RAM, and high-resolution displays, ensuring smooth performance and a great user experience. The Realme 13 Pro and Pro+ are set to redefine smartphone photography, making it accessible to a wider audience while pushing the boundaries of what's possible in mobile imaging</p>

                    </div>

                </div>

                <div className='w-auto h-auto py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
            </>
        )
    }
    return (
        <div className='w-auto h-auto py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className=' w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home