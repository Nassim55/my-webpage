import React from 'react';

const paragraph1 = `The nature of engineering design has changed drastically in recent decades.
    Throughout history an engineering design would largely be constrained by the local availability of materials and
    technical knowledge. In the current era of globalised markets and digital communication, geographic location no
    longer limits designers in such a way. A company based in the UK, for example, can incorporate cutting edge 
    engineering in their products by using suppliers from across the globe.`

const paragraph2 = `Rolls-Royce Aerospace makes use of an extensive geographically distributed supply chain to supply
    the majority of parts that make up an aircraft engine. Whilst this brings significant economic benefits, the 
    trade-off for this is limited control over their supplier parts. Working in conjunction with the head of supplier
    engineering at Rolls-Royce Aerospace, this project looked at the possibility of mitigating this trade-off by
    applying a simulation to the supplier part development process.`;



const RollsRoyceMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <p className="project-information-text">{paragraph2}</p>
        </div>
    );
};

export default RollsRoyceMoreInfo;