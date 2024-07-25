import { useState } from 'react'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { About } from './components/About';
import { SkillList } from './components/SkillList';
import { ProjectList } from './components/Projects';
import { Resume } from './components/Resume';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />
      case 'Skills':
        return <SkillList />
      case 'Projects':
        return <ProjectList />
      case 'Resume':
        return <Resume />
      default:
        return <Header />
    }
  }

  return (
    <>
      <Navigation onPageChange = {handlePageChange} />

      <div>{renderPage()}</div>

      <Footer />
    </>
  );
}

export default App
