import {atom, selector} from "recoil";

export const networkAtom = atom ({
    key: "networkAtom",
    default: 103
})


export const jobAtom = atom ({
    key: "jobAtom",
    default: 0
})


export const notificationAtom = atom ({
    key: "notificationAtom",
    default: 0
})


export const messagingAtom = atom ({
    key: "messagingAtom",
    default: 12
})

export const sumSelector = selector ({
    key : " sumSelector",
    get: ({get})=> {
        const netsum = get(networkAtom);
        const jobsum = get(jobAtom);
        const notsum = get(notificationAtom);
        const messum = get(messagingAtom)
        return (netsum+jobsum+notsum+messum)
    }
})