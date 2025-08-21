import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import the hook

const Footer = () => {
    const { t } = useTranslation();

    return (
        <motion.footer 
            className="bg-dark text-light text-center py-4 mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <p className="m-0 small">
                &copy; {new Date().getFullYear()} {t("footer_rights")}
            </p>
        </motion.footer>
    );
};

export default Footer;