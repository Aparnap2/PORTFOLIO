import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import Chatbot from '../components/HomeComponents/chatbot';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';

const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MyExpertise />
           <Chatbot/>
            <Footer />

        </div>
    )
}

export default home