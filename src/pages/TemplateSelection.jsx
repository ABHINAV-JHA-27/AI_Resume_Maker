import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from "../config/motion.js";
import CustomButton from "../components/CustomButton";
import TemplateCard from "../components/TemplateCard";

const TemplateSelection = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.templateSelection && (
                <motion.section
                    className="templateSelection"
                    {...slideAnimation("left")}
                >
                    <motion.header {...slideAnimation("down")}>
                        <h1 className="text-white font-bold text-[2rem]">
                            Select a Template
                        </h1>
                    </motion.header>
                    <motion.div
                        {...slideAnimation("left")}
                        className="flex flex-row flex-wrap gap-2 max-w-[80%] mt-10 ml-4"
                    >
                        <TemplateCard
                            title="Basic"
                            image="./templateImage.png"
                        />
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default TemplateSelection;
