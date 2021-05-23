import React from 'react'

function Accordion() {

const [clicked, setClicked] = useState(false);

const toggle = index => {
    if (clicked === index) {
        return setClicked(null);
    }

    setClicked(index);
};


    return (
        <div>
            
        </div>
    )
}

export default Accordion
