import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from './Img/logo.png'
function Menu({ menu, setMenu }) {
    let navigate = useNavigate();
    const dept = useLocation().pathname.split('/')[2];
    const link = useLocation().pathname.split('/')[3];
    const Link = {
        'Home': -1,
        'MissionandVision': 0, 'messageofHOD': 0, 'Achievement': 0, 'Infrastructure': 0, 'contactus': 0,
        'Programme': 1, 'Acadcord': 1, 'Syllabus': 1, 'Timetable': 1, 'AcademicCalender': 1,
        'Faculty': 2, 'PhdScholar': 2, 'Student': 2, 'Alumni': 2, 'Staff': 2,
        'ResearchArea': 3, 'DepartmentLab': 3, 'Publications': 3, 'Projects': 3, 'Consultancy': 3, 'ResearchLab': 3,
        'SocietyClubs': 4
    }
    const Menu = [
        {
            Title: 'About',
            Logo: 'fa fa-info',
            List: [
                {
                    l: 'Vision and Missions',
                    link: `/dept/${dept}/MissionandVision`
                }, {
                    l: "HoD's Message",
                    link: `/dept/${dept}/messageofHOD`
                }, {
                    l: 'Achievements',
                    link: `/dept/${dept}/Achievement`
                }, {
                    l: 'Infrastructure: At a glance',
                    link: `/dept/${dept}/Infrastructure`
                }, {
                    l: 'Contact Us',
                    link: `/dept/${dept}/contactus`
                }
            ],
        }, {
            Title: 'Academic',
            Logo: 'fa fa-university',
            List: [
                {
                    l: 'Programmes',
                    link: `/dept/${dept}/Programme`
                }, {
                    l: 'Academic Coordinators',
                    link: `/dept/${dept}/Acadcord`
                }, {
                    l: 'Syllabus',
                    link: `/dept/${dept}/Syllabus`
                }, {
                    l: 'TimeTable',
                    link: `/dept/${dept}/Timetable`
                }, {
                    l: 'Department Activities Calendar',
                    link: `/dept/${dept}/AcademicCalender`
                }
            ]
        }, {
            Title: 'People',
            Logo: 'fa fa-person',
            List: [
                {
                    l: 'Faculty',
                    link: `/dept/${dept}/Faculty`
                }, {
                    l: 'PhD Scholars',
                    link: `/dept/${dept}/PhdScholar`
                }, {
                    l: 'Students',
                    link: `/dept/${dept}/Student`
                }, {
                    l: 'Alumni',
                    link: `https://nitjmain.onrender.com/alumni/alumni.html`,
                    newTab:true
                }, {
                    l: 'Staff',
                    link: `/dept/${dept}/Staff`
                }
            ]
        }, {
            Title: 'Research and Labs',
            Logo: 'fa fa-flask',
            List: [
                {
                    l: 'Research Areas',
                    link: `/dept/${dept}/ResearchArea`
                }, {
                    l: 'Department Labs',
                    link: `/dept/${dept}/DepartmentLab`
                }, {
                    l: 'Publications',
                    link: `/dept/${dept}/Publications`
                }, {
                    l: 'Projects',
                    link: `/dept/${dept}/Projects`
                }, {
                    l: 'Consultancy',
                    link: `/dept/${dept}/Consultancy`
                }, {
                    l: 'Research Labs',
                    link: `/dept/${dept}/ResearchLab`
                }
            ]
        }, {
            Title: 'Societies/Clubs/Teams',
            Logo: 'fa fa-user-group',
            List: [],
            link: `/dept/${dept}/SocietyClubs`
        },
        // {
        //     Title: 'Join Us',
        //     Logo: 'fa fa-address-book',
        //     List: [],
        //     link: `/dept/${dept}/Home`
        // },
    ]

    const [linkOpen, setLinkOpen] = useState(Link[link]);
    const departments = {
        "it": "Information Technology",
        "cse": "Computer Science and Engineering",
        "bt": "Bio Technology",
        "ce": "Civil Engineering",
        "ch": "Chemical Engineering",
        "ece": "Electronics and Communication Engineering",
        "ee": "Electrical and Electronics Engineering",
        "ice": "Instrumentation and Control Engineering",
        "me": "Mechanical Engineering",
        "ipe": "Industrial and Production Enginnering",
        "math": "Mathematics",
        "phy": "Physics",
        "tt": "Textile Technology",
        "hum": "Humaniyies",
        "cy": "Chemistry",
        'cee':'Center for Energy and Environment','cai':'Center for Artificial Intelligence',
    }

    return (
        <>
            <div className={"z-20 overflow-y-auto bg-white scrolling-touch max-w-full lg:max-w-xs lg:max-h-[calc(100vh-4rem)] lg:block lg:sticky lg:mr-0 scrollbar lg:top-[80px]"}>
                <span className="hidden items-center border-b border-gray-300 w-full px-2 mt-2 active:translate-y-[2px]" onClick={() => { setMenu(!menu) }}>
                    <span className='w-8 lg:w-10 pb-1'><img src={logo} alt="logo" /></span>
                    <span className="ml-2 font-bold py-2">{departments[dept]}</span>
                </span>

                <div className={"mr-1 lg:flex flex-col items-center w-[98%] overflow-y-auto mt-1 mb-3 py-1 " + (menu ? 'flex' : 'hidden')}>
                    <div className='w-full px-1'>
                        <span className={"flex items-center w-full h-10 px-3 mt-2 rounded cursor-pointer active:translate-y-[2px] shadow-sm border border-gray-200/75 " + (linkOpen === -1 ? 'shadow-sky-600 shadow' : '')} onClick={() => { navigate(`/dept/${dept}/Home`); setLinkOpen(-1); setMenu(!menu); }}>
                            <i className="pl-1 pt-[2px] w-6 h-6 stroke-current fa fa-home"></i>
                            <span className="ml-1 font-medium">Home</span>
                        </span>
                    </div>
                    {
                        Menu.map((item, i) => {

                            return (
                                <div key={i} className={'w-[98%] mt-2 rounded ' + (i === linkOpen ? 'shadow-sky-600 shadow' : '')}>
                                    <span className="flex items-center w-full h-10 px-3 rounded shadow-sm border border-gray-200/75 cursor-pointer" onClick={() => { item.List.length === 0 && navigate(item.link); item.List.length === 0 && setMenu(!menu); (i === linkOpen) ? setLinkOpen(-2) : setLinkOpen(i) }}>
                                        <i className={"pl-1 pt-[2px] w-6 h-6 stroke-current " + item.Logo}></i>
                                        <span className="ml-1 font-medium">{item.Title}</span>
                                    </span>

                                    {item.List.length > 0 && (i === linkOpen) && <ul className={"space-y-2 delay-200 overflow-hidden h-auto transition-all ml-2 p-1"}>
                                        {
                                            item.List?.map((iteml, j) => {
                                                return (
                                                    <li key={j} className="flex transition duration-75 group font-medium hover:text-blue-900 hover:scale-[1.02] cursor-pointer active:translate-y-[2px]" onClick={() => { 
                                                        setMenu(!menu)
                                                        if(!iteml.newTab) navigate(iteml.link); 
                                                        else window.open(iteml.link,"_blank")
                                                        
                                                        }}>
                                                        <i className="fa-sm fa-regular fa-circle-check stroke-current w-4 h-4 mr-1 pt-3"></i>
                                                        <span className="block p-1 text-sm text-gray-700 hover:text-blue-900" >{iteml.l}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Menu
