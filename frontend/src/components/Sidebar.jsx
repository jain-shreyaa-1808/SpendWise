import React, { useEffect, useRef, useState } from "react";
import { sidebarStyles, cn } from "../assets/dummyStyles";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowDown,
  ArrowUp,
  Home,
  LogOut,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import ContactModal from "./ContactModal";

const MENU_ITEMS = [
  { text: "Dashboard", path: "/", icon: <Home size={18} /> },
  { text: "Income", path: "/income", icon: <ArrowUp size={18} /> },
  { text: "Expenses", path: "/expense", icon: <ArrowDown size={18} /> },
  { text: "Profile", path: "/profile", icon: <User size={18} /> },
];

const Sidebar = ({ user, isCollapsed, setIsCollapsed }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [showContact, setShowContact] = useState(false);

  const { name: username = "User", email = "user@example.com" } = user || {};
  const initial = username.charAt(0).toUpperCase();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const toggleSidebar = () => setIsCollapsed((c) => !c);

  const renderMenuItem = ({ text, path, icon }) => {
    const isActive = pathname === path;
    return (
      <motion.li key={text} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          to={path}
          className={cn(
            sidebarStyles.menuItem.base,
            isActive ? sidebarStyles.menuItem.active : sidebarStyles.menuItem.inactive,
            isCollapsed ? sidebarStyles.menuItem.collapsed : sidebarStyles.menuItem.expanded,
          )}
          onMouseEnter={() => setActiveHover(text)}
          onMouseLeave={() => setActiveHover(null)}
        >
          <span className={isActive ? sidebarStyles.menuIcon.active : sidebarStyles.menuIcon.inactive}>
            {icon}
          </span>
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm font-medium"
            >
              {text}
            </motion.span>
          )}
          {activeHover === text && !isActive && !isCollapsed && (
            <span className={sidebarStyles.activeIndicator} />
          )}
        </Link>
      </motion.li>
    );
  };

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <motion.div
        ref={sidebarRef}
        className={sidebarStyles.sidebarContainer.base}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, width: isCollapsed ? 72 : 240 }}
        transition={{ type: "spring", damping: 25 }}
      >
        <div className={sidebarStyles.sidebarInner.base}>
          {/* Collapse toggle */}
          <button onClick={toggleSidebar} className={sidebarStyles.toggleButton.base}>
            <motion.div
              animate={{ rotate: isCollapsed ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points={isCollapsed ? "9 18 15 12 9 6" : "15 18 9 12 15 6"} />
              </svg>
            </motion.div>
          </button>

          {/* User profile */}
          <div className={cn(
            "p-4 border-b border-white/10 pt-5",
            isCollapsed ? "px-3 flex justify-center" : "px-5",
          )}>
            <div className="flex items-center gap-3">
              <div className={sidebarStyles.userInitials.base}>{initial}</div>
              {!isCollapsed && (
                <motion.div
                  className="overflow-hidden"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-sm font-semibold text-white truncate max-w-[140px]">{username}</h2>
                  <p className="text-xs text-white/40 truncate max-w-[140px]">{email}</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-3 custom-scrollbar">
            <ul className={sidebarStyles.menuList.base}>
              {MENU_ITEMS.map(renderMenuItem)}
            </ul>
          </div>

          {/* Footer */}
          <div className={cn(
            "border-t border-white/10 p-3 space-y-1",
            isCollapsed ? "px-2" : "px-3",
          )}>
            <button
              onClick={() => setShowContact(true)}
              className={cn(
                "flex items-center gap-3 w-full py-2.5 rounded-xl font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all",
                isCollapsed ? "justify-center px-2" : "px-3",
              )}
            >
              <Mail size={18} />
              {!isCollapsed && <span className="text-sm">Contact Us</span>}
            </button>

            <button
              onClick={handleLogout}
              className={cn(
                "flex items-center gap-3 w-full py-2.5 rounded-xl font-medium text-white/60 hover:text-red-400 hover:bg-red-500/10 transition-all",
                isCollapsed ? "justify-center px-2" : "px-3",
              )}
            >
              <LogOut size={18} />
              {!isCollapsed && <span className="text-sm">Logout</span>}
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Mobile FAB ── */}
      <motion.button
        onClick={() => setMobileOpen((p) => !p)}
        className={sidebarStyles.mobileMenuButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </motion.button>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={sidebarStyles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={sidebarStyles.mobileBackdrop}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              ref={sidebarRef}
              className={sidebarStyles.mobileSidebar.base}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 200 }}
            >
              <div className="h-full flex flex-col">
                {/* Mobile header — sits below the fixed app navbar */}
                <div className="px-5 pt-20 pb-4 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={sidebarStyles.userInitials.base}>{initial}</div>
                    <div>
                      <h2 className="text-sm font-bold text-white">{username}</h2>
                      <p className="text-xs text-white/40">{email}</p>
                    </div>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl hover:bg-white/10 text-white/60 hover:text-white transition-all">
                    <X size={18} />
                  </button>
                </div>

                {/* Mobile nav */}
                <div className="flex-1 overflow-y-auto py-3">
                  <ul className="space-y-1 px-3">
                    {MENU_ITEMS.map(({ text, path, icon }) => (
                      <motion.li key={text} whileTap={{ scale: 0.98 }}>
                        <Link
                          to={path}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm",
                            pathname === path
                              ? "text-white bg-white/15"
                              : "text-white/60 hover:bg-white/10 hover:text-white",
                          )}
                        >
                          <span className={pathname === path ? "text-white" : "text-white/50"}>{icon}</span>
                          {text}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Mobile footer */}
                <div className="border-t border-white/10 p-4 space-y-1">
                  <button
                    onClick={() => { setMobileOpen(false); setShowContact(true); }}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium text-sm text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Mail size={18} />
                    Contact Us
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium text-sm text-white/60 hover:text-red-400 hover:bg-red-500/10 transition-all"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
};

export default Sidebar;
