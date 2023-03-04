import React, { useState } from 'react';

const BannerModal = ({ isOpen, onClose, saveBanner, setFieldValue }: any) => {
    const [bannerList, setBannerList] = useState([
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",
            picked: false,
            name: '1'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg",
            picked: false,
            name: '2'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg",
            picked: false,
            name: '3'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg",
            picked: false,
            name: '4'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg",
            picked: false,
            name: '5'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg",
            picked: false,
            name: '6'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg",
            picked: false,
            name: '7'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg",
            picked: false,
            name: '8'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",
            picked: false,
            name: '9'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",
            picked: false,
            name: '10'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_11.jpg",
            picked: false,
            name: '11'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_12.jpg",
            picked: false,
            name: '12'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_13.jpg",
            picked: false,
            name: '13'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_14.jpg",
            picked: false,
            name: '14'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_15.jpg",
            picked: false,
            name: '15'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",
            picked: false,
            name: '9'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",
            picked: false,
            name: '10'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_11.jpg",
            picked: false,
            name: '11'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_12.jpg",
            picked: false,
            name: '12'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",
            picked: false,
            name: '9'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",
            picked: false,
            name: '10'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_11.jpg",
            picked: false,
            name: '11'
        },
        {
            url: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_12.jpg",
            picked: false,
            name: '12'
        }
    ])
    const pickBanner = (e: string) => {
        bannerList.forEach(f => {
            if (f.name === e) f.picked = true
            else f.picked = false
        })
        setBannerList([...bannerList])
    }
    const generateItem = (e: any) => {
        return !e.picked ?
            <div className="grid-item" onClick={f => pickBanner(e.name)}>
                <img src={e.url} />
            </div>
            :
            <div className="grid-item-picked">
                <img src={e.url} />
            </div>
    }
    const onsave = () => {
        const pickedbanner = bannerList.filter(e => e.picked === true)
        if (pickedbanner.length) {
            saveBanner(pickedbanner[0].url, setFieldValue)
        }
        else {
            saveBanner('', setFieldValue)
        }
    }
    if (!isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-overlay"
            // onClick={onClose}
            />
            <div className="modal-content">
                <h2>Choose a banner</h2>
                <div className="grid-container">
                    {bannerList.map(e => generateItem(e))}
                </div>
                <div className='modal-bottom'>
                    <button onClick={onClose}>Close</button>
                    <button className='modal-save' onClick={e => onsave()}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default BannerModal;
