'use client';

import Star from "@/public/assets/svgs/bullet-point.svg";


const BulletPoint = () => {
    return (
        <div className="flex justify-center items-center bg-secondary-50 rounded-full w-6 h-6">
            <Star/>
        </div>
    );
}
 
export {BulletPoint};