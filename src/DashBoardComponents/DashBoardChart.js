
import { faDesktop, faMobileAlt, faTabletAlt } from '@fortawesome/free-solid-svg-icons';

const trafficShares = [
    { id: 1, label: "Upcoming Jobs", value: 80, color: "secondary", icon: faDesktop },
    { id: 2, label: "Pending Jobs", value: 77, color: "primary", icon: faMobileAlt },
    { id: 3, label: "Completed Jobs", value: 73, color: "tertiary", icon: faTabletAlt }
];

const totalOrders = [
    { id: 1, label: "Seekers", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: 2, label: "Providers", value: [2, 3, 4, 8, 1, 2], color: "secondary" }
];

export {
    trafficShares,
    totalOrders
};