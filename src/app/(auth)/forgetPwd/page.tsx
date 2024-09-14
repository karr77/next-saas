'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import { api } from '@/utils/logreapi'
import Link from 'next/link'

export default function ForgotPasswordPage() {
    const [showCard, setShowCard] = useState(false)
    const [activeImageIndex, setActiveImageIndex] = useState(-1)
    const [showScrollEffect, setShowScrollEffect] = useState(false)
    const [mobile, setMobile] = useState('')
    const [verifyCode, setVerifyCode] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [verifyId, setVerifyId] = useState<number | null>(null)
    const [error, setError] = useState('')
    const [mobileError, setMobileError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isGettingCode, setIsGettingCode] = useState(false)
    const [countdown, setCountdown] = useState(0)
    const [step, setStep] = useState(1)

    const router = useRouter()

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

    const handleGetVerifyCode = async () => {
        if (!validateMobile(mobile)) {
            setMobileError('请输入有效的11位手机号码')
            return
        }
        setIsGettingCode(true)
        setError('')

        try {
            const response = await api.getVerificationCode(mobile, 3) // 3 for password reset scene
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        if (step === 1) {
            if (!validateMobile(mobile)) {
                setMobileError('请输入有效的11位手机号码')
                return
            }
            if (!verifyCode) {
                setError('请输入验证码')
                return
            }
            setStep(2)
        } else if (step === 2) {
            if (newPassword !== confirmPassword) {
                setError('两次输入的密码不一致')
                return
            }
            setIsLoading(true)
            try {
                const response = await api.resettingPassword({
                    mobile,
                    verify_code: verifyCode,
                    verify_id: verifyId!,
                    password: newPassword, // Add the password property
                    type: 1 // Replace Number with an actual number value
                })
                if (response.code === 0) {
                    // Password reset successful
                    router.push('/login?resetSuccess=true')
                } else {
                    setError(response.message || '重置密码失败')
                }
            } catch (err) {
                setError('发生错误。请重试。')
                console.error(err)
            } finally {
                setIsLoading(false)
            }
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
                            <h2 className="text-xl font-bold text-white">重置密码</h2>
                            <Link href="/login">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-blue-300 hover:text-blue-100 hover:bg-[#08112d] transition-colors duration-200"
                                >
                                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                                    返回登录
                                </Button>
                            </Link>
                        </div>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {step === 1 && (
                                <>
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
                                            disabled={isGettingCode || countdown > 0 || !!mobileError}
                                            variant="outline"
                                            className={`whitespace-nowrap bg-black/30 text-blue-300 border-blue-700 rounded-xl hover:bg-blue-800 hover:text-blue-200 ${(isGettingCode || countdown > 0 || !!mobileError) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {isGettingCode ? '发送中...' : countdown > 0 ? `${countdown}s` : '获取验证码'}
                                        </Button>
                                    </div>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <Input
                                        type="password"
                                        placeholder="请输入新密码"
                                        className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-300 border-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus:outline-none"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <Input
                                        type="password"
                                        placeholder="请确认新密码"
                                        className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-300 border-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus:outline-none"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </>
                            )}
                            {error && (
                                <div className="text-red-500 text-sm mt-2">{error}</div>
                            )}
                            <Button
                                type="submit"
                                className={`w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 ${(isLoading || !!mobileError) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isLoading || !!mobileError}
                            >
                                {isLoading ? '处理中...' : step === 1 ? '下一步' : '重置密码'}
                            </Button>
                        </form>
                    </CardContent>
                </CardContent>
            </Card>
        </div>
    )
}