import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search, Plus, Share, Download } from "lucide-react"

const groups = [
    { name: "全部分组", color: "bg-gray-100 text-gray-800" },
    { name: "宠物", color: "bg-pink-100 text-pink-800" },
    { name: "科技", color: "bg-blue-100 text-blue-800" },
    { name: "美食", color: "bg-yellow-100 text-yellow-800" },
    { name: "旅游", color: "bg-green-100 text-green-800" },
    { name: "美妆", color: "bg-purple-100 text-purple-800" },
    { name: "新闻", color: "bg-orange-100 text-orange-800" },
]

const statuses = ["全部状态", "已授权", "未授权"]

const generateAccounts = (count: number, platform: string) => {
    return Array.from({ length: count }, (_, i) => ({
        id: 100000 + i,
        name: `${platform}用户${i + 1}`,
        avatar: `/placeholder.svg?height=32&width=32`,
        platformId: `${platform}${i + 1}`,
        accountId: `${platform.charAt(0).toUpperCase()}${100000 + i}`,
        phone: `138${String(i).padStart(8, '0')}`,
        followers: Math.floor(Math.random() * 100000),
        likes: Math.floor(Math.random() * 500000),
        group: groups[Math.floor(Math.random() * (groups.length - 1)) + 1],
        status: statuses[Math.floor(Math.random() * 2) + 1],
    }))
}

interface PlatformData {
    [key: string]: {
        id: number;
        name: string;
        avatar: string;
        platformId: string;
        accountId: string;
        phone: string;
        followers: number;
        likes: number;
        group: {
            name: string;
            color: string;
        };
        status: string;
    }[];
}

const platformData: PlatformData = {
    "抖音": generateAccounts(50, "抖音"),
    "快手": generateAccounts(40, "快手"),
    "视频号": generateAccounts(30, "视频号"),
    "小红书": generateAccounts(35, "小红书"),
    "头条": generateAccounts(45, "头条"),
}

export default function AccountAuth() {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [selectedStatus, setSelectedStatus] = useState("全部状态")
    const [selectedGroup, setSelectedGroup] = useState("全部分组")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedPlatform, setSelectedPlatform] = useState("抖音")

    const filteredAccounts = platformData[selectedPlatform].filter(account =>
        (selectedStatus === "全部状态" || account.status === selectedStatus) &&
        (selectedGroup === "全部分组" || account.group.name === selectedGroup) &&
        (searchQuery === "" || account.name.includes(searchQuery) || account.platformId.includes(searchQuery))
    )

    const totalItems = filteredAccounts.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const currentAccounts = filteredAccounts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const goToPage = (page: number) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)))
    }

    const handlePlatformChange = (platform: string) => {
        setSelectedPlatform(platform)
        setCurrentPage(1)
    }

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 space-y-4">
            <Tabs value={selectedPlatform} onValueChange={handlePlatformChange} className="w-full">
                <TabsList className="w-full flex justify-start overflow-x-auto">
                    <TabsTrigger value="抖音">抖音</TabsTrigger>
                    <TabsTrigger value="快手">快手</TabsTrigger>
                    <TabsTrigger value="视频号">视频号</TabsTrigger>
                    <TabsTrigger value="小红书">小红书</TabsTrigger>
                    <TabsTrigger value="头条">头条</TabsTrigger>
                </TabsList>
                {Object.keys(platformData).map((platform) => (
                    <TabsContent key={platform} value={platform}>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                                    <SelectTrigger className="w-full sm:w-[180px]">
                                        <SelectValue placeholder="选择状态" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {statuses.map((status) => (
                                            <SelectItem key={status} value={status}>
                                                {status}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <div className="relative w-full sm:w-auto">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="搜索账号"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-8 w-full sm:w-[250px]"
                                    />
                                </div>
                                <Select value={selectedGroup} onValueChange={setSelectedGroup}>
                                    <SelectTrigger className="w-full sm:w-[180px]">
                                        <SelectValue placeholder="选择分组" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {groups.map((group) => (
                                            <SelectItem key={group.name} value={group.name}>
                                                {group.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                                <Button className="w-full sm:w-auto">
                                    <Plus className="mr-2 h-4 w-4" /> 新增授权
                                </Button>
                                <Button variant="outline" className="w-full sm:w-auto">
                                    <Share className="mr-2 h-4 w-4" /> 分享授权
                                </Button>
                                <Button variant="outline" className="w-full sm:w-auto">
                                    <Download className="mr-2 h-4 w-4" /> 导出数据
                                </Button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader className="bg-[#f9fafb]">
                                    <TableRow>
                                        <TableHead className="w-[50px]">
                                            <Checkbox />
                                        </TableHead>
                                        <TableHead>ID</TableHead>
                                        <TableHead>账号</TableHead>
                                        <TableHead>账号ID</TableHead>
                                        <TableHead>手机号</TableHead>
                                        <TableHead>粉丝数</TableHead>
                                        <TableHead>点赞数</TableHead>
                                        <TableHead>分组</TableHead>
                                        <TableHead>授权状态</TableHead>
                                        <TableHead>操作</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {currentAccounts.map((account) => (
                                        <TableRow key={account.id}>
                                            <TableCell>
                                                <Checkbox />
                                            </TableCell>
                                            <TableCell>{account.id}</TableCell>
                                            <TableCell className="flex items-center space-x-3">
                                                <Avatar>
                                                    <AvatarImage src={account.avatar} alt={account.name} />
                                                    <AvatarFallback>{account.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-medium">{account.name}</div>
                                                    <div className="text-sm text-gray-500">{platform}号：{account.platformId}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>{account.accountId}</TableCell>
                                            <TableCell>{account.phone}</TableCell>
                                            <TableCell>{account.followers.toLocaleString()}</TableCell>
                                            <TableCell>{account.likes.toLocaleString()}</TableCell>
                                            <TableCell>
                                                <Badge variant="secondary" className={account.group.color}>
                                                    {account.group.name}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant={account.status === "已授权" ? "success" : "warning"}>
                                                    {account.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                                            <span className="sr-only">打开菜单</span>
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem>查看</DropdownMenuItem>
                                                        <DropdownMenuItem>分组</DropdownMenuItem>
                                                        <DropdownMenuItem>删除</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 space-y-4 sm:space-y-0">
                            <div className="text-sm text-gray-500">
                                共{totalItems}条内容
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1">
                                    <span className="text-sm text-gray-500">每页行数:</span>
                                    <Select
                                        value={itemsPerPage.toString()}
                                        onValueChange={(value) => {
                                            setItemsPerPage(Number(value))
                                            setCurrentPage(1)
                                        }}
                                    >
                                        <SelectTrigger className="w-[70px]">
                                            <SelectValue placeholder={itemsPerPage} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {[10, 20, 30, 40, 50].map((value) => (
                                                <SelectItem key={value} value={value.toString()}>
                                                    {value}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="text-sm text-gray-500">
                                        第{currentPage}页, 共{totalPages}页
                                    </span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => goToPage(1)}
                                        disabled={currentPage === 1}
                                    >
                                        <ChevronsLeft className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => goToPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => goToPage(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => goToPage(totalPages)}
                                        disabled={currentPage === totalPages}
                                    >
                                        <ChevronsRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}