import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/about';
import Home from './pages/home';
import Services from './pages/services';
import ScrollToTop from './utils/ScrollToTop';
import data from './data/services.json';
import SingleService from './pages/services/components/SingleService';
import Contact from './pages/contact';

const App = () => {
  return (
    <Box minH='100vh' w='100%' bgColor='gray.100'>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />

        {/*Single Service Routes */}
        {data.map((d) => (
          <Route
            key={d.id}
            path={`services/${d.link}`}
            element={
              <SingleService
                title={d.title}
                content={d.content}
                title2={d['title-2']}
                content2={d['content-2']}
                title3={d['title-3']}
                content3={d['content-3']}
                cardTitle={d['card-title']}
                cardContent={d['card-content']}
                title4={d['title-4']}
                content4={d['title-4']}
              />
            }
          />
        ))}
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
