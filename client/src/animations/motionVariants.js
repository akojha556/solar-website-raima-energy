export const fade = {
     hidden: { opacity: 0 },
     visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

export const fadeUp = {
     hidden: { opacity: 0, y: 50 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const fadeDown = {
     hidden: { opacity: 0, y: -50 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const fadeLeft = {
     hidden: { opacity: 0, x: 90 },
     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

export const fadeRight = {
     hidden: { opacity: 0, x: -90 },
     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}