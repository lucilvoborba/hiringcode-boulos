import React from 'react'
import BlockCards from '../components/partials/landing/BlockCards'
import BlockMain from '../components/partials/landing/BlockMain'
import BlockXp from '../components/partials/landing/BlockXp'
import HeaderLandingPage from '../components/shared/headers/HeaderLandingPage'
import FooterLandingPage from '../components/shared/footers/FooterLandingPage'
import NewsLetterLanding from '../components/shared/newsletter/NewsLetterLanding'

export default function LandingPage() {
    return (
        <div>
            <HeaderLandingPage />
            <BlockMain />
            <BlockCards />
            <h3 className='mt-5'>Lorem Impsum</h3>
            <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec enim suscipit, fringilla est sed, tincidunt quam. Aliquam sit amet est erat. Mauris ornare hendrerit magna a pretium.</p>
            <BlockXp />
            <NewsLetterLanding />
            <FooterLandingPage />
        </div>
    )
}