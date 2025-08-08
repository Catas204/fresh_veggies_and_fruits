import { Leaf, Instagram, Facebook } from "lucide-react";

const footerNavs = [
    { href: '#', name: 'About' },
    { href: '#', name: 'Blog' },
    { href: '#', name: 'Team' },
    { href: '#', name: 'Careers' },
    { href: '#', name: 'Support' }
];

export default function Footer() {
    return (
        <footer className="bg-secondary/50 text-foreground py-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center gap-2" aria-label="FarmFresh Delivered Home">
                            <Leaf className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold tracking-tight text-foreground font-headline">
                                FarmFresh Delivered
                            </span>
                        </a>
                        <p className="mt-2 text-muted-foreground max-w-xs">Your daily dose of farm-fresh goodness, delivered right to your doorstep.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Resources</h2>
                            <ul className="text-muted-foreground space-y-4">
                                {footerNavs.map(item => (
                                    <li key={item.name}>
                                        <a href={item.href} className="hover:text-primary transition-colors">{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Follow us</h2>
                             <ul className="text-muted-foreground space-y-4">
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                                      <Instagram className="h-5 w-5" />
                                      Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                                      <Facebook className="h-5 w-5" />
                                      Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Legal</h2>
                            <ul className="text-muted-foreground space-y-4">
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-border sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-muted-foreground sm:text-center">© {new Date().getFullYear()} FarmFresh Delivered™. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}
