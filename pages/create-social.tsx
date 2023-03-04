import { useState } from 'react';
import BannerModal from './components/BannerModal';
import Header from './components/Header';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Message from './components/Message';
import _ from 'lodash'
import { create } from './api/my-api';
function CreateSocial() {
    const [openModal, setOpenModal] = useState(false)
    const [message, setMessage] = useState({
        content: '',
        kind: ''
    })
    const [openMessage, setOpenMessage] = useState(false)

    const [tags, setTags] = useState([
        {
            name: 'Engineering',
            picked: false
        },
        {
            name: 'Product',
            picked: false
        },
        {
            name: 'Marketing',
            picked: false
        },
        {
            name: 'Design',
            picked: false
        }])
    let initialValues = {
        title: '',
        startAt: undefined,
        venue: '',
        capacity: undefined,
        price: undefined,
        description: '',
        banner: '',
        tags: [],
        isManualApprove: false,
        privacy: ''
    }
    const chooseBanner = () => {
        setOpenModal(true)
    }
    const closeBanner = () => {
        setOpenModal(false)
    }
    const closeMessage = () => {
        setOpenMessage(false)
    }
    const createSocial = async (values: any) => {
        console.log('aaa')
        // const res = await create(values)
        setMessage({
            content: 'Create successfully',
            kind: 'success'
        })
        setOpenMessage(true)
    }
    const changeTag = (e: any, setFieldValue: any) => {
        tags.forEach(f => {
            if (f.name === e) f.picked = !f.picked
        })
        const pickedTags = tags.filter(e => e.picked === true).map(e => e.name)
        setTags([...tags])
        setFieldValue('tags', [...pickedTags])
    }
    const generateTag = (e: any, setFieldValue: any) => {
        return e.picked ? <div className='option-item' onClick={(f: any) => changeTag(e.name, setFieldValue)} >
            <div>{e.name}</div>
            <img src='/icon/x.png' />
        </div> : <></>
    }
    const generateOption = (e: any, setFieldValue: any) => {
        return !e.picked ? <div onClick={(f: any) => changeTag(e.name, setFieldValue)}>{e.name}</div> : <></>
    }
    const saveBanner = (e: string, setFieldValue: any) => {
        setFieldValue('banner', e)
        setOpenModal(false)

    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
        startAt: Yup.date().required('startAt is required'),
        venue: Yup.string().required('venue is required'),
        capacity: Yup.number().moreThan(0).required('capacity is required'),
        price: Yup.number(),
        description: Yup.string().required('description is required'),
        banner: Yup.string().required('banner is required'),
        tags: Yup.array().min(1, 'Must have at least 1 item in tags').required('banner is required'),
        isManualApprove: Yup.boolean(),
        privacy: Yup.string().required('privacy is required'),
    });
    return <>
        <Header />
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => createSocial(values)}
        >
            {({ errors, touched, handleChange, values, setFieldValue }) => (
                <Form >
                    <div className='create-body-container'>
                        <div className='left-create-container'>
                            <div className='left-create-head'>
                                <input className='left-create-title' placeholder="Untitle Event" value={values?.title} name='title'
                                    onChange={handleChange} />
                                {errors.title && touched.title && (
                                    <div className="input-feedback" style={{ color: 'red' }}>{errors.title}</div>
                                )}
                                <div className='create-date-time'>
                                    <div className='create-date-time-item'>
                                        <img className='media-date' src='/icon/Icon.png' width='33.6px' height='33.6px' />
                                        <input className='create-date-time-txt' type="date" value={values?.startAt} name='startAt'
                                            onChange={handleChange} placeholder="Date" />
                                        {errors.startAt && touched.startAt && (
                                            <div className="input-feedback" style={{ color: 'red' }}>{errors.startAt}</div>
                                        )}
                                    </div>
                                    <div className='create-date-time-item'>
                                        <img className='time-icon' src='/icon/clock.png' width='33.6px' height='33.6px' />
                                        <input className='create-date-time-txt' type="time" name="time" placeholder="Time" />
                                    </div>
                                </div>
                                <div className='create-position-capacity-cost'>
                                    <div className='pcc-list'>
                                        <div className='media-position'>
                                            <img className='position-icon' src='/icon/position-icon.png' />
                                        </div>
                                        <input className='position-input' type="text" name="venue" value={values?.venue} onChange={handleChange} placeholder="Venue" />
                                    </div>
                                    {errors.venue && touched.venue && (
                                        <div className="input-feedback" style={{ color: 'red' }}>{errors.venue}</div>
                                    )}
                                    <div className='detail-capacity-cost'>
                                        <div className='pcc-list'>
                                            <div className='media-capacity'>
                                                <img className='capacity-icon' src='/icon/capacity.png' />
                                            </div>
                                            <input className='capacity-input' type="text" name="capacity" placeholder="Max capacity" value={values?.capacity} onChange={handleChange} />
                                        </div>
                                        {errors.capacity && touched.capacity && (
                                            <div className="input-feedback" style={{ color: 'red' }}>{errors.capacity}</div>
                                        )}
                                        <div className='pcc-list'>
                                            <div className='media-cost'>
                                                <img className='cost-icon' src='/icon/cost.png' />
                                            </div>
                                            <input className='cost-input' type="text" name="price" placeholder="Cost per person" value={values?.price} onChange={handleChange} />
                                        </div>
                                        {errors.price && touched.price && (
                                            <div className="input-feedback" style={{ color: 'red' }}>{errors.price}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='left-description-container'>
                                <div>Description</div>
                                <textarea id="description-area" name="description" className='description-area' value={values?.description} onChange={handleChange} placeholder='Description of your event..'>
                                </textarea>
                                {errors.description && touched.description && (
                                    <div className="input-feedback" style={{ color: 'red' }}>{errors.description}</div>
                                )}
                            </div>
                            <div className='setting-container'>
                                <div className='settings-inside'>
                                    <div className='settings'>Settings</div>
                                    <div className='checkbox-item'>
                                        <input name='isManualApprove' type='checkbox' checked={values.isManualApprove} onClick={handleChange} />
                                        <div className='approve-info'>I want to approve attendees</div>
                                    </div>
                                    <div className='privacy'>Privacy</div>
                                    <div className='privacy-list'>
                                        <div className='checkbox-item'>
                                            <input type='checkbox' checked={values.privacy === 'Public' ? true : false} onClick={e => setFieldValue('privacy', 'Public')} />
                                            <div>Public</div>
                                        </div>
                                        <div className='checkbox-item'>
                                            <input type='checkbox' checked={values.privacy === 'Curated Audience' ? true : false} onClick={e => setFieldValue('privacy', 'Curated Audience')} />
                                            <div>Curated Audience</div>
                                        </div>
                                        <div className='checkbox-item'>
                                            <input type='checkbox' checked={values.privacy === 'Community Only' ? true : false} onClick={e => setFieldValue('privacy', 'Community Only')} />
                                            <div>Community Only</div>
                                        </div>
                                    </div>
                                    <div className='tag-info'>
                                        Tag your social
                                        <p>Pick tags for our curation engine to work its magin</p>
                                    </div>
                                    <div className='optionList'>
                                        {tags.map(e => generateTag(e, setFieldValue))}
                                    </div>
                                    <div className='optionList'>
                                        {tags.map(e => generateOption(e, setFieldValue))}
                                    </div>
                                    {errors.tags && touched.tags && (
                                        <div className="input-feedback" style={{ color: 'red' }}>{errors.tags}</div>
                                    )}
                                </div>
                            </div>
                            <button className='create-social' type='submit'>CREATE SOCIAL</button>
                        </div>
                        <div className='right-create-container'>
                            <img src={values.banner === '' ? '/img/add-banner.svg' : values.banner} onClick={chooseBanner} />
                            {errors.banner && touched.banner && (
                                <div className="input-feedback" style={{ color: 'red' }}>{errors.banner}</div>
                            )}
                        </div>
                    </div>

                    <BannerModal isOpen={openModal} onClose={closeBanner} saveBanner={saveBanner} setFieldValue={setFieldValue} />
                    <Message open={openMessage} close={closeMessage} message={message} />
                </Form>
            )}
        </Formik>
    </>
}

export default CreateSocial;