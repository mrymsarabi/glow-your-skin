import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer 
            className="bg-dark text-light text-center py-4 mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <p className="m-0 small">
                &copy; {new Date().getFullYear()} Glow Your Skin. All rights reserved.
            </p>
        </motion.footer>
    );
};

export default Footer;