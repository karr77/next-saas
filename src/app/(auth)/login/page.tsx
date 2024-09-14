// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { api } from '@/utils/api';
// import { useAuth } from '@/hooks/useAuth';
// import useGlobalStore from '@/hooks/useGlobalStore';
// import { useSearchParams } from 'next/navigation';


// const LoginPage = () => {
//     const [mobile, setMobile] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const router = useRouter();
//     const { login } = useAuth();
//     const { setGlobalStore } = useGlobalStore();
//     const searchParams = useSearchParams();

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const response = await api.loginWithPassword({
//                 mobile,
//                 password,
//                 type: 1 // 1 for mobile login
//             });


//             if (response && response.data) {
//                 const { token, user_info } = response.data;
//                 setGlobalStore({
//                     token,
//                     tenant_id: user_info.tenant_id,
//                     user_info
//                 });
//                 login(token, user_info);
//                 const redirectPath = searchParams.get('redirect') || '/dashboard';
//                 router.push(redirectPath);
//             } else {
//                 setError('Login failed. Please check your credentials and try again.');
//             }
//         } catch (err) {
//             setError('An error occurred. Please try again.');
//             console.error(err);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                         Sign in to your account
//                     </h2>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <input type="hidden" name="remember" value="true" />
//                     <div className="rounded-md shadow-sm -space-y-px">
//                         <div>
//                             <label htmlFor="mobile-number" className="sr-only">
//                                 Mobile number
//                             </label>
//                             <input
//                                 id="mobile-number"
//                                 name="mobile"
//                                 type="tel"
//                                 autoComplete="tel"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                                 placeholder="Mobile number"
//                                 value={mobile}
//                                 onChange={(e) => setMobile(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="sr-only">
//                                 Password
//                             </label>
//                             <input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 autoComplete="current-password"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     {error && (
//                         <div className="text-red-500 text-sm mt-2">{error}</div>
//                     )}

//                     <div>
//                         <button
//                             type="submit"
//                             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             Sign in
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;


// ------------------------------------------------------------------------------------------------
// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import { EyeIcon, EyeOffIcon, QrCodeIcon, ArrowLeftIcon } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// export default function FramerLogin() {
//     const [showCard, setShowCard] = useState(false)
//     const [activeImageIndex, setActiveImageIndex] = useState(-1)
//     const [showScrollEffect, setShowScrollEffect] = useState(false)
//     const [showPassword, setShowPassword] = useState(false)
//     const [loginType, setLoginType] = useState('password')
//     const [formType, setFormType] = useState('login')
//     const [resetMethod, setResetMethod] = useState('短信')

//     const images = ['/images/logresBg/bg1.png', '/images/logresBg/bg2.png', '/images/logresBg/bg3.png', '/images/logresBg/bg4.png', '/images/logresBg/bg5.png', '/images/logresBg/bg6.png', '/images/logresBg/bg7.png', '/images/logresBg/bg8.png', '/images/logresBg/bg9.png', '/images/logresBg/bg10.png']

//     useEffect(() => {
//         const cardTimer = setTimeout(() => setShowCard(true), 1000)

//         const imageTimer = setInterval(() => {
//             setActiveImageIndex(prevIndex => {
//                 if (prevIndex >= images.length - 1) {
//                     clearInterval(imageTimer)
//                     setTimeout(() => setShowScrollEffect(true), 500)
//                     return prevIndex
//                 }
//                 return prevIndex + 1
//             })
//         }, 200)

//         return () => {
//             clearTimeout(cardTimer)
//             clearInterval(imageTimer)
//         }
//     }, [])

//     const extendedImages = [...images, ...images.slice(0, 5)]

//     const ResetPasswordForm = () => (
//         <div className="space-y-4">
//             <div className="flex justify-between items-center">
//                 <h2 className="text-xl font-bold text-white">重置密码</h2>
//                 <Button
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => setFormType('login')}
//                     className="text-blue-300 hover:text-blue-100 hover:bg-[#08112d] transition-colors duration-200"
//                 >
//                     <ArrowLeftIcon className="w-4 h-4 mr-2" />
//                     上一步
//                 </Button>
//             </div>
//             <div className="flex space-x-4">
//                 <Button
//                     variant={resetMethod === '短信' ? 'default' : 'outline'}
//                     onClick={() => setResetMethod('短信')}
//                     className={`flex-1 rounded-xl ${resetMethod === '短信' ? 'bg-blue-500 text-white' : 'bg-black/30 text-blue-300 border-blue-700'}`}
//                 >
//                     短信
//                 </Button>
//                 <Button
//                     variant={resetMethod === '邮箱' ? 'default' : 'outline'}
//                     onClick={() => setResetMethod('邮箱')}
//                     className={`flex-1 rounded-xl ${resetMethod === '邮箱' ? 'bg-blue-500 text-white' : 'bg-black/30 text-blue-300 border-blue-700'}`}
//                 >
//                     邮箱
//                 </Button>
//             </div>
//             <Input
//                 type="text"
//                 placeholder={`请输入${resetMethod === '短信' ? '手机号' : '邮箱'}`}
//                 className="w-full px-4 py-3 rounded-xltext-white placeholder-blue-300 border-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6]"
//                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
//             />
//             <div className="flex space-x-2">
//                 <Input
//                     type="text"
//                     placeholder="请输入验证码"
//                     className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-300 border-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6]"
//                     style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
//                 />
//                 <Button variant="outline" className="whitespace-nowrap bg-black/30 text-blue-300 border-blue-700 rounded-xl hover:bg-blue-800 hover:text-blue-200">
//                     获取验证码
//                 </Button>
//             </div>
//             <Button className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300">
//                 下一步
//             </Button>
//             <p className="text-sm text-blue-300 text-center">
//                 {resetMethod === '短信' ? '短信只能重置绑定手机号的账号密码' : '邮箱只能重置绑定邮箱的账号密码'}
//             </p>
//         </div>
//     )

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050026] to-[#2778e2] overflow-hidden">
//             <div className="absolute inset-0 z-0 overflow-hidden">
//                 <div className={`w-full h-[200vh] grid grid-cols-5 gap-4 p-4 ${showScrollEffect ? 'animate-scroll' : ''}`}>
//                     {extendedImages.map((src, index) => (
//                         <div key={index} className={`relative w-full h-full transition-opacity duration-1000 ${index <= activeImageIndex || (index >= images.length && activeImageIndex >= images.length - 1) ? 'opacity-100' : 'opacity-0'}`}>
//                             <Image
//                                 src={src}
//                                 alt={`Project ${(index % images.length) + 1}`}
//                                 layout="fill"
//                                 objectFit="cover"
//                                 className="rounded-lg"
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#050026]/90 to-[#2778e2]/90" />
//             </div>
//             <Card className={`w-full max-w-xl bg-gray-900/30 border-0 backdrop-blur-sm z-10 transition-all duration-1000 ${showCard ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
//                 <CardHeader className="items-center">
//                 </CardHeader>
//                 <CardContent className="px-8 py-2 sm:px-10 sm:py-4">
//                     <CardContent>
//                         {formType === 'login' ? (
//                             <>
//                                 <div className="flex justify-between items-center mb-6">
//                                     <div className="flex space-x-4">
//                                         <button
//                                             className={`text-lg font-bold pb-1 ${loginType === 'password' ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white'}`}
//                                             onClick={() => setLoginType('password')}
//                                         >
//                                             密码登录
//                                         </button>
//                                         <button
//                                             className={`text-lg font-bold pb-1 ${loginType === 'verification' ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white'}`}
//                                             onClick={() => setLoginType('verification')}
//                                         >
//                                             验证码登录
//                                         </button>
//                                     </div>
//                                     <button className="text-blue-900 bg-blue-300 rounded-full p-2 hover:bg-blue-200">
//                                         <QrCodeIcon className="w-6 h-6" />
//                                         <span className="sr-only">扫码登录</span>
//                                     </button>
//                                 </div>
//                                 <form className="space-y-4">
//                                     <Input
//                                         type="text"
//                                         placeholder="请输入邮箱/手机号"
//                                         className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-300 border-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus:outline-none"
//                                         style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
//                                     />
//                                     {loginType === 'password' ? (
//                                         <div className="relative">
//                                             <Input
//                                                 type={showPassword ? "text" : "password"}
//                                                 placeholder="请输入密码"
//                                                 className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-300 border-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus:outline-none"
//                                                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setShowPassword(!showPassword)}
//                                                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                                             >
//                                                 {showPassword ? (
//                                                     <EyeOffIcon className="h-5 w-5 text-blue-300" />
//                                                 ) : (
//                                                     <EyeIcon className="h-5 w-5 text-blue-300" />
//                                                 )}
//                                             </button>
//                                         </div>
//                                     ) : (
//                                         <div className="flex space-x-2">
//                                             <Input
//                                                 type="text"
//                                                 placeholder="请输入验证码"
//                                                 className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-300 border-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus:outline-none"
//                                                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
//                                             />
//                                             <Button variant="outline" className="whitespace-nowrap bg-black/30 text-blue-300 border-blue-700 rounded-xl hover:bg-blue-800 hover:text-blue-200">
//                                                 获取验证码
//                                             </Button>
//                                         </div>
//                                     )}
//                                     {loginType === 'password' && (
//                                         <div className="text-right">
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setFormType('resetPassword')}
//                                                 className="text-sm text-blue-300 hover:text-blue-100"
//                                             >
//                                                 忘记密码?
//                                             </button>
//                                         </div>
//                                     )}
//                                     <Button className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300">
//                                         {loginType === 'password' ? '登录' : '下一步'}
//                                     </Button>
//                                     <div className="flex items-center">
//                                         <Checkbox id="terms" className="border-blue-500 text-blue-500" />
//                                         <label htmlFor="terms" className="ml-2 text-sm text-blue-300">
//                                             我已阅读并同意 <a href="#" className="text-blue-400 hover:text-blue-200">服务协议</a> 和 <a href="#" className="text-blue-400 hover:text-blue-200">隐私政策</a>
//                                         </label>
//                                     </div>
//                                 </form>
//                                 <div className="mt-6 flex items-center justify-center text-sm text-blue-300">
//                                     <span>还没有账号?</span>
//                                     <a href="#" className="ml-2 text-blue-400 hover:text-blue-200">注册</a>
//                                 </div>
//                             </>
//                         ) : (
//                             <ResetPasswordForm />
//                         )}
//                     </CardContent>
//                 </CardContent>
//             </Card>
//         </div>
//     )
// }

