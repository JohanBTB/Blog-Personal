import { connect } from "react-redux";
import { motion } from 'framer-motion'; 

function Layout({children}){

    return(
        <motion.div 
        initial={{opacity:0.25, transitionDuration:0.75}}
        animate={{opacity:1, transitionDuration:0.75}}
        exit={{opacity:0.25, transitionDuration:0.75}}
        class="min-w-[30rem]">
            {children}
        </motion.div>
    )

}

const mapStateToProp = state=>({

})

export default connect(mapStateToProp, {

}) (Layout);



