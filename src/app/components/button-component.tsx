"use client";

import { Button } from "@/src/ui";
import PlayIcon from '@/public/assets/svgs/play-icon.svg';



const ButtonComponent = () => {
    return(
       
        <details className="w-full">
            <summary className="pb-5 text-3xl font-bold">Button Component</summary>
            <Button 
             variant="primary"
             color="primary"
             label = "Primary Button without Icon"
             customClassName="mb-2"
            />
            <Button 
             variant="primary"
             color="primary"
             label = "Primary Button with Icon"
             leftIcon = {<PlayIcon/>}
             customClassName="mb-2"
            />
            
            <Button 
             variant="secondary"
             color="primary"
             label = "Secondary Button without Icon"
             customClassName="mb-2"
            />
            <Button 
             variant="secondary"
             color="primary"
             label = "Secondary Button with Icon"
             leftIcon = {<PlayIcon/>}
             customClassName="mb-2"
            />
            <Button 
             variant="outlined"
             color="primary"
             label = "Outlined Button with Icon"
             leftIcon = {<PlayIcon/>}
             customClassName="mb-2"
            />
            <Button 
             variant="outlined"
             color="primary"
             label = "Outlined Button without Icon"
             customClassName="mb-2"
            />
            <Button 
             variant="tertiary"
             color="primary"
             label = "Tertiary Button"
             customClassName="mb-2"
            />

        </details>
    )
}

export {ButtonComponent};