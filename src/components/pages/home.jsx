// src/components/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "../../styles/home.css";

function Home() {
    // React Spring for fade-in transition
    const fadeInProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1500 },
    });

    // Effect to apply the page-specific classes
    useEffect(() => {
        document.documentElement.classList.add("home-page");
        document.body.classList.add("home-page");
        document.getElementById("root").classList.add("home-page-root");

        return () => {
            document.documentElement.classList.remove("home-page");
            document.body.classList.remove("home-page");
            document.getElementById("root").classList.remove("home-page-root");
        };
    }, []);

    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = [
        "a Front End Developer",
        "a Back End Developer",
        "a Creator",
        "an Oracle NetSuite Administrator & Developer",
        "a HubSpot Administrator & Developer",
        "a Project Manager"
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(50); // Faster speed when deleting
            } else {
                setText(fullText.substring(0, text.length + 1));
                setTypingSpeed(125); // Normal typing speed
            }

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, typingSpeed, loopNum]);

    return (
        <animated.div style={fadeInProps} className="container-fluid home-page-root">
            <div className="row">
                <div className="col-9 home-container">
                    <h1>
                        Welcome to <span className="color-span">Michael Drag's portfolio</span>
                    </h1>
                    <h3>
                        I am <span className="color-span">{text}</span>
                        <span className="cursor">|</span>
                    </h3>
                    <p>Take a look around!</p>
                </div>
                <div className="col-3"></div> {/* Empty right section */}
            </div>
        </animated.div>
    );
}

export default Home;
