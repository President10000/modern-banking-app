import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  // parent div
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
  bg-blue-gradient p-[2px] cursor-pointer `}>

    {/* second div */}
    <div className={`${styles.flexCenter} flex-col
        bg-primary w-[100%] h-[100%] rounded-full`}>

      {/* third div */}
      <div className={`${styles.flexCenter} flex-row`}>


        <p className="font-poppins font-medium text-[18px]
            leading-[23px]">
          <span className="text-gradient">
            Get
          </span>

          <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />

        </p>
      </div>
    </div>{/* second div */}
    {/* // parent div */}
  </div>
);


export default GetStarted;
