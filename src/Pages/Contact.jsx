import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaPhoneAlt, FaTruck } from "react-icons/fa";

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_xmx34hk",
                "template_0qb0tam",
                formRef.current,
                "tKn6TEfBVDwM_2z6X"
            )
            .then(
                () => {
                    alert("Message envoyé avec succès ✅");
                    formRef.current.reset();
                },
                () => {
                    alert("Une erreur est survenue ❌");
                }
            );
    };

    return (
        <>
            <Navbar />

            {/* Page header */}
            <section className="bg-teal-500 py-16 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        Contactez nous
                    </h1>
                    <p className="text-sm opacity-90">
                        Home &nbsp;•&nbsp; Contactez nous
                    </p>
                </div>
            </section>

            {/* Contact section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Left info */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">
                            Contactez nous en ligne
                        </h2>

                        <p className="text-sm text-gray-600 mb-8">
                            Nous vous invitons à remplir notre formulaire,
                            si vous avez des questions techniques, commerciales.
                        </p>

                        <div className="mb-8">
                            <h3 className="font-semibold mb-2">Tanger</h3>
                            <div className="flex items-center gap-3 text-sm mb-2">
                                <FaPhoneAlt className="text-teal-500" />
                                (+212) 5 39 34 36 38
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <FaTruck className="text-teal-500" />
                                (+212) 6 66 04 57 78
                            </div>
                        </div>

                        <hr className="my-6" />

                        <div>
                            <h3 className="font-semibold mb-2">Marrakech</h3>
                            <div className="flex items-center gap-3 text-sm">
                                <FaPhoneAlt className="text-teal-500" />
                                (+212) 5 24 43 96 21
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-md shadow-sm">
                        <h2 className="font-semibold mb-6">
                            Formulaire de contact
                        </h2>

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Votre nom"
                                required
                                className="w-full border px-4 py-2 text-sm focus:outline-none focus:border-teal-500"
                            />

                            <input
                                type="email"
                                name="user_email"
                                placeholder="Votre e-mail"
                                required
                                className="w-full border px-4 py-2 text-sm focus:outline-none focus:border-teal-500"
                            />

                            <input
                                type="text"
                                name="user_phone"
                                placeholder="Numéro de téléphone"
                                className="w-full border px-4 py-2 text-sm focus:outline-none focus:border-teal-500"
                            />

                            <div className="flex gap-4 text-sm">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="city" value="Tanger" />
                                    Tanger
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="city" value="Marrakech" />
                                    Marrakech
                                </label>
                            </div>

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Votre message"
                                required
                                className="w-full border px-4 py-2 text-sm focus:outline-none focus:border-teal-500 resize-none"
                            />

                            <button
                                type="submit"
                                className="bg-teal-500 text-white px-6 py-2 text-sm font-semibold hover:bg-teal-600 transition cursor-pointer"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;
