'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { api } from '@/utils/logreapi'
import Link from 'next/link'

export default function Register() {
    const [showCard, setShowCard] = useState(false)
    const [activeImageIndex, setActiveImageIndex] = useState(-1)
    const [showScrollEffect, setShowScrollEffect] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [verifyCode, setVerifyCode] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isGettingCode, setIsGettingCode] = useState(false)
    const [countdown, setCountdown] = useState(0)
    const [mobileError, setMobileError] = useState('')
    const [verifyId, setVerifyId] = useState('')

    const router = useRouter()

    const images = ['/images/logresBg/bg1.png', '/images/logresBg/bg2.png', '/images/logresBg/bg3.png', '/images/logresBg/bg4.png', '/images/logresBg/bg5.png', '/images/logresBg/bg6.png', '/images/logresBg/bg7.png', '/images/logresBg/bg8.png', '/images/logresBg/bg9.png', '/images/logresBg/bg10.png']
    const extendedImages = [...images, ...images.slice(0, 5)]

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
            const response = await api.register({
                mobile,
                password,
                verify_code: verifyCode,
                verify_id: Number(verifyId),
                type: 1,
            })

            if (response.code === 0) {
                router.push('/login')
            } else {
                setError(response.message || '注册失败，请重试。')
            }
        } catch (err) {
            setError('发生错误，请重试。')
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    const handleGetVerifyCode = async () => {
        if (!mobile) {
            setError('请输入手机号')
            return
        }
        setIsGettingCode(true)
        setError('')

        try {
            const response = await api.getVerificationCode(mobile, 1) // 假设 1 代表注册场景
            if (response.code === 0) {
                setCountdown(60) // 开始60秒倒计时
                if (response.data && typeof response.data.verify_id === 'string') {
                    setVerifyId(response.data.verify_id) // 保存 verify_id as string
                } else {
                    console.error('Unexpected verify_id type:', response.data.verify_id)
                    setError('获取验证码失败：无效的验证ID')
                }
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
                        <h2 className="text-2xl font-bold text-white mb-6">手机号注册</h2>
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
                                    disabled={isGettingCode || countdown > 0}
                                    variant="outline"
                                    className={`whitespace-nowrap bg-black/30 text-blue-300 border-blue-700 rounded-xl hover:bg-blue-800 hover:text-blue-200 ${(isGettingCode || countdown > 0) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isGettingCode ? '发送中...' : countdown > 0 ? `${countdown}s` : '获取验证码'}
                                </Button>
                            </div>
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
                            {error && (
                                <div className="text-red-500 text-sm mt-2">{error}</div>
                            )}
                            <Button
                                type="submit"
                                className={`w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? '注册中...' : '注册'}
                            </Button>
                            <div className="flex items-center justify-center">
                                <Checkbox id="terms" className="border-blue-500 text-blue-500" />
                                <label htmlFor="terms" className="ml-2 text-sm text-blue-300">
                                    注册即同意 <Link href="#" className="text-blue-400 hover:text-blue-200">《用户协议》</Link> 和 <Link href="#" className="text-blue-400 hover:text-blue-200">《隐私政策》</Link>
                                </label>
                            </div>
                        </form>
                        <div className="mt-6 flex items-center justify-center text-sm text-blue-300">
                            <span>已有账号?</span>
                            <Link href="/login" className="ml-2 text-blue-400 hover:text-blue-200">登录</Link>
                        </div>
                    </CardContent>
                </CardContent>
            </Card>
        </div>
    )
}