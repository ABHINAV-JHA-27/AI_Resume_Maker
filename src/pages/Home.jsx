import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from "../config/motion.js";
import CustomButton from "../components/CustomButton.jsx";

const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation("left")}>
                    <motion.header {...slideAnimation("down")}>
                        {/* <img
                            src="./threejs.png"
                            alt="logo"
                            className="w-8 h-8 object-contain"
                        /> */}
                    </motion.header>

                    <motion.div
                        className="home-content"
                        {...headContainerAnimation}
                    >
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text text-white font-bold">
                                Resume <br className="xl:block hidden" />{" "}
                                Revolutionized.
                            </h1>
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            className="flex flex-col gap-5"
                        >
                            <p className="max-w-[50%] font-normal text-blue-50 text-base">
                                Get the job of your dreams with our free resume
                                maker website, powered by AI! Our platform
                                offers customizable templates and expert
                                suggestions to help you create a professional
                                and eye-catching resume in minutes. With our AI
                                technology, you can ensure that your resume
                                stands out to potential employers by
                                highlighting your skills and experience in the
                                best possible way. Start building your winning
                                resume today!
                            </p>

                            <CustomButton
                                type="filled"
                                title="Create"
                                handleClick={() => {
                                    state.intro = false;
                                    state.templateSelection = true;
                                }}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Home;
