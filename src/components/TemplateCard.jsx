import React from "react";
import state from "../store";

const TemplateCard = ({ title, image }) => {
    return (
        <div>
            <div
                className="w-[150px] h-[200px] cursor-pointer"
                onClick={() => {
                    state.templateSelection = false;
                    state.resumeMaker = true;
                    state.selectedTemplate = title;
                }}
            >
                <img
                    src={image}
                    alt={`resume_template_${title}`}
                    className="object-contain rounded hover:outline-[10px] outline-white p-1"
                />
            </div>
            <div className="text-white text-center">{title}</div>
        </div>
    );
};

export default TemplateCard;
