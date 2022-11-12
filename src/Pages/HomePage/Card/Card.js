import React from 'react';

const Card = ({ cardData }) => {
    const { name, description, icon, bgClass } = cardData
    return (
        <div className={`w-80 md:w-96 rounded-md h-32 ${bgClass}`}>
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={icon} alt="" className=" w-20 h-20 p-2 rounded-full bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">{name}</h4>
                        <span className="text-sm text-gray-100">{description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;