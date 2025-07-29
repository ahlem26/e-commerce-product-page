import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import Footer from "../components/Footer";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Composant de barre de progression avec étapes, utilisé pour les témoignages
function StepProgressBar({ steps, currentStep, onBack, onNext }) {
    // Calcul du pourcentage de progression (entre 0 et 100 %)
    const progressPercent = ((currentStep - 1) / (steps - 1)) * 100;

    return (
        // Conteneur principal de la barre
        <div className="relative w-40 h-3 flex items-center">

            {/* Barre de fond grise */}
            <div className="flex-1 h-3 bg-gray-300 rounded-full relative">

                {/* Barre de progression colorée (grise foncée ici) */}
                <div
                    className="bg-gray-700 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }} // Largeur dynamique selon le progrès
                />

                {/* Bouton à gauche représentant l'étape 1 (bouton "retour") */}
                <button
                    onClick={onBack} // Fonction à appeler quand on clique
                    disabled={currentStep === 1} // Désactivé si on est déjà à la première étape
                    className={`absolute -left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full z-10
                        flex items-center justify-center font-semibold text-gray-700 bg-white shadow
                        ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`} // Style conditionnel
                >
                    1
                </button>

                {/* Bouton à droite représentant la dernière étape (bouton "suivant") */}
                <button
                    onClick={onNext} // Fonction à appeler quand on clique
                    disabled={currentStep === steps} // Désactivé si on est à la dernière étape
                    className={`absolute -right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full z-10
                        flex items-center justify-center font-semibold text-white shadow
                        ${currentStep === steps
                            ? 'bg-gray-500 opacity-50 cursor-not-allowed' // Style désactivé
                            : 'bg-orange-500 hover:bg-orange-600'}`} // Style actif
                >
                    {steps} {/* Affiche le numéro total d'étapes */}
                </button>
            </div>
        </div>
    );
}


const testimonials = [
    {
        id: 1,
        name: 'Jason M.',
        role: 'Market Analytics',
        image: '/images/men ph.jpg',
        text: '“As a sneaker enthusiast, I appreciate the attention to detail and quality of Sneak Haven\'s collection. Each pair feels like a work of art.”',
        rating: '10/10 recommend',
    },
    {
        id: 2,
        name: 'Alice K.',
        role: 'Product Designer',
        image: '/images/m1.jpg',
        text: '“The variety and authenticity here is unmatched. I always find something unique to add to my sneaker collection.”',
        rating: '9/10 recommend',
    },
    {
        id: 3,
        name: 'Mark T.',
        role: 'Fashion Blogger',
        image: '/images/m2.jpg',
        text: '“Great service and quality. The community feel is what keeps me coming back.”',
        rating: '10/10 recommend',
    },
    {
        id: 4,
        name: 'Sophia L.',
        role: 'Athlete',
        image: '/images/m3.jpg',
        text: '“From performance to style, this brand covers it all. Highly recommended for any sneakerhead.”',
        rating: '10/10 recommend',
    },
    {
        id: 5,
        name: 'David W.',
        role: 'Entrepreneur',
        image: '/images/m4.jpg',
        text: '“I love how the culture and passion are embedded in every pair. True sneaker lovers’ paradise.”',
        rating: '9/10 recommend',
    },
];

