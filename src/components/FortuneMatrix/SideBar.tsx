'use client';
import React from 'react'
import { Gauge, KeyRound, BookCheck, ImageUp, Cctv, NotebookPen, Telescope, FolderLock, MessageSquarePlus, WholeWord, BookKey } from 'lucide-react'

const sidebarItems = [
    { name: '数据仪表盘', icon: Gauge },
    { name: '账号授权管理', icon: KeyRound },
    { name: '作品发布', icon: BookCheck },
    { name: 'AI 图文智能投放', icon: ImageUp },
    { name: 'AI 视频智能投放', icon: Cctv },
    { name: '作品发布记录', icon: NotebookPen },
    { name: 'AI 商机发现', icon: Telescope },
    { name: 'AI 私信聚合', icon: FolderLock },
    { name: 'AI 评论聚合', icon: MessageSquarePlus },
    { name: '智能话术库', icon: WholeWord },
    { name: 'AI 知识库', icon: BookKey }
]

export default function Sidebar({ activeItem, setActiveItem }: { activeItem: string, setActiveItem: (name: string) => void }) {
    return (
        <nav className="w-64 flex-shrink-0 border-r bg-muted/40">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">招财矩阵宝</h2>
                <ul className="space-y-1">
                    {sidebarItems.map((item) => (
                        <li
                            key={item.name}
                            className={`flex items-center p-2 cursor-pointer rounded-md transition-colors ${activeItem === item.name
                                ? 'bg-accent text-accent-foreground font-medium'
                                : 'hover:bg-accent hover:text-accent-foreground'
                                }`}
                            onClick={() => setActiveItem(item.name)}
                        >
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}