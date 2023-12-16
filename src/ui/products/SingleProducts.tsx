import { productsVars } from "@/app/helpers";
import upperFirst from "@/utils/UpperFirst";
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const SingleProducts = ({ title, id, thumbnail }: Product) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const upperTitle = upperFirst(title)


    return (
        <AnimatePresence>
            <motion.div variants={productsVars} initial="initial" animate={isInView ? "animate" : ''} whileHover="hovered" ref={ref} exit="exit" >
                <div>
                    <span >New</span>
                    <h3 >{title.length > 17 ? upperTitle.slice(0, 20) + '...' : upperTitle}</h3>
                </div>
                <Link href={`/product/${id}`}>
                    <Image width={400} height={173} src={thumbnail ?? ''} alt={upperTitle} />
                </Link>
            </motion.div>
        </AnimatePresence>
    )
}

export default SingleProducts