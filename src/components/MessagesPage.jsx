import React from "react";
import { motion } from "framer-motion";

import vc from "../assets/vc.jpg";
import dean from "../assets/dean.jpg";
import hod from "../assets/hod.jpg";
import bgLogo from "../assets/logo_gold.png"; // center background logo

const MessagesSection = () => {
  return (
    <section className="relative py-32 text-white overflow-hidden backdrop-blur-md bg-slate-900/60 ">

      {/* center background logo */}

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col gap-32">

        {/* ===== 1 Vice Chancellor ===== */}
        <div className="relative flex items-center justify-center">

          {/* left image */}
          <motion.img
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={vc}
            className="absolute left-0 w-44 h-44 object-cover rounded-3xl shadow-2xl"
          />

          {/* message */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl text-center bg-white/10 backdrop-blur-md p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-bold text-amber-400 mb-3">
              Vice Chancellor
            </h2>
            <p className="text-gray-200">
              Welcome to Dhaara musical show. This event celebrates creativity,
              passion and musical excellence of our university students.
            </p>
          </motion.div>
        </div>

        {/* ===== 2 Dean ===== */}
        <div className="relative flex items-center justify-center">

          {/* right image */}
          <motion.img
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={dean}
            className="absolute right-0 w-44 h-44 object-cover rounded-3xl shadow-2xl"
          />

          {/* message */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl text-center bg-white/10 backdrop-blur-md p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-bold text-amber-400 mb-3">
              Faculty Dean
            </h2>
            <p className="text-gray-200">
              Dhaara is a platform for students to express their artistic talents
              and celebrate music and culture across universities.
            </p>
          </motion.div>
        </div>

        {/* ===== 3 HOD ===== */}
        <div className="relative flex items-center justify-center">

          {/* left image */}
          <motion.img
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={hod}
            className="absolute left-0 w-44 h-44 object-cover rounded-3xl shadow-2xl"
          />

          {/* message */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl text-center bg-white/10 backdrop-blur-md p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-bold text-amber-400 mb-3">
              Head of Department
            </h2>
            <p className="text-gray-200">
              We are proud to present Dhaara as a grand musical journey that
              unites students through creativity and performance.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MessagesSection;


