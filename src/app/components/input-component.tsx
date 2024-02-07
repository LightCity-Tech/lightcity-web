"use client";

import { Input } from "@/src/ui";


const InputComponent = () => {
    return(
        <details className="w-full">
            <summary className="pb-5 text-3xl font-bold">
                Input Field Component
            </summary>
            <Input
                name="location"
                label="location"
                type="text"
                placeholder="Enter here"
            />
             <Input
                name="fullname"
                label="full name"
                type="text"
                placeholder="Enter here"
            />
        </details>
    )
}

export default InputComponent;