import {LazyMotion, motion} from "framer-motion";

const sizes = [0.1,0.3,0.5];

const Floaties = (props) => {
    let size = sizes[Math.floor(Math.random()*3)];
    return <>
    <LazyMotion features={domAnimation}>
        <motion.circle radius={size}
        animate={{}}>
            
        </motion.circle>
    </LazyMotion>
    </>;
}

// const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.5
//       }
//     }
//   }
  
//   const item = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1 }
//   }
  
//   return (
//     <motion.ol
//       variants={container}
//       initial="hidden"
//       animate="show"
//     >
//       <motion.li variants={item} />
//       <motion.li variants={item} />
//     </motion.ol>
//   )

// https://www.framer.com/motion/transition/


// const variants = {
//   visible: i => ({
//     opacity: 1,
//     transition: {
//       delay: i * 0.3,
//     },
//   }),
//   hidden: { opacity: 0 },
// }

// return items.map((item, i) => (
//   <motion.li
//     custom={i}
//     animate="visible"
//     variants={variants}
//   />
// ))

export default Floaties;