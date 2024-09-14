'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Download } from 'lucide-react'

type Content = {
    id: string
    platform: '抖音' | '小红书' | '快手' | '订阅号' | '视频号'
    title: string
    account: string
    type: '视频' | '图文'
    publishDate: string
    status: '已发布' | '审核中'
}

const contents: Content[] = [
    { id: 'CONT-3360', platform: '抖音', title: "10个提高工作效率的小技巧", account: "@效率专家", type: '视频', publishDate: '2023-06-15', status: '已发布' },
    { id: 'CONT-7068', platform: '抖音', title: "如何在30天内学会一门新语言", account: "@语言学习达人", type: '视频', publishDate: '2023-06-14', status: '已发布' },
    { id: 'CONT-1005', platform: '快手', title: "5分钟快手早餐食谱", account: "@美食达人", type: '视频', publishDate: '2023-06-13', status: '审核中' },
    { id: 'CONT-1006', platform: '订阅号', title: "居家办公的5个注意事项", account: "@职场指南", type: '图文', publishDate: '2023-06-12', status: '已发布' },
    { id: 'CONT-1007', platform: '视频号', title: "如何选择适合自己的瑜伽课程", account: "@瑜伽教练", type: '视频', publishDate: '2023-06-11', status: '审核中' },
    { id: 'CONT-1008', platform: '小红书', title: "7天减肥餐计划", account: "@健康生活家", type: '图文', publishDate: '2023-06-10', status: '已发布' },
    { id: 'CONT-1009', platform: '抖音', title: "3分钟学会一个魔术技巧", account: "@魔术师小王", type: '视频', publishDate: '2023-06-09', status: '审核中' },
    { id: 'CONT-1010', platform: '快手', title: "如何培养孩子的阅读习惯", account: "@育儿专家", type: '视频', publishDate: '2023-06-08', status: '已发布' },
    { id: 'CONT-1011', platform: '订阅号', title: "2023年最值得关注的5个科技趋势", account: "@科技前沿", type: '图文', publishDate: '2023-06-07', status: '审核中' },
    { id: 'CONT-1012', platform: '视频号', title: "10分钟居家全身拉伸运动", account: "@健身教练", type: '视频', publishDate: '2023-06-06', status: '已发布' },
    // 添加更多内容以模拟多页数据
    ...Array.from({ length: 40 }, (_, i) => ({
        id: `CONT-${1013 + i}`,
        platform: ['抖音', '小红书', '快手', '订阅号', '视频号'][Math.floor(Math.random() * 5)] as Content['platform'],
        title: [
            "如何提高记忆力：5个实用技巧",
            "15分钟快速晨间瑜伽",
            "3步打造完美职场妆容",
            "居家种植蔬菜的入门指南",
            "如何在一周内改善睡眠质量",
            "5个提高专注力的冥想技巧",
            "新手摄影：如何拍出好看的食物照片",
            "10分钟学会一首尤克里里曲目",
            "如何开始写作并保持灵感",
            "5个提高演讲技巧的小窍门"
        ][Math.floor(Math.random() * 10)],
        account: `@创作者${1013 + i}`,
        type: Math.random() > 0.5 ? '视频' : '图文',
        publishDate: `2023-06-${String(20 - i).padStart(2, '0')}`,
        status: Math.random() > 0.5 ? '已发布' : '审核中'
    }))
]

const platformColors = {
    '小红书': '#f72742',
    '抖音': '#010101',
    '视频号': '#f78b1b',
    '快手': '#f74d00',
    '订阅号': '#2d7fcd'
}

export default function WorkRelease() {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [filterPlatform, setFilterPlatform] = useState('all')
    const [filterType, setFilterType] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredContents, setFilteredContents] = useState(contents)

    useEffect(() => {
        const filtered = contents.filter(content =>
            (filterPlatform === 'all' || content.platform === filterPlatform) &&
            (filterType === 'all' || content.type === filterType) &&
            (content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                content.account.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        setFilteredContents(filtered)
        setCurrentPage(1)
    }, [filterPlatform, filterType, searchTerm])

    const pageCount = Math.ceil(filteredContents.length / itemsPerPage)
    const paginatedContents = filteredContents.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const handleExport = () => {
        // 这里可以实现导出逻辑
        console.log('导出记录')
    }

    return (
        <div className="container mx-auto p-4 max-w-full">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold">欢迎回来！</h1>
                    <p className="text-gray-600">这是您本月的作品列表！</p>
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            </div>

            <div className="mb-4 flex flex-col sm:flex-row gap-4">
                <Input
                    placeholder="筛选作品..."
                    className="flex-grow"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="flex gap-2">
                    <Select value={filterPlatform} onValueChange={setFilterPlatform}>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="平台" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">全部</SelectItem>
                            <SelectItem value="抖音">抖音</SelectItem>
                            <SelectItem value="小红书">小红书</SelectItem>
                            <SelectItem value="快手">快手</SelectItem>
                            <SelectItem value="订阅号">订阅号</SelectItem>
                            <SelectItem value="视频号">视频号</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select value={filterType} onValueChange={setFilterType}>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="类型" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">全部</SelectItem>
                            <SelectItem value="视频">视频</SelectItem>
                            <SelectItem value="图文">图文</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button onClick={handleExport} className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">导出记录</span>
                    </Button>
                </div>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>作品标题</TableHead>
                        <TableHead className="hidden md:table-cell">发布账号</TableHead>
                        <TableHead className="hidden sm:table-cell">类型</TableHead>
                        <TableHead className="hidden lg:table-cell">发布日期</TableHead>
                        <TableHead className="w-[100px]">状态</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedContents.map((content) => (
                        <TableRow key={content.id}>
                            <TableCell>
                                <div>
                                    <span className="font-medium">{content.id}</span>
                                    <span
                                        className="ml-2 text-xs px-2 py-1 rounded-full text-white"
                                        style={{ backgroundColor: platformColors[content.platform] }}
                                    >
                                        {content.platform}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-500">{content.title}</div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                {content.account}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                                <span className={`px-2 py-1 rounded-full text-xs ${content.type === '视频' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                                    }`}>
                                    {content.type}
                                </span>
                            </TableCell>
                            <TableCell className="hidden lg:table-cell">
                                {content.publishDate}
                            </TableCell>
                            <TableCell>
                                <span className={`px-2 py-1 rounded-full text-xs ${content.status === '已发布' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {content.status}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-500">
                    共{filteredContents.length}条内容
                </div>
                <div className="flex items-center space-x-2">
                    <div className="text-sm text-gray-500">每页行数：</div>
                    <Select value={String(itemsPerPage)} onValueChange={(value) => setItemsPerPage(Number(value))}>
                        <SelectTrigger className="w-[70px]">
                            <SelectValue placeholder="10" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                            <SelectItem value="100">100</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="text-sm text-gray-500">第{currentPage}页，共{pageCount}页</div>
                    <div className="flex">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-r-none"
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                        >
                            <ChevronsLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-none border-l-0"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-none border-l-0"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
                            disabled={currentPage === pageCount}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-l-none border-l-0"
                            onClick={() => setCurrentPage(pageCount)}
                            disabled={currentPage === pageCount}
                        >
                            <ChevronsRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}