import React from "react";
import '../../src/styling/footer.css'

class Footer extends React.Component {
    render () {
        return (
            <div className="footer w-full items-center bg-slate-300 rounded-md shadow pt-8 md:flex md:justify-between md:p-6 border-gray-200">
                <div className="w-full lg:w-4/12 px-4 mt-6 lg:mb-0 mb-6">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 items-center">Socials</span>

                    <ul className="list-unstyled">
                        <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                            <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i className="fab fa-github"></i>
                            </button> GitHub
                        </li>
                        <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                            <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i className="fab fa-github"></i>
                            </button> LinkedIn
                        </li>
                        <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                            <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i className="fab fa-github"></i>
                            </button> Facebook
                        </li>
                    </ul>
                </div>

                <hr className="my-6 border-blueGray-300"></hr>

                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            <span> Copyright © 2023 MwansaSquared™. All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Footer;