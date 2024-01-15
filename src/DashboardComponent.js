// export default DashboardComponent;
import React, { useEffect, useState } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from './firebase';
import TicketComponent from './TicketComponent';

const InformationComponent = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const infoRef = ref(database, 'liveOrders');
        onValue(infoRef, (snapshot) => {
            console.log("snapshot", snapshot.val())
            setInfo(snapshot.val());
        });

        return () => off(infoRef);
    }, []);

    return (
        <div>
            <ul>
                {<TicketComponent order={info} />}
            </ul>

        </div>
    );
};

export default InformationComponent;