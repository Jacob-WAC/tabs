import react, { useState } from "react";

const Tab = (props) => {
    const [active, setActive] = useState(1);

    return (
        <div className="container">
            <div className="d-flex">
                <button
                    onClick={() => setActive(1)}
                    className="btn border-dark mx-3"
                >
                    tab 1
                </button>
                <button
                    onClick={() => setActive(2)}
                    className="btn border-dark mx-3"
                >
                    tab 2
                </button>
                <button
                    onClick={() => setActive(3)}
                    className="btn border-dark mx-3"
                >
                    tab 3
                </button>
            </div>
            <div>
                {active === 1 ? <p>this is the first tab</p> : ""}
                {active === 2 ? <p>this is the second tab</p> : ""}
                {active === 3 ? <p>this is the third tab</p> : ""}
            </div>
        </div>
    );
};
export default Tab;
