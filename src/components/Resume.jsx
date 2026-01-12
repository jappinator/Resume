import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Resume() {
  const [dark, setDark] = useState(true);
  const [text, setText] = useState("");
  const heroText = "Data Engineer | Big Data | AWS | GenAI";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(heroText.slice(0, i));
      i++;
      if (i > heroText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen transition-colors duration-500 bg-gradient-to-b from-slate-50 dark:from-slate-950 to-slate-100 dark:to-slate-900 text-slate-900 dark:text-white px-6">

        {/* Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="fixed top-6 right-6 rounded-full px-4 py-2 bg-emerald-400 text-black font-medium shadow-lg"
        >
          {dark ? "Light" : "Dark"}
        </button>

        {/* Hero */}
        <section className="max-w-5xl mx-auto pt-32 pb-24">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold tracking-tight"
          >
            Japneet Singh Chawla
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400"
          >
            {text}
          </motion.p>
        </section>

        {/* Experience Timeline */}
        <section className="max-w-5xl mx-auto pb-24">
          <h2 className="text-3xl font-semibold mb-12">Experience</h2>
          <div className="relative border-l border-emerald-400/40 pl-8 space-y-16">
            {["Amazon – Data Engineer II", "Amazon – Data Engineer Intern", "McKinsey & Company", "Accenture"].map((role, i) => (
              <motion.div
                key={role}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-11 top-1 w-5 h-5 rounded-full bg-emerald-400"></span>
                <h3 className="text-xl font-medium">{role}</h3>
                <p className="text-slate-400 mt-2">
                  Large-scale data platforms, Spark pipelines, AWS analytics systems
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="max-w-5xl mx-auto pb-32">
          <h2 className="text-3xl font-semibold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["Python", "SQL", "Spark", "AWS", "Airflow", "Redshift", "Snowflake", "GenAI"].map(skill => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-lg bg-slate-800 text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
