import Header from './components/Header';
function SocialDetail() {
    return <>
        <div>
            <Header />
            <div className='detail-body-container'>
                <div className='left-detail-container'>
                    <div className='left-top-detail-container'>
                        <span className='title'>Web3 Founders & </span>
                        <div className='title'>Designers Mixer + fireside</div>
                        <div className='title'>chat with Coinbase Senior</div>
                        <div className='title'>Designer & Airfoil founder</div>
                    </div>
                    <div className='detail-date-time'>
                        <div className='detail-date-time-item'>
                            <img className='media-date' src='/icon/Icon.png' width='33.6px' height='33.6px' />
                            <div className='detail-date-time-txt'>October 11, Wed</div>
                        </div>
                        <div className='detail-date-time-item'>
                            <img className='time-icon' src='/icon/clock.png' width='33.6px' height='33.6px' />
                            <div className='detail-date-time-txt'>7 PM</div>
                        </div>
                    </div>
                    <div className='detail-position-capacity-cost'>
                        <div className='detail-pcc'>
                            <img className='position-icon' src='/icon/position-icon.png' />
                            <div>Chelsea Market (163 W 20nd Street). Manhattan, NYC</div>
                        </div>
                        <div className='detail-capacity-cost'>
                            <div className='detail-pcc'>
                                <img className='capacity-icon' src='/icon/capacity.png' />
                                <div>50 people</div>
                            </div>
                            <div className='detail-pcc'>
                                <img className='cost-icon' src='/icon/cost.png' />
                                <div>$30</div>
                            </div>
                        </div>
                    </div>
                    <div className='detail-content'>
                        Calling all web3 founders and designers for an exciting night of exchanging ideas and making new friends! Come make friends with fellow designers and founders in web3. There will also be lots of insights to be gained through an intimate chat +Q&A with two giants in the industry:
                        Phil Hedayatnia, Founder & CEO of Airfoil, a growth design studio that has designed and built products in web3, the creator economy, the future of work, and much more for 80+ startups since 2018
                        Jihoon Suh, Senior Product Designer at Coinbase, who was previously Senior Product Designer for Messenger for Meta.
                        This will be a curated group with limited spots, so do sign up early!
                        Airfoil Studio is the design, branding, and engineering team helping web3 take flight. As one of crypto’s first large-scale design firms, our mission is to design a friendlier financial layer for the internet. We’re a team of 85+ creatives, working from Airfoil’s hubs in Toronto, Singapore, and Seoul, who’ve worked on 100+ projects since 2018, including Solana Pay, Drift Protocol, Bonfida Solana Name Service, Utopia Labs, Planetarium, Layer3.xyz, MarginFi, Hyperspace, VBA Game, and more.
                        Learn more about Airfoil and our work at airfoil.studio.
                    </div>
                </div>
                <div className='right-detail-container'>
                    <img src='https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg' />
                </div>
            </div>
        </div>
    </>
}

export default SocialDetail;