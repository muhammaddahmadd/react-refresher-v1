import React from "react";

function Footer() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const hour12 = hours % 12 || 12;
    const amPm = hours >= 12 ? "Pm" : "Am";
    const openHour = 12;
    const closeHour = 22
    const isOpen = hours >= openHour && hours <= closeHour ? true : false;


    console.log(isOpen)

    return (
        <footer className="date">
            <div>
                {currentDate.toLocaleString()} {" "}
                {
                    isOpen ? "We are currently Open" : "Sorry we're closed!!!"
                }
            </div>
            <button className="btn"> Order now</button>
        </footer>
    )
}

export default Footer;