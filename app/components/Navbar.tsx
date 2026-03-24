'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const menuItems = [
  { label: 'ANA SAYFA', href: '/' },
  {
    label: 'KURUMSAL',
    children: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'SANY Kimdir?', href: '/sany-kimdir' },
      { label: 'FMT Kimdir?', href: '/fmt-kimdir' },
    ],
  },
  {
    label: 'ARAÇLAR',
    children: [
      { label: 'Tüm Kamyon Modelleri', href: '/kamyon-modelleri' },
      { label: 'SANY Elektrikli Kamyon', href: '/araclar/elektrikli-damperli-kamyon' },
      { label: 'Elektirikli Çekici', href: '/araclar/636-kwh-elektirikli-cekici' },
      { label: 'Elektrikli Hafif Ticari', href: '/araclar/elektrikli-hafif-ticari' },
      { label: 'Batarya Teknolojileri', href: '/batarya-teknolojileri' },
      { label: 'Garanti ve Bakım', href: '/garanti-ve-bakim' },
    ],
  },
  {
    label: 'HİZMETLER',
    children: [
      { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
      { label: 'Yetkili Servisler', href: '/yetkili-servisler' },
      { label: 'Bayilik Başvurusu', href: '/bayilik-basvurusu' },
    ],
  },
  { label: 'BLOG', href: '/blog' },
  { label: 'İLETİŞİM', href: '/iletisim' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#2a2a2a] sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">

        {/* LEFT: Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 flex-1">
          {menuItems.slice(0, 3).map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1.5 text-gray-400 hover:text-white text-[11px] font-bold tracking-[0.18em] transition-colors py-2">
                  {item.label}
                  <svg className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-[#111112] border border-[#2a2a2a] shadow-2xl z-50 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-gray-400 hover:text-white hover:bg-[#1a1a1c] hover:pl-6 text-xs font-medium tracking-wider transition-all border-l-2 border-transparent hover:border-sany-red"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href!} className="text-gray-400 hover:text-white text-[11px] font-bold tracking-[0.18em] transition-colors">
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CENTER: Logo */}
        <div className="flex-1 flex justify-center lg:justify-center">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Sany Trucks Logo" className="h-[38px] md:h-[46px] object-contain" />
          </Link>
        </div>

        {/* RIGHT: Desktop Nav (right side) + CTA */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
          {menuItems.slice(3).map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1.5 text-gray-400 hover:text-white text-[11px] font-bold tracking-[0.18em] transition-colors py-2">
                  {item.label}
                  <svg className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full right-0 mt-0 w-56 bg-[#111112] border border-[#2a2a2a] shadow-2xl z-50 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-gray-400 hover:text-white hover:bg-[#1a1a1c] text-xs font-medium tracking-wider transition-all border-l-2 border-transparent hover:border-sany-red"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : item.label === 'İLETİŞİM' ? null : (
              <Link key={item.label} href={item.href!} className="text-gray-400 hover:text-white text-[11px] font-bold tracking-[0.18em] transition-colors">
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/iletisim"
            className="bg-sany-red hover:bg-[#cc0000] text-white px-7 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-all shadow-lg hover:shadow-sany-red/30"
          >
            TEKLİF ALIN
          </Link>
        </div>

        {/* MOBILE: Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 z-50 ml-2"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div className={`lg:hidden fixed inset-0 top-[70px] bg-[#0d0d0d] z-40 flex flex-col px-6 py-8 gap-0 overflow-y-auto transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {menuItems.map((item) =>
          item.children ? (
            <div key={item.label} className="border-b border-[#1a1a1c]">
              <button
                className="w-full flex justify-between items-center py-4 text-gray-300 text-sm font-bold tracking-[0.2em] hover:text-white transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
              >
                {item.label}
                <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {mobileExpanded === item.label && (
                <div className="pb-4 flex flex-col gap-1 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="py-2.5 text-gray-400 hover:text-sany-red text-sm transition-colors border-l-2 border-[#2a2a2a] pl-4 hover:border-sany-red"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href!}
              className="py-4 text-gray-300 hover:text-white text-sm font-bold tracking-[0.2em] border-b border-[#1a1a1c] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          )
        )}
        <Link
          href="/iletisim"
          className="mt-8 bg-sany-red text-white py-4 text-center font-bold tracking-[0.2em] uppercase text-sm"
          onClick={() => setMobileOpen(false)}
        >
          TEKLİF ALIN
        </Link>
      </div>
    </nav>
  );
}
