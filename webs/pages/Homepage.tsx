import React from'react';
import Home from '.';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainCard from '@/components/cards/MainCard';
import More from '@/components/cards/More';
import AdSpace from '@/components/cards/AdSpace';
import Socials from '@/components/cards/Socials';
 
const Homepage: React.FC = () => 
{
    return (<><Header />
        <div>
            <MainCard />
            <More/>
        </div>
        <div>
            <AdSpace />
            <Socials/>
        </div>
        <Footer /></>
    );
}
export default Homepage;