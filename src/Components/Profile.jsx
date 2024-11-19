import { Card } from "flowbite-react"
import pp from "../assets/propil.jpg"
import html from "../assets/html.png"
import css from "../assets/css.png"
import php from "../assets/php.png"
import reactjs from "../assets/reactjs.png"
import javascript from "../assets/javascript.png"

const Profile = () => {
    return (
        
        <Card className="max-w-full m-5">
            <div className="flex justify-between px-4 pt-4 flex-wrap">
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Profile Image"
                        height="120"
                        src={pp}
                        width="120"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Joel Osteen Kimberley</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Junior Developer</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">XI-PPLG 1</span>
                </div>
                    
                <div className="coloumn py-4 sm:text-center md:text-left">
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Contact Me @:</h4>
                    <h5>Phone: +62 813-1330-0078</h5>
                    <h5>Email: joeloesteenkimberley@gmail.com</h5>
                    <h5>Github: github.com/N13u0W</h5>
                    <h5>Instagram: joelostky</h5>
                    <br></br>
                    <br></br>
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">My Portofolio:</h4>
                    <h5>-</h5>
                    <h5>-</h5>
                    <h5>-</h5>
                </div>
            </div>
            <div className="flex space x-4">
                <img src={html} alt="Logo" className="rounded-full h-20 w-20" />
                <img src={css} alt="Logo" className="rounded-full h-20 w-20" />
                <img src={php} alt="Logo" className="rounded-full h-20 w-20" />
                <img src={reactjs} alt="Logo" className="rounded-full h-20 w-24" />
                <img src={javascript} alt="Logo" className="rounded-full h-20 w-26" />
            </div>
        </Card>
        
    )
}

export default Profile