import './App.css';
// import ReactGA from 'react-ga'
import Navbar from './components/Navbar'
import HomapageContent from './components/HomapageContent'
import Pricing from './components/PricingPage/Pricing'
import PricingTable from './components/PricingPage/PricingTable'
import UnderConstruct from './components/UnderConstruct'
import Footer from './components/Footer'
import Shipment from './components/Shipment'
import Scrap from './components/Scrap'
import Aboutus from './components/Aboutus'
import Calc from './components/Homepage/calc'
// import Review from './components/Homepage/Review.js'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import ReverseAuction from './components/ReverseAuction'
import CaseStudy from './components/CaseStudies/CaseStudy'
import Blog from './components/Blogs/Blog'
import BlogOne from './components/Blogs/Blog_1'
import BlogTwo from './components/Blogs/Blog_2'
import BlogThree from './components/Blogs/Blog_3'
import BlogFour from './components/Blogs/Blog_4'
import BlogFive from './components/Blogs/Blog_5'
import BlogSix from './components/Blogs/Blog_6'
import BlogSeven from './components/Blogs/Blog_7'
import BlogEight from './components/Blogs/Blog_8'
import Resource from './components/Resources/Resource'
import KnowledgeSource from './components/Knowledge Source/KnowledgeSource'
import ProfitabilityChallenge from './components/Profitability challenge/Profitability_challenge'
import Logistics from './components/Logistics/Logistics'
import FiveEffectiveTactics from './components/Webinars/Five_effective_tactics'
import WebForm from './components/Webinars/Webinar_form'

import { Switch, Route, Redirect, useLocation } from "react-router-dom";

// ReactGA.initialize("UA-177572023-1")


function App() {
  let location = useLocation()
  return (
    <div className="App">
      
      {/* <Router> */}
        <Navbar/>
      <Switch>
        <Route exact path='/'>
        <HomapageContent />
        </Route>
        <Route exact path='/EffyBuy'>
        <HomapageContent />
        </Route>

        <Route path='/EffyBuy/shipment'>
        <Shipment />
        </Route>

        <Route path='/EffyBuy/scrap'>
        <Scrap />
        </Route>

        <Route exact path='/EffyBuy/pricing/effybuy'>
          <Pricing/>
        </Route>

        <Route exact path='/EffyBuy/pricing/comparison'>
          <PricingTable/>
        </Route>

        <Route path='/EffyBuy/underwork'>
          <UnderConstruct/>
        </Route>

        <Route path='/EffyBuy/about_us'>
          <Aboutus/>
        </Route>

        <Route path='/EffyBuy/calc'>
          <Calc/>
        </Route>

        <Route path='/EffyBuy/TermsAndConditions'>
          <TermsAndConditions/>
        </Route>

        {/* <HashRouter>

        </HashRouter> */}
        <Route path='/EffyBuy/privacyPolicy'>
          <PrivacyPolicy/>
        </Route>

        <Route path='/EffyBuy/ReverseAuction'>
          <ReverseAuction/>
        </Route>

        <Route exact path='/EffyBuy/resources'>
          <Resource/>
        </Route>

        <Route path='/EffyBuy/cs'>
          <CaseStudy/>
        </Route>
        {/* <Route path='/EffyBuy/resources/case_study'>
          <CaseStudy/>
        </Route> */}

        <Route exact path='/EffyBuy/resources/blog'>
          <Blog/>
        </Route>

        <Route path='/EffyBuy/resources/blog/blog_1'>
          <BlogOne/>
        </Route>
        <Route path='/EffyBuy/resources/blog/blog_2'>
          <BlogTwo/>
        </Route>
        <Route path='/EffyBuy/resources/blog/blog_3'>
          <BlogThree/>
        </Route>
        <Route path='/EffyBuy/resources/blog/blog_4'>
          <BlogFour/>
        </Route>
        <Route path='/EffyBuy/resources/blog/blog_5'>
          <BlogFive/>
        </Route>
        <Route path='/EffyBuy/resources/blog/blog_6'>
          <BlogSix/>
        </Route>
        <Route path='/EffyBuy/resources/blog/blog_7'>
          <BlogSeven/>
        </Route>
        <Route path='/EffyBuy/resources/blog/blog_8'>
          <BlogEight/>
        </Route>

        <Route exact key="ebook" path='/EffyBuy/resources/ebooks'>
          <KnowledgeSource location={location.pathname}/>
        </Route>
        <Route exact key="ppt" path='/EffyBuy/resources/ppt'>
          <KnowledgeSource location={location.pathname}/>
        </Route>
        <Route exact key="case_study" path='/EffyBuy/resources/case_study'>
          <KnowledgeSource location={location.pathname}/>
        </Route>
        <Route exact key="white_paper" path='/EffyBuy/resources/white_paper'>
          <KnowledgeSource location={location.pathname}/>
        </Route>

        <Route path='/EffyBuy/pc'>
          <ProfitabilityChallenge/>
        </Route>

        <Route path='/EffyBuy/logistics'>
          <Logistics/>
        </Route>

        <Route path='/EffyBuy/wb'>
          <FiveEffectiveTactics/>
        </Route>

        <Route path='/EffyBuy/check'>
          <WebForm/>
        </Route>

        <Redirect to='/EffyBuy/underwork' />
      </Switch>

      <Footer/>
      {/* </Router> */}
      
      {/* <ul>
            <li>oneeee</li>
            <li>twoooo</li>
            <li>threee</li>
            <li>fourrr</li>
        </ul> */}
    </div>
  );
}

export default App;
