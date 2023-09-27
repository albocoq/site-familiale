"use client"
import Marquee from "react-easy-marquee";
import { useState, useEffect } from "react";
import { truncate } from "fs/promises";

export default function Marque({ getNames }) {
    const [nomsDeFamilleUniques, setNomsDeFamilleUniques] = useState<string[]>([]);
    useEffect(() => {
        const nomsUniques: string[] = [];

        getNames.map((names) => {
            const name = names.person.split(' ');
            const familyNames = name.slice(1);
            const familyName = familyNames.join(' ');
    
            if (!nomsUniques.includes(familyName)) {
                nomsUniques.push(familyName);
            }
        }); 
        
        setNomsDeFamilleUniques(nomsUniques);
    }, [getNames]);

    
    return (
        <>
            <Marquee 
                duration={20000}
                height="20px"
                width="80%"
                axis="X"
                align="center"
                pauseOnHover={true}
                reverse={false}
                className="cursor-none"
            >            
                {nomsDeFamilleUniques.map((nomsDeFamilleUniques) => (
                    <>
                        <b key={nomsDeFamilleUniques} className=" text">{nomsDeFamilleUniques}</b>
                        <p>&nbsp; &nbsp; • &nbsp; &nbsp;</p>
                    </>
                ))}
            </Marquee>
        </>
    )
}