export default function About() {
    const [cartCount, setCartCount] = useState(0);


    const [activeStep, setActiveStep] = useState(1);
    const steps = testimonials.length;

    const handleNext = () => {
        if (activeStep < steps) setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (activeStep > 1) setActiveStep((prev) => prev - 1);
    };

    const current = testimonials[activeStep - 1];
    return (
        <div className="max-h-screen">
            {/* Menu */}
            <Navbar cartCount={cartCount} />

            {/* En-tête */}
            <div className="text-center py-40 bg-cover bg-center" style={{ backgroundImage: "url('public/images/bg-about.jpg')" }}>
                <h1 className="text-5xl font-bold text-white">ABOUT</h1>
                <p className="text-white mt-6">Home / Shop</p>
            </div>

            <div className="mx-auto pt-20">
                <h1 className="text-3xl font-bold ml-20 mb-12 text-black">Our Story</h1>

                <div className="flex flex-col lg:flex-row items-center gap-10 bg-gray-100">

                    <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
                        {/* Image gauche */}
                        <img
                            src="public/images/nike-1.jpg"
                            alt="Nike"
                            className="w-full lg:w-[300px] rounded-lg shadow-lg object-cover lg:ml-20"
                        />

                        {/* Texte */}
                        <div className="flex flex-col space-y-6 text-center lg:text-left max-w-xl">
                            <h2 className="text-5xl font-semibold text-black">Our Sneaker Journey</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Sneaker Story began with a love for sneakers. We've evolved into a hub for innovation and community,
                                uniting enthusiasts globally with our curated selection and passion-driven approach.
                            </p>
                            <button className="self-center lg:self-start bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow transition">
                                Let's Go
                            </button>
                        </div>


                    </div>
                    {/* Image droite */}
                    <img
                        src="public/images/shoes-2.jpg"
                        alt="Shoes"
                        className="w-full lg:w-[700px] lg:h-[500px] object-cover"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-around lg:flex-row items-center gap-10 min-h-[700px]">

                {/* Colonne gauche avec les deux images l'une au-dessus de l'autre */}
                <div className="relative w-[300px] h-[400px]">
                    {/* Image du dessous */}
                    <img
                        src="public/images/shoes-3.jpg"
                        alt=""
                        className="absolute top-0 left-0 w-full h-full object-cover rounded shadow z-0"
                    />

                    {/* Image du dessus (à droite en bas) */}
                    <img
                        src="public/images/nike-4.jpg"
                        alt=""
                        className="absolute bottom-0 right-0 w-full h-full object-cover rounded shadow-lg z-10 translate-x-50 translate-y-30"
                    />
                </div>

                {/* Colonne droite avec le texte */}
                <div className="flex flex-col space-y-6 text-center lg:text-left max-w-xl">
                    <h2 className="text-4xl font-semibold text-black">
                        Our Commitment To Sneaker Culture
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Sneaker Story began with a love for sneakers. We've evolved into a hub for innovation and community,
                        uniting enthusiasts globally with our curated selection and passion-driven approach.
                    </p>
                    <button className="self-center lg:self-start bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow transition">
                        Let's Go
                    </button>
                </div>
            </div>

            {/* Section des témoignages */}
            <section className="mb-20">
                {/* Conteneur principal centré avec marges internes */}
                <div className="max-w-7xl mx-auto px-4 py-16">

                    {/* Titre et boutons de navigation */}
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            {/* Sous-titre en petit */}
                            <h2 className="text-xl text-gray-500 mb-1 font-semibold">Our Customers Say</h2>
                            {/* Titre principal */}
                            <h2 className="text-4xl font-bold text-gray-700">
                                What Our <br /> Customers Say
                            </h2>
                        </div>

                        {/* Boutons de navigation (précédent/suivant) */}
                        <div className="flex gap-3">
                            {/* Bouton précédent */}
                            <button
                                onClick={handleBack}
                                disabled={activeStep === 1} // désactivé si c’est le premier témoignage
                                className={`w-8 h-8 p-2 rounded-full bg-white shadow ${activeStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                            >
                                <FaArrowLeft className="text-gray-600" />
                            </button>

                            {/* Bouton suivant */}
                            <button
                                onClick={handleNext}
                                disabled={activeStep === steps} // désactivé si c’est le dernier témoignage
                                className={`w-8 h-8 p-2 rounded-full bg-white shadow ${activeStep === steps ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                            >
                                <FaArrowRight className="text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Boîte contenant le témoignage */}
                    <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                        {/* Image du client (colonne de gauche sur desktop) */}
                        <div className="md:w-1/3 h-72 md:h-auto">
                            <img
                                src={current?.image} // image dynamique
                                alt={current?.name}
                                className="max-w-[400px] max-h-[300px] object-cover"
                            />
                        </div>

                        {/* Contenu du témoignage (texte + nom + rôle) */}
                        <div className="md:w-2/3 p-6 flex flex-col justify-center space-y-5 relative">
                            {/* Texte du témoignage */}
                            <p className="text-gray-600 text-lg">{current?.text}</p>
                            {/* Note ou évaluation */}
                            <p className="text-gray-600 text-lg">{current?.rating}</p>

                            {/* Informations sur l’auteur du témoignage + barre de progression */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-xl">{current?.name}</h4>
                                    <p className="text-sm text-gray-500">{current?.role}</p>
                                </div>

                                {/* Composant de barre de progression personnalisée */}
                                <StepProgressBar steps={steps} currentStep={activeStep} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
