// // src/app/intelligent-account/page.tsx
'use client';

// import React, { useState, useEffect } from 'react';
// // import LoginModal from '@/components/LoginModal/LoginModal';
// import { withAuth } from '@/components/withAuth';

// const IntelligentAccount = () => {
//     const [showLoginModal, setShowLoginModal] = useState(false);

//     useEffect(() => {
//         setShowLoginModal(true);
//     }, []);

//     return (
//         <div className="p-8">
//             <h1 className="text-3xl font-bold mb-4">智能起号</h1>
//             <p>这里是智能起号的内容...</p>

//             {/* {showLoginModal && (
//                 <LoginModal onClose={() => setShowLoginModal(false)} />
//             )} */}
//         </div>
//     );
// }

// export default withAuth(IntelligentAccount);
import React from 'react';
import { FadeText } from "@/components/magicui/fade-text";

export default function IntelligentAccount() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-12 bg-black">
            <FadeText
                className="text-9xl font-bold text-white font-hongLei"
                direction="up"
                framerProps={{
                    show: { transition: { delay: 0.2 } },
                }}
                text="招"
            />
            <FadeText
                className="text-9xl font-bold text-white font-hongLei"
                direction="right"
                framerProps={{
                    show: { transition: { delay: 0.4 } },
                }}
                text="财"
            />
            <FadeText
                className="text-9xl font-bold text-white font-hongLei"
                direction="down"
                framerProps={{
                    show: { transition: { delay: 0.6 } },
                }}
                text="进"
            />
            <FadeText
                className="text-9xl font-bold text-white font-hongLei"
                direction="left"
                framerProps={{
                    show: { transition: { delay: 0.8 } },
                }}
                text="宝"
            />
        </div>
    );
}

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