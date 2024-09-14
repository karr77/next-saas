'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import useGlobalStore from '@/hooks/useGlobalStore';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User, Edit, LogOut } from 'lucide-react';

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

const components = [
    {
        title: "私域运营",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "客户分析",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "转化优化",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "CRM集成",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const { isAuthenticated, logout } = useAuth();
    const { store } = useGlobalStore();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLoginClick = () => {
        router.push('/login');  // Changed from '/login' to '/login'
    };

    const handleNavigation = (path: string) => {
        if (isAuthenticated) {
            router.push(path);
        } else {
            router.push('/login?redirect=' + encodeURIComponent(path));
        }
    };

    return (
        <nav className={`fixed top-5 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center justify-between h-16 transition-all duration-300 ${isScrolled ? 'space-x-8' : ''}`}>
                    <div className={`flex items-center transition-opacity duration-300 ${isScrolled ? 'opacity-0 w-0' : 'opacity-100'}`}>
                        <a href="#" className="text-white font-bold text-xl mr-auto">招财进宝</a>
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList className='px-4 py-1 border border-white/20 rounded-xl'>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent text-white hover:text-white">AI 公域招财系统</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <ListItem href="#" title="招财矩阵宝" onClick={() => handleNavigation('/fortunematrix')}>
                                            Re-usable components built using Radix UI and Tailwind CSS.
                                        </ListItem>
                                        <ListItem href="#" title="内容生成" onClick={() => handleNavigation('/content-generation')}>
                                            How to install dependencies and structure your app.
                                        </ListItem>
                                        <ListItem href="#" title="矩阵发布" onClick={() => handleNavigation('/matrix-publishing')}>
                                            Styles for headings, paragraphs, lists...etc
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent text-white hover:text-white">AI 私域进宝系统</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/services" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent focus:bg-transparent text-white hover:text-white")}>
                                        功能
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent focus:bg-transparent text-white hover:text-white")}>
                                        客户评价
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className={`flex items-center space-x-2 transition-opacity duration-300 ${isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                        {isAuthenticated ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className="cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                                        <AvatarImage src={store.user_info?.avatar_address} alt={store.user_info?.nickname} />
                                        <AvatarFallback>{store.user_info?.nickname?.charAt(0).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-40 backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg rounded-xl left-dropdown-menu"
                                >
                                    <DropdownMenuItem onSelect={() => router.push('/userprofile/user')} className="flex items-center space-x-2 hover:bg-white/20 transition-colors">
                                        <User className="w-4 h-4 flex-shrink-0" />
                                        <span className="truncate">个人中心</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onSelect={() => router.push('/profile/edit')} className="flex items-center space-x-2 hover:bg-white/20 transition-colors">
                                        <Edit className="w-4 h-4 flex-shrink-0" />
                                        <span className="truncate">团队设置</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onSelect={logout} className="flex items-center space-x-2 hover:bg-white/20 transition-colors">
                                        <LogOut className="w-4 h-4 flex-shrink-0" />
                                        <span className="truncate">退出登录</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-white hover:bg-white/20"
                                    onClick={() => router.push('/login')}
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-white text-black hover:bg-gray-200"
                                    onClick={() => router.push('/signup')}
                                >
                                    Sign up
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;