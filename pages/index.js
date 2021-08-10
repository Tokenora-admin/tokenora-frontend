import styles from '../styles/Home.module.css'

import Nav from '../components/nav/nav'
import HeadingOne from '../components/headingone/headingone'
import WebPreview from '../components/webpreview/webpreview'
import HeadingTwo from '../components/headingtwo/headingtwo'
import Cards from '../components/cards/cards'
import HeadingThree from '../components/headingthree/headingthree'
import SignUp from '../components/signup/signup'
import Faq from '../components/faq/faq'
import HeadingFour from '../components/headingfour/headingfour'
import Social from '../components/social/social'
import Footer from '../components/footer/footer'

export default function Home() {
  return (
    <div className={`container-fluid text-center`}>

      <div className={`container-md`}>
        <Nav />
        <HeadingOne />
        <WebPreview />
        <HeadingTwo />
        <Cards />
        <HeadingThree />
        <SignUp />
        <Faq />
        <HeadingFour />
        <Social />
      </div>
      <Footer />

    </div>
  )
}