// ------------------------------------------------------------------------------------------------


'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon, EyeOffIcon, QrCodeIcon } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { api } from '@/utils/logreapi'
import { useAuth } from '@/hooks/useAuth'
import useGlobalStore from '@/hooks/useGlobalStore'
import Link from 'next/link'

export default function LoginPage() {
    const [showCard, setShowCard] = useState(false)
    const [activeImageIndex, setActiveImageIndex] = useState(-1)
    const [showScrollEffect, setShowScrollEffect] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [loginType, setLoginType] = useState('password')

    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [verifyCode, setVerifyCode] = useState('')
    const [verifyId, setVerifyId] = useState<number | null>(null)
    const [error, setError] = useState('')
    const [mobileError, setMobileError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isGettingCode, setIsGettingCode] = useState(false)
    const [countdown, setCountdown] = useState(0)

    const router = useRouter()
    const { login } = useAuth()
    const { setGlobalStore } = useGlobalStore()
    const searchParams = useSearchParams()

    const images = ['/images/logresBg/bg1.png', '/images/logresBg/bg2.png', '/images/logresBg/bg3.png', '/images/logresBg/bg4.png', '/images/logresBg/bg5.png', '/images/logresBg/bg6.png', '/images/logresBg/bg7.png', '/images/logresBg/bg8.png', '/images/logresBg/bg9.png', '/images/logresBg/bg10.png']

    useEffect(() => {
        const cardTimer = setTimeout(() => setShowCard(true), 1000)

        const imageTimer = setInterval(() => {
            setActiveImageIndex(prevIndex => {
                if (prevIndex >= images.length - 1) {
                    clearInterval(imageTimer)
                    setTimeout(() => setShowScrollEffect(true), 500)
                    return prevIndex
                }
                return prevIndex + 1
            })
        }, 200)

        return () => {
            clearTimeout(cardTimer)
            clearInterval(imageTimer)
        }
    }, [])

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prevCount) => prevCount - 1)
            }, 1000)
        }
        return () => {
            if (timer) clearInterval(timer)
        }
    }, [countdown])

    const extendedImages = [...images, ...images.slice(0, 5)]

    const validateMobile = (phone: string) => {
        const regex = /^1[3-9]\d{9}$/
        return regex.test(phone)
    }

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setMobile(value)
        if (value && !validateMobile(value)) {
            setMobileError('请输入有效的11位手机号码')
        } else {
            setMobileError('')
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        if (!validateMobile(mobile)) {
            setMobileError('请输入有效的11位手机号码')
            return
        }

        setIsLoading(true)

        try {
            let response
            if (loginType === 'password') {
                response = await api.loginWithPassword({
                    mobile,
                    password,
                    type: 1 // 1 for mobile login
                })
            } else {
                if (!verifyId) {
                    setError('Please get verification code first')
                    setIsLoading(false)
                    return
                }
                const loginData = {
                    mobile,
                    verify_code: verifyCode,
                    verify_id: verifyId,
                    type: 1 // 1 for mobile login
                }
                response = await api.loginWithVerifyCode(loginData)
            }

            if (response.code === 0 && response.data) {
                const { token, user_info } = response.data
                setGlobalStore({
                    token,
                    tenant_id: user_info.tenant_id,
                    user_info
                })
                login(token, user_info)
                const redirectPath = searchParams.get('redirect') || '/userprofile'
                router.push(redirectPath)
            } else {
                setError(response.message || '登录失败。请检查您的凭据并重试。')
            }
        } catch (err) {
            setError('发生错误。请重试。')
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    const handleGetVerifyCode = async () => {
        if (!validateMobile(mobile)) {
            setMobileError('请输入有效的11位手机号码')
            return
        }
        setIsGettingCode(true)
        setError('')

        try {
            const response = await api.getVerificationCode(mobile, 2) // 2 for login scene
            if (response.code === 0 && response.data) {
                setVerifyId(Number(response.data.verify_id))
                setCountdown(60) // Start 60-second countdown
            } else {
                setError(response.message || '获取验证码失败')
            }
        } catch (error) {
            setError('获取验证码时发生错误')
            console.error('Verification code error:', error)
        } finally {
            setIsGettingCode(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050026] to-[#2778e2] overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className={`w-full h-[200vh] grid grid-cols-5 gap-4 p-4 ${showScrollEffect ? 'animate-scroll' : ''}`}>
                    {extendedImages.map((src, index) => (
                        <div key={index} className={`relative w-full h-full transition-opacity duration-1000 ${index <= activeImageIndex || (index >= images.length && activeImageIndex >= images.length - 1) ? 'opacity-100' : 'opacity-0'}`}>
                            <Image
                                src={src}
                                alt={`Project ${(index % images.length) + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#050026]/90 to-[#2778e2]/90" />
            </div>
            <Card className={`w-full max-w-xl bg-gray-900/30 border-0 backdrop-blur-sm z-10 transition-all duration-1000 ${showCard ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                <CardHeader className="items-center">
                </CardHeader>
                <CardContent className="px-8 py-2 sm:px-10 sm:py-4">
                    <CardContent>
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex space-x-4">
                                <button
                                    className={`text-lg font-bold pb-1 ${loginType === 'password' ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white'}`}
                                    onClick={() => setLoginType('password')}
                                >
                                    密码登录
                                </button>
                                <button
                                    className={`text-lg font-bold pb-1 ${loginType === 'verification' ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white'}`}
                                    onClick={() => setLoginType('verification')}
                                >
                                    验证码登录
                                </button>
                            </div>
                            <button className="text-blue-900 bg-blue-300 rounded-full p-2 hover:bg-blue-200">
                                <QrCodeIcon className="w-6 h-6" />
                                <span className="sr-only">扫码登录</span>
                            </button>
                        </div>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <Input
                                    type="tel"
                                    placeholder="请输入手机号"
                                    className={`w-full px-4 py-3 rounded-xl text-white placeholder-blue-300 border-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus:outline-none ${mobileError ? 'border-red-500' : ''}`}
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                                    value={mobile}
                                    onChange={handleMobileChange}
                                />
                                {mobileError && <p className="text-red-500 text-xs mt-1">{mobileError}</p>}
                            </div>
                            {loginType === 'password' ? (
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="请输入密码"
                                        className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-300 border-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus:outline-none"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showPassword ? (
                                            <EyeOffIcon className="h-5 w-5 text-blue-300" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5 text-blue-300" />
                                        )}
                                    </button>
                                </div>
                            ) : (
                                <div className="flex space-x-2">
                                    <Input
                                        type="text"
                                        placeholder="请输入验证码"
                                        className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-300 border-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus:outline-none"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                                        value={verifyCode}
                                        onChange={(e) => setVerifyCode(e.target.value)}
                                    />
                                    <Button
                                        type="button"
                                        onClick={handleGetVerifyCode}
                                        disabled={isGettingCode || countdown > 0 || !!mobileError}
                                        variant="outline"
                                        className={`whitespace-nowrap bg-black/30 text-blue-300 border-blue-700 rounded-xl hover:bg-blue-800 hover:text-blue-200 ${(isGettingCode || countdown > 0 || !!mobileError) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {isGettingCode ? '发送中...' : countdown > 0 ? `${countdown}s` : '获取验证码'}
                                    </Button>
                                </div>
                            )}
                            {loginType === 'password' && (
                                <div className="text-right">
                                    <Link href="/forgetPwd" className="text-sm text-blue-300 hover:text-blue-100">
                                        忘记密码?
                                    </Link>
                                </div>
                            )}
                            {error && (
                                <div className="text-red-500 text-sm mt-2">{error}</div>
                            )}
                            <Button
                                type="submit"
                                className={`w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 ${(isLoading || !!mobileError) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isLoading || !!mobileError}
                            >
                                {isLoading ? '登录中...' : '登录'}
                            </Button>
                            <div className="flex items-center">
                                <Checkbox id="terms" className="border-blue-500 text-blue-500" />
                                <label htmlFor="terms" className="ml-2 text-sm text-blue-300">
                                    我已阅读并同意 <a href="#" className="text-blue-400 hover:text-blue-200">服务协议</a> 和 <a href="#" className="text-blue-400 hover:text-blue-200">隐私政策</a>
                                </label>
                            </div>
                        </form>
                        <div className="mt-6 flex items-center justify-center text-sm text-blue-300">
                            <span>还没有账号?</span>
                            <Link href="/register" className="ml-2 text-blue-400 hover:text-blue-200">注册</Link>
                        </div>
                    </CardContent>
                </CardContent>
            </Card>
        </div>
    )
}