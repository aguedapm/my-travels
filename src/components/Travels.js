import React from "react";
import Travel from './Travel';

const travels = [
    {
        id: 1,
        destination: "Copenhagen",
        country: "Denmark",
        photo: "https://amp.businessinsider.com/images/553fd1fb6bb3f71f030ff12a-2560-1920.jpg",
        distance: "1221 km"
    },
    {
        id: 2,
        destination: "Calgary",
        country: "Canada",
        photo: "https://amp.businessinsider.com/images/554015206bb3f7f62cd64a90-2560-1920.jpg",
        distance: "6370 km"
    },
    {
        id: 3,
        destination: "Reykjavik",
        country: "Iceland",
        photo: "https://amp.businessinsider.com/images/553ff73deab8ea9767d64a97-1136-851.jpg",
        distance: "3633 km"
    },
    {
        id: 4,
        destination: "Vancouver",
        country: "Canada",
        photo: "https://amp.businessinsider.com/images/553ff83369bedd1b6376b003-2560-1920.jpg",
        distance: "7916 km"
    },
    {
        id: 5,
        destination: "Milan",
        country: "Italy",
        photo: "https://amp.businessinsider.com/images/553fdb9d6bb3f7572a0ff12d-2560-1920.jpg",
        distance: "851 km"
    }
]

const Travels = () => (
    <div>
        {travels.map(travel => (
             <Travel {...travel} key={travel.id}/>
        ))}
       
    </div>
)

export default Travels