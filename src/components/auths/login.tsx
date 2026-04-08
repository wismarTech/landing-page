"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"

const LoginIndex = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex font-sans bg-white">
      {/* Left Pane - Marketing (Visible on large screens) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#5B58F6]">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[120px]"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] rounded-full bg-white blur-[100px]"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between w-full px-16 py-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg rotate-12">
              <img src="/image/wizmar_logo.PNG" alt="logo" className="w-8 h-8 object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">WismarTech</h1>
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-lg">
            <h2 className="text-5xl font-light text-white mb-8 leading-[1.1] tracking-tight font-serif">
              Master the <span className="italic font-normal">future</span> of technology.
            </h2>
            <p className="text-white/80 text-xl font-light leading-relaxed">
              Join WismarTech to access premium curriculum, expert mentorship, 
              and a community of world-class engineers.
            </p>
          </div>

          <div className="flex justify-between items-center text-white/60 text-sm border-t border-white/10 pt-8 mt-12">
            <span>© {new Date().getFullYear()} WismarTech Inc.</span>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white transition-colors">Terms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md space-y-10">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-12">
            <div className="w-12 h-12 bg-[#5B58F6] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl rotate-12">
              <img src="/image/wizmar_logo.PNG" alt="logo" className="w-8 h-8 object-contain brightness-0 invert" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">WismarTech</h1>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-4xl font-light text-slate-900 tracking-tight font-serif">Welcome Back</h2>
              <p className="text-slate-500 font-light text-lg">
                Enter your credentials to access your Wismar platform.
              </p>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-[#5B58F6] transition-colors" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className="block w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B58F6]/20 focus:border-[#5B58F6] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label htmlFor="password" className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <Link href="#" className="text-sm font-medium text-[#5B58F6] hover:text-[#4a47e6] transition-colors">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-[#5B58F6] transition-colors" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="block w-full h-14 pl-12 pr-12 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B58F6]/20 focus:border-[#5B58F6] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3 ml-1">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 rounded border-slate-300 text-[#5B58F6] focus:ring-[#5B58F6] cursor-pointer" 
                />
                <label htmlFor="remember" className="text-sm font-light text-slate-600 cursor-pointer">
                  Remember me for 30 days
                </label>
              </div>
            </div>

            <button
              className="w-full h-14 bg-[#5B58F6] hover:bg-[#4a47e6] text-white text-lg font-medium rounded-2xl shadow-lg shadow-indigo-100 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Sign In
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-slate-400 font-medium tracking-wider">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 h-14 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium hover:bg-slate-50 transition-all group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-3 h-14 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium hover:bg-slate-50 transition-all group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-.96 3.64-.82 1.57.06 2.75.63 3.54 1.51-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Apple
              </button>
            </div>

            <p className="text-center text-slate-500 font-light pt-4">
              Don't have an account?{" "}
              <Link href="/register" className="font-semibold text-[#5B58F6] hover:text-[#4a47e6] transition-colors underline-offset-4 hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginIndex