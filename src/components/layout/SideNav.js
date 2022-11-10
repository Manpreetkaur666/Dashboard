import React, { Fragment } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'

const SideNav = () => {
    return (
        <Fragment>
            <div className="sideNav w-60 h-full shadow-md bg-white absolute" id="sidenavSecExample">
                <div className="pt-4 pb-2 px-6">
                    <Link to="#!">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10" alt="Avatar" />
                            </div>
                            <div className="grow ml-3">
                                <p className="text-sm font-semibold text-blue-600">OnTheGo</p>
                                <p className='text-xs text-slate-400'>sales solution</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <ul className="relative px-1">
                    <li className="relative">
                        <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" to="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            </svg>
                            <i class="fa-solid fa-house"></i><span>&nbsp;Dashboard</span>
                        </Link>
                        <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" to="/" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            </svg>
                            <span><i class="fa-solid fa-chart-line"></i>&nbsp;Analytics</span>
                        </Link>
                        <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" to="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            </svg>
                            <span><i class="fa-solid fa-user"></i>&nbsp;Contacts</span>
                        </Link>
                        <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" to="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            </svg>
                            <span><i class="fa-solid fa-envelope"></i>&nbsp;Requests</span>
                        </Link>
                        <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" to="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            </svg>
                            <span><i class="fa-solid fa-folder"></i>&nbsp;Projects</span>
                        </Link>
                    </li>
                    <li className="relative" id="sidenavSecEx2">
                        <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx2" aria-expanded="false" aria-controls="collapseSidenavSecEx2">
                            <span>Documents</span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                            </svg>
                        </Link>
                        <ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx2" aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
                            <li className="relative">
                                <Link to="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 1</Link>
                            </li>
                            <li className="relative">
                                <Link to="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 2</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr className="my-2" />
                <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" to="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    </svg>
                    <span><i class="fa-solid fa-gear"></i>&nbsp;Settings</span>
                </Link>
                <div className='py-4 mt-8'>
                    <p className='text-slate-400'>Current Sales</p>
                    <p className='text-base'>$13.4K<span className='text-xs text-slate-400'>/62%</span></p>
                </div>
                <div className="text-center bottom-0 absolute w-full">
                    <hr className="m-0" />
                    <div className="pt-4 pb-2 px-6">
                    <Link to="#!">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10" alt="Avatar" />
                            </div>
                            <div className="grow ml-3">
                                <p className="text-sm font-semibold text-blue-600">OnTheGo</p>
                                <p className='text-xs text-slate-400'>sales solution</p>
                            </div>
                        </div>
                    </Link>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SideNav
