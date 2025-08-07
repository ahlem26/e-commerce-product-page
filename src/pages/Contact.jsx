import React from "react";
import { LuFacebook } from "react-icons/lu";
import { RiInstagramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { TbClockHour4 } from "react-icons/tb";
import { EnTete } from "../components/EnTete";

export default function Contact() {

    return (
        <div>

            {/* En-tête */}
            <EnTete image={'/images/contact-bg.jpg'} texte1={"CONTACT"} texte2={"Home / Contact"}/>

            {/* Section Contact Us */}
            <div className="text-center py-20 px-4 max-w-3xl mx-auto">
                <h2 className="text-4xl font-semibold text-black mb-2">Contact Us</h2>
                <p className="text-gray-500">
                    Have questions or need assistance? Reach out to our team at
                    <span className="text-black"> sneaker@gmail.com </span>
                    or <span className="text-black">+8801776438935</span>.
                    Follow us on social media for updates and promotions!
                </p>
            </div>

            {/* Contenu principal */}
            <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Informations de contact */}
                <div>
                    <h2 className="text-3xl font-semibold mb-4 text-black">Get in Touch</h2>
                    <p className="text-gray-500 mb-6">
                        Contact us for assistance or questions. We're here to help with any inquiries you have!
                    </p>

                    <div className="space-y-4 text-black">
                        <div className="flex gap-2">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white text-xl">
                                <FiHome />
                            </div>
                            <div>
                                <h3 className="font-semibold">Address</h3>
                                <p className="text-gray-500">4005, Silver Business Point, USA</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white text-xl">
                                <TbPhoneCall />
                            </div>
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-gray-500">+01 (231) 234 3444</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white text-xl">
                                <HiOutlineMail />
                            </div>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-gray-500">sneaker@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex gap-2 pb-5 border-b border-gray-200">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white text-xl">
                                <TbClockHour4 />
                            </div>
                            <div>
                                <h3 className="font-semibold">Opening Hours</h3>
                                <p className="text-gray-500">Monday to Saturday: 10AM - 5PM<br />Closed on Sunday</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold">Follow Us:</h3>
                            <div className="flex space-x-4 mt-2">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 border border-orange-500 text-orange-500 text-xl">
                                    <LuFacebook />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 border border-orange-500 text-orange-500 text-xl">
                                    <RiInstagramLine />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 border border-orange-500 text-orange-500 text-xl">
                                    <FaXTwitter />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 border border-orange-500 text-orange-500 text-xl">
                                    <BiLogoPinterestAlt />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Formulaire de contact */}
                <div className="bg-gray-50 shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Send a Message</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded bg-white" />
                        <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded bg-white" />
                        <input type="text" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded bg-white" />
                        <input type="text" placeholder="Address" className="w-full p-3 border border-gray-300 rounded bg-white" />
                        <textarea placeholder="Your message..." className="w-full p-3 border border-gray-300 rounded h-24 resize-none bg-white"></textarea>
                        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition">
                            SEND
                        </button>
                    </form>
                </div>

            </div>

            {/* Google Maps Section */}
            <div className="w-full">
                <h2 className="text-3xl font-semibold text-center mb-6 text-black">Find Us Here</h2>
                <div className="w-full h-[400px]">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6969511542213!2d-79.38429338450057!3d43.65348117912162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d5e0d6b1ef%3A0x5cd6ee2b99f5e4a4!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sdz!4v1628764323456!5m2!1sen!2sdz"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="shadow-md"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
