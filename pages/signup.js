import Background from '@/components/Background';
import Head from 'next/head';
import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

const SignUp = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        contactNumber: '',
        designation: '',
        socialProfile: '',
        state: '',
        region: '',
        companyName: '',
        college: '',
        course: '',
        services: '',
        email: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [designation, setDesignation] = useState('');
    const [socialProfile, setSocialProfile] = useState('');
    const [state, setState] = useState('');
    const [region, setRegion] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [college, setCollege] = useState('');
    const [course, setCourse] = useState('');
    const [services, setServices] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const Router = useRouter();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'contactNumber':
                setContactNumber(value);
                break;
            case 'designation':
                setDesignation(value);
                break;
            case 'socialProfile':
                setSocialProfile(value);
                break;
            case 'state':
                setState(value);
                break;
            case 'region':
                setRegion(value);
                break;
            case 'companyName':
                setCompanyName(value);
                break;
            case 'college':
                setCollege(value);
                break;
            case 'course':
                setCourse(value);
                break;
            case 'services':
                setServices(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signup', formData);
            setFormData(initialFormData);
            if (response.data.success) {
                Router.push('/signin');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage("User with the same email already exists!");
            } else {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
            <Head>
                <title>Sign Up | Campaigning Source</title>
            </Head>
            <Background />
            <div className='w-screen h-screen flex justify-center items-center'>
                <div className='w-[90%] md:w-[70%]'>
                    <h2 className='text-black text-3xl text-center font-bold mb-2'>Sign Up</h2>
                    <div className='flex flex-col md:flex-row justify-around items-center p-3 bg-blue-200 bg-opacity-90 rounded-lg'>
                        <form onSubmit={handleSubmit} className='flex flex-col items-center text-center'>
                            <div className='flex flex-col md:flex-row justify-center items-center'>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleInputChange}
                                    placeholder="First Name"
                                    className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                    required
                                />
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleInputChange}
                                    placeholder="Last Name"
                                    className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                    required
                                />
                            </div>
                            <div className='flex flex-col md:flex-row justify-center items-center'>
                                <input
                                    type="text"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={contactNumber}
                                    onChange={handleInputChange}
                                    placeholder="Contact Number"
                                    className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                    required
                                />
                                <select
                                    id="designation"
                                    name="designation"
                                    value={designation}
                                    onChange={handleInputChange}
                                    className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100 w-[80%] md:w-[43%]"
                                    required
                                >
                                    <option value="">Select Designation</option>
                                    <option value="Influencer">Influencer</option>
                                    <option value="Political Worker">Political Worker</option>
                                    <option value="Business/ Corporate Worker">Business/ Corporate Worker</option>
                                    <option value="Freelancer">Freelancer</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>
                            {designation === 'Influencer' || designation === 'Freelancer' ? (
                                <div>
                                    <input
                                        type="text"
                                        id="socialProfile"
                                        name="socialProfile"
                                        value={socialProfile}
                                        onChange={handleInputChange}
                                        placeholder="Social Profile Username"
                                        className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                        required
                                    />
                                </div>
                            ) : null}
                            {designation === 'Political Worker' ? (
                                <div>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={state}
                                        onChange={handleInputChange}
                                        placeholder="State"
                                        className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                        required
                                    />
                                    <input
                                        type="text"
                                        id="region"
                                        name="region"
                                        value={region}
                                        onChange={handleInputChange}
                                        placeholder="Region"
                                        className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                        required
                                    />
                                </div>
                            ) : null}
                            {designation === 'Business/ Corporate Worker' ? (
                                <div>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={companyName}
                                        onChange={handleInputChange}
                                        placeholder="Company Name"
                                        className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                        required
                                    />
                                </div>
                            ) : null}
                            {designation === 'Student' ? (
                                <div>
                                    <input
                                        type="text"
                                        id="college"
                                        name="college"
                                        value={college}
                                        onChange={handleInputChange}
                                        placeholder="College"
                                        className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                        required
                                    />
                                    <input
                                        type="text"
                                        id="course"
                                        name="course"
                                        value={course}
                                        onChange={handleInputChange}
                                        placeholder="Course"
                                        className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                        required
                                    />
                                </div>
                            ) : null}
                            {designation === 'Freelancer' ? (
                                <div>
                                    <textarea
                                        id="services"
                                        name="services"
                                        value={services}
                                        onChange={handleInputChange}
                                        placeholder="Services You Provide"
                                        className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                        required
                                    ></textarea>
                                </div>
                            ) : null}
                            <div className='flex flex-col md:flex-row justify-center items-center'>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    placeholder="Email ID"
                                    className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                    required
                                />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}
                                    placeholder="Password"
                                    className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                                    required
                                />
                            </div>
                            <div>
                                <button className='btn-primary' type="submit"><FaSignInAlt />Register</button>
                            </div>
                        </form>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <p className='text-black mt-4'>or Signin Using</p>
                            <button
                                className='bg-white text-black flex items-center gap-2 text-lg px-2 py-1 rounded-full hover:scale-110 transition'
                                onClick={() => signIn('google')}
                            >
                                <FcGoogle />Google
                            </button>
                            <p className='text-black'>
                                Already have an account? <a className='text-blue-500 underline' href="/signin">Login</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        {errorMessage && <p className='bg-red-600 text-white p-3 rounded-md w-1/2 md:w-1/4 text-center mt-2'>{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
