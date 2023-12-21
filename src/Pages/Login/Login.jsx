
import { Link, useNavigate } from 'react-router-dom';
import useUserInfo from '../../Hooks/useUserInfo/useUserInfo';
import Swal from 'sweetalert2';

const Login = () => {

      const {userLogin, loginWithFB,loginWithGoogle} = useUserInfo()
      const navigate = useNavigate()

      const handleLoginSubmit = (e)=>{
            e.preventDefault()
            const email = e?.target.email.value
            const password = e?.target.password.value

            userLogin(email, password)
            .then(res=>{
                  Swal.fire({
                        icon: "success",
                        title: "Login Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/dashboard')
            })
            .catch(err=>{
                  Swal.fire({
                        title: "Login Problem",
                        text: "Problem login",
                        icon: "warning"
                      });
            })
      }

      const handleGoogleLogin = ()=>{
            loginWithGoogle()
            .then(res=>{
                  Swal.fire({
                        icon: "success",
                        title: "Login Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/dashboard/create-task')
            })
            .catch(err=>{
                  Swal.fire({
                        title: "Login Success",
                        text: "Problem login With Google",
                        icon: "warning"
                      });
            })
      }
      const handleFBLogin = ()=>{
            loginWithFB()
            .then(res=>{
                  Swal.fire({
                        icon: "success",
                        title: "Login Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/dashboard')
            })
            .catch(err=>{
                  Swal.fire({
                        title: "Login Success",
                        text: "Problem login With Google",
                        icon: "warning"
                      });
            })
      }



      return (
            <section className="relative py-4 lg:py-11 font-poppins h-screen flex">
                  <div className="max-w-6xl px-1 mx-auto lg:px-6 flex ">
                        <div className="flex flex-wrap items-center ">
                              <div className="w-full lg:w-2/5">
                                    <div className="bg-white shadow-lg dark:bg-gray-900 p-11 ">
                                          <form onSubmit={handleLoginSubmit}>
                                                <div className="text-center mb-7">
                                                      <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
                                                      Login
                                                      </h2>
                                                </div>
                                                <div className="relative flex flex-wrap mb-5">
                                                      <input
                                                            name='email'
                                                            type="email"
                                                            className="relative w-full py-4 pl-4 mb-2 text-sm border rounded dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700 md:mb-0"
                                                            placeholder="Email..."
                                                            required=""
                                                      />
                                                      <span className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-gray-500 bg-white dark:text-gray-300 dark:bg-gray-800">
                                                            Email address
                                                      </span>
                                                </div>
                                                <div className="relative flex flex-wrap items-center mb-5">
                                                      <input
                                                            name='password'
                                                            type="password"
                                                            className="relative w-full py-4 pl-4 mb-2 text-sm border rounded dark:text-gray-300 dark:border-gray-800 md:mb-0 dark:bg-gray-700"
                                                            placeholder="Password..."
                                                            required=""
                                                      />
                                                      {/* <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            className="absolute right-0 mr-3 dark:text-gray-300"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                      >
                                                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"></path>
                                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"></path>
                                                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"></path>
                                                      </svg> */}
                                                      <span className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-gray-500 bg-white dark:text-gray-300 dark:bg-gray-800">
                                                            Password
                                                      </span>
                                                </div>
                                                <button
                                                      className="w-full px-4 py-4 mb-4 font-semibold text-base text-gray-200 bg-teal-500 rounded dark:bg-teal-500 hover:text-teal-200 "
                                                      type="submit"
                                                >
                                                      LOGIN
                                                </button>
                                                
                                                <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                                                      {" "}
                                                      Need an account?{" "}
                                                      <Link to={'/register'}
                                                            href="#"
                                                            className="font-bold text-base text-teal-500 hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-400"
                                                      >
                                                            Create an account
                                                      </Link>
                                                </p>
                                          </form>
                                          {/* <button onClick={handleFBLogin}
                                                      className="flex items-center w-full justify-center py-4 mb-4 border border-teal-400 dark:border-gray-600 hover:bg-teal-200 dark:hover:bg-gray-800"
                                                >
                                                      <span className="inline-block mr-4 text-teal-800 dark:text-gray-400">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={20}
                                                                  height={20}
                                                                  fill="currentColor"
                                                                  className="bi bi-facebook"
                                                                  viewBox="0 0 16 16"
                                                            >
                                                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                            </svg>
                                                      </span>
                                                      <span className="text-xs font-bold text-teal-800 lg:text-sm dark:text-gray-400">
                                                            Login with Facebook
                                                      </span>
                                                </button> */}
                                                <button onClick={handleGoogleLogin}
                                                      className="flex w-full items-center justify-center py-4 border border-teal-400 dark:border-gray-600 hover:bg-teal-200 dark:hover:bg-gray-800"
                                                >
                                                      <span className="inline-block mr-4 text-teal-800 dark:text-gray-400">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={20}
                                                                  height={20}
                                                                  fill="currentColor"
                                                                  className="bi bi-google"
                                                                  viewBox="0 0 16 16"
                                                            >
                                                                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                            </svg>
                                                      </span>
                                                      <span className="text-xs font-bold text-teal-800 lg:text-sm dark:text-gray-400 ">
                                                            Login with Google
                                                      </span>
                                                </button>
                                    </div>
                              </div>
                              <div className="hidden w-full px-10 mb-16 lg:w-1/2 lg:mb-0 lg:block">
                                    <div className="text-center">
                                          <span className="text-2xl font-medium text-teal-600 dark:text-teal-400">
                                                Welcome Back
                                          </span>
                                          <h2 className="mt-3 mb-6 text-4xl font-bold text-gray-800 dark:text-gray-400">
                                          Log In to Your Task Management Account
                                          </h2>
                                          <p className="text-lg text-gray-500 dark:text-teal-400">
                                          Welcome back! Log in to access your tasks and collaborate with your team.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>

      );
};

export default Login;