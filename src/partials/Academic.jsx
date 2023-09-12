import React from 'react';

import lasalle from '../images/salle.jpg';

function Academic() {
    return (
        <section id="section4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Education</h2>
                    </div>

                    {/* Testimonials */}
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">

                        {/* 1st testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">

                                    <img className="rounded-full" src={lasalle} width="48" height="48" alt="Testimonial 01" />

                                </div>
                            </div>
                            <h4 className="h4 mb-4">MÁSTER UNIVERSITARIO EN PROGRAMACIÓN WEB DE ALTO</h4>

                            <blockquote className="text-lg text-gray-400 grow">Universitat Ramon Llull</blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">2021-2022</cite>
                            </div>
                        </div>

                        {/* 2nd testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <img className="rounded-full" src={lasalle} width="48" height="48" alt="Testimonial 02" />

                                </div>
                            </div>
                            <h4 className="h4 mb-4">GRADO EN INGENIERÍA, INGENIERÍA MULTIMÉDIA</h4>

                            <blockquote className="text-lg text-gray-400 grow">Universitat Ramon Llull</blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">2014 - 2021</cite>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Academic;