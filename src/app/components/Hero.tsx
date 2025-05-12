import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenContato }: { onOpenContato: () => void }) => {
  const [rotation, setRotation] = useState(0);
  const [rotateClockwise, setRotateClockwise] = useState(true);

  const handleHover = () => {
    const nextRotation = rotateClockwise ? rotation + 360 : rotation - 360;
    setRotation(nextRotation);
    setRotateClockwise(!rotateClockwise);
  };

  return (
    <section className="bg-preto-profundo text-branco-neutro py-16 md:py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-preto-profundo z-0"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center md:justify-around">
        
        {/* TEXTO */}
        <motion.div
          className="text-center md:text-left max-w-xl md:order-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              INOVAÇÃO
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              EM MARKETING
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              PARA SEU
            </motion.div>

            <motion.div
              className="shine-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              NEGÓCIO
            </motion.div>

            <br className="md:hidden" />

            <motion.div
              className="shine-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              CRESCER 360°
            </motion.div>
          </motion.h1>

          <button
            onClick={onOpenContato}
            className="bg-gradient-to-r from-roxo-futurista to-fuchsia-600 text-branco-neutro font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:from-roxo-futurista hover:to-roxo-futurista mt-4"
          >
            FALE CONOSCO
          </button>
        </motion.div>

        {/* LOGO */}
        <motion.div
          className="w-[280px] sm:w-[320px] md:w-[28rem] lg:w-[35rem] h-auto mt-10 md:mt-0 flex justify-center items-center md:order-2 cursor-pointer"
          animate={{ rotate: rotation }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          onHoverStart={handleHover}
        >
          <img
            src="/logo1.png"
            alt="Logo Impacto 360"
            className="w-full max-w-[400px] sm:max-w-[460px] h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
