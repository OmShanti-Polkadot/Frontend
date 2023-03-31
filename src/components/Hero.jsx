import { motion } from "framer-motion";

import { logo } from "../assets";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <idv className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <div>
            <img src={logo} alt="logo" className="w-40 h-40" />
          </div>
          <h1 className={`${styles.heroHeadText} text-white font-semibold`}>Transforming healthcare <br /> <span className="text-[#915eff] font-semibold">with trust and transparency.</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Our Insurance NFT packages Marketplace  <br className="sm:block hidden"/> <span className="text-[#915eff]">will revolutionize the health insurance industry.</span></p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        
      </div> */}
    </section>
  )
}

export default Hero;